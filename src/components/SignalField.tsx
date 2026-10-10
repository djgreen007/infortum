"use client";

import { useEffect, useRef } from "react";

type Pulse = { x: number; y: number; born: number; strength: number };

// Brand gradient stops: cyan → sky → violet
const STOPS: [number, number, number][] = [
  [0, 255, 255],
  [0, 185, 255],
  [139, 0, 255],
];

function gradientAt(t: number): [number, number, number] {
  const clamped = Math.min(1, Math.max(0, t));
  const seg = clamped < 0.5 ? 0 : 1;
  const local = seg === 0 ? clamped / 0.5 : (clamped - 0.5) / 0.5;
  const a = STOPS[seg];
  const b = STOPS[seg + 1];
  return [a[0] + (b[0] - a[0]) * local, a[1] + (b[1] - a[1]) * local, a[2] + (b[2] - a[2]) * local];
}

/**
 * A dot-matrix "signal field": every dot is a data point. Pulses ripple out from
 * random points (offline events) and light the matrix in the brand gradient.
 */
export function SignalField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GAP = 16;
    const SPEED = 0.16; // px per ms
    const LIFE = 4200; // ms
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let lastSpawn = 0;
    let visible = true;
    const pulses: Pulse[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (now: number) => {
      pulses.push({
        x: width * (0.35 + Math.random() * 0.6),
        y: height * (0.1 + Math.random() * 0.8),
        born: now,
        strength: 0.6 + Math.random() * 0.4,
      });
      if (pulses.length > 7) pulses.shift();
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / GAP) + 1;
      const rows = Math.ceil(height / GAP) + 1;
      const offX = (width - (cols - 1) * GAP) / 2;
      const offY = (height - (rows - 1) * GAP) / 2;

      for (let i = 0; i < cols; i++) {
        const x = offX + i * GAP;
        // Fade the field toward the left, where the headline sits
        const edge = Math.min(1, Math.max(0, (x / width - 0.04) / 0.4));
        for (let j = 0; j < rows; j++) {
          const y = offY + j * GAP;
          let energy = 0;
          for (const p of pulses) {
            const age = now - p.born;
            if (age < 0 || age > LIFE) continue;
            const r = age * SPEED;
            const d = Math.hypot(x - p.x, y - p.y);
            const band = d - r;
            const ring = Math.exp(-(band * band) / 1400);
            energy += ring * p.strength * (1 - age / LIFE);
          }
          // Quiet idle shimmer so the field is never fully static
          const idle = 0.5 + 0.5 * Math.sin(now * 0.0006 + i * 0.35 + j * 0.22);
          const base = 0.1 + idle * 0.07;
          const e = Math.min(1, energy);
          const alpha = Math.min(1, (base + e * 0.95) * edge);
          if (alpha < 0.015) continue;

          if (e > 0.04) {
            const [r, g, b] = gradientAt(x / width + (y / height) * 0.25 - 0.1);
            ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha})`;
          } else {
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          }
          const size = 1.4 + e * 2;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
    };

    const loop = (now: number) => {
      if (visible) {
        if (now - lastSpawn > 700) {
          spawn(now);
          lastSpawn = now;
        }
        draw(now);
      }
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(1200);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    if (reduced) {
      // One still frame with a few frozen ripples
      const t = 1200;
      for (let k = 0; k < 3; k++) pulses.push({ x: width * (0.5 + k * 0.15), y: height * (0.3 + k * 0.2), born: t - 900 * (k + 1), strength: 0.8 });
      draw(t);
    } else {
      spawn(performance.now());
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />;
}
