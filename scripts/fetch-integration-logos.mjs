import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as simpleIcons from "simple-icons";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/integrations/logos");

const logoMap = {
  "openai.svg": "siOpenai",
  "claude.svg": null,
  "google-gemini.svg": "siGooglegemini",
  "deepseek.svg": null,
  "xai.svg": null,
  "dialogflow.svg": "siGooglecloud",
  "coze.svg": null,
  "twilio.svg": null,
  "signalwire.svg": null,
  "telnyx.svg": null,
  "messagemedia.svg": null,
  "vudu-mobile.svg": null,
  "dialpad.svg": null,
  "shopify.svg": "siShopify",
  "woocommerce.svg": "siWoocommerce",
  "facebook-catalog.svg": "siFacebook",
  "smtp.svg": null,
  "gmail.svg": "siGmail",
  "sendgrid.svg": null,
  "mailchimp.svg": "siMailchimp",
  "stripe.svg": "siStripe",
  "paypal.svg": "siPaypal",
  "google-maps.svg": "siGooglemaps",
  "mapbox.svg": "siMapbox",
  "calendly.svg": "siCalendly",
  "zapier.svg": "siZapier",
  "make.svg": "siMake",
  "pabbly.svg": null,
  "intercom.svg": "siIntercom",
  "freshchat.svg": null,
  "front.svg": null,
  "jivochat.svg": null,
  "chatwoot.svg": null,
  "drift.svg": null,
  "slack.svg": null,
  "facebook-ads.svg": "siFacebook",
  "google-tag-manager.svg": "siGoogletagmanager",
  "videosdk.svg": null,
};

const fallbackMeta = {
  "claude.svg": { letter: "C", color: "#D97757" },
  "deepseek.svg": { letter: "D", color: "#4D6BFE" },
  "xai.svg": { letter: "X", color: "#FFFFFF", textColor: "#0A0A0F" },
  "coze.svg": { letter: "C", color: "#6C5CE7" },
  "twilio.svg": { letter: "T", color: "#F22F46" },
  "signalwire.svg": { letter: "S", color: "#0066FF" },
  "telnyx.svg": { letter: "T", color: "#00E3AA", textColor: "#0A0A0F" },
  "messagemedia.svg": { letter: "M", color: "#E31937" },
  "vudu-mobile.svg": { letter: "V", color: "#FF5722" },
  "dialpad.svg": { letter: "D", color: "#7C52FF" },
  "smtp.svg": { letter: "@", color: "#4A9EE0" },
  "sendgrid.svg": { letter: "S", color: "#1A82E2" },
  "pabbly.svg": { letter: "P", color: "#20B276" },
  "freshchat.svg": { letter: "F", color: "#25C16F" },
  "front.svg": { letter: "F", color: "#001B38" },
  "jivochat.svg": { letter: "J", color: "#0084FF" },
  "chatwoot.svg": { letter: "C", color: "#1F93FF" },
  "drift.svg": { letter: "D", color: "#0077FF" },
  "slack.svg": { letter: "S", color: "#4A154B" },
  "videosdk.svg": { letter: "V", color: "#FF4D4D" },
};

const manualSvgs = {
  "openai.svg": `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#412991" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.515 2.899A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.806-2.777a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>`,
  "slack.svg": `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/><path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/><path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.162 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/><path fill="#ECB22E" d="M15.162 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.162 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.271a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.162a2.528 2.528 0 0 1-2.522 2.523h-6.316z"/></svg>`,
  "claude.svg": `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#D97757" d="M12 2L2 19h20L12 2zm0 4.5L17.5 17h-11L12 6.5z"/></svg>`,
  "deepseek.svg": `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#4D6BFE"/><path fill="#fff" d="M7 12h10M12 7v10"/></svg>`,
  "xai.svg": `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#0A0A0F"/><path fill="#fff" d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2"/></svg>`,
};

function iconToSvg(icon) {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
}

function fallbackSvg(filename) {
  const meta = fallbackMeta[filename] ?? { letter: "?", color: "#7F77DD", textColor: "#FFFFFF" };
  const fontSize = meta.fontSize ?? 22;
  const textColor = meta.textColor ?? "#FFFFFF";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <rect width="48" height="48" rx="12" fill="${meta.color}"/>
  <text x="24" y="24" text-anchor="middle" dominant-baseline="central" fill="${textColor}" font-family="Arial,sans-serif" font-size="${fontSize}" font-weight="700">${meta.letter}</text>
</svg>`;
}

fs.mkdirSync(outDir, { recursive: true });

const skipFiles = new Set(["gohighlevel.png", "webhook.png"]);

for (const [filename, iconKey] of Object.entries(logoMap)) {
  if (skipFiles.has(filename)) continue;
  const dest = path.join(outDir, filename);
  if (manualSvgs[filename]) {
    fs.writeFileSync(dest, manualSvgs[filename]);
    console.log(`✓ ${filename} (manual)`);
    continue;
  }
  const icon = iconKey ? simpleIcons[iconKey] : null;
  if (icon) {
    fs.writeFileSync(dest, iconToSvg(icon));
    console.log(`✓ ${filename}`);
  } else {
    fs.writeFileSync(dest, fallbackSvg(filename));
    console.log(`◦ ${filename} (fallback)`);
  }
}
