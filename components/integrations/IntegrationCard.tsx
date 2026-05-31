"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Integration, IntegrationCategory } from "@/lib/integrations-data";

const categoryColors: Record<IntegrationCategory, string> = {
  ai: "#9B6DD8",
  "voice-sms": "var(--purple)",
  ecommerce: "var(--coral)",
  email: "#4A9EE0",
  payments: "var(--green)",
  map: "#34A853",
  calendar: "var(--amber)",
  storage: "#378ADD",
  "integration-platform": "var(--amber)",
  "live-chat": "#E06B6B",
  crm: "#4A9EE0",
  others: "#7F77DD",
};

type IntegrationCardProps = {
  integration: Integration;
};

function InitialAvatar({ name, category }: { name: string; category: IntegrationCategory }) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold text-white"
      style={{ backgroundColor: categoryColors[category] }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export function IntegrationCard({ integration }: IntegrationCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={integration.href}
      className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-[var(--surface)] p-6 text-center no-underline shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-[1.02] hover:border-[var(--purple)]/40 hover:bg-[var(--surface2)] hover:shadow-[0_8px_28px_rgba(127,119,221,0.15)]"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
        {imageError ? (
          <InitialAvatar name={integration.name} category={integration.category} />
        ) : (
          <Image
            src={integration.logo}
            alt={integration.name}
            width={40}
            height={40}
            unoptimized
            className="h-10 w-10 object-contain"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <h3 className="mb-2 text-[15px] font-semibold leading-snug text-white">{integration.name}</h3>
      <p className="line-clamp-3 text-[13px] leading-relaxed text-white/50">{integration.description}</p>
    </Link>
  );
}
