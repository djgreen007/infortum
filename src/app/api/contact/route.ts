import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(1, "Add your name.").max(200),
  company: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  phone: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().min(1, "Add a message.").max(5000),
  source: z.enum(["contact", "about"]).default("contact"),
  website: z.string().optional(), // honeypot
});

const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ?? "Check the form and try again.",
      },
      { status: 400 },
    );
  }
  const { website, ...data } = parsed.data;
  if (website) return NextResponse.json({ ok: true }); // bot — pretend success

  let stored = false;
  let emailed = false;

  // 1. Store in Supabase
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    const supabase = createClient(url, key, {
      auth: { persistSession: false },
    });
    const { error } = await supabase.from("contact_submissions").insert({
      ...data,
      user_agent: req.headers.get("user-agent")?.slice(0, 300) ?? null,
    });
    if (error) console.error("[contact] supabase insert failed", error.message);
    else stored = true;
  }

  // 2. Email the team through Google Workspace (SMTP + app password)
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (smtpUser && smtpPass) {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass.replace(/\s+/g, "") },
    });
    const rows = [
      ["Name", data.name],
      ["Company", data.company || "—"],
      ["Email", data.email],
      ["Phone", data.phone || "—"],
      ["Page", data.source],
    ];
    try {
      await transport.sendMail({
        // Workspace only sends as the signed-in mailbox (or its aliases)
        from: `"Infortum Website" <${process.env.CONTACT_FROM_EMAIL || smtpUser}>`,
        to: (process.env.CONTACT_TO_EMAIL || "eddy@infortum.io")
          .split(",")
          .map((s) => s.trim()),
        replyTo: data.email,
        subject: `New inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html: `<table cellpadding="6">${rows
          .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escape(v)}</td></tr>`)
          .join(
            "",
          )}</table><p style="white-space:pre-wrap">${escape(data.message)}</p>`,
        text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`,
      });
      emailed = true;
    } catch (err) {
      console.error(
        "[contact] smtp send failed",
        err instanceof Error ? err.message : err,
      );
    }
  }

  if (!stored && !emailed) {
    return NextResponse.json(
      {
        error:
          "Your message didn't send. Email us at support@infortum.io instead.",
      },
      { status: 500 },
    );
  }
  return NextResponse.json({ ok: true });
}
