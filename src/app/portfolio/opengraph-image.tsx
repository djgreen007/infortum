import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Portfolio | Infortum";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Portfolio", title: "Five companies. {One ecosystem.}", body: "Earnva · EarnvaRx · 247FirstCare · AET Trust" });
}
