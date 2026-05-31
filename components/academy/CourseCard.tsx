import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function CourseCard({ title, category, duration, level, slug }: { title: string; category: string; duration: string; level: string; slug: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="mb-3 grid h-28 place-items-center rounded-xl bg-gradient-to-br from-[var(--purple)]/30 to-[var(--green)]/30">
        Thumbnail
      </div>
      <div className="mb-2 flex gap-2">
        <Badge>{category}</Badge>
        <Badge>{level}</Badge>
      </div>
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="mb-3 text-xs text-[var(--muted)]">{duration}</p>
      <Link href={`/academy/${slug}`} className="text-sm text-[var(--green)]">
        Start Course
      </Link>
    </div>
  );
}
