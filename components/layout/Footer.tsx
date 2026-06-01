"use client";

import Link from "next/link";
import { MessageCircle, Send, Users, PlayCircle, Briefcase } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getFooterCopy } from "@/lib/marketing-pages-copy";

export function Footer() {
  const { lang } = useLanguage();
  const t = getFooterCopy(lang);

  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-6">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="mb-3 inline-block rounded bg-[var(--green)] px-3 py-1 font-sans font-bold text-black">
            SAMY
          </div>
          <p className="mb-4 text-sm text-[var(--muted)]">{t.tagline}</p>
          <div className="flex gap-3 text-[var(--muted)]">
            <MessageCircle size={16} />
            <Send size={16} />
            <Users size={16} />
            <PlayCircle size={16} />
            <Briefcase size={16} />
          </div>
        </div>
        {t.columns.map((items, i) => (
          <div key={i} className="space-y-2 text-sm">
            {items.map((item) => (
              <Link key={item} href="#" className="block text-[var(--muted)] hover:text-[var(--text)]">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted)]">
        {t.copyright}
      </div>
    </footer>
  );
}
