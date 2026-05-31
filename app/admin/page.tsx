import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/admin/academy" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          Manage Academy
        </Link>
        <Link href="/admin/knowledge-base" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
          Manage Knowledge Base
        </Link>
      </div>
    </div>
  );
}
