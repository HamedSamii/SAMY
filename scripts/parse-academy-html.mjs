import fs from "fs";
import path from "path";

const dir = process.argv[2] || "c:\\Users\\Computec\\Downloads\\files (7)";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".html") && f !== "index.html");

function parseCourse(html, filename) {
  const slug = filename.replace(".html", "");
  const levelMatch = html.match(/<div class="level-tag">([^<]+)<\/div>/);
  const h1Match = html.match(/<h1>([^<]+)<\/h1>/);
  const descMatch = html.match(/<div class="desc">([^<]+)<\/div>/);
  const metaMatch = html.match(/<p style="[^"]*">([^<]+)<\/p>/);

  const modules = [];
  const moduleRegex = /<div class="module"><div class="module-title">([^<]+)<\/div>/g;
  const moduleStarts = [];
  let m;
  while ((m = moduleRegex.exec(html)) !== null) {
    moduleStarts.push({ title: m[1], index: m.index });
  }

  for (let i = 0; i < moduleStarts.length; i++) {
    const start = moduleStarts[i].index;
    const end = i + 1 < moduleStarts.length ? moduleStarts[i + 1].index : html.length;
    const chunk = html.slice(start, end);
    const lessons = [];
    const lessonRegex =
      /<div class="lesson-name">([^<]+)<\/div>\s*<div class="lesson-desc">([^<]*)<\/div>\s*<div class="lesson-meta">[\s\S]*?(?:<span class="dur">([^<]*)<\/span>)?/g;
    let lm;
    while ((lm = lessonRegex.exec(chunk)) !== null) {
      lessons.push({
        title: lm[1].trim(),
        description: lm[2].trim(),
        duration: lm[3]?.trim() || null,
      });
    }
    modules.push({ title: moduleStarts[i].title, lessons });
  }

  return {
    slug,
    level: levelMatch?.[1]?.trim() ?? "",
    title: h1Match?.[1]?.trim() ?? "",
    description: descMatch?.[1]?.trim() ?? "",
    meta: metaMatch?.[1]?.trim() ?? null,
    modules,
    lessonCount: modules.reduce((a, mod) => a + mod.lessons.length, 0),
  };
}

const results = [];
for (const f of files.sort()) {
  const html = fs.readFileSync(path.join(dir, f), "utf8");
  results.push(parseCourse(html, f));
}

const indexHtml = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const cardRegex =
  /<a class="card" href="([^"]+\.html)">\s*<div class="card-title">([^<]+)<\/div>\s*<div class="card-desc">([^<]+)<\/div>\s*<div class="card-foot">([\s\S]*?)<\/div>\s*<\/a>/g;
const indexCards = [];
let c;
while ((c = cardRegex.exec(indexHtml)) !== null) {
  const href = c[1];
  const slug = href.replace(".html", "");
  const foot = c[4];
  const videoMatch = foot.match(/tag-vids">([^<]+)</);
  indexCards.push({
    slug,
    title: c[2].trim(),
    description: c[3].trim(),
    videoCount: videoMatch ? videoMatch[1].trim() : null,
  });
}

const catRegex =
  /<section class="cat">[\s\S]*?<span class="cat-name">([^<]+)<\/span>[\s\S]*?<div class="grid">([\s\S]*?)<\/div>\s*<\/section>/g;
const categories = [];
let cat;
while ((cat = catRegex.exec(indexHtml)) !== null) {
  const catName = cat[1].trim();
  const grid = cat[2];
  const slugInGrid = [...grid.matchAll(/href="([^"]+\.html)"/g)].map((x) =>
    x[1].replace(".html", "")
  );
  for (const slug of slugInGrid) {
    categories.push({ slug, category: catName });
  }
}

const categoryBySlug = Object.fromEntries(categories.map((x) => [x.slug, x.category]));
const indexBySlug = Object.fromEntries(indexCards.map((x) => [x.slug, x]));

const merged = results.map((course) => {
  const idx = indexBySlug[course.slug];
  return {
    ...course,
    category: categoryBySlug[course.slug] ?? "Other",
    indexTitle: idx?.title ?? course.title,
    indexDescription: idx?.description ?? course.description,
    videoCount: idx?.videoCount ?? null,
    isFree: true,
  };
});

const outPath = process.argv[3] || path.join(process.cwd(), "scripts", "academy-parsed.json");
fs.writeFileSync(outPath, JSON.stringify({ courses: merged }, null, 2), "utf8");
console.log(`Wrote ${merged.length} courses to ${outPath}`);
merged.forEach((c) => console.log(`  ${c.slug}: ${c.lessonCount} lessons (${c.category})`));
