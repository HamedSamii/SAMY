import Link from "next/link";

const sections = [
  { title: "Dashboard", href: "/admin" },
  { title: "Academy Courses", href: "/admin/academy" },
  { title: "New Course", href: "/admin/academy/new" },
  { title: "Knowledge Base", href: "/admin/knowledge-base" },
  { title: "New Article", href: "/admin/knowledge-base/new" },
  { title: "Settings", href: "/admin/settings" },
];

export function AdminSidebar() {
  return (
    <aside className="fixed inset-y-0 right-0 w-64 border-l border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="mb-5 rounded bg-[var(--green)] px-3 py-1 font-mono font-bold text-black">SAMY ADMIN</div>
      <nav className="space-y-2 text-sm">
        {sections.map((link) => (
          <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-2 hover:bg-[var(--surface2)]">
            {link.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
