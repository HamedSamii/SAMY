import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { MarkdownField } from "@/components/admin/MarkdownField";
import { slugify } from "@/lib/slugify";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function EditLessonPage({
  params,
}: {
  params: Promise<{ id: string; lessonId: string }>;
}) {
  if (!supabaseAdmin) redirect("/login");
  const { id, lessonId } = await params;
  const { data: lesson } = await supabaseAdmin
    .from("academy_lessons")
    .select("*")
    .eq("id", lessonId)
    .single();

  if (!lesson) notFound();

  async function updateLesson(formData: FormData) {
    "use server";
    const title_ar = String(formData.get("title_ar") ?? "");
    const title_en = String(formData.get("title_en") ?? "");
    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin
      .from("academy_lessons")
      .update({
        title_ar,
        title_en,
        slug: slugify(title_en || title_ar),
        content_ar: String(formData.get("content_ar") ?? ""),
        content_en: String(formData.get("content_en") ?? ""),
        video_url: String(formData.get("video_url") ?? ""),
        duration_minutes: Number(formData.get("duration_minutes") ?? 0),
        order_index: Number(formData.get("order_index") ?? 0),
        is_published: formData.get("is_published") === "on",
      })
      .eq("id", lessonId);
    revalidatePath(`/admin/academy/${id}`);
    redirect(`/admin/academy/${id}`);
  }

  async function deleteLesson() {
    "use server";
    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin.from("academy_lessons").delete().eq("id", lessonId);
    revalidatePath(`/admin/academy/${id}`);
    redirect(`/admin/academy/${id}`);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Edit Lesson</h1>
      <form action={updateLesson} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <input name="title_ar" defaultValue={lesson.title_ar} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="title_en" defaultValue={lesson.title_en} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
        </div>
        <MarkdownField arName="content_ar" enName="content_en" arValue={lesson.content_ar ?? ""} enValue={lesson.content_en ?? ""} />
        <div className="grid gap-3 md:grid-cols-3">
          <input name="video_url" defaultValue={lesson.video_url ?? ""} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="duration_minutes" type="number" defaultValue={lesson.duration_minutes ?? 0} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="order_index" type="number" defaultValue={lesson.order_index ?? 0} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
        </div>
        <label className="flex items-center gap-2"><input type="checkbox" name="is_published" defaultChecked={lesson.is_published} /> Published</label>
        <div className="flex gap-3">
          <button className="rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">Save</button>
          <button formAction={deleteLesson} className="rounded-lg border border-red-500/40 px-4 py-2 text-sm text-red-300">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
