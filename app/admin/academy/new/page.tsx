import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { MarkdownField } from "@/components/admin/MarkdownField";
import { slugify } from "@/lib/slugify";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default function NewAcademyCoursePage() {
  async function createCourse(formData: FormData) {
    "use server";
    const title_ar = String(formData.get("title_ar") ?? "");
    const title_en = String(formData.get("title_en") ?? "");
    const description_ar = String(formData.get("description_ar") ?? "");
    const description_en = String(formData.get("description_en") ?? "");
    const level = String(formData.get("level") ?? "beginner");
    const order_index = Number(formData.get("order_index") ?? 0);
    const is_published = formData.get("is_published") === "on";
    const slug = slugify(title_en || title_ar);

    if (!supabaseAdmin) redirect("/login");
    await supabaseAdmin.from("academy_courses").insert({
      title_ar,
      title_en,
      description_ar,
      description_en,
      slug,
      level,
      order_index,
      is_published,
    });
    revalidatePath("/admin/academy");
    redirect("/admin/academy");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">New Course</h1>
      <form action={createCourse} className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <input name="title_ar" placeholder="Title AR" className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <input name="title_en" placeholder="Title EN" className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
        </div>
        <MarkdownField arName="description_ar" enName="description_en" />
        <div className="grid gap-3 md:grid-cols-3">
          <select name="level" className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3">
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
          </select>
          <input name="order_index" type="number" defaultValue={0} className="rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" />
          <label className="flex items-center gap-2"><input type="checkbox" name="is_published" /> Published</label>
        </div>
        <button className="rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">Save</button>
      </form>
    </div>
  );
}
