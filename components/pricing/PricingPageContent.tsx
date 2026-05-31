"use client";

import { useState } from "react";
import { BillingToggle } from "@/components/pricing/BillingToggle";
import { PlansGrid } from "@/components/pricing/PlansGrid";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { FAQSection } from "@/components/pricing/FAQSection";
import { CTASection } from "@/components/pricing/CTASection";

import "@/styles/pricing.css";

type BillingCycle = "monthly" | "yearly";

export function PricingPageContent() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <div className="pricing-page">
      <div className="hero">
        <div className="hero-glow" aria-hidden />
        <div className="eyebrow">Simple, Transparent Pricing</div>
        <h1>
          The right plan for
          <br />
          your <span>business</span>
        </h1>
        <p>Start free for 14 days. No credit card required.</p>
        <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
      </div>

      <PlansGrid billingCycle={billingCycle} />
      <ComparisonTable billingCycle={billingCycle} />
      <FAQSection />
      <CTASection />
    </div>
  );
}
