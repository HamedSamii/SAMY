"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
      <h2 className="mb-4 text-3xl font-bold">{t.home.finalCta}</h2>
      <div className="mb-5 flex justify-center gap-3">
        <Button href="https://app.samy.agency">{t.hero.cta1}</Button>
        <Button href="https://app.samy.agency" variant="outline">
          {t.hero.cta2}
        </Button>
      </div>
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3 text-xs">
        <div className="rounded-lg border border-dashed border-[var(--border)] py-2">App Store Badge</div>
        <div className="rounded-lg border border-dashed border-[var(--border)] py-2">Play Store Badge</div>
      </div>
    </section>
  );
}
