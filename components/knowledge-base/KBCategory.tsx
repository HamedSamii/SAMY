export function KBCategory({ icon, title, count }: { icon: string; title: string; count: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <p className="text-xl">{icon}</p>
      <h3 className="mt-1 font-semibold">{title}</h3>
      <p className="text-xs text-[var(--muted)]">{count}</p>
    </div>
  );
}
