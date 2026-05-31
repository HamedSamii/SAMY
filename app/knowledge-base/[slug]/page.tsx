import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownView } from "@/components/knowledge-base/MarkdownView";
import { getArticleBySlug } from "@/lib/db";

export default async function KnowledgeBaseArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="grid gap-6 py-6 md:grid-cols-[1fr_280px]">
      <article>
        <p className="mb-2 text-xs text-[var(--muted)]">
          <Link href="/knowledge-base">Knowledge Base</Link> / {article.kb_categories?.name_en}
        </p>
        <h1 className="mb-2 text-3xl font-bold">{article.title_en}</h1>
        <p className="mb-4 text-sm text-[var(--muted)]">Last updated: {new Date(article.updated_at).toLocaleDateString()}</p>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          <MarkdownView content={article.content_en || article.content_ar || ""} />
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span>Was this helpful?</span>
          <button className="rounded border border-[var(--border)] px-3 py-1">Yes</button>
          <button className="rounded border border-[var(--border)] px-3 py-1">No</button>
        </div>
      </article>
      <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
        <h3 className="mb-3 font-semibold">Related articles</h3>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          <li>How to connect WhatsApp</li>
          <li>Setting up your first flow</li>
          <li>Publishing academy content</li>
        </ul>
        <a href="https://app.samy.agency" className="mt-4 inline-block rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">
          Contact Support
        </a>
      </aside>
    </div>
  );
}
