export default function BuildAgentPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-4xl font-bold">Build Your AI Agent in Minutes</h1>
      <p className="text-[var(--muted)]">No coding required. Choose your industry, customize your bot, go live.</p>
      <section className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">Step 1 — Choose Industry</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {["E-commerce", "Real Estate", "Restaurant", "Education", "Healthcare", "Other"].map((i) => (
            <button key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm">{i}</button>
          ))}
        </div>
      </section>
      <section className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">Step 2 — Configure</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3" placeholder="Bot name" />
          <select className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3"><option>Primary channel</option><option>WhatsApp</option><option>Instagram</option></select>
          <select className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3"><option>Language</option><option>Arabic</option><option>English</option><option>Both</option></select>
          <select className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3"><option>Tone</option><option>Professional</option><option>Friendly</option><option>Formal</option></select>
        </div>
      </section>
      <section className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h2 className="text-2xl font-semibold">Step 3 — Preview & Launch</h2>
        <div className="grid h-48 place-items-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface2)]">Chat preview mockup</div>
        <a href="https://app.samy.agency" className="inline-flex rounded-xl bg-[var(--purple)] px-5 py-2.5 text-sm">Connect to app.samy.agency</a>
      </section>
    </div>
  );
}
