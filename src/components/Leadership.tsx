import Image from "next/image";
import { about } from "@/lib/content";

const initials = (n: string) => n.split(" ").map((w) => w[0]).join("");

/** Founder feature + leadership team cards. Used on About and Investors. */
export function Leadership({ heading = about.leadership.title }: { heading?: string }) {
  const [lead, ...team] = about.leadership.people;
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <h2 id="leadership" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {heading}
      </h2>
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] ring-1 ring-white/10 lg:mx-0">
          {lead.photo && (
            <Image src={lead.photo} alt={`${lead.name}, ${lead.role}`} fill sizes="(min-width:1024px) 28rem, 90vw" className="object-cover" />
          )}
        </div>
        <div>
          <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{lead.name}</p>
          <p className="mt-3 font-display text-xl">
            <span className="text-signal-gradient">{lead.role}</span>
            <span className="text-mist">, Infortum Inc.</span>
          </p>
          <div className="mt-8 max-w-xl space-y-4 text-pretty text-lg leading-relaxed text-mist">
            {lead.bio.map((b) => (
              <p key={b.slice(0, 20)}>{b}</p>
            ))}
          </div>
          {lead.quote && (
            <blockquote className="mt-10 max-w-xl">
              <p className="text-balance font-display text-2xl leading-snug text-paper">“{lead.quote}”</p>
            </blockquote>
          )}
        </div>
      </div>
      {team.length > 0 && (
      <ul className="mt-20 grid gap-5 md:grid-cols-2">
        {team.map((p) => (
          <li key={p.name} className="glass flex flex-col rounded-[1.75rem] p-8">
            <span
              aria-hidden="true"
              className="grid h-16 w-16 place-items-center rounded-full bg-signal-gradient font-display text-xl font-semibold text-ink"
            >
              {initials(p.name)}
            </span>
            <p className="mt-6 font-display text-2xl font-semibold tracking-tight">{p.name}</p>
            <p className="mt-1 font-display text-sm">
              <span className="text-signal-gradient">{p.role}</span>
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-mist">{p.bio[0]}</p>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}
