import Link from "next/link";
import { Card } from "@/components/ui/Card";

const plans = [
  ["Starter", "$22"],
  ["Growth", "$99"],
  ["Scale", "$250"],
];

export function PricingStrip() {
  return (
    <section className="space-y-4 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Pricing Preview</h2>
        <Link href="/pricing" className="text-sm text-[var(--green)]">
          See full pricing
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map(([name, price]) => (
          <Card key={name} className={name === "Growth" ? "border-[var(--purple)]" : ""}>
            <h3 className="font-semibold">{name}</h3>
            <p className="mt-2 text-2xl font-bold">{price}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
