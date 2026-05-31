"use client";

type BillingCycle = "monthly" | "yearly";

type BillingToggleProps = {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
};

export function BillingToggle({ billingCycle, onChange }: BillingToggleProps) {
  const isYearly = billingCycle === "yearly";

  return (
    <div className="toggle-wrap">
      <div className="toggle-pill">
        <button
          type="button"
          className={`toggle-btn${!isYearly ? " active" : ""}`}
          onClick={() => onChange("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`toggle-btn${isYearly ? " active" : ""}`}
          onClick={() => onChange("yearly")}
        >
          Yearly
        </button>
      </div>
      <span className="save-badge" style={{ opacity: isYearly ? 1 : 0.4 }}>
        Save 10%
      </span>
    </div>
  );
}
