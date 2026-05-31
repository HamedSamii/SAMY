import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { CASE_COVER_IMAGES } from "./case-cover-images.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/cases/covers");

fs.mkdirSync(outDir, { recursive: true });

for (const [id, url] of Object.entries(CASE_COVER_IMAGES)) {
  const dest = path.join(outDir, `${id}.jpg`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 10_000) {
    console.log("skip", id);
    continue;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${id}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("saved", id);
}

console.log("Done:", Object.keys(CASE_COVER_IMAGES).length, "covers in", outDir);
