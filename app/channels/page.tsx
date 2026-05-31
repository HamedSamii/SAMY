const channels = [
  ["WhatsApp", "Automate the world's most popular chat app"],
  ["Instagram", "DMs, comments, stories, mentions"],
  ["Facebook Messenger", "Page, ads, comments automation"],
  ["Telegram", "High-quality service via Telegram bots"],
  ["WebChat", "Live chat on your website"],
  ["Email", "Email automation and sequences"],
  ["SMS", "SMS bot for customer experience"],
  ["Voice", "IVR and voice automation"],
  ["Slack", "Internal team automation"],
  ["Viber", "Viber business automation"],
  ["WeChat", "WeChat for business"],
  ["Line", "Line messaging automation"],
];

export default function ChannelsPage() {
  return (
    <div className="space-y-6 py-6">
      <h1 className="text-4xl font-bold">Connect on Every Channel Your Customers Use</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {channels.map(([name, desc]) => (
          <div key={name} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="mb-3 grid h-14 place-items-center rounded bg-[var(--surface2)] text-xs">Logo</div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-[var(--muted)]">{desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid h-12 place-items-center rounded bg-[var(--surface2)] text-xs">
            Integration
          </div>
        ))}
      </div>
    </div>
  );
}
