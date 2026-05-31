export function KBSearch() {
  return (
    <div className="mx-auto max-w-2xl">
      <input
        placeholder="Search articles..."
        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 outline-none focus:border-[var(--purple)]"
      />
    </div>
  );
}
