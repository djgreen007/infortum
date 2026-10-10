"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/useScrollProgress";

/** Looping muted background video that only plays while on screen. Shows the poster for reduced motion. */
export function VideoBackdrop({ opacity = 0.4, name = "data-ring" }: { opacity?: number; name?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v || reduced) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.1 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {reduced ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/video/${name}-poster.jpg`} alt="" className="h-full w-full object-cover" style={{ opacity }} />
      ) : (
        <video
          ref={ref}
          className="h-full w-full object-cover"
          style={{ opacity }}
          muted
          loop
          playsInline
          preload="metadata"
          poster={`/video/${name}-poster.jpg`}
        >
          <source src={`/video/${name}.webm`} type="video/webm" />
          <source src={`/video/${name}.mp4`} type="video/mp4" />
        </video>
      )}
      {/* Fade the edges into the black page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_85%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
