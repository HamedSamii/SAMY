import { Card } from "@/components/ui/Card";

const features = [
  ["AI Hub", "Multiple AI agents, functions, MCP"],
  ["Flow Builder", "Drag & drop, no code"],
  ["Omni Channel", "12+ channels in one inbox"],
  ["Live Chat", "Human handoff, team inbox"],
  ["CRM & Tickets", "Pipeline, lead management"],
  ["Analytics", "Real-time dashboards"],
];

export function FeaturesOverview() {
  return (
    <section className="space-y-4 py-10">
      <h2 className="text-2xl font-bold">Features Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map(([title, desc]) => (
          <Card key={title}>
            <h3 className="mb-2 font-semibold">{title}</h3>
            <p className="mb-3 text-sm text-[var(--muted)]">{desc}</p>
            <div className="grid h-24 place-items-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface2)] text-xs">
              Video Placeholder
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
