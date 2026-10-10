"use client";

import { dataLayers } from "@/lib/content";
import { usePrefersReducedMotion, useScrollProgress } from "@/lib/useScrollProgress";
import { GText } from "./GText";

const W = 440;
const PLANE_H = 132;
const GAP = 50;

function plane(y: number) {
  const cx = W / 2;
  return `${cx},${y} ${W - 16},${y + PLANE_H / 2} ${cx},${y + PLANE_H} 16,${y + PLANE_H / 2}`;
}

function Stack({ active, built }: { active: number; built: number }) {
  const layers = dataLayers.layers;
  const total = PLANE_H + GAP * (layers.length - 1) + 40;
  return (
    <svg viewBox={`0 0 ${W} ${total}`} className="h-auto w-full overflow-visible" role="img" aria-label="Six stacked data layers">
      <defs>
        <pattern id="ls-dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.25)" />
        </pattern>
        <linearGradient id="ls-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#8b00ff" />
        </linearGradient>
        <filter id="ls-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      {/* Bottom layer first so the top one sits in front */}
      {layers
        .map((l, i) => ({ l, i }))
        .reverse()
        .map(({ l, i }) => {
          const placed = i <= built;
          const on = i === active;
          const y = 20 + i * GAP;
          return (
            <g
              key={l.name}
              style={{
                transform: `translateY(${placed ? (on ? -14 : 0) : -70}px)`,
                opacity: placed ? 1 : 0,
                transition: "opacity 600ms ease, transform 700ms cubic-bezier(.2,.7,.2,1)",
              }}
            >
              {on && <polygon points={plane(y)} fill="url(#ls-grad)" opacity="0.55" filter="url(#ls-glow)" />}
              <polygon points={plane(y)} fill="#000" />
              <polygon
                points={plane(y)}
                fill={on ? "url(#ls-grad)" : "url(#ls-dots)"}
                fillOpacity={on ? 0.92 : 1}
                stroke={on ? "#00ffff" : "rgba(255,255,255,0.3)"}
                strokeWidth={on ? 1.5 : 1}
                style={{ transition: "all 500ms" }}
              />
              <text
                x={W / 2}
                y={on ? y + PLANE_H / 2 + 6 : y + PLANE_H - 20}
                textAnchor="middle"
                fontSize={on ? 17 : 12}
                fontWeight={600}
                fill={on ? "#000" : "rgba(255,255,255,0.7)"}
                style={{ fontFamily: "var(--font-sora)", transition: "all 500ms" }}
              >
                {l.short}
              </text>
            </g>
          );
        })}
    </svg>
  );
}

export function LayerScroll() {
  const layers = dataLayers.layers;
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="mx-auto w-full max-w-md">
          <Stack active={-1} built={layers.length} />
        </div>
        <dl className="space-y-8">
          {layers.map((l) => (
            <div key={l.name}>
              <dt className="font-display text-xl font-semibold">{l.name}</dt>
              <dd className="mt-2 text-mist">{l.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  const n = layers.length;
  const active = Math.min(n - 1, Math.floor(progress * n * 0.999));
  const layer = layers[active];

  return (
    <div ref={ref} style={{ height: `${n * 75 + 60}vh` }} className="relative">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="mx-auto w-full max-w-[18rem] sm:max-w-sm lg:max-w-md">
            <Stack active={active} built={active} />
          </div>
          <div className="min-h-[15rem] text-center lg:text-left">
            <h2 className="text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-mist sm:text-3xl lg:text-4xl">
              <GText text={dataLayers.title} />
            </h2>
            <div key={active} className="mt-8 animate-[layer-in_600ms_cubic-bezier(.2,.7,.2,1)] lg:mt-12">
              <p className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">{layer.name}</p>
              <p className="mx-auto mt-4 max-w-md text-pretty text-lg leading-relaxed text-mist lg:mx-0">{layer.body}</p>
            </div>
            <div className="mt-10 flex justify-center gap-2 lg:justify-start" aria-hidden="true">
              {layers.map((l, i) => (
                <span
                  key={l.name}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-signal-gradient" : i < active ? "w-4 bg-paper/50" : "w-4 bg-haze/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
