"use client";

import { useId, useState } from "react";
import { dataLayers } from "@/lib/content";

const W = 420;
const PLANE_H = 128;
const GAP = 46;

function plane(y: number) {
  const cx = W / 2;
  return `${cx},${y} ${W - 18},${y + PLANE_H / 2} ${cx},${y + PLANE_H} 18,${y + PLANE_H / 2}`;
}

export function DataLayers() {
  const [active, setActive] = useState(0);
  const uid = useId().replace(/:/g, "");
  const layers = dataLayers.layers;
  const total = PLANE_H + GAP * (layers.length - 1) + 24;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <svg viewBox={`0 0 ${W} ${total}`} className="h-auto w-full" role="img" aria-label="Six stacked data layers">
          <defs>
            <pattern id={`dots-${uid}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.22)" />
            </pattern>
            <linearGradient id={`grad-${uid}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#00b9ff" />
              <stop offset="100%" stopColor="#8b00ff" />
            </linearGradient>
          </defs>
          {/* Draw bottom-up so the top layer sits in front */}
          {layers
            .map((layer, i) => ({ layer, i }))
            .reverse()
            // Active layer is drawn last so it lifts above the stack
            .sort((a, b) => (a.i === active ? 1 : b.i === active ? -1 : 0))
            .map(({ layer, i }) => {
              const isActive = i === active;
              const y = 12 + i * GAP - (isActive ? 10 : 0);
              // Only the lower tip of a resting layer is visible, so its label sits there
              const labelY = isActive ? y + PLANE_H / 2 + 5 : y + PLANE_H - 20;
              return (
                <g
                  key={layer.name}
                  className="cursor-pointer transition-transform duration-500"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                >
                  <polygon points={plane(y)} fill="#000" />
                  <polygon
                    points={plane(y)}
                    fill={isActive ? `url(#grad-${uid})` : `url(#dots-${uid})`}
                    fillOpacity={isActive ? 0.9 : 1}
                    stroke={isActive ? "#00ffff" : "rgba(255,255,255,0.28)"}
                    strokeWidth={isActive ? 1.5 : 1}
                    style={{ transition: "fill-opacity 400ms, stroke 400ms" }}
                  />
                  <text
                    x={W / 2}
                    y={labelY}
                    textAnchor="middle"
                    className="font-display"
                    fontSize={isActive ? 16 : 12}
                    fontWeight={600}
                    fill={isActive ? "#000" : "rgba(255,255,255,0.75)"}
                    style={{ transition: "fill 400ms" }}
                  >
                    {layer.short}
                  </text>
                </g>
              );
            })}
        </svg>
      </div>

      <div>
        <ul className="border-t border-line" role="tablist" aria-orientation="vertical" aria-label="Data layers">
          {layers.map((layer, i) => {
            const isActive = i === active;
            return (
              <li key={layer.name} className="border-b border-line">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`layer-${uid}-${i}`}
                  id={`tab-${uid}-${i}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`font-display text-lg transition-colors sm:text-xl ${isActive ? "text-paper" : "text-mist"}`}
                  >
                    {layer.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-px shrink-0 transition-all duration-500 ${isActive ? "w-14 bg-signal-gradient" : "w-6 bg-haze"}`}
                  />
                </button>
                <div
                  id={`layer-${uid}-${i}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${uid}-${i}`}
                  hidden={!isActive}
                  className="max-w-md pb-6 text-pretty text-mist"
                >
                  {layer.body}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
