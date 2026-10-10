import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMeta({ title: "Privacy policy", description: "How Infortum Inc. collects, uses and protects your personal information.", path: "/privacy-policy" });

export default function Page() {
  return <LegalPage file="privacy-policy.md" />;
}
