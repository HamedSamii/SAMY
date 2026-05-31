export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex rounded-full border border-[var(--border)] bg-[var(--surface2)] px-3 py-1 font-mono text-xs text-[var(--text)] ${className}`}
    >
      {children}
    </span>
  );
}
