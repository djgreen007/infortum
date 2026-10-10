"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { earnvaFeature } from "@/lib/content";
import { usePrefersReducedMotion, useScrollProgress } from "@/lib/useScrollProgress";
import { GText } from "./GText";

const ease = (t: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);

export function DeviceReveal() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setWide(mq.matches);
    const on = () => setWide(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const animate = wide && !reduced;
  const p = animate ? progress : 1;
  const dev = ease(p / 0.45);
  const features = earnvaFeature.features;

  return (
    <div ref={ref} className="relative" style={{ height: animate ? "240vh" : "auto" }}>
      <div className={animate ? "sticky top-0 flex h-[100svh] items-center" : ""}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-0">
          <div>
            <Image src="/images/earnva-logo.png" alt="Earnva" width={640} height={235} className="h-11 w-auto" />
            <h2 className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              <GText text={earnvaFeature.title} />
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg text-mist">{earnvaFeature.body}</p>
            <dl className="mt-12 space-y-7">
              {features.map((f, i) => {
                const shown = ease((p - (0.35 + i * 0.18)) / 0.12);
                return (
                  <div
                    key={f.name}
                    style={{ opacity: animate ? 0.15 + shown * 0.85 : 1, transform: `translateY(${(1 - shown) * 16}px)` }}
                  >
                    <dt className="flex items-center gap-3 font-display text-xl font-semibold">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-signal-gradient"
                        style={{ boxShadow: shown > 0.9 ? "0 0 14px #00ffff" : "none" }}
                      />
                      {f.name}
                    </dt>
                    <dd className="mt-2 max-w-lg pl-5 text-pretty text-mist">{f.body}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md" style={{ perspective: "1200px" }}>
            <div
              aria-hidden="true"
              className="absolute inset-[5%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.28),rgba(139,0,255,0.18)_45%,transparent_70%)] blur-3xl"
              style={{ opacity: 0.3 + dev * 0.7, transform: `scale(${0.7 + dev * 0.4})` }}
            />
            <div
              style={{
                transform: `translateY(${(1 - dev) * 80}px) scale(${0.78 + dev * 0.22}) rotateX(${(1 - dev) * 18}deg) rotateZ(${(1 - dev) * -6}deg)`,
                opacity: 0.25 + dev * 0.75,
                willChange: "transform",
              }}
            >
              <Image
                src="/images/earnva-app.webp"
                alt="The Earnva app on a phone"
                width={790}
                height={1220}
                sizes="(min-width:1024px) 28rem, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
