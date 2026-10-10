import type { Metadata } from "next";
import { site } from "./content";

/** Page metadata with canonical URL, Open Graph and Twitter tags. The share image comes from each route's opengraph-image. */
export function pageMeta({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const full = title ? `${title} | ${site.name}` : `${site.name} | Offline intent data, finance and health`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, locale: "en_US", url: path, title: full, description },
    twitter: { card: "summary_large_image", title: full, description },
  };
}
