"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="shrink-0 py-2" aria-label="Infortum home" onClick={() => setOpen(false)}>
          <Image
            src="/images/infortum-wordmark-white.png"
            alt="Infortum"
            width={1600}
            height={451}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-mist transition-colors hover:text-paper">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-signal"
          >
            Contact us
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-white/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-4 bg-paper transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-paper transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="px-5 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col">
            {[...nav, { label: "Contact us", href: "/contact" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
