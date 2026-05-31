import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { MarkdownField } from "@/components/admin/MarkdownField";
import { slugify } from "@/lib/slugify";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function NewLessonPage({ params }: { params: Promise<{ id: string }> }) {
  if (!supabaseAdmin) redirect("/login");
  const { id } = await params;

  async function createLesson(formData: FormData) {
    "use server";
    const title_ar = String(formData.get("title_ar") ?? "");
    const title_en = String(formData.get("title_en") ?? "");
    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin.from("academy_lessons").insert({
      course_id: id,
      title_ar,
      title_en,
      slug: slugify(title_en || title_ar),
      content_ar: String(formData.get("content_ar") ?? ""),
      content_en: String(formData.get("content_en") ?? ""),
      video_url: String(formData.get("video_url") ?? ""),
      duration_minutes: Number(formData.get("duration_minutes") ?? 0),
      order_index: Number(formData.get("order_index") ?? 0),
      is_published: formData.get("is_published") === "on",
    });
    revalidatePath(`/admin/academy/${id}`);
    redirect(`/admin/academy/${id}`);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">New Lesson</h1>
      <form action={createLesson} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <input name="title_ar" placeholder="Title AR" className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="title_en" placeholder="Title EN" className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
        </div>
        <MarkdownField arName="content_ar" enName="content_en" />
        <div className="grid gap-3 md:grid-cols-3">
          <input name="video_url" placeholder="Video URL" className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="duration_minutes" type="number" defaultValue={0} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="order_index" type="number" defaultValue={0} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
        </div>
        <label className="flex items-center gap-2"><input type="checkbox" name="is_published" /> Published</label>
        <button className="rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">Save</button>
      </form>
    </div>
  );
}
