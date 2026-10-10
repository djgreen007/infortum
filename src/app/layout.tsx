import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const sora = localFont({ src: "../fonts/sora-latin-wght-normal.woff2", variable: "--font-sora", weight: "100 800", display: "swap" });
const inter = localFont({ src: "../fonts/inter-latin-wght-normal.woff2", variable: "--font-inter", weight: "100 900", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Infortum | Transform offline behavior into actionable insights", template: "%s | Infortum" },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Infortum",
    "HelpTech",
    "Earnva",
    "Earnva app",
    "smart wallet",
    "savings and rewards",
    "EarnvaRx",
    "prescription savings",
    "247FirstCare",
    "telehealth",
    "AET Trust",
    "consumer intent data",
    "FinTech",
    "HealthTech",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, locale: "en_US", url: "/", title: "Infortum", description: site.description },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      logo: `${site.url}/images/infortum-mark-color.webp`,
      description: site.description,
      email: "support@infortum.io",
      founder: { "@type": "Person", name: "Eddy Pham", jobTitle: "Founder & CEO" },
      subOrganization: ["Earnva", "EarnvaRx", "247FirstCare", "AET Trust"].map((name) => ({ "@type": "Organization", name })),
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#organization` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-ink text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
