import Link from "next/link";
import { KBSearch } from "@/components/knowledge-base/KBSearch";
import { KBCategory } from "@/components/knowledge-base/KBCategory";
import { getKBCategories } from "@/lib/db";

export default async function KnowledgeBasePage() {
  const categories = await getKBCategories();
  return (
    <div className="space-y-8 py-6">
      <h1 className="text-center text-4xl font-bold">How can we help you?</h1>
      <KBSearch />
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <KBCategory
            key={category.id}
            icon={category.icon || "📄"}
            title={category.name_en}
            count={`${category.kb_articles?.[0]?.count ?? 0} articles`}
          />
        ))}
      </div>
      <section>
        <h2 className="mb-3 text-2xl font-bold">Popular Articles</h2>
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Link key={i} href={`/knowledge-base/article-${i + 1}`} className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 hover:border-[var(--purple)]">
              Popular article #{i + 1}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
