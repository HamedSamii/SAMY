"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  COURSE_CATEGORIES,
  courses,
  type AcademyCourse,
  type CourseCategory,
} from "@/data/courses";

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

function lessonLabel(course: AcademyCourse): string | null {
  if (course.videoCount) return course.videoCount;
  if (course.lessonCount > 0) {
    return `${course.lessonCount} lesson${course.lessonCount !== 1 ? "s" : ""}`;
  }
  return null;
}

function CourseCard({ course }: { course: AcademyCourse }) {
  const countLabel = lessonLabel(course);

  return (
    <Link href={`/academy/${course.slug}`} className="academy-card">
      <div className="academy-card-title">{course.title}</div>
      <div className="academy-card-desc">{course.description}</div>
      <div className="academy-card-foot">
        {countLabel ? <span className="academy-tag-vids">{countLabel}</span> : null}
        {course.isFree ? <span className="academy-tag-free">Free</span> : null}
        <span className="academy-card-arrow" aria-hidden>
          →
        </span>
      </div>
    </Link>
  );
}

export function AcademyLanding() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FilterKey>("All");

  const filtered = useMemo(() => {
    return courses.filter(
      (course) =>
        (category === "All" || course.category === category) && matchesSearch(course, query),
    );
  }, [category, query]);

  const grouped = useMemo(() => {
    if (category !== "All") {
      return [{ name: category, items: filtered }];
    }
    return COURSE_CATEGORIES.map((cat) => ({
      name: cat,
      items: filtered.filter((c) => c.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [category, filtered]);

  const filters: FilterKey[] = ["All", ...COURSE_CATEGORIES];

  return (
    <div className="academy-page">
      <section className="academy-hero">
        <div className="academy-badge">Samy Training Hub</div>
        <h1>
          Learn <em>Samy</em> from Scratch
          <br />
          to Advanced
        </h1>
        <p>
          Free hands-on courses covering chatbot automation, AI agents, omnichannel integrations, and
          everything in between.
        </p>
      </section>

      <div className="academy-toolbar">
        <input
          type="search"
          className="academy-search"
          placeholder="Search courses…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search courses"
        />
        <div className="academy-filters" role="tablist" aria-label="Course categories">
          {filters.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={category === key}
              className={`academy-filter-btn${category === key ? " is-active" : ""}`}
              onClick={() => setCategory(key)}
            >
              {key === "All" ? "All Courses" : key}
            </button>
          ))}
        </div>
      </div>

      <div className="academy-wrap">
        {filtered.length === 0 ? (
          <p className="academy-empty">No courses match your search. Try a different keyword or category.</p>
        ) : (
          grouped.map((group) => (
            <section key={group.name} className="academy-cat">
              <div className="academy-cat-head">
                <span className="academy-cat-tag">Level</span>
                <span className="academy-cat-name">{group.name}</span>
                <span className="academy-cat-count">
                  {group.items.length} Course{group.items.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="academy-grid">
                {group.items.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
