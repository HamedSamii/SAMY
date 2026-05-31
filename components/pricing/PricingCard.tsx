import { Button } from "@/components/ui/Button";

export function PricingCard({
  name,
  contacts,
  monthly,
  yearly,
  selectedYearly,
}: {
  name: string;
  contacts: string;
  monthly: string;
  yearly: string;
  selectedYearly: boolean;
}) {
  const isPopular = name === "Growth";
  const isEnterprise = name === "Enterprise";
  return (
    <div className={`rounded-2xl border bg-[var(--surface)] p-6 ${isPopular ? "border-[var(--purple)]" : "border-[var(--border)]"} ${isEnterprise ? "bg-gradient-to-b from-[var(--surface)] to-black" : ""}`}>
      {isPopular && <p className="mb-2 text-xs text-[var(--purple)]">Most Popular</p>}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-[var(--muted)]">{contacts} contacts</p>
      <p className="my-4 text-3xl font-bold">{selectedYearly ? yearly : monthly}</p>
      <Button href="https://app.samy.agency" variant={isEnterprise ? "outline" : "primary"} className="w-full">
        {isEnterprise ? "Contact Sales" : "Start Free"}
      </Button>
    </div>
  );
}
