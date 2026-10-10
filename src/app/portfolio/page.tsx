import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { GText } from "@/components/GText";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";
import { portfolio } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Portfolio",
  description: "Five companies, one ecosystem: the Earnva app and Smart Wallet, Earnva Savings & Rewards Network, EarnvaRx, 247FirstCare and AET Trust.",
  path: "/portfolio",
});

type Co = (typeof portfolio.companies)[number];

function Logo({ c }: { c: Co }) {
  if (!c.logo)
    return <span className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"><GText text={`{${c.name}}`} /></span>;
  return c.logoBg === "light" ? (
    <span className="relative block aspect-square w-[46%] max-w-[15rem] overflow-hidden rounded-full bg-paper shadow-[0_0_120px_rgba(0,185,255,0.35)]">
      <Image src={c.logo} alt={`${c.name} logo`} fill sizes="15rem" className="object-contain" />
    </span>
  ) : (
    <span className="relative block h-32 w-[70%] max-w-[22rem] drop-shadow-[0_0_40px_rgba(0,255,255,0.25)]">
      <Image src={c.logo} alt={`${c.name} logo`} fill sizes="22rem" className="object-contain" />
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-52">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="glow-cyan absolute -left-40 -top-40 h-[44rem] w-[44rem] opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-display text-sm text-mist">Portfolio</p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[5rem]">
            <GText text={portfolio.title} />
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg text-mist sm:text-xl">{portfolio.body}</p>
          <nav aria-label="Companies" className="mt-12 flex flex-wrap gap-2">
            {portfolio.companies.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="glass rounded-full px-4 py-2.5 text-sm text-paper/85 transition hover:bg-white/10">
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section aria-label="Companies" className="pb-24">
        <div className="mx-auto max-w-7xl space-y-6 px-5 sm:px-8">
          {portfolio.companies.map((c, i) => (
            <article
              key={c.id}
              id={c.id}
              className="grid scroll-mt-28 overflow-hidden rounded-[2rem] bg-[#0b0c12] ring-1 ring-white/10 lg:grid-cols-2"
            >
              <div className={`relative flex min-h-[16rem] items-center justify-center p-10 ${i % 2 ? "lg:order-last" : ""}`}>
                <div aria-hidden="true" className={`absolute inset-0 ${i % 2 ? "glow-violet" : "glow-cyan"} opacity-90`} />
                <div className="relative flex w-full justify-center">
                  <Logo c={c} />
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-14">
                <p className="font-display text-sm text-mist">{c.category}</p>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">{c.name}</h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-mist">{c.summary}</p>
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {c.facts.map((f) => (
                    <li key={f} className="glass flex items-start gap-3 rounded-2xl px-4 py-3.5 text-[0.95rem] leading-snug text-paper/90">
                      <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-signal-gradient" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-32 sm:py-44">
        <ParallaxBackdrop tone="violet" opacity={0.4} />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <GText text="Five companies. {One investment thesis.}" />
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/investors" className="rounded-full bg-paper px-8 py-4 font-medium text-ink transition-colors hover:bg-signal">
              For investors
            </Link>
            <Link href="/contact" className="glass rounded-full px-8 py-4 font-medium text-paper transition hover:bg-white/10">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
