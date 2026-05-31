export function LessonPlayer() {
  return (
    <div className="grid gap-5 md:grid-cols-[1fr_280px]">
      <div className="space-y-4">
        <div className="grid h-72 place-items-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface2)]">
          Video Player Placeholder
        </div>
        <div className="h-2 rounded bg-[var(--surface2)]">
          <div className="h-full w-1/3 rounded bg-[var(--green)]" />
        </div>
      </div>
      <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
        <h4 className="mb-3 font-semibold">Lessons</h4>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          <li>Introduction</li>
          <li>Setup & Basics</li>
          <li>Build & Test</li>
          <li>Publish</li>
        </ul>
      </aside>
    </div>
  );
}
