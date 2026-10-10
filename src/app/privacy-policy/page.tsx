import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Page() {
  return <LegalPage file="privacy-policy.md" />;
}
