"use client";

const names = [
  "Aisha - UAE",
  "Fahad - Saudi",
  "Mariam - Egypt",
  "Noura - Kuwait",
  "Hamad - Bahrain",
  "Youssef - Egypt",
  "Reem - Saudi",
  "Omar - UAE",
];

export function Testimonials() {
  return (
    <section className="space-y-4 py-10">
      <h2 className="text-2xl font-bold">Testimonials</h2>
      <div className="grid gap-4 md:grid-cols-4">
        {names.map((name) => (
          <div key={name} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm">
            <p className="mb-2 text-[var(--muted)]">&ldquo;Samy transformed our customer response speed.&rdquo;</p>
            <p className="font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
