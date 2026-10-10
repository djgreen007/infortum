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

/** Ticker that runs from 0 up to `value` the first time it scrolls into view, and lands exactly on `value`. */
export function CountUp({ value, duration = 1100, className }: { value: string; duration?: number; className?: string }) {
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
            const n = parsed.target * eased;
            // Millions tick in tenths (0.1M → 3M) so the box never outgrows its column
            const shown = parsed.target >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : Math.round(n).toLocaleString("en-US");
            setText(`${parsed.prefix}${shown}${parsed.suffix}`);
            raf = requestAnimationFrame(tick);
          } else setText(value);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
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
