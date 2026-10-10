import { ecosystem } from "@/lib/content";
import { GText } from "./GText";

// Bento spans: wide, narrow / narrow, wide — so the grid reads as one composed block
const SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
const GLOWS = [
  "radial-gradient(60% 80% at 100% 0%, rgba(0,255,255,0.16), transparent 70%)",
  "radial-gradient(70% 80% at 0% 100%, rgba(139,0,255,0.22), transparent 70%)",
  "radial-gradient(70% 80% at 100% 100%, rgba(0,185,255,0.18), transparent 70%)",
  "radial-gradient(60% 80% at 0% 0%, rgba(139,0,255,0.2), transparent 70%)",
];

export function EcosystemBento() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-3xl">
        <h2 id="infortum" className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          <GText text={ecosystem.title} />
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-mist sm:text-xl">{ecosystem.body}</p>
      </div>
      <ul className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-12 lg:gap-5">
        {ecosystem.items.map((item, i) => (
          <li
            key={item.name}
            className={`glass group relative flex min-h-[16rem] flex-col justify-end overflow-hidden rounded-[2rem] p-8 transition-colors duration-500 hover:bg-white/[0.07] sm:p-10 lg:min-h-[22rem] ${SPANS[i]}`}
          >
            <div aria-hidden="true" className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 lg:opacity-80" style={{ background: GLOWS[i] }} />
            <h3 className="relative max-w-md text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">{item.name}</h3>
            <p className="relative mt-4 max-w-lg text-pretty leading-relaxed text-mist">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
