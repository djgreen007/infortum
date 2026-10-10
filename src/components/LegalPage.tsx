import fs from "node:fs";
import path from "node:path";

type Block = { kind: "h2" | "p" | "li" | "oli"; text: string; n?: string };

// The recovered legal text is plain paragraphs. Short lines without a period are headings,
// "1<TAB>Term: …" lines are numbered items, "•<TAB>…" lines are bullets.
function parse(md: string): { title: string; blocks: Block[] } {
  const lines = md.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  const title = lines[0];
  const rest = lines.slice(lines[1]?.toLowerCase().startsWith("infortum") ? 2 : 1);
  const blocks: Block[] = rest.map((l) => {
    const num = l.match(/^(\d{1,2})\s+(.*)$/);
    if (num) return { kind: "oli", n: num[1], text: num[2] };
    const bullet = l.match(/^[•·]\s*(.*)$/);
    if (bullet) return { kind: "li", text: bullet[1] };
    if (l.length < 60 && !/[.:,]$/.test(l) && !/@/.test(l) && !/\d{5}/.test(l)) return { kind: "h2", text: l };
    return { kind: "p", text: l };
  });
  return { title, blocks };
}

function Rich({ text }: { text: string }) {
  // Bold the "Term:" lead-in and link email addresses
  const lead = text.match(/^([^:]{2,40}):\s(.*)$/);
  const body = lead ? lead[2] : text;
  const parts = body.split(/([\w.+-]+@infortum\.io)/g);
  return (
    <>
      {lead && <strong className="font-semibold text-paper">{lead[1]}: </strong>}
      {parts.map((p, i) =>
        /@infortum\.io$/.test(p) ? (
          <a key={i} href={`mailto:${p}`} className="text-signal underline underline-offset-4">
            {p}
          </a>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export function LegalPage({ file }: { file: string }) {
  const md = fs.readFileSync(path.join(process.cwd(), "src/content/legal", file), "utf8");
  const { title, blocks } = parse(md);
  return (
    <article className="mx-auto max-w-3xl px-5 pb-28 pt-40 sm:px-8 sm:pt-48">
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
      <div aria-hidden="true" className="mt-8 h-px w-24 bg-signal-gradient" />
      <div className="mt-10 space-y-5 text-pretty leading-relaxed text-mist">
        {blocks.map((b, i) => {
          if (b.kind === "h2")
            return (
              <h2 key={i} className="pt-6 font-display text-xl font-semibold text-paper">
                {b.text}
              </h2>
            );
          if (b.kind === "oli")
            return (
              <p key={i} className="flex gap-4">
                <span className="w-5 shrink-0 text-haze">{b.n}.</span>
                <span>
                  <Rich text={b.text} />
                </span>
              </p>
            );
          if (b.kind === "li")
            return (
              <p key={i} className="flex gap-4 pl-9">
                <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-haze" />
                <span>
                  <Rich text={b.text} />
                </span>
              </p>
            );
          return (
            <p key={i}>
              <Rich text={b.text} />
            </p>
          );
        })}
      </div>
    </article>
  );
}
