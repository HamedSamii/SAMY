const items = [
  "Advanced building blocks",
  "AI-Powered Support",
  "Visual logic",
  "Drag & Drop builder",
  "Powerful automation",
  "Broadcast",
];

export function FlowBuilderVisual() {
  return (
    <section className="space-y-4 py-10">
      <h2 className="text-2xl font-bold">Flow Builder</h2>
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
