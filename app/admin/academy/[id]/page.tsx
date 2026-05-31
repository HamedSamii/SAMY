import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { MarkdownField } from "@/components/admin/MarkdownField";
import { slugify } from "@/lib/slugify";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  if (!supabaseAdmin) redirect("/login");
  const { id } = await params;
  const { data: course } = await supabaseAdmin.from("academy_courses").select("*").eq("id", id).single();
  if (!course) notFound();

  const { data: lessons } = await supabaseAdmin
    .from("academy_lessons")
    .select("id,title_ar,title_en,is_published,order_index")
    .eq("course_id", id)
    .order("order_index");

  async function updateCourse(formData: FormData) {
    "use server";
    const title_ar = String(formData.get("title_ar") ?? "");
    const title_en = String(formData.get("title_en") ?? "");
    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin
      .from("academy_courses")
      .update({
        title_ar,
        title_en,
        description_ar: String(formData.get("description_ar") ?? ""),
        description_en: String(formData.get("description_en") ?? ""),
        slug: slugify(title_en || title_ar),
        level: String(formData.get("level") ?? "beginner"),
        order_index: Number(formData.get("order_index") ?? 0),
        is_published: formData.get("is_published") === "on",
      })
      .eq("id", id);
    revalidatePath("/admin/academy");
    revalidatePath("/academy");
    redirect("/admin/academy");
  }

  async function deleteCourse() {
    "use server";
    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin.from("academy_courses").delete().eq("id", id);
    revalidatePath("/admin/academy");
    redirect("/admin/academy");
  }

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Edit Course</h1>
      <form action={updateCourse} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <input name="title_ar" defaultValue={course.title_ar} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="title_en" defaultValue={course.title_en} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
        </div>
        <MarkdownField
          arName="description_ar"
          enName="description_en"
          arValue={course.description_ar ?? ""}
          enValue={course.description_en ?? ""}
        />
        <div className="grid gap-3 md:grid-cols-3">
          <select name="level" defaultValue={course.level} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3">
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
          </select>
          <input name="order_index" type="number" defaultValue={course.order_index} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <label className="flex items-center gap-2"><input type="checkbox" name="is_published" defaultChecked={course.is_published} /> Published</label>
        </div>
        <div className="flex gap-3">
          <button className="rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">Save</button>
          <button formAction={deleteCourse} className="rounded-lg border border-red-500/40 px-4 py-2 text-sm text-red-300">
            Delete
          </button>
        </div>
      </form>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Lessons</h2>
          <Link href={`/admin/academy/${id}/lessons/new`} className="rounded-lg bg-[var(--green)] px-3 py-1 text-sm text-black">
            New Lesson
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          {(lessons ?? []).map((lesson) => (
            <Link key={lesson.id} href={`/admin/academy/${id}/lessons/${lesson.id}`} className="flex items-center justify-between rounded-lg bg-[var(--surface2)] p-3">
              <span>{lesson.title_en || lesson.title_ar}</span>
              <span className={lesson.is_published ? "text-green-300" : "text-gray-400"}>{lesson.is_published ? "Published" : "Draft"}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
