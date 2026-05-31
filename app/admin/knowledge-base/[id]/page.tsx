import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { MarkdownField } from "@/components/admin/MarkdownField";
import { slugify } from "@/lib/slugify";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  if (!supabaseAdmin) redirect("/login");
  const { id } = await params;
  const { data: article } = await supabaseAdmin.from("kb_articles").select("*").eq("id", id).single();
  if (!article) notFound();
  const { data: categories } = await supabaseAdmin
    .from("kb_categories")
    .select("id,name_ar,name_en")
    .order("order_index");

  async function updateArticle(formData: FormData) {
    "use server";
    const title_ar = String(formData.get("title_ar") ?? "");
    const title_en = String(formData.get("title_en") ?? "");
    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin
      .from("kb_articles")
      .update({
        category_id: String(formData.get("category_id") || ""),
        title_ar,
        title_en,
        slug: slugify(title_en || title_ar),
        content_ar: String(formData.get("content_ar") ?? ""),
        content_en: String(formData.get("content_en") ?? ""),
        order_index: Number(formData.get("order_index") ?? 0),
        is_published: formData.get("is_published") === "on",
      })
      .eq("id", id);
    revalidatePath("/admin/knowledge-base");
    revalidatePath("/knowledge-base");
    redirect("/admin/knowledge-base");
  }

  async function deleteArticle() {
    "use server";
    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin.from("kb_articles").delete().eq("id", id);
    revalidatePath("/admin/knowledge-base");
    redirect("/admin/knowledge-base");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Edit KB Article</h1>
      <form action={updateArticle} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <input name="title_ar" defaultValue={article.title_ar} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="title_en" defaultValue={article.title_en} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
        </div>
        <select name="category_id" defaultValue={article.category_id ?? ""} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3">
          <option value="">Category</option>
          {(categories ?? []).map((category) => (
            <option key={category.id} value={category.id}>
              {category.name_en || category.name_ar}
            </option>
          ))}
        </select>
        <MarkdownField arName="content_ar" enName="content_en" arValue={article.content_ar ?? ""} enValue={article.content_en ?? ""} />
        <div className="grid gap-3 md:grid-cols-2">
          <input name="order_index" type="number" defaultValue={article.order_index ?? 0} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <label className="flex items-center gap-2"><input type="checkbox" name="is_published" defaultChecked={article.is_published} /> Published</label>
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">Save</button>
          <button formAction={deleteArticle} className="rounded-lg border border-red-500/40 px-4 py-2 text-sm text-red-300">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
