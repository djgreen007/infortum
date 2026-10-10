import {
  BrainCircuit,
  Fingerprint,
  Globe,
  HandCoins,
  HeartPulse,
  Landmark,
  MapPinned,
  Pill,
  Stethoscope,
  Wallet,
  type LucideProps,
} from "lucide-react";

const map = {
  fingerprint: Fingerprint,
  brain: BrainCircuit,
  mapPin: MapPinned,
  heart: HeartPulse,
  pill: Pill,
  globe: Globe,
  wallet: Wallet,
  coins: HandCoins,
  bank: Landmark,
  health: Stethoscope,
} as const;

export type IconName = keyof typeof map;

/** Neon line icon (lime #CCFF00 by default, matching the original site). */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name as IconName] ?? Globe;
  return <C strokeWidth={1.5} aria-hidden="true" {...props} />;
}
