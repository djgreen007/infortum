import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackdrop } from "@/components/AuroraBackdrop";
import { CountUp } from "@/components/CountUp";
import { EarnerJourney } from "@/components/EarnerJourney";
import { VideoBackdrop } from "@/components/VideoBackdrop";
import { ContactForm } from "@/components/ContactForm";
import { GText, plain } from "@/components/GText";
import { Leadership } from "@/components/Leadership";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";
import { investors as inv, portfolio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investors",
  description: plain(inv.hero.body),
};

const SCALE_GLOWS = [
  "radial-gradient(60% 80% at 100% 0%, rgba(0,255,255,0.16), transparent 70%)",
  "radial-gradient(70% 80% at 0% 100%, rgba(139,0,255,0.22), transparent 70%)",
  "radial-gradient(70% 80% at 100% 100%, rgba(0,185,255,0.18), transparent 70%)",
  "radial-gradient(60% 80% at 0% 0%, rgba(139,0,255,0.2), transparent 70%)",
];

const H2 = ({ id, text }: { id: string; text: string }) => (
  <h2 id={id} className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
    <GText text={text} />
  </h2>
);

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-24 pt-40 sm:pt-52">
        <AuroraBackdrop />
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
        <ParallaxBackdrop tone="cyan" opacity={0.35} />
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
      <section aria-labelledby="flywheel">
        <EarnerJourney title={inv.flywheel.title} body={inv.flywheel.body} steps={inv.flywheel.steps} />
      </section>

      {/* Scale */}
      <section aria-labelledby="scale" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="scale" text={inv.scale.title} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {inv.scale.stats.map((s, i) => (
              <li
                key={s.label}
                className={`glass-strong group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 ${["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"][i]}`}
              >
                <div aria-hidden="true" className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100" style={{ background: SCALE_GLOWS[i] }} />
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-[sheen_7s_ease-in-out_infinite]" style={{ animationDelay: `${i * 1.2}s` }} />
                <CountUp value={s.value} className="relative font-display text-6xl font-semibold tracking-tight sm:text-7xl" />
                <p className="relative mt-8 max-w-xs text-lg text-mist">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Business model */}
      <section aria-labelledby="model" className="relative isolate overflow-hidden py-28 sm:py-40">
        <VideoBackdrop opacity={0.35} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <H2 id="model" text={inv.model.title} />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inv.model.streams.map((m, i) => (
              <li key={m.name} className="glass-strong group relative overflow-hidden rounded-[1.75rem] p-8 transition-transform duration-500 hover:-translate-y-1">
                <span className="font-display text-sm text-signal-gradient">0{i + 1}</span>
                <p className="mt-4 font-display text-xl font-semibold">{m.name}</p>
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
              <li key={c} className="glass-strong flex items-center gap-3 rounded-2xl px-5 py-4 text-paper/90">
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
              <li key={p.name} className={`rounded-[2rem] p-8 sm:p-10 glass-strong ${i === 0 ? "ring-1 ring-signal/30" : ""}`}>
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

      {/* Portfolio */}
      <section aria-labelledby="companies" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <H2 id="companies" text="Five companies. {One ecosystem.}" />
            <Link href="/portfolio" className="text-sm text-mist underline underline-offset-4 hover:text-paper">
              See every company
            </Link>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {portfolio.companies.map((c, i) => (
              <li key={c.id} className={i === 0 ? "col-span-2 lg:col-span-1" : ""}>
                <Link
                  href={`/portfolio#${c.id}`}
                  className="glass-strong group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-[1.75rem] p-6 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-30px_rgba(0,255,255,0.45)]"
                >
                  <div aria-hidden="true" className={`absolute inset-0 ${i % 2 ? "glow-violet" : "glow-cyan"} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <span className="relative flex h-24 items-center justify-center">
                    {c.logoBg === "light" ? (
                      <span className="relative block h-20 w-20 overflow-hidden rounded-full bg-paper">
                        <Image src={c.logo!} alt="" fill sizes="80px" className="object-contain" />
                      </span>
                    ) : (
                      <span className="relative block h-16 w-full max-w-[9rem]">
                        <Image src={c.logo!} alt="" fill sizes="144px" className="object-contain" />
                      </span>
                    )}
                  </span>
                  <span className="relative mt-auto pt-6 text-xs text-haze">{c.category}</span>
                  <span className="relative mt-1.5 flex items-end justify-between gap-2 font-display text-lg font-semibold leading-tight">
                    {c.name}
                    <span aria-hidden="true" className="text-signal transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leadership" className="relative overflow-hidden py-24 sm:py-36">
        <Leadership heading="Leadership" />
      </section>

      {/* Investor brief form */}
      <section id="brief" aria-labelledby="brief-title" className="relative isolate scroll-mt-24 py-24 sm:py-32">
        <ParallaxBackdrop tone="violet" opacity={0.3} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="brief-title" className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              <GText text={inv.cta.title} />
            </h2>
            <p className="mt-6 max-w-sm text-pretty text-lg text-mist">{inv.cta.body}</p>
          </div>
          <div className="glass-strong rounded-[2rem] p-6 sm:p-10">
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
