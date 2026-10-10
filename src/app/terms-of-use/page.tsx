import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = pageMeta({ title: "Terms of use", description: "The terms that govern your use of the Infortum website and services.", path: "/terms-of-use" });

export default function Page() {
  return <LegalPage file="terms-of-use.md" />;
}
