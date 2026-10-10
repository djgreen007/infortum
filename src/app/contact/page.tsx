import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SignalField } from "@/components/SignalField";
import { GText } from "@/components/GText";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Connect with Infortum to unlock innovation.",
};

export default function ContactPage() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-70 lg:block">
        <SignalField />
      </div>
      <div className="mx-auto grid max-w-7xl gap-16 px-5 pb-24 pt-40 sm:px-8 sm:pt-48 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-display text-sm text-mist">Stay connected with Infortum</p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">
            <GText text={contact.title} />
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg text-mist">{contact.body}</p>
          <address className="mt-12 space-y-1 text-sm not-italic text-haze">
            <p>{site.legalName}</p>
            <p>{site.address}</p>
          </address>
        </div>
        <div className="glass rounded-[2rem] bg-ink/60 p-6 sm:p-10">
          <ContactForm source="contact" />
        </div>
      </div>
    </section>
  );
}
