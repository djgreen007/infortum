import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { about, closing, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description: "Infortum Inc. is a Nevada-based technology holding company engineering the future of digital infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pt-48">
        <p className="font-display text-sm text-mist">About Infortum</p>
        <h1 className="mt-6 max-w-5xl text-balance font-display text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
          {about.title}
        </h1>
      </section>

      <section aria-labelledby="who" className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/images/about-phone.jpg"
              alt="A person holding a phone with a connected cloud data network overlay"
              fill
              sizes="(min-width:1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 id="who" className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {about.whoTitle}
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-pretty text-lg leading-relaxed text-mist">
              {about.who.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-full bg-paper px-7 py-3.5 font-medium text-ink transition-colors hover:bg-signal"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-[radial-gradient(ellipse_at_80%_0%,rgba(139,0,255,0.12),transparent_60%)]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="max-w-4xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {closing.title}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full border border-line px-7 py-3.5 font-medium transition-colors hover:border-paper"
          >
            Speak to our team
          </Link>
        </div>
      </section>

      <section aria-labelledby="mission" className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">{about.valueTitle}</h2>
            <p className="mt-5 max-w-md text-pretty text-lg text-mist">{about.valueBody}</p>
          </div>
          <div>
            <h3 id="mission" className="font-display text-xl font-semibold">
              {about.missionTitle}
            </h3>
            <div aria-hidden="true" className="mt-4 h-px w-24 bg-signal-gradient" />
            <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-mist">
              {about.mission.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="know-more" className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="know-more" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {contact.aboutFormTitle}
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-lg text-mist">{contact.aboutFormBody}</p>
          </div>
          <ContactForm source="about" />
        </div>
      </section>
    </>
  );
}
