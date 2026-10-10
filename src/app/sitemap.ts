import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const pages: [string, number][] = [
  ["", 1],
  ["/portfolio", 0.9],
  ["/investors", 0.9],
  ["/about", 0.8],
  ["/contact", 0.7],
  ["/privacy-policy", 0.3],
  ["/terms-of-use", 0.3],
  ["/cookie-policy", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified, changeFrequency: "monthly", priority }));
}
