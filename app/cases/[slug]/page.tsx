import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/cases/CaseStudyDetail";
import { getAllCaseIds, getCaseById } from "@/lib/cases-index-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseIds().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseById(slug);
  if (!study) return { title: "Case study | Samy" };

  return {
    title: `${study.listTitle} | Samy`,
    description: study.listExcerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseById(slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
