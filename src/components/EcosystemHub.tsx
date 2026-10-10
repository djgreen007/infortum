"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ecosystem } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/useScrollProgress";

// Node positions in a 1000×640 viewBox
const NODES = [
  { x: 170, y: 130 },
  { x: 830, y: 130 },
  { x: 170, y: 510 },
  { x: 830, y: 510 },
];
const HUB = { x: 500, y: 320 };

function path(i: number) {
  const n = NODES[i];
  // Gentle S-curve from the hub out to each node, like an axon
  const mx = (HUB.x + n.x) / 2;
  return `M ${HUB.x} ${HUB.y} C ${mx} ${HUB.y}, ${mx} ${n.y}, ${n.x} ${n.y}`;
}

export function EcosystemHub() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const items = ecosystem.items;

  // Signal travels to each product in turn until someone picks one
  useEffect(() => {
    if (paused || reduced) return;
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), 4200);
    return () => clearInterval(t);
  }, [paused, reduced, items.length]);

  const pick = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  return (
    <div>
      <div className="relative mx-auto aspect-[1000/640] w-full max-w-5xl">
        <svg viewBox="0 0 1000 640" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="axon" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#5b6bff" />
              <stop offset="100%" stopColor="#8b00ff" />
            </linearGradient>
            <radialGradient id="pulse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
            </radialGradient>
            <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {NODES.map((_, i) => {
            const on = i === active;
            return (
              <g key={i}>
                <path id={`axon-${i}`} d={path(i)} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <path
                  d={path(i)}
                  fill="none"
                  stroke="url(#axon)"
                  strokeWidth={on ? 2.5 : 1.25}
                  strokeOpacity={on ? 0.95 : 0.3}
                  style={{ transition: "stroke-opacity 600ms, stroke-width 600ms" }}
                />
                {on && <path d={path(i)} fill="none" stroke="url(#axon)" strokeWidth="8" strokeOpacity="0.35" filter="url(#soft)" />}
                {!reduced &&
                  [0, 1, 2].map((k) => (
                    <circle key={k} r={on ? 7 : 4} fill="url(#pulse)" opacity={on ? 1 : 0.55}>
                      <animateMotion dur={on ? "1.6s" : "3.2s"} begin={`${k * (on ? 0.53 : 1.07)}s`} repeatCount="indefinite">
                        <mpath href={`#axon-${i}`} />
                      </animateMotion>
                    </circle>
                  ))}
              </g>
            );
          })}
        </svg>

        {/* Hub */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(HUB.x / 1000) * 100}%`, top: `${(HUB.y / 640) * 100}%`, width: "19%" }}
        >
          <div className="relative aspect-square">
            {!reduced && (
              <>
                <span className="hub-ripple absolute inset-0 rounded-full border border-signal/50" />
                <span className="hub-ripple absolute inset-0 rounded-full border border-violet/50 [animation-delay:1.6s]" />
              </>
            )}
            <div className="absolute inset-[-30%] -z-10 rounded-full glow-cyan" />
            <Image
              src="/images/infortum-mark-color.webp"
              alt="Infortum"
              width={512}
              height={512}
              className="relative h-full w-full drop-shadow-[0_0_40px_rgba(0,255,255,0.35)]"
            />
          </div>
        </div>

        {/* Product nodes */}
        {items.map((item, i) => {
          const n = NODES[i];
          const on = i === active;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => pick(i)}
              onMouseEnter={() => pick(i)}
              aria-pressed={on}
              aria-label={item.name}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${(n.x / 1000) * 100}%`, top: `${(n.y / 640) * 100}%`, width: "17%" }}
            >
              <span
                className={`glass relative block aspect-square w-full overflow-hidden rounded-[28%] transition-all duration-500 ${
                  on ? "scale-105 shadow-[0_0_60px_rgba(0,255,255,0.35)] !border-signal/60" : "opacity-70 group-hover:opacity-100"
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 170px, 18vw"
                  className={`object-contain ${item.image.includes("aet") ? "scale-[0.72] rounded-full" : "scale-[1.35] mix-blend-lighten"}`}
                />
              </span>
              <span
                className={`mt-2 hidden whitespace-nowrap font-display text-sm transition-colors sm:block ${
                  on ? "text-paper" : "text-mist"
                }`}
              >
                {item.short}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail for the active product */}
      <div className="mx-auto mt-10 min-h-[9rem] max-w-2xl text-center" aria-live="polite">
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">{items[active].name}</h3>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-mist">{items[active].body}</p>
      </div>
      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Ecosystem products">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={item.name}
            onClick={() => pick(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-signal-gradient" : "w-1.5 bg-haze"}`}
          />
        ))}
      </div>
    </div>
  );
}
