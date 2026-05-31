"use client";

export function PricingToggle({
  yearly,
  setYearly,
}: {
  yearly: boolean;
  setYearly: (val: boolean) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1">
      <button onClick={() => setYearly(false)} className={`rounded-lg px-4 py-2 text-sm ${!yearly ? "bg-[var(--purple)] text-white" : ""}`}>
        Monthly
      </button>
      <button onClick={() => setYearly(true)} className={`rounded-lg px-4 py-2 text-sm ${yearly ? "bg-[var(--green)] text-black" : ""}`}>
        Yearly
      </button>
    </div>
  );
}
