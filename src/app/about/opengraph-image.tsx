import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "About us | Infortum";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "About Infortum", title: "Revolutionizing {market intelligence} across industries.", body: "Founded and led by Eddy Pham, Founder & CEO." });
}
