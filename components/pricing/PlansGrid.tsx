import Link from "next/link";
import { plans, enterprisePlan } from "@/lib/pricing-data";
import { PlanCard } from "@/components/pricing/PlanCard";

type BillingCycle = "monthly" | "yearly";

type PlansGridProps = {
  billingCycle: BillingCycle;
};

export function PlansGrid({ billingCycle }: PlansGridProps) {
  return (
    <>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} />
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
            <div className="enterprise-price">Custom</div>
            <div className="enterprise-sub">pricing for your scale</div>
          </div>
          <Link href={enterprisePlan.ctaHref} className="enterprise-cta">
            {enterprisePlan.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
