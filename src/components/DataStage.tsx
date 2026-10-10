"use client";

import { usePrefersReducedMotion, useScrollProgress } from "@/lib/useScrollProgress";
import { GText } from "./GText";
import { Icon } from "./Icon";

export type StageItem = { name: string; short: string; body: string; icon: string };

/** Center of the stage: the active item's neon icon, crossfading as you scroll. */
function Core({ item, on }: { item: StageItem; on: boolean }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)]"
      style={{ opacity: on ? 1 : 0, transform: on ? "none" : "scale(0.8)", filter: on ? "none" : "blur(10px)" }}
      aria-hidden={!on}
    >
      <div className="absolute h-1/2 w-1/2 rounded-full bg-[radial-gradient(circle,rgba(204,255,0,0.22),transparent_70%)] blur-xl" />
      <Icon name={item.icon} strokeWidth={1.1} className="relative h-[38%] w-[38%] text-lime drop-shadow-[0_0_24px_rgba(204,255,0,0.75)]" />
      <p className="relative mt-[6%] font-display text-sm tracking-wide text-lime/80 sm:text-base">{item.short}</p>
    </div>
  );
}

/** Rings that turn as you scroll, with a lime arc filling toward the last item. */
function Stage({ items, active, progress }: { items: StageItem[]; active: number; progress: number }) {
  const R = 182;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[17rem] sm:max-w-md lg:max-w-[34rem]">
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full opacity-70 blur-2xl"
        style={{ background: "conic-gradient(from 200deg, #00ffff33, #8b00ff55, #ccff0022, #00ffff33)", transform: `rotate(${progress * 120}deg)` }}
      />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="ds-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#8b00ff" />
          </linearGradient>
        </defs>
        <g style={{ transform: `rotate(${progress * 90}deg)`, transformOrigin: "200px 200px" }}>
          <circle cx="200" cy="200" r="196" fill="none" stroke="rgba(255,255,255,0.06)" />
          <circle cx="200" cy="200" r="168" fill="none" stroke="url(#ds-ring)" strokeOpacity="0.5" strokeDasharray="2 10" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.08)" />
        </g>
        <circle
          cx="200"
          cy="200"
          r={R}
          fill="none"
          stroke="#ccff00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress)}
          transform="rotate(-90 200 200)"
          style={{ filter: "drop-shadow(0 0 6px #ccff00)" }}
        />
        {/* A tick on the ring for each item */}
        {items.map((_, i) => {
          const a = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const on = i <= active;
          return <circle key={i} cx={200 + Math.cos(a) * R} cy={200 + Math.sin(a) * R} r={on ? 4 : 3} fill={on ? "#ccff00" : "#3f3f46"} />;
        })}
      </svg>
      <div className="absolute inset-[14%] rounded-full bg-black shadow-[inset_0_0_60px_rgba(0,255,255,0.08)] ring-1 ring-white/10" />
      <div className="absolute inset-[14%]">
        {items.map((item, i) => (
          <Core key={item.name} item={item} on={i === active} />
        ))}
      </div>
    </div>
  );
}

export function DataStage({ title, body, items, id }: { title: string; body?: string; items: StageItem[]; id?: string }) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const n = items.length;

  if (reduced) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <h2 id={id} className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <GText text={title} />
        </h2>
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.name} className="glass rounded-[1.75rem] p-8">
              <Icon name={it.icon} className="h-8 w-8 text-lime" />
              <p className="mt-5 font-display text-xl font-semibold">{it.name}</p>
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
    <div ref={ref} style={{ height: `${n * 70 + 60}vh` }} className="relative">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-5 pt-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-0">
          <div className="order-last lg:order-first">
            <Stage items={items} active={active} progress={progress} />
          </div>

          <div>
            <h2 id={id} className="text-balance font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              <GText text={title} />
            </h2>
            {body && <p className="mt-5 hidden max-w-xl text-pretty text-mist lg:block">{body}</p>}

            <div key={active} className="mt-6 min-h-[9.5rem] animate-[layer-in_600ms_cubic-bezier(.2,.7,.2,1)] sm:mt-10">
              <p className="font-display text-2xl font-semibold tracking-tight text-lime sm:text-4xl">{item.name}</p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist sm:text-lg">{item.body}</p>
            </div>

            {/* Icon rail with a filling track */}
            <div className="relative mt-4 hidden sm:block">
              <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />
              <div className="absolute left-0 top-5 h-px bg-lime shadow-[0_0_8px_#ccff00]" style={{ width: `${progress * 100}%` }} />
              <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
                {items.map((it, i) => (
                  <li key={it.name} className="flex flex-col items-start">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-black ring-1 transition-all duration-500 ${
                        i <= active ? "ring-lime/70" : "ring-white/15"
                      }`}
                    >
                      <Icon name={it.icon} className={`h-[1.1rem] w-[1.1rem] ${i <= active ? "text-lime" : "text-haze"}`} />
                    </span>
                    <span className={`mt-3 pr-2 font-display text-xs leading-tight ${i === active ? "text-paper" : "text-haze"}`}>{it.short}</span>
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
