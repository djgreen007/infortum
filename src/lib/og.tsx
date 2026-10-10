import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const asset = (f: string) => readFile(join(process.cwd(), "src/og-assets", f));
const dataUri = async (f: string, type: string) => `data:${type};base64,${(await asset(f)).toString("base64")}`;

/** Branded 1200×630 share card. Words in {braces} get the cyan→violet gradient. */
export async function renderOg({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  const [sora, inter, bg, mark] = await Promise.all([
    asset("Sora-SemiBold.ttf"),
    asset("Inter-Regular.ttf"),
    dataUri("og-bg.jpg", "image/jpeg"),
    dataUri("wordmark.png", "image/png"),
  ]);
  // One span per word so lines wrap cleanly; {braced} words get the gradient
  const words = title
    .split(/(\{[^}]+\})/g)
    .filter(Boolean)
    .flatMap((part) => {
      const g = part.startsWith("{");
      return (g ? part.slice(1, -1) : part).split(/\s+/).filter(Boolean).map((w) => ({ w, g }));
    });

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#000", fontFamily: "Inter" }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={bg} width={1200} height={630} style={{ position: "absolute", inset: 0, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "64px 72px", width: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={mark} width={200} height={56} />
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
            <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa", letterSpacing: 1 }}>{eyebrow}</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: 18,
                fontFamily: "Sora",
                fontSize: title.length > 48 ? 64 : 76,
                lineHeight: 1.05,
                letterSpacing: -2,
                color: "#fff",
                maxWidth: 1000,
              }}
            >
              {words.map(({ w, g }, i) => (
                <span
                  key={i}
                  style={{
                    marginRight: 18,
                    ...(g ? { backgroundImage: "linear-gradient(90deg,#00ffff,#8b00ff)", backgroundClip: "text", color: "transparent" } : {}),
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
            {body && <div style={{ display: "flex", marginTop: 26, fontSize: 28, lineHeight: 1.4, color: "#d4d4d8", maxWidth: 900 }}>{body}</div>}
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 8, display: "flex", backgroundImage: "linear-gradient(90deg,#00ffff,#8b00ff)" }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Sora", data: sora, weight: 600, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
      ],
    },
  );
}
