"use client";

import { motion } from "framer-motion";

const stats = ["500+ Businesses", "2M+ Monthly Messages", "12+ Channels", "30+ Integrations"];

export function StatsCounter() {
  return (
    <section className="grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <motion.div key={s} whileInView={{ opacity: [0, 1], y: [12, 0] }} viewport={{ once: true }} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center text-lg font-semibold">
          {s}
        </motion.div>
      ))}
    </section>
  );
}
