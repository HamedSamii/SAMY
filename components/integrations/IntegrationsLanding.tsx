"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { integrations, type FilterKey } from "@/lib/integrations-data";
import { FilterBar } from "@/components/integrations/FilterBar";
import { IntegrationCard } from "@/components/integrations/IntegrationCard";

import "@/styles/integrations.css";

function HeroSection() {
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

      <div className="relative mx-auto max-w-2xl space-y-5">
        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wide text-white/70">
          500+ Integrations
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Connect All Your Tools</h1>
        <p className="text-lg text-white/50">
          Centralize all your data. Easily connect Samy to your existing tools and automate everything.
        </p>
      </div>
    </section>
  );
}

function IntegrationsGrid({ items }: { items: typeof integrations }) {
  return (
    <section className="pb-12">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="sr-only">Integrations</h2>
        <p className="text-sm text-white/40">
          {items.length} integration{items.length !== 1 ? "s" : ""}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={items.map((i) => i.id).join(",")}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
  return (
    <section className="space-y-6 pb-20">
      <div className="integrations-cta-border relative rounded-2xl bg-[#13131A] p-8 text-center md:p-12">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--purple)]">No coding required · 4 minutes</p>
        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Missing an Integration? Build Your Own—No-Code.</h2>
        <p className="mx-auto mb-4 max-w-2xl text-white/50">
          Design, test, and publish custom integrations in minutes with our intuitive visual builder. No developers
          required—just your creativity.
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-sm text-white/40">
          Can&apos;t find the integration you need? With Mini Apps, our visual flow builder lets you design,
          authenticate, and publish seamless integrations tailored to your workflow—without writing a single line of code.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/build-agent"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--coral)] px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:opacity-90"
          >
            Create Custom Integrations
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-white no-underline transition hover:border-white/40 hover:bg-white/5"
          >
            Request an Integration
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IntegrationsLanding() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = useMemo(
    () => (activeFilter === "all" ? integrations : integrations.filter((i) => i.category === activeFilter)),
    [activeFilter],
  );

  return (
    <div dir="ltr" className="min-h-screen bg-[#0A0A0F]">
      <HeroSection />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />
      <IntegrationsGrid items={filtered} />
      <CTASection />
    </div>
  );
}
