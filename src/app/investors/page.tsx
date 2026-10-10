import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { GText, plain } from "@/components/GText";
import { Leadership } from "@/components/Leadership";
import { investors as inv, portfolio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investors",
  description: plain(inv.hero.body),
};

const H2 = ({ id, text }: { id: string; text: string }) => (
  <h2 id={id} className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
    <GText text={text} />
  </h2>
);

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40 sm:pt-52">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="glow-violet absolute -right-40 -top-40 h-[48rem] w-[48rem] opacity-70" />
          <div className="glow-cyan absolute -left-60 top-40 h-[40rem] w-[40rem] opacity-40" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-display text-sm text-mist">{inv.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[5.25rem]">
            <GText text={inv.hero.title} />
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg text-mist sm:text-xl">{inv.hero.body}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#brief" className="rounded-full bg-paper px-8 py-4 font-medium text-ink transition-colors hover:bg-signal">
              Request the investor brief
            </a>
            <Link href="/portfolio" className="glass rounded-full px-8 py-4 font-medium text-paper transition hover:bg-white/10">
              View the portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section aria-labelledby="thesis" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="thesis" text={inv.thesis.title} />
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {inv.thesis.points.map((p, i) => (
              <li key={p.name} className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
                <span className="font-display text-sm text-haze">0{i + 1}</span>
                <p className="mt-4 font-display text-2xl font-semibold tracking-tight">{p.name}</p>
                <p className="mt-4 text-pretty leading-relaxed text-mist">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Market */}
      <section aria-labelledby="market" className="relative isolate py-24 sm:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Image src="/images/bg-glitter.webp" alt="" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_20%,#000_80%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="market" text={inv.market.title} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inv.market.stats.map((s) => (
              <li key={s.value} className="glass-strong rounded-[2rem] p-8">
                <p className="font-display text-xs uppercase tracking-[0.2em] text-haze">{s.tag}</p>
                <p className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                  <span className="text-signal-gradient">{s.value}</span>
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-mist">{s.label}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-haze">{inv.market.note}</p>
        </div>
      </section>

      {/* Flywheel */}
      <section aria-labelledby="flywheel" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="flywheel" text={inv.flywheel.title} />
          <p className="mt-6 max-w-2xl text-pretty text-lg text-mist">{inv.flywheel.body}</p>
          <ol className="mt-14 grid gap-4 md:grid-cols-5">
            {inv.flywheel.steps.map((s, i) => (
              <li key={s.name} className="glass relative rounded-[1.75rem] p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-signal-gradient font-display text-sm font-semibold text-ink">
                  {i + 1}
                </span>
                <p className="mt-6 font-display text-xl font-semibold">{s.name}</p>
                <p className="mt-3 text-pretty text-[0.95rem] leading-relaxed text-mist">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scale */}
      <section aria-labelledby="scale" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="scale" text={inv.scale.title} />
          <dl className="mt-14 grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-4">
            {inv.scale.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">{s.value}</dd>
                <dd className="mt-3 max-w-[14rem] text-mist">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Business model */}
      <section aria-labelledby="model" className="relative overflow-hidden py-24 sm:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="glow-cyan absolute right-0 top-1/3 h-[40rem] w-[40rem] opacity-40" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="model" text={inv.model.title} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inv.model.streams.map((m) => (
              <li key={m.name} className="glass rounded-[1.75rem] p-8">
                <p className="font-display text-xl font-semibold">{m.name}</p>
                <p className="mt-3 text-pretty leading-relaxed text-mist">{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Moat */}
      <section aria-labelledby="moat" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <H2 id="moat" text={inv.moat.title} />
            <p className="mt-6 max-w-xl text-pretty text-lg text-mist">{inv.moat.body}</p>
          </div>
          <ul className="grid content-center gap-3 sm:grid-cols-2">
            {inv.moat.capabilities.map((c) => (
              <li key={c} className="glass flex items-center gap-3 rounded-2xl px-5 py-4 text-paper/90">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-lime">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section aria-labelledby="roadmap" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="roadmap" text={inv.roadmap.title} />
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {inv.roadmap.phases.map((p, i) => (
              <li key={p.name} className={`rounded-[2rem] p-8 sm:p-10 ${i === 0 ? "glass-strong ring-1 ring-signal/30" : "glass"}`}>
                <p className="font-display text-3xl font-semibold">
                  {i === 0 ? <span className="text-signal-gradient">{p.name}</span> : p.name}
                </p>
                <ul className="mt-6 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-mist">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-gradient" />
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Portfolio strip */}
      <section aria-labelledby="companies" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="companies" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">The portfolio</h2>
            <Link href="/portfolio" className="text-sm text-mist underline underline-offset-4 hover:text-paper">See every company</Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {portfolio.companies.map((c) => (
              <li key={c.id}>
                <Link href={`/portfolio#${c.id}`} className="glass flex h-full flex-col justify-between gap-6 rounded-[1.5rem] p-5 transition hover:bg-white/10">
                  <span className="text-xs text-haze">{c.category}</span>
                  <span className="font-display text-base font-semibold leading-tight">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leadership" className="relative overflow-hidden py-24 sm:py-36">
        <Leadership heading="The team building it" />
      </section>

      {/* Investor brief form */}
      <section id="brief" aria-labelledby="brief-title" className="scroll-mt-24 pb-20 pt-12">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="brief-title" className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              <GText text={inv.cta.title} />
            </h2>
            <p className="mt-6 max-w-sm text-pretty text-lg text-mist">{inv.cta.body}</p>
          </div>
          <div className="glass rounded-[2rem] p-6 sm:p-10">
            <ContactForm source="investor" />
          </div>
        </div>
      </section>

      <section aria-label="Disclaimer" className="pb-24">
        <p className="mx-auto max-w-4xl px-5 text-center text-xs leading-relaxed text-haze sm:px-8">{inv.disclaimer}</p>
      </section>
    </>
  );
}
