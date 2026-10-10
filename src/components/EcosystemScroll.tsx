"use client";

import Image from "next/image";
import { ecosystem } from "@/lib/content";
import { usePrefersReducedMotion, useScrollProgress } from "@/lib/useScrollProgress";
import { GText } from "./GText";
import { Icon } from "./Icon";

type Item = (typeof ecosystem.items)[number];

function Art({ item, on }: { item: Item; on: boolean }) {
  const isLogo = item.image.includes("aet");
  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)]"
      style={{ opacity: on ? 1 : 0, transform: on ? "none" : "scale(0.86)", filter: on ? "none" : "blur(10px)" }}
      aria-hidden={!on}
    >
      {isLogo ? (
        <div className="relative aspect-square w-[46%] overflow-hidden rounded-full bg-paper shadow-[0_0_100px_rgba(0,185,255,0.35)]">
          <Image src={item.image} alt="" fill sizes="16rem" className="object-contain" />
        </div>
      ) : (
        <div
          className={`relative aspect-square ${item.image.includes("card") ? "w-[118%]" : "w-[84%]"} [mask-image:radial-gradient(closest-side,#000_62%,transparent_100%)]`}
        >
          <Image src={item.image} alt="" fill sizes="(min-width:1024px) 36rem, 80vw" className="object-contain" />
        </div>
      )}
    </div>
  );
}

/** The stage: concentric rings that turn as you scroll, with the active product's art in the middle. */
function Stage({ active, progress }: { active: number; progress: number }) {
  const items = ecosystem.items;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-md lg:max-w-[34rem]">
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full opacity-70 blur-2xl"
        style={{ background: "conic-gradient(from 200deg, #00ffff33, #8b00ff55, #ccff0022, #00ffff33)", transform: `rotate(${progress * 120}deg)` }}
      />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true" style={{ transform: `rotate(${progress * 90}deg)` }}>
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#8b00ff" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="196" fill="none" stroke="rgba(255,255,255,0.06)" />
        <circle cx="200" cy="200" r="168" fill="none" stroke="url(#ring)" strokeOpacity="0.5" strokeDasharray="2 10" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.08)" />
        {/* progress arc */}
        <circle
          cx="200"
          cy="200"
          r="182"
          fill="none"
          stroke="#ccff00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 182}`}
          strokeDashoffset={`${2 * Math.PI * 182 * (1 - progress)}`}
          transform="rotate(-90 200 200)"
          style={{ filter: "drop-shadow(0 0 6px #ccff00)" }}
        />
      </svg>
      <div className="absolute inset-[14%] rounded-full bg-black shadow-[inset_0_0_60px_rgba(0,255,255,0.08)] ring-1 ring-white/10" />
      <div className="absolute inset-[10%]">
        {items.map((item, i) => (
          <Art key={item.name} item={item} on={i === active} />
        ))}
      </div>
    </div>
  );
}

export function EcosystemScroll() {
  const items = ecosystem.items;
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const n = items.length;

  if (reduced) {
    return (
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <GText text={ecosystem.title} />
        </h2>
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((it) => (
            <li key={it.name} className="glass rounded-[1.75rem] p-8">
              <Icon name={it.icon} className="h-8 w-8 text-lime" />
              <p className="mt-5 font-display text-2xl font-semibold">{it.name}</p>
              <p className="mt-3 text-mist">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const active = Math.min(n - 1, Math.floor(progress * n * 0.999));
  const item = items[active];

  return (
    <div ref={ref} style={{ height: `${n * 85 + 60}vh` }} className="relative" id="ecosystem">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-5 pt-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-0">
          <div className="order-last lg:order-first">
            <Stage active={active} progress={progress} />
          </div>

          <div>
            <h2 className="text-balance font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              <GText text={ecosystem.title} />
            </h2>

            <div key={active} className="mt-6 min-h-[11rem] animate-[layer-in_600ms_cubic-bezier(.2,.7,.2,1)] sm:mt-10">
              <p className="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight sm:text-4xl">
                <Icon name={item.icon} className="h-7 w-7 shrink-0 text-lime drop-shadow-[0_0_8px_rgba(204,255,0,0.7)] sm:h-9 sm:w-9" />
                {item.name}
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist sm:text-lg">{item.body}</p>
            </div>

            {/* Icon rail with a filling track, like the original scroll-through */}
            <div className="relative mt-6 hidden sm:block">
              <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />
              <div className="absolute left-0 top-5 h-px bg-lime shadow-[0_0_8px_#ccff00]" style={{ width: `${progress * 100}%` }} />
              <ol className="relative grid grid-cols-4">
                {items.map((it, i) => (
                  <li key={it.name} className="flex flex-col items-start">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
                        i <= active ? "bg-black ring-1 ring-lime/70" : "bg-black ring-1 ring-white/15"
                      }`}
                    >
                      <Icon name={it.icon} className={`h-[1.1rem] w-[1.1rem] ${i <= active ? "text-lime" : "text-haze"}`} />
                    </span>
                    <span className={`mt-3 pr-2 font-display text-xs leading-tight sm:text-sm ${i === active ? "text-paper" : "text-haze"}`}>
                      {it.short}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
