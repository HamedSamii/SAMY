/**
 * Generates lib/courses-i18n.ts from data/courses.ts + scripts/courses-ar/*.json
 * Run: node scripts/build-courses-i18n.mjs
 */
import fs from "fs";
import path from "path";

const root = process.cwd();
const coursesSrc = fs.readFileSync(path.join(root, "data", "courses.ts"), "utf8");
const match = coursesSrc.match(
  /export const courses[^=]*=\s*(\[[\s\S]*\])\s*as AcademyCourse/
);
if (!match) throw new Error("Could not parse courses from data/courses.ts");
const courses = eval(match[1]);

const arDir = path.join(root, "scripts", "courses-ar");
const overlays = {};

for (const course of courses) {
  const arPath = path.join(arDir, `${course.slug}.json`);
  if (!fs.existsSync(arPath)) {
    throw new Error(`Missing Arabic overlay: ${arPath}`);
  }
  overlays[course.slug] = JSON.parse(fs.readFileSync(arPath, "utf8"));
}

const categoriesPath = path.join(arDir, "_categories.json");
const categoryLabels = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));

function esc(s) {
  return JSON.stringify(s);
}

let out = `import type { Lang } from "@/lib/i18n";
import type { AcademyCourse, CourseCategory } from "@/data/courses";

export const courseCategoryLabelsAr: Record<CourseCategory, string> = ${JSON.stringify(categoryLabels, null, 2)};

const courseOverlaysAr: Record<
  string,
  {
    title: string;
    description: string;
    detailDescription: string;
    level: string;
    modules: Record<
      string,
      { title: string; lessons: Record<string, { title: string; description: string }> }
    >;
  }
> = ${JSON.stringify(overlays, null, 2)};

export function localizeCourse(course: AcademyCourse, lang: Lang): AcademyCourse {
  if (lang === "en") return course;
  const overlay = courseOverlaysAr[course.slug];
  if (!overlay) return course;
  return {
    ...course,
    title: overlay.title,
    description: overlay.description,
    detailDescription: overlay.detailDescription,
    level: overlay.level,
    modules: course.modules.map((mod) => {
      const modOverlay = overlay.modules[mod.id];
      if (!modOverlay) return mod;
      return {
        ...mod,
        title: modOverlay.title,
        lessons: mod.lessons.map((lesson) => {
          const lessonOverlay = modOverlay.lessons[lesson.id];
          if (!lessonOverlay) return lesson;
          return {
            ...lesson,
            title: lessonOverlay.title,
            description: lessonOverlay.description,
          };
        }),
      };
    }),
  };
}
`;

fs.writeFileSync(path.join(root, "lib", "courses-i18n.ts"), out, "utf8");
console.log(`Wrote lib/courses-i18n.ts (${courses.length} courses)`);
