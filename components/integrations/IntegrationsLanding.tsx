"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { integrations, type FilterKey } from "@/lib/integrations-data";
import { FilterBar } from "@/components/integrations/FilterBar";
import { IntegrationCard } from "@/components/integrations/IntegrationCard";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getIntegrationsPageCopy } from "@/lib/marketing-pages-copy";
import { dirForLang } from "@/lib/locale";

import "@/styles/integrations.css";

function HeroSection() {
  const { lang } = useLanguage();
  const t = getIntegrationsPageCopy(lang);

  return (
    <section className="relative overflow-hidden py-16 text-center md:py-24">
      <div
        className="integrations-dot-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle, rgba(127,119,221,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/50 to-[#0A0A0F]" aria-hidden />

      <div className="relative mx-auto max-w-2xl space-y-5 px-4">
        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-sans text-xs tracking-wide text-white/70">
          {t.badge}
        </span>
        <h1 className="mkt-scale-heading text-3xl font-bold tracking-tight text-white">{t.title}</h1>
        <p className="mkt-scale-text text-base text-white/50">{t.sub}</p>
      </div>
    </section>
  );
}

function IntegrationsGrid({ items }: { items: typeof integrations }) {
  const { lang } = useLanguage();
  const t = getIntegrationsPageCopy(lang);

  return (
    <section className="pb-12 px-4 sm:px-6">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="sr-only">Integrations</h2>
        <p className="text-sm text-white/40">{t.countLabel(items.length)}</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={items.map((i) => i.id).join(",")}
          className="mkt-grid-4 grid grid-cols-4 gap-5"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {items.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
            >
              <IntegrationCard integration={integration} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function CTASection() {
  const { lang } = useLanguage();
  const t = getIntegrationsPageCopy(lang);

  return (
    <section className="space-y-6 px-4 pb-20 sm:px-6">
      <div className="integrations-cta-border relative rounded-2xl bg-[#13131A] p-6 text-center sm:p-8 md:p-12">
        <p className="mb-2 font-sans text-xs uppercase tracking-widest text-[var(--purple)]">{t.ctaEyebrow}</p>
        <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">{t.ctaTitle}</h2>
        <p className="mx-auto mb-4 max-w-2xl text-white/50">{t.ctaSub}</p>
        <p className="mx-auto mb-8 max-w-2xl text-sm text-white/40">{t.ctaDetail}</p>
        <div className="mkt-row flex items-center justify-center gap-3">
          <Link
            href="/build-agent"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--coral)] px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:opacity-90"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:border-white/40 hover:bg-white/5"
          >
            {t.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IntegrationsLanding() {
  const { lang } = useLanguage();
  const dir = dirForLang(lang);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = useMemo(
    () => (activeFilter === "all" ? integrations : integrations.filter((i) => i.category === activeFilter)),
    [activeFilter],
  );

  return (
    <div dir={dir} className="min-h-screen bg-[#0A0A0F]">
      <HeroSection />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />
      <IntegrationsGrid items={filtered} />
      <CTASection />
    </div>
  );
}
