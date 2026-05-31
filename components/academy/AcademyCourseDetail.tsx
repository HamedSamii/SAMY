import Link from "next/link";
import type { AcademyCourse } from "@/data/courses";

import "@/styles/academy.css";

function formatMeta(course: AcademyCourse): string {
  const parts: string[] = [];
  if (course.lessonCount > 0) {
    parts.push(`${course.lessonCount} lesson${course.lessonCount !== 1 ? "s" : ""}`);
  } else if (course.videoCount) {
    parts.push(course.videoCount);
  }
  if (course.isFree) parts.push("All Free");
  return parts.join(" · ");
}

export function AcademyCourseDetail({ course }: { course: AcademyCourse }) {
  let lessonIndex = 0;

  return (
    <div className="academy-course">
      <div className="academy-course-wrap px-4 md:px-10">
        <Link href="/academy" className="academy-course-back">
          ← All Courses
        </Link>
      </div>

      <header className="academy-course-hero px-4 md:px-10">
        <div className="academy-level-tag">{course.level}</div>
        <h1>{course.title}</h1>
        <p className="academy-course-desc">{course.detailDescription}</p>
      </header>

      <div className="academy-course-wrap px-4 md:px-10">
        {formatMeta(course) ? <p className="academy-course-meta">{formatMeta(course)}</p> : null}

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
                      {lesson.isFree ? <span className="academy-lesson-free">Free</span> : null}
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
