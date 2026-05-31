import Link from "next/link";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminKnowledgeBasePage() {
  if (!supabaseAdmin) redirect("/login");
  const { data: articles } = await supabaseAdmin
    .from("kb_articles")
    .select("id,title_ar,title_en,is_published,order_index")
    .order("order_index");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Knowledge Base Articles</h1>
        <Link href="/admin/knowledge-base/new" className="rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">
          New Article
        </Link>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
        <table className="w-full text-sm">
          <thead className="bg-[var(--surface2)] text-[var(--muted)]">
            <tr>
              <th className="p-3 text-start">Title</th>
              <th className="p-3 text-start">Order</th>
              <th className="p-3 text-start">Status</th>
              <th className="p-3 text-start">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(articles ?? []).map((article) => (
              <tr key={article.id} className="border-t border-[var(--border)] bg-[var(--surface)]">
                <td className="p-3">{article.title_en || article.title_ar}</td>
                <td className="p-3">{article.order_index}</td>
                <td className="p-3">
                  <span className={`rounded-full px-2 py-1 text-xs ${article.is_published ? "bg-green-500/20 text-green-300" : "bg-gray-500/20 text-gray-300"}`}>
                    {article.is_published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="p-3">
                  <Link href={`/admin/knowledge-base/${article.id}`} className="text-[var(--purple)]">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
