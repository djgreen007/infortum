"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/useScrollProgress";

const SRC = {
  cyan: "/images/bg-glitter.webp",
  violet: "/images/bg-glitter-violet.webp",
} as const;

/**
 * Bokeh background that drifts slower than the page (parallax), faded into black at the edges.
 * Place inside a `relative isolate` section.
 */
export function ParallaxBackdrop({
  tone = "cyan",
  opacity = 0.45,
  strength = 0.18,
}: {
  tone?: keyof typeof SRC;
  opacity?: number;
  strength?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const w = wrap.current;
    const l = layer.current;
    if (!w || !l) return;
    let raf = 0;
    let visible = false;
    const update = () => {
      raf = 0;
      const r = w.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the section enters from below, +1 when it leaves at the top
      const p = (vh / 2 - (r.top + r.height / 2)) / ((vh + r.height) / 2);
      l.style.transform = `translate3d(0, ${(p * strength * 100).toFixed(2)}%, 0)`;
    };
    const on = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) on();
    });
    io.observe(w);
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced, strength]);

  return (
    <div ref={wrap} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        ref={layer}
        className="absolute inset-x-0 will-change-transform"
        style={{ top: `-${strength * 100}%`, bottom: `-${strength * 100}%` }}
      >
        <Image src={SRC[tone]} alt="" fill sizes="100vw" className="object-cover" style={{ opacity }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,transparent_20%,#000_80%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
