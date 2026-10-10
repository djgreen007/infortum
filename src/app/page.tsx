import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { SignalField } from "@/components/SignalField";
import { EcosystemBento } from "@/components/EcosystemBento";
import { DataStage } from "@/components/DataStage";
import { VideoBackdrop } from "@/components/VideoBackdrop";
import { CompanyStack } from "@/components/CompanyStack";
import { DeviceReveal } from "@/components/DeviceReveal";
import { GText } from "@/components/GText";
import { closing, companies, dataLayers, hero } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  description:
    "Infortum Inc. is building the first HelpTech ecosystem, connecting offline, real-world data with AI across the Earnva app, Earnva Savings & Rewards, EarnvaRx, 247FirstCare and AET Trust.",
  path: "/",
});

function SectionHead({ title, body, id, center }: { title: string; body?: string; id?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 id={id} className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        <GText text={title} />
      </h2>
      {body && <p className={`mt-6 text-pretty text-lg text-mist sm:text-xl ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{body}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — background unchanged */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 sm:pb-28">
        <div className="absolute inset-0 -z-10 opacity-60 md:opacity-100">
          <SignalField />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-sm text-mist">
            {hero.pillars.map((p, i) => (
              <span key={p} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="h-3 w-px bg-haze" />}
                {p}
              </span>
            ))}
          </p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[5.5rem]">
            <GText text={hero.title} />
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-mist sm:text-xl">{hero.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={hero.cta.href} className="rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors hover:bg-signal">
              {hero.cta.label}
            </Link>
            <Link
              href="/#companies"
              className="rounded-full px-7 py-3.5 font-medium text-paper ring-1 ring-white/15 transition hover:ring-white/40"
            >
              See our companies
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem — bento */}
      <section aria-labelledby="infortum" className="relative">
        <EcosystemBento />
      </section>

      {/* Data components — pinned stage */}
      <section aria-labelledby="data" className="relative">
        {/* Glow lives in its own clipped layer so the sticky scroll keeps working */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="glow-violet absolute left-0 top-1/3 h-[50rem] w-[50rem] -translate-x-1/3 opacity-40" />
        </div>
        <DataStage id="data" title={dataLayers.title} items={dataLayers.layers} />
      </section>

      {/* Companies — stacked scroll-through */}
      <section aria-labelledby="companies" className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead id="companies" title={companies.title} body={companies.body} />
          <div className="mt-16">
            <CompanyStack />
          </div>
        </div>
      </section>

      {/* Earnva device reveal */}
      <section aria-label="Earnva" className="relative">
        <DeviceReveal />
      </section>

      {/* Closing */}
      <section className="relative isolate overflow-hidden py-40 sm:py-56">
        <VideoBackdrop opacity={0.4} />
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <GText text={closing.title} />
          </p>
          <Link
            href={closing.cta.href}
            className="mt-12 inline-block rounded-full bg-paper px-8 py-4 font-medium text-ink transition-colors hover:bg-signal"
          >
            {closing.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
