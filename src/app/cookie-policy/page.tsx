import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMeta({ title: "Cookie policy", description: "How Infortum uses cookies and similar technologies, and the choices you have.", path: "/cookie-policy" });

export default function Page() {
  return <LegalPage file="cookie-policy.md" />;
}
