"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    title: "Built for Your Industry",
    useCases: "Key Use Cases",
    demo: "Chat Demo Mockup",
    tryDemo: "Try This Demo",
    items: ["Lead qualification and routing", "Automated follow-up sequences", "Appointment and order handling"],
    industries: ["E-commerce", "Real Estate", "Restaurants & Food", "Education", "Healthcare", "Travel & Tourism", "Finance"],
  },
  ar: {
    title: "مصمم لصناعتك",
    useCases: "حالات الاستخدام الرئيسية",
    demo: "عرض تجريبي للشات",
    tryDemo: "جرّب العرض",
    items: ["تأهيل العملاء وتوجيههم", "تسلسلات متابعة تلقائية", "إدارة المواعيد والطلبات"],
    industries: ["تجارة إلكترونية", "عقارات", "مطاعم وأغذية", "تعليم", "رعاية صحية", "سفر وسياحة", "مالية"],
  },
} satisfies Record<Lang, Record<string, unknown>>;

export function IndustriesPageContent() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="space-y-6 py-6">
      <h1 className="mkt-scale-heading text-3xl font-bold">{t.title as string}</h1>
      <div className="mkt-row flex gap-2 overflow-x-auto">
        {(t.industries as string[]).map((i) => (
          <span key={i} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm">
            {i}
          </span>
        ))}
      </div>
      <div className="mkt-grid-2 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="grid h-56 place-items-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface2)]">
          {t.demo as string}
        </div>
        <div>
          <h2 className="mb-3 text-xl font-semibold">{t.useCases as string}</h2>
          <ul className="list-disc space-y-2 ps-5 text-sm text-[var(--muted)]">
            {(t.items as string[]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button className="mt-4 rounded-xl bg-[var(--purple)] px-4 py-2 text-sm">{t.tryDemo as string}</button>
        </div>
      </div>
    </div>
  );
}
