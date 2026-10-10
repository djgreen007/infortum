/** Drifting cyan / violet light behind a hero. Pure CSS, pauses for reduced motion. */
export function AuroraBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="aurora-a absolute -left-[10%] top-[5%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(closest-side,rgba(0,255,255,0.32),transparent)] blur-3xl" />
      <div className="aurora-b absolute -right-[12%] -top-[20%] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,0,255,0.45),transparent)] blur-3xl" />
      <div className="aurora-c absolute bottom-[-25%] left-[35%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(0,185,255,0.28),transparent)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,transparent_30%,#000_85%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
