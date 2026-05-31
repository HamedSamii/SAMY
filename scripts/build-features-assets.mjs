import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath =
  process.env.FEATURES_HTML ||
  path.join("c:", "Users", "Computec", "Downloads", "samy_features_v2.html");

const html = fs.readFileSync(htmlPath, "utf8");

/* ---- CSS ---- */
let css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const rootMatch = css.match(/:root\{([\s\S]*?)\}/);
const cssVars = rootMatch ? rootMatch[1].trim() : "";
css = css.replace(/:root\{[\s\S]*?\}\s*/, "");
/* Only strip top-level html/body resets — avoid matching `.ov-body{` / `-demo-body{` etc. */
css = css.replace(/(^|\n)\s*html\s*\{[^}]*\}/g, "$1");
css = css.replace(/(^|\n)\s*body\s*\{[^}]*\}/g, "$1");
css = css.replace("#bg{", "#feat-bg-canvas {");
css = css.replace("#drag-ghost{", "#feat-drag-ghost {");
css = css.replace(".toast{", "#feat-toast {");
css = css.replace(".toast.show", "#feat-toast.show");
css = css.replace(".toast.success", "#feat-toast.success");

const outCss = `.feat-scope {
  min-height: 100vh;
  ${cssVars}
  background: var(--dark);
  color: var(--text);
  font-family: var(--font-body);
  overflow-x: hidden;
}
@scope (.feat-scope) {
${css}
}
`;

fs.writeFileSync(path.join(__dirname, "..", "styles", "features-landing.css"), outCss);

/* ---- JS ---- */
let js = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// Drop background canvas loop (handled in React).
js = js.replace(/\/\/ ── BG ──[\s\S]*?bDraw\(\);\s*/, "");

js = js.replaceAll("document.getElementById('overlay')", "document.getElementById('feat-overlay')");
js = js.replaceAll("document.getElementById('overlay-content')", "document.getElementById('feat-overlay-content')");
js = js.replaceAll("document.getElementById('drag-ghost')", "document.getElementById('feat-drag-ghost')");
js = js.replaceAll("document.getElementById('toast')", "document.getElementById('feat-toast')");

js = js.replace(
  "function openOverlay(){overlay.classList.add('open');document.body.style.overflow='hidden';}",
  "function openOverlay(){ if(!overlay) return; overlay.classList.add('open'); document.body.style.overflow='hidden'; }",
);
js = js.replace(
  "function closeOverlay(){overlay.classList.remove('open');document.body.style.overflow='';resetBuilder();}",
  "function closeOverlay(){ if(overlay) overlay.classList.remove('open'); document.body.style.overflow=''; resetBuilder(); }",
);

js = js.replace(
  "function filterCat(cat,el){",
  "function filterCat(cat,el){ const root=document.getElementById('feat-page-root'); if(!root||!el)return;",
);
js = js.replace("document.querySelectorAll('.cat-pill')", "root.querySelectorAll('.cat-pill')");
js = js.replace("document.querySelectorAll('.b-card')", "root.querySelectorAll('.b-card')");

// Scoped fade observer
js = js.replace(
  "// ── SCROLL ──\nconst obs=new IntersectionObserver(e=>e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('vis');}),{threshold:.1});\ndocument.querySelectorAll('.fu').forEach(el=>obs.observe(el));\nsetTimeout(()=>document.querySelectorAll('.fu').forEach(el=>el.classList.add('vis')),80);",
  `// ── SCROLL ──
const featRoot=document.getElementById('feat-page-root');
if(featRoot){
  const obs=new IntersectionObserver(e=>e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('vis');}),{threshold:.1});
  featRoot.querySelectorAll('.fu').forEach(el=>obs.observe(el));
  setTimeout(()=>featRoot.querySelectorAll('.fu').forEach(el=>el.classList.add('vis')),80);
}`,
);

js = js.replace(
  "function showToast(msg,ok){const t=document.getElementById('feat-toast');t.textContent=msg;",
  "function showToast(msg,ok){const t=document.getElementById('feat-toast');if(!t)return;t.textContent=msg;",
);

fs.writeFileSync(path.join(__dirname, "..", "public", "samy-features-v2.js"), js);
console.log("Wrote styles/features-landing.css and public/samy-features-v2.js");
