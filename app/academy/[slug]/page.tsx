import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AcademyCourseDetail } from "@/components/academy/AcademyCourseDetail";
import { courses, getCourseBySlug } from "@/data/courses";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course | Samy Academy" };
  return {
    title: `${course.title} | Samy Academy`,
    description: course.description,
  };
}

export default async function AcademyCoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return <AcademyCourseDetail course={course} />;
}
