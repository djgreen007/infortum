import Image from "next/image";
import Link from "next/link";
import { SignalField } from "@/components/SignalField";
import { DataLayers } from "@/components/DataLayers";
import { closing, companies, dataLayers, earnvaFeature, ecosystem, hero } from "@/lib/content";

function SectionHead({ title, body, id }: { title: string; body?: string; id?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 id={id} className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body && <p className="mt-5 max-w-2xl text-pretty text-lg text-mist">{body}</p>}
    </div>
  );
}

function CustodyGlyph() {
  // Concentric dot rings — stands in for banking & custody, which has no product art
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="custody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#8b00ff" />
        </linearGradient>
      </defs>
      {[78, 58, 38].map((r, ring) =>
        Array.from({ length: [28, 22, 16][ring] }).map((_, k, arr) => {
          const a = (k / arr.length) * Math.PI * 2;
          return (
            <circle
              key={`${ring}-${k}`}
              cx={100 + Math.cos(a) * r}
              cy={100 + Math.sin(a) * r}
              r={ring === 0 ? 2.4 : 2}
              fill={ring === 1 ? "url(#custody)" : "rgba(255,255,255,0.5)"}
            />
          );
        }),
      )}
      <circle cx="100" cy="100" r="14" fill="url(#custody)" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
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
            {hero.title}
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-mist sm:text-xl">{hero.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={hero.cta.href}
              className="rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors hover:bg-signal"
            >
              {hero.cta.label}
            </Link>
            <Link
              href="/#companies"
              className="rounded-full border border-line px-7 py-3.5 font-medium text-paper transition-colors hover:border-paper"
            >
              See our companies
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section aria-labelledby="infortum" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead id="infortum" title={ecosystem.title} body={ecosystem.body} />
        <div className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {ecosystem.items.map((item, i) => (
            <article
              key={item.name}
              className={`flex flex-col border-b border-line py-8 sm:px-6 lg:border-b-0 lg:py-10 ${
                i % 2 === 1 ? "sm:border-l" : ""
              } ${i > 0 ? "lg:border-l" : ""} ${i === 0 ? "sm:pl-0" : ""} ${i === 2 ? "sm:pl-0 lg:pl-6" : ""}`}
            >
              <div className="relative mb-8 aspect-[4/3] overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="mx-auto h-full w-3/4">
                    <CustodyGlyph />
                  </div>
                )}
              </div>
              <h3 className="font-display text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-mist">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Data layers */}
      <section aria-labelledby="data-layers" className="border-y border-line bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,185,255,0.08),transparent_60%)]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionHead id="data-layers" title={dataLayers.title} body={dataLayers.body} />
          <div className="mt-16">
            <DataLayers />
          </div>
        </div>
      </section>

      {/* Companies */}
      <section aria-labelledby="companies" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead id="companies" title={companies.title} body={companies.body} />
        <div className="mt-16 border-t border-line">
          {companies.items.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="grid gap-8 border-b border-line py-12 md:grid-cols-[160px_1fr] lg:grid-cols-[200px_1.1fr_1fr] lg:gap-14"
            >
              <div>
                <div
                  className={`flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl lg:h-28 lg:w-28 ${
                    c.logoBg === "light" ? "bg-paper p-1" : "border border-line bg-ink p-4"
                  }`}
                >
                  <Image src={c.logo} alt={`${c.brand} logo`} width={240} height={240} className="h-full w-full object-contain" />
                </div>
                <p className="mt-4 font-display text-sm text-mist">{c.brand}</p>
              </div>
              <div>
                <h3 className="text-balance font-display text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h3>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist">{c.body}</p>
              </div>
              <ul className="space-y-4 md:col-start-2 lg:col-start-auto">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-4 text-pretty">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-signal-gradient" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Earnva feature */}
      <section aria-labelledby="earnva-feature" className="relative overflow-hidden border-t border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
          <div>
            <Image src="/images/earnva-logo.png" alt="Earnva" width={640} height={235} className="h-12 w-auto" />
            <h2 id="earnva-feature" className="mt-8 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {earnvaFeature.title}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg text-mist">{earnvaFeature.body}</p>
            <dl className="mt-12 space-y-8">
              {earnvaFeature.features.map((f) => (
                <div key={f.name} className="border-l border-line pl-6">
                  <dt className="font-display text-lg font-semibold">{f.name}</dt>
                  <dd className="mt-2 max-w-lg text-pretty text-mist">{f.body}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.22),rgba(139,0,255,0.14)_45%,transparent_70%)] blur-2xl"
            />
            <Image
              src="/images/earnva-devices.png"
              alt="Earnva app on a phone, the Earnva card, and a smartwatch"
              width={1485}
              height={2048}
              sizes="(min-width:1024px) 28rem, 90vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="max-w-4xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {closing.title}
          </p>
          <div aria-hidden="true" className="mt-10 h-px w-40 bg-signal-gradient" />
          <Link
            href={closing.cta.href}
            className="mt-10 inline-block rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors hover:bg-signal"
          >
            {closing.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
