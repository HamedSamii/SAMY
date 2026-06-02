"use client";

import Link from "next/link";
import { KBSearch } from "@/components/knowledge-base/KBSearch";
import { KBCategory } from "@/components/knowledge-base/KBCategory";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Lang } from "@/lib/i18n";

type Category = {
  id: string;
  icon: string | null;
  name_en: string;
  name_ar: string;
  kb_articles?: { count: number }[];
};

const copy = {
  en: {
    title: "How can we help you?",
    popular: "Popular Articles",
    article: "Popular article",
    articles: (n: number) => `${n} articles`,
  },
  ar: {
    title: "كيف نقدر نساعدك؟",
    popular: "مقالات شائعة",
    article: "مقال شائع",
    articles: (n: number) => `${n} مقالة`,
  },
} satisfies Record<Lang, Record<string, unknown>>;

export function KnowledgeBasePageContent({ categories }: { categories: Category[] }) {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="space-y-8 py-6">
      <h1 className="mkt-scale-heading text-center text-3xl font-bold">{t.title as string}</h1>
      <KBSearch />
      <div className="mkt-grid-3 grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <KBCategory
            key={category.id}
            icon={category.icon || "📄"}
            title={lang === "ar" ? category.name_ar : category.name_en}
            count={t.articles(category.kb_articles?.[0]?.count ?? 0) as string}
          />
        ))}
      </div>
      <section>
        <h2 className="mb-3 text-2xl font-bold">{t.popular as string}</h2>
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Link
              key={i}
              href={`/knowledge-base/article-${i + 1}`}
              className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 hover:border-[var(--purple)]"
            >
              {t.article as string} #{i + 1}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
