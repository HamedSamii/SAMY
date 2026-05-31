"use client";

type Feature = {
  name: string;
  description: string;
  points: string[];
  accent: string;
};

export function FeatureOverlay({ feature, onClose }: { feature: Feature | null; onClose: () => void }) {
  if (!feature) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/70 p-4">
      <div className="mx-auto grid h-full max-w-6xl gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:grid-cols-2">
        <div>
          <button onClick={onClose} className="mb-4 text-sm text-[var(--muted)]">
            Close ✕
          </button>
          <h3 className="text-3xl font-bold" style={{ color: feature.accent }}>
            {feature.name}
          </h3>
          <p className="mt-3 text-[var(--muted)]">{feature.description}</p>
          <ul className="mt-4 list-disc space-y-2 ps-5 text-sm">
            {feature.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="grid place-items-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface2)]">
          Large Image / Video Placeholder
        </div>
      </div>
    </div>
  );
}
