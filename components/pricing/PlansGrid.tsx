"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getEnterprisePlan, getPlans, getPricingPageCopy } from "@/lib/pricing-i18n";
import { PlanCard } from "@/components/pricing/PlanCard";

type BillingCycle = "monthly" | "yearly";

type PlansGridProps = {
  billingCycle: BillingCycle;
};

export function PlansGrid({ billingCycle }: PlansGridProps) {
  const { lang } = useLanguage();
  const copy = getPricingPageCopy(lang);
  const plans = getPlans(lang);
  const enterprisePlan = getEnterprisePlan(lang);

  return (
    <>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} labels={copy.planCard} />
        ))}
      </div>

      <div className="enterprise-strip">
        <div className="enterprise-left">
          <div className="enterprise-name">{enterprisePlan.name}</div>
          <div className="enterprise-title">{enterprisePlan.title}</div>
          <div className="enterprise-desc">{enterprisePlan.description}</div>
        </div>
        <div className="enterprise-right">
          <div>
            <div className="enterprise-price">{copy.enterpriseStrip.customPriceLabel}</div>
            <div className="enterprise-sub">{copy.enterpriseStrip.pricingForScaleLabel}</div>
          </div>
          <Link href={enterprisePlan.ctaHref} className="enterprise-cta">
            {enterprisePlan.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
