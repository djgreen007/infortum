import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Contact us | Infortum";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Contact", title: "Let's build {what's next.}", body: "Partnerships · Merchants · Investors · Media" });
}
