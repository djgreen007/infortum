import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Infortum | Transform offline behavior into actionable insights";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Infortum Inc.",
    title: "Transform offline {behavior} into actionable {insights.}",
    body: "The HelpTech ecosystem for finance, health and rewards.",
  });
}
