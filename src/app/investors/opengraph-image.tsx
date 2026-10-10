import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Investors | Infortum";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "For investors", title: "Invest in the first {HelpTech} ecosystem.", body: "FinTech, HealthTech and rewards, unified around consented real-world data." });
}
