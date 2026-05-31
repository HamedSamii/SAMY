const industries = ["E-commerce", "Real Estate", "Restaurants & Food", "Education", "Healthcare", "Travel & Tourism", "Finance"];

export default function IndustriesPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-4xl font-bold">Built for Your Industry</h1>
      <div className="flex flex-wrap gap-2">
        {industries.map((i) => (
          <span key={i} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm">{i}</span>
        ))}
      </div>
      <div className="grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-2">
        <div className="grid h-56 place-items-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface2)]">Chat Demo Mockup</div>
        <div>
          <h2 className="mb-3 text-xl font-semibold">Key Use Cases</h2>
          <ul className="list-disc space-y-2 ps-5 text-sm text-[var(--muted)]">
            <li>Lead qualification and routing</li>
            <li>Automated follow-up sequences</li>
            <li>Appointment and order handling</li>
          </ul>
          <button className="mt-4 rounded-xl bg-[var(--purple)] px-4 py-2 text-sm">Try This Demo</button>
        </div>
      </div>
    </div>
  );
}
