/**
 * Syncs brand logos from simple-icons + vectorlogo.zone + worldvectorlogo
 * Run: node scripts/sync-integration-logos.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as simpleIcons from "simple-icons";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/integrations/logos");

const skipFiles = new Set(["gohighlevel.png", "webhook.png"]);

const fromSimpleIcons = {
  "claude.svg": "anthropic",
  "google-gemini.svg": "googlegemini",
  "deepseek.svg": "deepseek",
  "xai.svg": "x",
  "dialogflow.svg": "dialogflow",
  "coze.svg": "coze",
  "shopify.svg": "shopify",
  "woocommerce.svg": "woocommerce",
  "facebook-catalog.svg": "facebook",
  "facebook-business.svg": "facebook",
  "facebook-ads.svg": "facebook",
  "gmail.svg": "gmail",
  "mailchimp.svg": "mailchimp",
  "stripe.svg": "stripe",
  "paypal.svg": "paypal",
  "google-maps.svg": "googlemaps",
  "mapbox.svg": "mapbox",
  "calendly.svg": "calendly",
  "cal-com.svg": "caldotcom",
  "google-sheets.svg": "googlesheets",
  "mongodb.svg": "mongodb",
  "mysql.svg": "mysql",
  "postgresql.svg": "postgresql",
  "cloudinary.svg": "cloudinary",
  "zapier.svg": "zapier",
  "make.svg": "make",
  "intercom.svg": "intercom",
  "chatwoot.svg": "chatwoot",
  "google-tag-manager.svg": "googletagmanager",
  "meta.svg": "meta",
  "elevenlabs.svg": "elevenlabs",
  "google-my-business.svg": "google",
};

const fromWorldVectorLogo = {
  "openai.svg": "openai-2.svg",
  "front.svg": "front.svg",
  "dialpad.svg": "dialpad.svg",
  "messagemedia.svg": "message-media.svg",
};

const fromVectorLogo = {
  "twilio.svg": "twilio/twilio-icon.svg",
  "slack.svg": "slack/slack-icon.svg",
  "sendgrid.svg": "sendgrid/sendgrid-icon.svg",
  "freshchat.svg": "freshdesk/freshdesk-icon.svg",
  "drift.svg": "drift/drift-icon.svg",
  "s3-storage.svg": "amazon_aws/amazon_aws-icon.svg",
};

const manualSvgs = {
  "groq.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><path fill="#F55036" d="M10 32V16h4.5l5.5 9.5V16H24v16h-4.5L14 22.5V32H10zm14 0V16h8.5c3.5 0 6 2.2 6 5.5S36 27 32.5 27H28v5h-4V32zm4-8.5h3c1.2 0 2-.6 2-1.5s-.8-1.5-2-1.5h-3v3z"/></svg>`,
  "signalwire.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><path fill="#0066FF" d="M10 34V14h6l8 12V14h6v20h-6L16 22v12h-6z"/><path fill="#FF006B" d="M30 14h8v4h-4v4h4v4h-4v4h4v4h-8V14z"/></svg>`,
  "telnyx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><path fill="#00E3AA" d="M24 8L8 38h32L24 8zm0 10l8 16H16l8-16z"/></svg>`,
  "vudu-mobile.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><path fill="#E31937" d="M24 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z"/></svg>`,
  "asmsc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#1A237E"/><text x="24" y="30" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="22" font-weight="700">a</text></svg>`,
  "pabbly.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><circle cx="24" cy="24" r="16" fill="#20B276"/><text x="24" y="30" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="20" font-weight="700">P</text></svg>`,
  "integrately.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><circle cx="24" cy="24" r="14" fill="#FF6B00"/><path fill="#fff" d="M18 22h12v4H18z"/><path fill="#fff" d="M22 18v12h4V18z"/></svg>`,
  "jivochat.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><circle cx="24" cy="24" r="16" fill="#2D2D59"/><text x="24" y="30" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="20" font-weight="700">j</text></svg>`,
  "videosdk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><circle cx="24" cy="24" r="16" fill="url(#vsdk)"/><defs><linearGradient id="vsdk" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#FFD93D"/></linearGradient></defs><path fill="#fff" d="M20 18l12 6-12 6V18z"/></svg>`,
  "smtp.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><rect x="10" y="14" width="28" height="20" rx="3" fill="#4A9EE0"/><path fill="#fff" d="M10 17l14 10 14-10" stroke="#fff" stroke-width="2" fill-opacity="0"/></svg>`,
  "phone-numbers.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><path fill="#7F77DD" d="M16 12h16c2 0 4 2 4 4v16c0 2-2 4-4 4H16c-2 0-4-2-4-4V16c0-2 2-4 4-4zm8 22a3 3 0 100-6 3 3 0 000 6z"/></svg>`,
  "au-property-report.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#fff"/><circle cx="24" cy="24" r="16" fill="#1D9E75"/><path fill="#fff" d="M24 14l-10 8v12h7v-8h6v8h7V22l-10-8z"/></svg>`,
};

async function fetchWorldVectorLogo(filename) {
  const url = `https://cdn.worldvectorlogo.com/logos/${filename}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.text();
}

async function fetchVectorLogo(relativePath) {
  const url = `https://www.vectorlogo.zone/logos/${relativePath}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.text();
}

function slugToKey(slug) {
  return `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
}

function coloredSvgFromSimpleIcons(slug) {
  const icon = simpleIcons[slugToKey(slug)];
  if (!icon) throw new Error(`simple-icons export missing: ${slug}`);
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
}

function writeSimpleIcon(slug, dest) {
  fs.writeFileSync(dest, coloredSvgFromSimpleIcons(slug));
}

fs.mkdirSync(outDir, { recursive: true });

for (const [filename, slug] of Object.entries(fromSimpleIcons)) {
  if (skipFiles.has(filename)) continue;
  try {
    writeSimpleIcon(slug, path.join(outDir, filename));
    console.log(`✓ ${filename} ← simple-icons/${slug}`);
  } catch (e) {
    console.log(`✗ ${filename}: ${e.message}`);
  }
}

for (const [filename, wfile] of Object.entries(fromWorldVectorLogo)) {
  if (skipFiles.has(filename)) continue;
  try {
    const svg = await fetchWorldVectorLogo(wfile);
    fs.writeFileSync(path.join(outDir, filename), svg);
    console.log(`✓ ${filename} ← worldvectorlogo`);
  } catch (e) {
    console.log(`✗ ${filename}: ${e.message}`);
  }
}

for (const [filename, vpath] of Object.entries(fromVectorLogo)) {
  if (skipFiles.has(filename)) continue;
  try {
    const svg = await fetchVectorLogo(vpath);
    fs.writeFileSync(path.join(outDir, filename), svg);
    console.log(`✓ ${filename} ← vectorlogo.zone`);
  } catch (e) {
    console.log(`✗ ${filename}: ${e.message}`);
  }
}

for (const [filename, svg] of Object.entries(manualSvgs)) {
  if (skipFiles.has(filename)) continue;
  fs.writeFileSync(path.join(outDir, filename), svg);
  console.log(`◦ ${filename} (manual)`);
}
