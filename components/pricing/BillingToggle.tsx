"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { getPricingPageCopy } from "@/lib/pricing-i18n";

type BillingCycle = "monthly" | "yearly";

type BillingToggleProps = {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
};

export function BillingToggle({ billingCycle, onChange }: BillingToggleProps) {
  const { lang } = useLanguage();
  const copy = getPricingPageCopy(lang);
  const isYearly = billingCycle === "yearly";

  return (
    <div className="toggle-wrap">
      <div className="toggle-pill">
        <button
          type="button"
          className={`toggle-btn${!isYearly ? " active" : ""}`}
          onClick={() => onChange("monthly")}
        >
          {copy.billingToggle.monthly}
        </button>
        <button
          type="button"
          className={`toggle-btn${isYearly ? " active" : ""}`}
          onClick={() => onChange("yearly")}
        >
          {copy.billingToggle.yearly}
        </button>
      </div>
      <span className="save-badge" style={{ opacity: isYearly ? 1 : 0.4 }}>
        {copy.billingToggle.save}
      </span>
    </div>
  );
}
