"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useScrollProgress";

/** Parses "3M+", "65,000+", "$4.5T" into a full number to run up to. */
function parse(v: string) {
  const m = v.match(/^([^\d]*)([\d,.]+)\s*([KMBT]?)(.*)$/i);
  if (!m) return null;
  const mult = { "": 1, K: 1e3, M: 1e6, B: 1e9, T: 1e12 }[m[3].toUpperCase() as "" | "K" | "M" | "B" | "T"];
  return { prefix: m[1], target: parseFloat(m[2].replace(/,/g, "")) * mult, suffix: m[4] };
}

/** Ticker that runs from 0 up to `value` the first time it scrolls into view, and lands on the full figure (3M+ → 3,000,000+). */
export function CountUp({ value, duration = 1800, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();
  const parsed = parse(value);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed || reduced) return;
    setText(`${parsed.prefix}0${parsed.suffix}`);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          if (t < 1) {
            setText(`${parsed.prefix}${Math.round(parsed.target * eased).toLocaleString("en-US")}${parsed.suffix}`);
            raf = requestAnimationFrame(tick);
          } else setText(`${parsed.prefix}${parsed.target.toLocaleString("en-US")}${parsed.suffix}`);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduced, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`} aria-label={value}>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
