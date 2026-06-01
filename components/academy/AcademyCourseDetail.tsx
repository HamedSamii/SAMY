"use client";

import Link from "next/link";
import type { AcademyCourse } from "@/data/courses";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { localizeCourse } from "@/lib/courses-i18n";
import type { Lang } from "@/lib/i18n";
import "@/styles/academy.css";

const uiCopy = {
  en: {
    back: "← All Courses",
    lessons: (n: number) => `${n} lesson${n !== 1 ? "s" : ""}`,
    allFree: "All Free",
    free: "Free",
  },
  ar: {
    back: "→ كل الدورات",
    lessons: (n: number) => `${n} درس`,
    allFree: "كلها مجانية",
    free: "مجاني",
  },
} satisfies Record<Lang, Record<string, unknown>>;

function formatMeta(course: AcademyCourse, lang: Lang): string {
  const t = uiCopy[lang];
  const parts: string[] = [];
  if (course.lessonCount > 0) {
    parts.push(t.lessons(course.lessonCount) as string);
  } else if (course.videoCount) {
    parts.push(course.videoCount);
  }
  if (course.isFree) parts.push(t.allFree as string);
  return parts.join(" · ");
}

export function AcademyCourseDetail({ course: rawCourse }: { course: AcademyCourse }) {
  const { lang } = useLanguage();
  const course = localizeCourse(rawCourse, lang);
  const t = uiCopy[lang];
  let lessonIndex = 0;

  return (
    <div className="academy-course">
      <div className="academy-course-wrap px-4 md:px-10">
        <Link href="/academy" className="academy-course-back">
          {t.back as string}
        </Link>
      </div>

      <header className="academy-course-hero px-4 md:px-10">
        <div className="academy-level-tag">{course.level}</div>
        <h1>{course.title}</h1>
        <p className="academy-course-desc">{course.detailDescription}</p>
      </header>

      <div className="academy-course-wrap px-4 md:px-10">
        {formatMeta(course, lang) ? <p className="academy-course-meta">{formatMeta(course, lang)}</p> : null}

        {course.modules.map((mod) => (
          <section key={mod.id} className="academy-module">
            <h2 className="academy-module-title">{mod.title}</h2>
            {mod.lessons.map((lesson) => {
              lessonIndex += 1;
              return (
                <article key={lesson.id} className="academy-lesson">
                  <div className="academy-lesson-num">{lessonIndex}</div>
                  <div className="academy-lesson-body">
                    <div className="academy-lesson-name">{lesson.title}</div>
                    {lesson.description ? (
                      <div className="academy-lesson-desc">{lesson.description}</div>
                    ) : null}
                    <div className="academy-lesson-meta">
                      {lesson.duration ? (
                        <span className="academy-lesson-dur">{lesson.duration}</span>
                      ) : null}
                      {lesson.isFree ? (
                        <span className="academy-lesson-free">{t.free as string}</span>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ))}
      </div>
    </div>
  );
}
