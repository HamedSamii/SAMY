import fs from "fs";
import path from "path";

const parsed = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "scripts", "academy-parsed.json"), "utf8")
);

const EXCLUDED_CATEGORIES = ["Partner"];
const filteredParsed = parsed.courses.filter((c) => !EXCLUDED_CATEGORIES.includes(c.category));
const categories = [...new Set(filteredParsed.map((c) => c.category))];

function cleanMeta(meta) {
  if (!meta) return null;
  return meta.replace(/&nbsp;/g, " ").trim();
}

const courses = filteredParsed.map((c) => ({
  slug: c.slug,
  title: c.indexTitle || c.title,
  description: c.indexDescription || c.description,
  detailDescription: c.description,
  category: c.category,
  level: c.level,
  videoCount: c.videoCount,
  lessonCount: c.lessonCount,
  isFree: true,
  modules: c.modules.map((mod, mi) => ({
    id: `m${mi + 1}`,
    title: mod.title,
    lessons: mod.lessons.map((les, li) => ({
      id: `l${mi + 1}-${li + 1}`,
      title: les.title,
      description: les.description,
      duration: les.duration,
      isFree: true,
    })),
  })),
}));

const ts = `/* Auto-generated from Samy Academy HTML — do not edit by hand; re-run scripts/parse-academy-html.mjs */
export type CourseCategory =
${categories.map((c) => `  | ${JSON.stringify(c)}`).join("\n")};

export type AcademyLesson = {
  id: string;
  title: string;
  description: string;
  duration: string | null;
  isFree: boolean;
};

export type AcademyModule = {
  id: string;
  title: string;
  lessons: AcademyLesson[];
};

export type AcademyCourse = {
  slug: string;
  title: string;
  description: string;
  detailDescription: string;
  category: CourseCategory;
  level: string;
  videoCount: string | null;
  lessonCount: number;
  isFree: boolean;
  modules: AcademyModule[];
};

export const COURSE_CATEGORIES: CourseCategory[] = ${JSON.stringify(categories, null, 2)};

export const courses: AcademyCourse[] = ${JSON.stringify(courses, null, 2)} as AcademyCourse[];

export function getCourseBySlug(slug: string): AcademyCourse | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(category: CourseCategory | "All"): AcademyCourse[] {
  if (category === "All") return courses;
  return courses.filter((c) => c.category === category);
}
`;

const out = path.join(process.cwd(), "data", "courses.ts");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, ts, "utf8");
console.log(`Wrote ${courses.length} courses to ${out}`);
