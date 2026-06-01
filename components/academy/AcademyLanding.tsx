"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  COURSE_CATEGORIES,
  courses,
  type AcademyCourse,
  type CourseCategory,
} from "@/data/courses";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getAcademyPageCopy } from "@/lib/marketing-pages-copy";
import { getCourseCategoryLabel, localizeCourse } from "@/lib/courses-i18n";
import { arrow } from "@/lib/locale";

import "@/styles/academy.css";

type FilterKey = "All" | CourseCategory;

function matchesSearch(course: AcademyCourse, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return (
    course.title.toLowerCase().includes(q) ||
    course.description.toLowerCase().includes(q) ||
    course.category.toLowerCase().includes(q) ||
    course.level.toLowerCase().includes(q)
  );
}

function CourseCard({
  course: rawCourse,
  copy,
}: {
  course: AcademyCourse;
  copy: ReturnType<typeof getAcademyPageCopy>;
}) {
  const { lang } = useLanguage();
  const course = localizeCourse(rawCourse, lang);
  let countLabel: string | null = null;
  if (course.videoCount) countLabel = course.videoCount;
  else if (course.lessonCount > 0) countLabel = copy.lessonCount(course.lessonCount);

  return (
    <Link href={`/academy/${course.slug}`} className="academy-card">
      <div className="academy-card-title">{course.title}</div>
      <div className="academy-card-desc">{course.description}</div>
      <div className="academy-card-foot">
        {countLabel ? <span className="academy-tag-vids">{countLabel}</span> : null}
        {course.isFree ? <span className="academy-tag-free">{copy.free}</span> : null}
        <span className="academy-card-arrow" aria-hidden>
          {arrow(lang, "forward")}
        </span>
      </div>
    </Link>
  );
}

export function AcademyLanding() {
  const { lang } = useLanguage();
  const copy = getAcademyPageCopy(lang);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FilterKey>("All");

  const localizedCourses = useMemo(
    () => courses.map((c) => localizeCourse(c, lang)),
    [lang],
  );

  const filtered = useMemo(() => {
    return localizedCourses.filter(
      (course) =>
        (category === "All" || course.category === category) && matchesSearch(course, query),
    );
  }, [category, query, localizedCourses]);

  const grouped = useMemo(() => {
    if (category !== "All") {
      return [{ name: getCourseCategoryLabel(category, lang), items: filtered }];
    }
    return COURSE_CATEGORIES.map((cat) => ({
      name: getCourseCategoryLabel(cat, lang),
      items: filtered.filter((c) => c.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [category, filtered, lang]);

  const filters: FilterKey[] = ["All", ...COURSE_CATEGORIES];

  return (
    <div className="academy-page">
      <section className="academy-hero">
        <div className="academy-badge">{copy.badge}</div>
        <h1>
          {copy.titleLine1}
          <em>{copy.titleEm}</em>
          <br />
          {copy.titleLine2}
        </h1>
        <p>{copy.sub}</p>
      </section>

      <div className="academy-toolbar">
        <input
          type="search"
          className="academy-search"
          placeholder={copy.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={copy.searchPlaceholder}
        />
        <div className="academy-filters" role="tablist" aria-label={copy.searchPlaceholder}>
          {filters.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={category === key}
              className={`academy-filter-btn${category === key ? " is-active" : ""}`}
              onClick={() => setCategory(key)}
            >
              {key === "All" ? copy.allCourses : getCourseCategoryLabel(key, lang)}
            </button>
          ))}
        </div>
      </div>

      <div className="academy-wrap">
        {filtered.length === 0 ? (
          <p className="academy-empty">{copy.empty}</p>
        ) : (
          grouped.map((group) => (
            <section key={group.name} className="academy-cat">
              <div className="academy-cat-head">
                <span className="academy-cat-tag">{copy.levelTag}</span>
                <span className="academy-cat-name">{group.name}</span>
                <span className="academy-cat-count">{copy.courseCount(group.items.length)}</span>
              </div>
              <div className="academy-grid">
                {group.items.map((course) => (
                  <CourseCard key={course.slug} course={course} copy={copy} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
