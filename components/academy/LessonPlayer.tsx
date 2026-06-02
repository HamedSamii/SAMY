export function LessonPlayer() {
  return (
    <div className="mkt-grid-2 grid grid-cols-[minmax(0,1fr)_minmax(0,88px)] gap-3 md:grid-cols-[minmax(0,1fr)_280px]">
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
