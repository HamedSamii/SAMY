import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon || (!url.startsWith("http://") && !url.startsWith("https://"))) {
    redirect("/login");
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(
    url,
    anon,
    { cookies: { getAll: () => cookieStore.getAll() } },
  );
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F0EFF8]">
      <AdminSidebar />
      <main className="mr-64 p-8">{children}</main>
    </div>
  );
}
