import Link from "next/link";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function AdminAcademyPage() {
  if (!supabaseAdmin) redirect("/login");
  const { data: courses } = await supabaseAdmin
    .from("academy_courses")
    .select("id,title_ar,title_en,is_published,order_index")
    .order("order_index");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Academy Courses</h1>
        <Link href="/admin/academy/new" className="rounded-lg bg-[var(--purple)] px-4 py-2 text-sm">
          New Course
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
            {(courses ?? []).map((course) => (
              <tr key={course.id} className="border-t border-[var(--border)] bg-[var(--surface)]">
                <td className="p-3">{course.title_en || course.title_ar}</td>
                <td className="p-3">{course.order_index}</td>
                <td className="p-3">
                  <span className={`rounded-full px-2 py-1 text-xs ${course.is_published ? "bg-green-500/20 text-green-300" : "bg-gray-500/20 text-gray-300"}`}>
                    {course.is_published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="p-3">
                  <Link href={`/admin/academy/${course.id}`} className="text-[var(--purple)]">
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
