import Link from "next/link";
import { type Plan, getYearlyPrice } from "@/lib/pricing-data";
import type { PricingPageCopy } from "@/lib/pricing-i18n";

type BillingCycle = "monthly" | "yearly";

type PlanCardProps = {
  plan: Plan;
  billingCycle: BillingCycle;
  labels: PricingPageCopy["planCard"];
};

export function PlanCard({ plan, billingCycle, labels }: PlanCardProps) {
  const isYearly = billingCycle === "yearly";
  const isExternal = plan.ctaHref.startsWith("http");

  const displayPrice =
    plan.monthlyPrice !== null
      ? isYearly
        ? getYearlyPrice(plan.monthlyPrice)
        : plan.monthlyPrice
      : null;

  const cardClass = plan.highlight ? "plan-card highlight" : "plan-card";
  const cardStyle = plan.borderColor ? { borderColor: plan.borderColor } : undefined;

  return (
    <div className={cardClass} style={cardStyle}>
      {plan.highlight && <div className="popular-badge">✦ {labels.popularBadge}</div>}

      <div
        className="plan-name"
        style={plan.highlight ? { color: "var(--purple)" } : undefined}
      >
        {plan.name}
      </div>
      <div className="plan-tagline">{plan.tagline}</div>

      <div className="plan-price-wrap">
        <div className="plan-price">
          <span className="currency">$</span>
          <span className="amount">{displayPrice}</span>
          <span className="period">/mo</span>
        </div>
      </div>
      <div className="plan-billing">
        {isYearly ? labels.billedAnnually(plan.monthlyPrice) : labels.billedMonthly}
      </div>

      <span
        className="contacts-badge"
        style={{ background: plan.accentDim, color: plan.accentColor }}
      >
        {plan.contacts} {labels.contactsLabel}
      </span>

      <div className="divider" />

      <ul className="features-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="check" style={{ color: plan.accentColor }}>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={plan.ctaHref}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`plan-cta ${plan.highlight ? "primary" : "outline"}`}
        style={
          plan.highlight
            ? undefined
            : { borderColor: plan.accentColor, color: plan.accentColor }
        }
      >
        {plan.cta}
      </Link>
    </div>
  );
}
