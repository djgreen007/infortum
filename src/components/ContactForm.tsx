"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", required: false },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", required: false },
] as const;

export function ContactForm({ source }: { source: "contact" | "about" | "investor" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Your message didn't send. Try again, or email support@infortum.io.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Your message didn't send. Try again.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-l border-signal py-2 pl-6">
        <p className="font-display text-2xl font-semibold">Message sent.</p>
        <p className="mt-2 text-mist">Thanks for reaching out. Our team will get back to you shortly.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm text-mist underline underline-offset-4 hover:text-paper">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
      {fields.map((f) => (
        <label key={f.name} className="flex flex-col gap-2">
          <span className="text-sm text-mist">
            {f.label}
            {!f.required && <span className="text-haze"> (optional)</span>}
          </span>
          <input
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            required={f.required}
            maxLength={200}
            className="border-b border-line bg-transparent py-2.5 text-lg text-paper outline-none transition-colors placeholder:text-haze focus:border-signal focus-visible:outline-none"
          />
        </label>
      ))}
      {source === "investor" && (
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm text-mist">I am a</span>
          <select
            name="investorType"
            required
            defaultValue=""
            className="border-b border-line bg-transparent py-2.5 text-lg text-paper outline-none transition-colors focus:border-signal focus-visible:outline-none [&>option]:bg-ink"
          >
            <option value="" disabled>Select one</option>
            <option>Venture capital or fund</option>
            <option>Family office</option>
            <option>Accredited individual investor</option>
            <option>Strategic or corporate partner</option>
            <option>Other</option>
          </select>
        </label>
      )}
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-sm text-mist">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          maxLength={5000}
          className="resize-y border-b border-line bg-transparent py-2.5 text-lg text-paper outline-none transition-colors focus:border-signal focus-visible:outline-none"
        />
      </label>
      {/* Honeypot: hidden from people, bots fill it in */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors hover:bg-signal disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : source === "investor" ? "Request the brief" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-[#ff6b6b]">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
