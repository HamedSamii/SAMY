"use client";

import { motion } from "framer-motion";
import { filterCategories, type FilterKey } from "@/lib/integrations-data";

type FilterBarProps = {
  active: FilterKey;
  onChange: (key: FilterKey) => void;
};

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="sticky top-20 z-20 -mx-4 bg-[#0A0A0F]/90 px-4 py-4 backdrop-blur-md">
      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filterCategories.map(({ label, key }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-white"
                  : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="integration-filter-pill"
                  className="absolute inset-0 rounded-full bg-[var(--purple)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
