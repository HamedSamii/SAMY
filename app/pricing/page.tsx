import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing | Samy",
  description: "Simple, transparent pricing. Start free for 14 days. Plans from $22/month.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
