"use client";

import { BadgeCheck, Coins, RefreshCw, Smartphone, Sparkles, UserPlus, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion, useScrollProgress } from "@/lib/useScrollProgress";
import { GText } from "./GText";

type Step = { name: string; body: string };
const ICONS: LucideIcon[] = [UserPlus, Smartphone, Coins, BadgeCheck, Sparkles];
const LOOP = { name: "Repeat, every day", body: "Each cycle adds savings for the member, revenue for merchants and a richer, consented profile. The loop compounds." };

function Card({ step, i, Icon, active, loop }: { step: Step; i: number; Icon: LucideIcon; active: boolean; loop?: boolean }) {
  return (
    <article
      className={`glass-strong relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] sm:p-10 ${
        active ? "opacity-100" : "opacity-45"
      }`}
      style={{ transform: active ? "none" : "scale(0.94)" }}
    >
      {/* Oversized outline step number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-10 font-display text-[11rem] font-semibold leading-none text-transparent"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.09)" }}
      >
        {loop ? "∞" : `0${i + 1}`}
      </span>
      {/* Glow + sheen on the active card */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: active ? 1 : 0, background: "radial-gradient(70% 60% at 0% 0%, rgba(0,255,255,0.18), transparent 70%), radial-gradient(60% 60% at 100% 100%, rgba(139,0,255,0.25), transparent 70%)" }}
      />
      {active && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[sheen_2.8s_ease-in-out_infinite]" />
      )}
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-signal-gradient shadow-[0_0_40px_rgba(0,255,255,0.35)]">
        <Icon className={`h-6 w-6 text-ink ${loop ? "animate-[spin_6s_linear_infinite]" : ""}`} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <p className="relative mt-auto pt-16 font-display text-xs uppercase tracking-[0.2em] text-haze">{loop ? "The loop" : `Step ${i + 1}`}</p>
      <h3 className="relative mt-3 font-display text-3xl font-semibold tracking-tight">{step.name}</h3>
      <p className="relative mt-4 max-w-sm text-pretty leading-relaxed text-mist">{step.body}</p>
    </article>
  );
}

/** Pinned section: steps slide horizontally as you scroll, with a filling progress rail. */
export function EarnerJourney({ title, body, steps }: { title: string; body: string; steps: Step[] }) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ max: 0, step: 0, center: 0 });
  const all = [...steps, LOOP];
  const n = all.length;

  useEffect(() => {
    const measure = () => {
      const t = track.current;
      const first = t?.firstElementChild as HTMLElement | null;
      if (!t || !first) return;
      const cw = first.offsetWidth;
      setDims({ max: Math.max(0, t.scrollWidth - t.clientWidth), step: cw + 20, center: (t.clientWidth - cw) / 2 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const header = (
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <h2 id="flywheel" className="max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        <GText text={title} />
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg text-mist">{body}</p>
    </div>
  );

  if (reduced) {
    return (
      <div className="py-20 sm:py-28">
        {header}
        <ol className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {all.map((s, i) => (
            <li key={s.name}>
              <Card step={s} i={i} Icon={ICONS[i] ?? RefreshCw} active loop={i === n - 1} />
            </li>
          ))}
        </ol>
      </div>
    );
  }

  // Hold briefly at both ends so the first and last cards get a moment
  const p = Math.min(1, Math.max(0, (progress - 0.06) / 0.88));
  const active = Math.round(p * (n - 1));
  // Glide to center the current step (clamped so the track never shows empty space)
  const x = Math.min(dims.max, Math.max(0, active * dims.step - dims.center));

  return (
    <div ref={ref} style={{ height: `${n * 60 + 60}vh` }} className="relative">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        {/* Glow that follows the active step */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -z-10 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,0,255,0.28),transparent)] blur-2xl"
          style={{ left: `${10 + p * 60}%` }}
        />
        {header}

        {/* Progress rail */}
        <div className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
            <div className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-signal-gradient shadow-[0_0_10px_#00ffff]" style={{ width: `${p * 100}%` }} />
            <ol className="relative flex justify-between">
              {all.map((s, i) => (
                <li key={s.name} className="flex items-center">
                  <span
                    className={`h-3 w-3 rounded-full ring-4 ring-black transition-all duration-500 ${
                      i <= active ? "bg-signal shadow-[0_0_12px_#00ffff]" : "bg-haze"
                    } ${i === active ? "scale-150" : ""}`}
                  />
                  <span className="sr-only">{s.name}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sliding track */}
        <div ref={viewport} className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8">
          <div
            ref={track}
            className="flex gap-5 transition-transform duration-[900ms] ease-[cubic-bezier(.2,.7,.2,1)] will-change-transform"
            style={{ transform: `translate3d(${-x}px,0,0)` }}
          >
            {all.map((s, i) => (
              <div key={s.name} className="h-[min(26rem,52svh)] w-[min(24rem,80vw)] shrink-0">
                <Card step={s} i={i} Icon={ICONS[i] ?? RefreshCw} active={i === active} loop={i === n - 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
