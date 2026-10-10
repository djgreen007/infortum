"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { companies } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/useScrollProgress";

type Company = (typeof companies.items)[number];

function Card({ c, index }: { c: Company; index: number }) {
  const isLogoArt = c.art.includes("aet-trust");
  return (
    <article
      id={c.id}
      className="relative grid min-h-[min(44rem,80svh)] overflow-hidden rounded-[2rem] bg-[#0b0c12] ring-1 ring-white/10 lg:grid-cols-[1.1fr_1fr]"
      style={{ boxShadow: "0 -30px 80px -20px rgba(0,0,0,0.9)" }}
    >
      {/* Art */}
      <div className="relative order-first min-h-[15rem] lg:order-last lg:min-h-0">
        <div className={`absolute inset-0 ${index % 2 ? "glow-violet" : "glow-cyan"} opacity-80`} />
        {isLogoArt ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative aspect-square w-[46%] max-w-[18rem] overflow-hidden rounded-full bg-paper shadow-[0_0_120px_rgba(0,185,255,0.35)]">
              <Image src={c.art} alt="" fill sizes="18rem" className="object-contain" />
            </div>
          </div>
        ) : (
          <Image src={c.art} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-contain object-center p-6 mix-blend-lighten lg:p-12" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0c12] to-transparent lg:inset-y-0 lg:left-0 lg:h-auto lg:w-32 lg:bg-gradient-to-r" />
      </div>

      {/* Copy */}
      <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ${
              c.logoBg === "light" ? "bg-paper" : "glass p-1.5"
            }`}
          >
            <Image src={c.logo} alt="" width={88} height={88} className="h-full w-full object-contain" />
          </span>
          <p className="font-display text-sm text-mist">{c.brand}</p>
        </div>
        <h3 className="mt-6 text-balance font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{c.title}</h3>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-mist">{c.body}</p>
        <ul className="mt-8 space-y-2.5">
          {c.points.map((p) => (
            <li key={p} className="glass flex items-start gap-3 rounded-2xl px-4 py-3.5 text-[0.95rem] leading-snug text-paper/90">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-signal-gradient" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function CompanyStack() {
  const items = companies.items;
  const reduced = usePrefersReducedMotion();
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);
  const [scales, setScales] = useState<number[]>(() => items.map(() => 1));
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const tops = wrappers.current.map((w) => w?.getBoundingClientRect().top ?? 0);
      // A card recedes as the next one slides over it
      const next = items.map((_, i) => {
        if (i === items.length - 1) return 1;
        const t = Math.min(1, Math.max(0, 1 - (tops[i + 1] - 120) / vh));
        return 1 - t * 0.06;
      });
      setScales(next);
      let a = 0;
      tops.forEach((t, i) => {
        if (t < vh * 0.5) a = i;
      });
      setActive(a);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced, items]);

  if (reduced) {
    return (
      <div className="space-y-6">
        {items.map((c, i) => (
          <Card key={c.id} c={c} index={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative grid gap-8 lg:grid-cols-[11rem_1fr]">
      {/* Progress rail */}
      <nav aria-label="Infortum companies" className="hidden lg:block">
        <ul className="sticky top-32 space-y-4">
          {items.map((c, i) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="group flex items-center gap-3">
                <span
                  className={`h-px transition-all duration-500 ${i === active ? "w-8 bg-signal-gradient" : "w-4 bg-haze group-hover:w-6"}`}
                />
                <span className={`font-display text-sm transition-colors ${i === active ? "text-paper" : "text-haze group-hover:text-mist"}`}>
                  {c.brand}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {items.map((c, i) => (
          <div
            key={c.id}
            ref={(el) => {
              wrappers.current[i] = el;
            }}
            className="sticky pb-[10vh]"
            style={{ top: `calc(6rem + ${i * 14}px)` }}
          >
            <div
              style={{ transform: `scale(${scales[i]})`, transformOrigin: "50% 0%", transition: "transform 120ms linear" }}
            >
              <Card c={c} index={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
