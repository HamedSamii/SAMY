import { Button } from "@/components/ui/Button";

export function KBArticle({ title }: { title: string }) {
  return (
    <article className="grid gap-6 md:grid-cols-[1fr_260px]">
      <div>
        <p className="mb-2 text-xs text-[var(--muted)]">Knowledge Base / Getting Started</p>
        <h1 className="mb-3 text-3xl font-bold">{title}</h1>
        <p className="mb-5 text-sm text-[var(--muted)]">Last updated: May 2026</p>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-7">
          <p>This is placeholder markdown content for the article body. Replace with real guides and docs.</p>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <span>Was this helpful?</span>
          <Button variant="outline">Yes</Button>
          <Button variant="outline">No</Button>
        </div>
      </div>
      <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
        <h4 className="mb-2 font-semibold">Related Articles</h4>
        <ul className="mb-4 space-y-2 text-sm text-[var(--muted)]">
          <li>How to connect WhatsApp</li>
          <li>Using automation rules</li>
          <li>Setting up your first flow</li>
        </ul>
        <Button href="https://app.samy.agency" className="w-full">
          Contact Support
        </Button>
      </aside>
    </article>
  );
}
