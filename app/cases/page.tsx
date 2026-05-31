import type { Metadata } from "next";
import { Suspense } from "react";
import { CasesLanding } from "@/components/cases/CasesLanding";

export const metadata: Metadata = {
  title: "Case Studies | Samy",
  description:
    "Real SAMY-powered chatbot case studies across real estate, education, eCommerce, healthcare, and more — with measurable results.",
};

export default function CasesPage() {
  return (
    <Suspense fallback={<div className="cases-page cases-page-loading" aria-busy="true" />}>
      <CasesLanding />
    </Suspense>
  );
}
