import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { GText } from "@/components/GText";
import { Leadership } from "@/components/Leadership";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";
import { about, closing, contact, portfolio } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "About us",
  description: "Infortum Inc. is a Nevada-based technology holding company led by founder and CEO Eddy Pham, building secure, AI-powered finance and health ecosystems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-40 sm:pt-52">
        <div aria-hidden="true" className="glow-violet pointer-events-none absolute -right-40 -top-40 -z-10 h-[48rem] w-[48rem] opacity-60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-display text-sm text-mist">About Infortum</p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[5.25rem]">
            <GText text={about.title} />
          </h1>
        </div>
      </section>

      {/* Who we are */}
      <section aria-labelledby="who" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
            <Image
              src="/images/about-phone.jpg"
              alt="A person holding a phone with a connected cloud data network overlay"
              fill
              sizes="(min-width:1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 id="who" className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              <GText text={about.whoTitle} />
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-pretty text-lg leading-relaxed text-mist">
              {about.who.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leadership" className="relative overflow-hidden py-24 sm:py-36">
        <div aria-hidden="true" className="glow-cyan pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[44rem] w-[44rem] -translate-y-1/2 opacity-50" />
        <Leadership />
      </section>

      {/* Vision & mission */}
      <section aria-label="Vision and mission" className="py-24 sm:py-36">
        <div className="mx-auto max-w-6xl space-y-24 px-5 sm:space-y-32 sm:px-8">
          <div>
            <p className="font-display text-sm text-mist">{about.vision.label}</p>
            <p className="mt-6 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              <GText text={about.vision.text} />
            </p>
          </div>
          <div className="lg:pl-[16%]">
            <p className="font-display text-sm text-mist">{about.mission.label}</p>
            <p className="mt-6 text-pretty font-display text-2xl leading-[1.35] tracking-tight text-paper/90 sm:text-3xl lg:text-4xl">
              {about.mission.text}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values" className="relative isolate py-28 sm:py-40">
        <ParallaxBackdrop tone="violet" opacity={0.35} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="values" className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            <GText text={about.valueTitle} />
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg text-mist">{about.valueBody}</p>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {about.values.map((v) => (
              <li key={v.name} className="glass-strong rounded-[1.75rem] p-8 sm:p-10">
                <p className="font-display text-3xl font-semibold">
                  <span className="text-signal-gradient">{v.name}</span>
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-mist">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio */}
      <section aria-labelledby="portfolio" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="portfolio" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Our portfolio
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {portfolio.companies.map((c, i) => (
              <li key={c.id} className={i === 0 ? "col-span-2 lg:col-span-1" : ""}>
                <Link
                  href={`/portfolio#${c.id}`}
                  className="glass-strong flex h-full min-h-[9.5rem] flex-col items-center justify-center gap-3 rounded-[1.5rem] p-5 transition hover:bg-white/10"
                >
                  <span className={`relative h-14 ${c.logoBg === "light" ? "w-14 overflow-hidden rounded-full bg-paper" : "w-28"}`}>
                    <Image src={c.logo} alt="" fill sizes="112px" className="object-contain" />
                  </span>
                  <span className="text-center font-display text-sm leading-tight text-mist">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Banner */}
      <section className="relative overflow-hidden py-28 sm:py-36">
        <div aria-hidden="true" className="glow-violet pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <GText text={closing.title} />
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-full bg-paper px-8 py-4 font-medium text-ink transition-colors hover:bg-signal"
          >
            Speak to our team
          </Link>
        </div>
      </section>

      {/* Form */}
      <section aria-labelledby="know-more" className="pb-28 pt-12">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="know-more" className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {contact.aboutFormTitle}
            </h2>
            <p className="mt-6 max-w-sm text-pretty text-lg text-mist">{contact.aboutFormBody}</p>
          </div>
          <div className="glass rounded-[2rem] p-6 sm:p-10">
            <ContactForm source="about" />
          </div>
        </div>
      </section>
    </>
  );
}
