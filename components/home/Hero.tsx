"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="grid gap-8 py-16 md:grid-cols-2 md:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">{t.hero.headline}</h1>
        <p className="text-[var(--muted)]">{t.hero.sub}</p>
        <div className="flex gap-3">
          <Button href="https://app.samy.agency">{t.hero.cta1}</Button>
          <Button href="https://app.samy.agency" variant="outline">
            {t.hero.cta2}
          </Button>
        </div>
        <Badge>{t.hero.trust}</Badge>
      </motion.div>
      <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="grid h-64 place-items-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface2)]">
          {lang === "ar" ? "معاينة لوحة التحكم" : "Dashboard Preview"}
        </div>
        <span className="absolute -left-2 top-6 rounded-full bg-[var(--green)] px-3 py-1 text-xs">WhatsApp</span>
        <span className="absolute right-2 top-2 rounded-full bg-[var(--coral)] px-3 py-1 text-xs">Instagram</span>
        <span className="absolute bottom-5 right-10 rounded-full bg-[var(--purple)] px-3 py-1 text-xs">Facebook</span>
      </div>
    </section>
  );
}
