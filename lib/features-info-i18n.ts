import type { Lang } from "@/lib/i18n";

export type FeatureInfoPanel = {
  color: string;
  colorBg: string;
  colorBorder: string;
  chip: string;
  title: string;
  titleEm: string;
  sub: string;
  demoTitle: string;
  demoHTML: string;
  blocks: {
    icon: string;
    color: string;
    bg: string;
    border: string;
    title: string;
    desc: string;
  }[];
};

const CHANNELS_DEMO_HTML_EN = `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;" id="ch-toggle-grid">
      <div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid rgba(29,158,117,0.35);background:rgba(29,158,117,0.08);font-size:10px;color:#1D9E75;cursor:pointer;transition:all .2s;" class="on"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>WhatsApp</div><div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid rgba(29,158,117,0.35);background:rgba(29,158,117,0.08);font-size:10px;color:#1D9E75;cursor:pointer;transition:all .2s;" class="on"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/></svg>Instagram</div><div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid var(--border);background:var(--dark3);font-size:10px;color:var(--muted);cursor:pointer;transition:all .2s;" class=""><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>Facebook</div><div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid rgba(29,158,117,0.35);background:rgba(29,158,117,0.08);font-size:10px;color:#1D9E75;cursor:pointer;transition:all .2s;" class="on"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7F77DD" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Webchat</div><div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid var(--border);background:var(--dark3);font-size:10px;color:var(--muted);cursor:pointer;transition:all .2s;" class=""><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg>Voice AI</div><div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid var(--border);background:var(--dark3);font-size:10px;color:var(--muted);cursor:pointer;transition:all .2s;" class=""><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>SMS</div><div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid var(--border);background:var(--dark3);font-size:10px;color:var(--muted);cursor:pointer;transition:all .2s;" class=""><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21.5 2l-9.5 9.5M21.5 2H15M21.5 2V8.5"/><path d="M10 4.5H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5"/></svg>Telegram</div><div onclick="this.classList.toggle('on')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 6px;border-radius:9px;border:0.5px solid var(--border);background:var(--dark3);font-size:10px;color:var(--muted);cursor:pointer;transition:all .2s;" class=""><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12a4 4 0 100 8 4 4 0 000-8zM15 3v4a4 4 0 004 4"/></svg>TikTok</div>
    </div>`;

const CHANNELS_DEMO_HTML_AR = CHANNELS_DEMO_HTML_EN;

const LIVE_DEMO_ROWS_EN = [
  {
    av: "AK",
    col: "#7F77DD",
    bg: "rgba(127,119,221,0.15)",
    name: "Ahmed K.",
    msg: "order #1234 status",
    badge: "Bot",
    bc: "rgba(29,158,117,.12)",
    bt: "#1D9E75",
  },
  {
    av: "SM",
    col: "#EF9F27",
    bg: "rgba(239,159,39,0.15)",
    name: "Sara M.",
    msg: "damaged item refund",
    badge: "Handoff",
    bc: "rgba(239,159,39,.12)",
    bt: "#EF9F27",
  },
  {
    av: "IT",
    col: "#378ADD",
    bg: "rgba(55,138,221,0.15)",
    name: "Ibrahim T.",
    msg: "product availability",
    badge: "Agent",
    bc: "rgba(55,138,221,.12)",
    bt: "#378ADD",
  },
] as const;

function buildLiveDemoHTML(
  rows: readonly {
    av: string;
    col: string;
    bg: string;
    name: string;
    msg: string;
    badge: string;
    bc: string;
    bt: string;
  }[],
  headerTitle: string,
  liveLabel: string,
  aiSuggestion: string,
): string {
  return `<div style="display:flex;flex-direction:column;gap:8px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px;font-weight:500;">${headerTitle}</span><span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--green);"><span class="pdot" style="width:6px;height:6px;"></span>${liveLabel}</span></div>
      ${rows
        .map(
          (r) => `<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:9px;background:var(--dark3);border:0.5px solid var(--border);">
        <div style="width:28px;height:28px;border-radius:50%;background:${r.bg};color:${r.col};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;">${r.av}</div>
        <div style="flex:1;"><div style="font-size:12px;font-weight:500;">${r.name}</div><div style="font-size:11px;color:var(--muted);">${r.msg}</div></div>
        <span style="font-size:10px;padding:3px 9px;border-radius:10px;background:${r.bc};color:${r.bt};">${r.badge}</span>
      </div>`,
        )
        .join("")}
      <div style="padding:10px 12px;border-radius:9px;background:rgba(127,119,221,0.05);border:0.5px dashed rgba(127,119,221,0.2);font-size:11px;color:var(--muted);">${aiSuggestion}</div>
    </div>`;
}

const LIVE_DEMO_HTML_EN = buildLiveDemoHTML(
  LIVE_DEMO_ROWS_EN,
  "Active conversations",
  "Live",
  '💡 AI suggests: "I\'ll process your refund within 24 hours. Can I get your order number?"',
);

const LIVE_DEMO_ROWS_AR = [
  {
    av: "AK",
    col: "#7F77DD",
    bg: "rgba(127,119,221,0.15)",
    name: "أحمد ك.",
    msg: "حالة الطلب #1234",
    badge: "بوت",
    bc: "rgba(29,158,117,.12)",
    bt: "#1D9E75",
  },
  {
    av: "SM",
    col: "#EF9F27",
    bg: "rgba(239,159,39,0.15)",
    name: "سارة م.",
    msg: "استرداد منتج تالف",
    badge: "تحويل",
    bc: "rgba(239,159,39,.12)",
    bt: "#EF9F27",
  },
  {
    av: "IT",
    col: "#378ADD",
    bg: "rgba(55,138,221,0.15)",
    name: "إبراهيم ت.",
    msg: "توفر المنتج",
    badge: "وكيل",
    bc: "rgba(55,138,221,.12)",
    bt: "#378ADD",
  },
] as const;

const LIVE_DEMO_HTML_AR = buildLiveDemoHTML(
  LIVE_DEMO_ROWS_AR,
  "المحادثات النشطة",
  "مباشر",
  '💡 اقتراح الذكاء الاصطناعي: "سأعالج استردادك خلال 24 ساعة. هل يمكنك إعطائي رقم الطلب؟"',
);

function buildAnalyticsDemoHTML(
  metrics: { v: string; l: string; c: string; d: string }[],
  periodLabel: string,
): string {
  const bars = [28, 46, 38, 65, 50, 80, 60, 88, 70, 76, 84, 92];
  return `<div style="display:flex;flex-direction:column;gap:10px;">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        ${metrics
          .map(
            (m) => `<div style="padding:10px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);text-align:center;"><div style="font-size:20px;font-weight:500;font-family:var(--font-body);color:${m.c};">${m.v}</div><div style="font-size:10px;color:var(--muted);">${m.l}</div><div style="font-size:10px;color:var(--green);">${m.d}</div></div>`,
          )
          .join("")}
      </div>
      <div style="display:flex;align-items:flex-end;gap:3px;height:64px;padding:0 2px;">
        ${bars
          .map(
            (h, i) =>
              `<div style="flex:1;border-radius:2px 2px 0 0;height:${h}%;background:${i === 11 ? "var(--purple)" : "rgba(127,119,221,0.2)"};border-top:0.5px solid ${i === 11 ? "var(--pb)" : "transparent"};"></div>`,
          )
          .join("")}
      </div>
      <div style="font-size:10px;color:var(--muted);text-align:center;font-family:var(--font-body);">${periodLabel}</div>
    </div>`;
}

const ANALYTICS_DEMO_HTML_EN = buildAnalyticsDemoHTML(
  [
    { v: "4,841", l: "Conversations", c: "var(--purple)", d: "↑ 31%" },
    { v: "78%", l: "Resolution", c: "var(--green)", d: "↑ 5%" },
    { v: "0.4s", l: "Avg response", c: "var(--amber)", d: "↓ 0.1s" },
  ],
  "Last 30 days",
);

const ANALYTICS_DEMO_HTML_AR = buildAnalyticsDemoHTML(
  [
    { v: "4,841", l: "المحادثات", c: "var(--purple)", d: "↑ 31%" },
    { v: "78%", l: "معدل الحل", c: "var(--green)", d: "↑ 5%" },
    { v: "0.4s", l: "متوسط الرد", c: "var(--amber)", d: "↓ 0.1s" },
  ],
  "آخر 30 يوماً",
);

function buildIntegrationsDemoHTML(
  groups: { cat: string; col: string; items: string[] }[],
): string {
  return `<div style="display:flex;flex-direction:column;gap:10px;">
      ${groups
        .map(
          (g) => `<div style="display:flex;align-items:center;gap:8px;">
        <div style="font-size:10px;color:${g.col};width:70px;flex-shrink:0;font-family:var(--font-body);">${g.cat}</div>
        <div style="display:flex;gap:4px;flex-wrap:wrap;">
          ${g.items
            .map(
              (n) =>
                `<span style="padding:3px 8px;border-radius:4px;font-size:10px;font-weight:500;background:var(--dark3);border:0.5px solid var(--border);color:var(--muted);cursor:pointer;transition:all .15s;" onmouseover="this.style.borderColor='${g.col}';this.style.color='${g.col}';" onmouseout="this.style.borderColor='';this.style.color='';">${n}</span>`,
            )
            .join("")}
        </div>
      </div>`,
        )
        .join("")}
    </div>`;
}

const INTEGRATIONS_DEMO_HTML_EN = buildIntegrationsDemoHTML([
  { cat: "AI Models", col: "#378ADD", items: ["OpenAI", "Gemini", "Deepseek", "X.AI", "Coze", "Dialogflow"] },
  { cat: "Ecommerce", col: "#1D9E75", items: ["Shopify", "WooCommerce", "Facebook Shop"] },
  { cat: "Payments", col: "#EF9F27", items: ["Stripe", "PayPal"] },
  { cat: "Automation", col: "#7F77DD", items: ["Zapier", "Make", "Pabbly", "Integrately"] },
  { cat: "Data", col: "#D85A30", items: ["Google Sheets", "MySQL", "PostgreSQL", "Cloudinary"] },
]);

const INTEGRATIONS_DEMO_HTML_AR = buildIntegrationsDemoHTML([
  { cat: "نماذج AI", col: "#378ADD", items: ["OpenAI", "Gemini", "Deepseek", "X.AI", "Coze", "Dialogflow"] },
  { cat: "التجارة", col: "#1D9E75", items: ["Shopify", "WooCommerce", "Facebook Shop"] },
  { cat: "المدفوعات", col: "#EF9F27", items: ["Stripe", "PayPal"] },
  { cat: "الأتمتة", col: "#7F77DD", items: ["Zapier", "Make", "Pabbly", "Integrately"] },
  { cat: "البيانات", col: "#D85A30", items: ["Google Sheets", "MySQL", "PostgreSQL", "Cloudinary"] },
]);

export const featuresInfoByLang: Record<Lang, Record<string, FeatureInfoPanel>> = {
  en: {
    ai: {
      color: "#378ADD",
      colorBg: "rgba(55,138,221,0.1)",
      colorBorder: "rgba(55,138,221,0.25)",
      chip: "AI",
      title: "AI Hub",
      titleEm: "Intelligent agents",
      sub: "Full AI agents powered by your knowledge base, with web search and MCP server access. Auto-suggests replies to human agents in real time.",
      demoTitle: "AI agent in action",
      demoHTML: `<div style="display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;font-family:var(--font-body);">System Prompt</div>
      <div style="padding:9px 12px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);font-size:12px;color:var(--muted);line-height:1.5;">You are a helpful sales agent for GIVARI Gallery. Answer only about products in the knowledge base.</div>
      <div style="font-size:11px;color:var(--muted);text-align:center;">↓ Customer asks</div>
      <div style="padding:9px 12px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);font-size:12px;color:var(--text);">عندك الفستان ده بمقاس M؟</div>
      <div style="font-size:11px;color:#378ADD;text-align:center;">→ AI responds in 0.4s (Arabic detected)</div>
      <div style="padding:9px 12px;border-radius:8px;background:rgba(55,138,221,0.1);border:0.5px solid rgba(55,138,221,0.25);font-size:12px;color:var(--text);line-height:1.5;">أيوه! فستان Floral Midi (كود 2241) متوفر بمقاس M. تحبي أضيفه للطلب؟ 🌸</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <span style="padding:3px 9px;border-radius:20px;font-size:10px;background:rgba(29,158,117,0.1);border:0.5px solid rgba(29,158,117,0.25);color:#1D9E75;">✓ KB match</span>
        <span style="padding:3px 9px;border-radius:20px;font-size:10px;background:rgba(55,138,221,0.1);border:0.5px solid rgba(55,138,221,0.25);color:#378ADD;">AR detected</span>
      </div>
    </div>`,
      blocks: [
        {
          icon: "M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5",
          color: "#378ADD",
          bg: "rgba(55,138,221,0.1)",
          border: "rgba(55,138,221,0.25)",
          title: "AI Agents",
          desc: "Full agents with web search, MCP server access, and knowledge base — not just GPT wrappers.",
        },
        {
          icon: "M3 4h10M3 8h7M3 12h5",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "Auto Suggestions",
          desc: "AI reads the live conversation and suggests the best reply to your human agent — they click to send.",
        },
        {
          icon: "M2 3h12v2H2zM2 7h8M2 11h10",
          color: "#1D9E75",
          bg: "var(--green-dim)",
          border: "var(--green-border)",
          title: "Knowledge Base",
          desc: "Upload PDFs, docs, or product catalogs. The bot answers exclusively from your own content.",
        },
      ],
    },
    channels: {
      color: "#1D9E75",
      colorBg: "rgba(29,158,117,0.1)",
      colorBorder: "rgba(29,158,117,0.25)",
      chip: "Channels",
      title: "Omni Channel",
      titleEm: "One bot, everywhere",
      sub: "Build your flow once and deploy to 15+ channels automatically. Your customers choose where to talk — you only build once.",
      demoTitle: "Active channels — click to toggle",
      demoHTML: CHANNELS_DEMO_HTML_EN,
      blocks: [
        {
          icon: "M2 12l4-4 3 3 5-6",
          color: "#1D9E75",
          bg: "rgba(29,158,117,0.1)",
          border: "rgba(29,158,117,0.25)",
          title: "15+ channels",
          desc: "WhatsApp, Instagram, Facebook, Telegram, Voice AI, SMS, TikTok, Webchat, Viber, Line, and more.",
        },
        {
          icon: "M3 3h10v6H3zM5 9v6M9 9v6",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "Build once",
          desc: "One flow, all channels. The same conversation logic runs everywhere without rebuilding.",
        },
        {
          icon: "M8 2a6 6 0 100 12A6 6 0 008 2z",
          color: "#EF9F27",
          bg: "var(--amber-dim)",
          border: "rgba(239,159,39,0.25)",
          title: "Per-channel config",
          desc: "Each channel has its own settings, compliance rules, templates, and message format.",
        },
      ],
    },
    live: {
      color: "#D4537E",
      colorBg: "rgba(212,83,126,0.1)",
      colorBorder: "rgba(212,83,126,0.25)",
      chip: "Human",
      title: "Live Chat",
      titleEm: "Seamless handoff",
      sub: "When the bot hits its limits, your agents step in — with full conversation context, AI suggestions, and a clean queue. No customer ever feels the switch.",
      demoTitle: "Live queue — real-time view",
      demoHTML: LIVE_DEMO_HTML_EN,
      blocks: [
        {
          icon: "M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5M13 9l2 2 2-2M15 11V7",
          color: "#D4537E",
          bg: "rgba(212,83,126,0.1)",
          border: "rgba(212,83,126,0.25)",
          title: "Smart handoff",
          desc: "Bot detects escalation and transfers with full conversation history — agent steps in seamlessly.",
        },
        {
          icon: "M2 4h12M6 8h8M4 12h8",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "Agent groups",
          desc: "Route to specific teams — sales, support, or technical — based on intent or keywords.",
        },
        {
          icon: "M2 4h10v8H2zM10 8h4v6h-4z",
          color: "#1D9E75",
          bg: "var(--green-dim)",
          border: "var(--green-border)",
          title: "AI suggestions",
          desc: "AI reads the conversation and suggests the ideal reply. Agent approves with one click.",
        },
      ],
    },
    analytics: {
      color: "#D85A30",
      colorBg: "rgba(216,90,48,0.1)",
      colorBorder: "rgba(216,90,48,0.25)",
      chip: "Analytics",
      title: "Analytics",
      titleEm: "Full visibility",
      sub: "Real-time dashboards on every conversation, agent, and channel. Know what's working and what's not — before your customers tell you.",
      demoTitle: "Live dashboard snapshot",
      demoHTML: ANALYTICS_DEMO_HTML_EN,
      blocks: [
        {
          icon: "M2 12l4-4 4 4 4-8",
          color: "#D85A30",
          bg: "rgba(216,90,48,0.1)",
          border: "rgba(216,90,48,0.25)",
          title: "Real-time data",
          desc: "Live dashboards update every 30 seconds — conversations, messages, users, resolution, and response time.",
        },
        {
          icon: "M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "Agent performance",
          desc: "Track every agent's response time, resolution rate, satisfaction score, and chat volume.",
        },
        {
          icon: "M2 4h12v10H2zM5 4v10M9 4v10",
          color: "#EF9F27",
          bg: "var(--amber-dim)",
          border: "rgba(239,159,39,0.25)",
          title: "Custom reports",
          desc: "Build your own metrics dashboard. Export data as CSV for any time period.",
        },
      ],
    },
    integrations: {
      color: "#9B97C4",
      colorBg: "rgba(155,151,196,0.08)",
      colorBorder: "rgba(155,151,196,0.2)",
      chip: "Connect",
      title: "Integrations",
      titleEm: "30+ connections",
      sub: "Connect Samy to every tool your business already uses. One-click integrations for AI models, ecommerce, payments, CRM, and automation platforms.",
      demoTitle: "Integration map",
      demoHTML: INTEGRATIONS_DEMO_HTML_EN,
      blocks: [
        {
          icon: "M2 5h4v6H2zM10 5h4v6h-4zM6 8h4",
          color: "#9B97C4",
          bg: "rgba(155,151,196,0.08)",
          border: "rgba(155,151,196,0.2)",
          title: "+30 integrations",
          desc: "AI, payments, ecommerce, CRM, email, databases, and automation — all connected.",
        },
        {
          icon: "M3 3l10 10M13 3L3 13",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "Inbound webhooks",
          desc: "Any external system can trigger Samy flows via a simple HTTP webhook.",
        },
        {
          icon: "M5 3h8M9 3v10M5 13h8",
          color: "#1D9E75",
          bg: "var(--green-dim)",
          border: "var(--green-border)",
          title: "One-click connect",
          desc: "Most integrations connect in under a minute. Paste your key and you're live.",
        },
      ],
    },
  },
  ar: {
    ai: {
      color: "#378ADD",
      colorBg: "rgba(55,138,221,0.1)",
      colorBorder: "rgba(55,138,221,0.25)",
      chip: "الذكاء الاصطناعي",
      title: "مركز الذكاء الاصطناعي",
      titleEm: "وكلاء أذكياء",
      sub: "وكلاء ذكاء اصطناعي كاملون مدعومون بقاعدة معرفتك، مع بحث الويب ووصول خوادم MCP. يقترحون ردوداً على الوكلاء البشريين في الوقت الفعلي.",
      demoTitle: "وكيل ذكاء اصطناعي في العمل",
      demoHTML: `<div style="display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:2px;font-family:var(--font-body);">موجه النظام</div>
      <div style="padding:9px 12px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);font-size:12px;color:var(--muted);line-height:1.5;">أنت وكيل مبيعات مساعد لمعرض GIVARI. أجب فقط عن المنتجات في قاعدة المعرفة.</div>
      <div style="font-size:11px;color:var(--muted);text-align:center;">↓ يسأل العميل</div>
      <div style="padding:9px 12px;border-radius:8px;background:var(--dark3);border:0.5px solid var(--border);font-size:12px;color:var(--text);">عندك الفستان ده بمقاس M؟</div>
      <div style="font-size:11px;color:#378ADD;text-align:center;">→ يرد الذكاء الاصطناعي خلال 0.4 ث (تم اكتشاف العربية)</div>
      <div style="padding:9px 12px;border-radius:8px;background:rgba(55,138,221,0.1);border:0.5px solid rgba(55,138,221,0.25);font-size:12px;color:var(--text);line-height:1.5;">أيوه! فستان Floral Midi (كود 2241) متوفر بمقاس M. تحبي أضيفه للطلب؟ 🌸</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <span style="padding:3px 9px;border-radius:20px;font-size:10px;background:rgba(29,158,117,0.1);border:0.5px solid rgba(29,158,117,0.25);color:#1D9E75;">✓ تطابق قاعدة المعرفة</span>
        <span style="padding:3px 9px;border-radius:20px;font-size:10px;background:rgba(55,138,221,0.1);border:0.5px solid rgba(55,138,221,0.25);color:#378ADD;">عربية مكتشفة</span>
      </div>
    </div>`,
      blocks: [
        {
          icon: "M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5",
          color: "#378ADD",
          bg: "rgba(55,138,221,0.1)",
          border: "rgba(55,138,221,0.25)",
          title: "وكلاء الذكاء الاصطناعي",
          desc: "وكلاء كاملون مع بحث الويب ووصول MCP وقاعدة المعرفة — ليس مجرد غلافات GPT.",
        },
        {
          icon: "M3 4h10M3 8h7M3 12h5",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "اقتراحات تلقائية",
          desc: "يقرأ الذكاء الاصطناعي المحادثة المباشرة ويقترح أفضل رد لوكيلك البشري — ينقر للإرسال.",
        },
        {
          icon: "M2 3h12v2H2zM2 7h8M2 11h10",
          color: "#1D9E75",
          bg: "var(--green-dim)",
          border: "var(--green-border)",
          title: "قاعدة المعرفة",
          desc: "ارفع ملفات PDF أو مستندات أو كتالوجات منتجات. يجيب البوت حصرياً من محتواك.",
        },
      ],
    },
    channels: {
      color: "#1D9E75",
      colorBg: "rgba(29,158,117,0.1)",
      colorBorder: "rgba(29,158,117,0.25)",
      chip: "القنوات",
      title: "قنوات متعددة",
      titleEm: "بوت واحد في كل مكان",
      sub: "ابنِ تدفقك مرة واحدة وانشره على أكثر من 15 قناة تلقائياً. عملاؤك يختارون أين يتحدثون — وأنت تبني مرة واحدة فقط.",
      demoTitle: "القنوات النشطة — انقر للتبديل",
      demoHTML: CHANNELS_DEMO_HTML_AR,
      blocks: [
        {
          icon: "M2 12l4-4 3 3 5-6",
          color: "#1D9E75",
          bg: "rgba(29,158,117,0.1)",
          border: "rgba(29,158,117,0.25)",
          title: "أكثر من 15 قناة",
          desc: "واتساب، إنستغرام، فيسبوك، تيليجرام، Voice AI، SMS، تيك توك، ويب شات، Viber، Line، والمزيد.",
        },
        {
          icon: "M3 3h10v6H3zM5 9v6M9 9v6",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "ابنِ مرة واحدة",
          desc: "تدفق واحد، كل القنوات. نفس منطق المحادثة يعمل في كل مكان دون إعادة البناء.",
        },
        {
          icon: "M8 2a6 6 0 100 12A6 6 0 008 2z",
          color: "#EF9F27",
          bg: "var(--amber-dim)",
          border: "rgba(239,159,39,0.25)",
          title: "إعدادات لكل قناة",
          desc: "لكل قناة إعداداتها وقواعد الامتثال والقوالب وتنسيق الرسائل الخاصة بها.",
        },
      ],
    },
    live: {
      color: "#D4537E",
      colorBg: "rgba(212,83,126,0.1)",
      colorBorder: "rgba(212,83,126,0.25)",
      chip: "بشري",
      title: "الدردشة المباشرة",
      titleEm: "تحويل سلس",
      sub: "عندما يصل البوت لحدوده، يتدخل وكلاؤك — مع سياق المحادثة الكامل واقتراحات الذكاء الاصطناعي وطابور منظم. لا يشعر العميل أبداً بالتبديل.",
      demoTitle: "طابور مباشر — عرض فوري",
      demoHTML: LIVE_DEMO_HTML_AR,
      blocks: [
        {
          icon: "M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5M13 9l2 2 2-2M15 11V7",
          color: "#D4537E",
          bg: "rgba(212,83,126,0.1)",
          border: "rgba(212,83,126,0.25)",
          title: "تحويل ذكي",
          desc: "يكتشف البوت التصعيد وينقل مع سجل المحادثة الكامل — يتدخل الوكيل بسلاسة.",
        },
        {
          icon: "M2 4h12M6 8h8M4 12h8",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "مجموعات الوكلاء",
          desc: "وجّه لفرق محددة — مبيعات أو دعم أو تقني — حسب النية أو الكلمات المفتاحية.",
        },
        {
          icon: "M2 4h10v8H2zM10 8h4v6h-4z",
          color: "#1D9E75",
          bg: "var(--green-dim)",
          border: "var(--green-border)",
          title: "اقتراحات الذكاء الاصطناعي",
          desc: "يقرأ الذكاء الاصطناعي المحادثة ويقترح الرد المثالي. يوافق الوكيل بنقرة واحدة.",
        },
      ],
    },
    analytics: {
      color: "#D85A30",
      colorBg: "rgba(216,90,48,0.1)",
      colorBorder: "rgba(216,90,48,0.25)",
      chip: "التحليلات",
      title: "التحليلات",
      titleEm: "رؤية كاملة",
      sub: "لوحات معلومات فورية لكل محادثة ووكيل وقناة. اعرف ما ينجح وما لا ينجح — قبل أن يخبرك عملاؤك.",
      demoTitle: "لقطة من لوحة المعلومات المباشرة",
      demoHTML: ANALYTICS_DEMO_HTML_AR,
      blocks: [
        {
          icon: "M2 12l4-4 4 4 4-8",
          color: "#D85A30",
          bg: "rgba(216,90,48,0.1)",
          border: "rgba(216,90,48,0.25)",
          title: "بيانات فورية",
          desc: "تتحدث لوحات المعلومات المباشرة كل 30 ثانية — المحادثات والرسائل والمستخدمين والحل ووقت الرد.",
        },
        {
          icon: "M8 2a3 3 0 100 6M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "أداء الوكلاء",
          desc: "تتبع وقت رد كل وكيل ومعدل الحل ودرجة الرضا وحجم المحادثات.",
        },
        {
          icon: "M2 4h12v10H2zM5 4v10M9 4v10",
          color: "#EF9F27",
          bg: "var(--amber-dim)",
          border: "rgba(239,159,39,0.25)",
          title: "تقارير مخصصة",
          desc: "ابنِ لوحة مقاييسك الخاصة. صدّر البيانات كـ CSV لأي فترة زمنية.",
        },
      ],
    },
    integrations: {
      color: "#9B97C4",
      colorBg: "rgba(155,151,196,0.08)",
      colorBorder: "rgba(155,151,196,0.2)",
      chip: "ربط",
      title: "التكاملات",
      titleEm: "أكثر من 30 اتصالاً",
      sub: "اربط Samy بكل أداة تستخدمها شركتك. تكاملات بنقرة واحدة لنماذج الذكاء الاصطناعي والتجارة الإلكترونية والمدفوعات وCRM ومنصات الأتمتة.",
      demoTitle: "خريطة التكاملات",
      demoHTML: INTEGRATIONS_DEMO_HTML_AR,
      blocks: [
        {
          icon: "M2 5h4v6H2zM10 5h4v6h-4zM6 8h4",
          color: "#9B97C4",
          bg: "rgba(155,151,196,0.08)",
          border: "rgba(155,151,196,0.2)",
          title: "+30 تكاملاً",
          desc: "الذكاء الاصطناعي والمدفوعات والتجارة الإلكترونية وCRM والبريد وقواعد البيانات والأتمتة — كلها متصلة.",
        },
        {
          icon: "M3 3l10 10M13 3L3 13",
          color: "#7F77DD",
          bg: "var(--pd)",
          border: "var(--pb)",
          title: "Webhooks واردة",
          desc: "أي نظام خارجي يمكنه تشغيل تدفقات Samy عبر webhook HTTP بسيط.",
        },
        {
          icon: "M5 3h8M9 3v10M5 13h8",
          color: "#1D9E75",
          bg: "var(--green-dim)",
          border: "var(--green-border)",
          title: "ربط بنقرة واحدة",
          desc: "معظم التكاملات تتصل في أقل من دقيقة. الصق مفتاحك وأنت جاهز.",
        },
      ],
    },
  },
};

export function getFeaturesInfoPanel(
  id: string,
  lang: Lang,
): FeatureInfoPanel | undefined {
  return featuresInfoByLang[lang][id];
}

export const featuresFlowStrings: Record<Lang, Record<string, string>> = {
  en: {
    backToFeatures: "← Back to features",
    flowBuilderSubtitle: "Flow Builder — Interactive Demo",
    chipNodesZero: "0 nodes",
    chipConnectionsZero: "0 connections",
    statusDraft: "Draft",
    hintDragStart: "← Drag a node onto the canvas to start",
    hintConnect: "Connect nodes by dragging from right port to left port",
    hintRun: "Click ▶ Run to simulate the flow",
    sidebarNodes: "Nodes",
    groupTriggers: "Triggers",
    nodeUserMessage: "User Message",
    nodeUserMessageDesc: "Any incoming msg",
    nodeKeywordMatch: "Keyword Match",
    nodeKeywordMatchDesc: "When user says...",
    groupActions: "Actions",
    nodeSendMessage: "Send Message",
    nodeSendMessageDesc: "Text, image, card",
    nodeAskQuestion: "Ask Question",
    nodeAskQuestionDesc: "Wait for answer",
    nodeCondition: "Condition",
    nodeConditionDesc: "If / else logic",
    nodeApiAction: "API Action",
    nodeApiActionDesc: "Call webhook/API",
    nodeHumanHandoff: "Human Handoff",
    nodeHumanHandoffDesc: "Transfer to agent",
    canvasLabel: "New Flow — Untitled",
    btnClear: "Clear",
    btnAutoLayout: "Auto Layout",
    btnRun: "▶ Run",
    btnRunning: "Running...",
    dropHintTitle: "Drag nodes here to build your flow",
    dropHintSub: "Connect them with lines, then hit ▶ Run",
    tabProps: "Props",
    tabPreview: "Preview",
    tabLog: "Log",
    emptyPropsSelect: "Select a node to edit its properties",
    emptyPropsShort: "Select a node to edit properties",
    previewPlaceholder: "Preview will appear here",
    previewRunHint: "Run the flow to see the conversation",
    logWaiting: "Waiting for run...",
    infoCard3FlowsTitle: "3 Flow Types",
    infoCard3FlowsDesc:
      "Sub Flow, Workflow, and Function Flow — each for a different automation pattern.",
    infoCard7NodesTitle: "7 Node Types",
    infoCard7NodesDesc:
      "Send Message, Question, Action, Condition, Split, Email, and Goto — every pattern covered.",
    infoCardPublishTitle: "Publish & Draft",
    infoCardPublishDesc:
      "Edit in Draft — your live bot keeps running until you publish the new version.",
    fieldTriggerOn: "Trigger on",
    defaultTriggerEvent: "User sends message",
    fieldMessageText: "Message text",
    defaultMessageText: "Hello! How can I help you today? 👋",
    fieldQuestion: "Question",
    defaultQuestion: "What is your name?",
    fieldSaveTo: "Save to",
    fieldIfVariable: "If variable",
    fieldOperator: "Operator",
    opIsNotEmpty: "is not empty",
    opEquals: "equals",
    opContains: "contains",
    opStartsWith: "starts with",
    fieldWebhookUrl: "Webhook URL",
    defaultWebhookUrl: "https://api.example.com/data",
    fieldMethod: "Method",
    methodGet: "GET",
    methodPost: "POST",
    methodPut: "PUT",
    methodDelete: "DELETE",
    fieldAgentGroup: "Agent group",
    defaultAgentGroup: "Support Team",
    fieldHandoffMessage: "Handoff message",
    defaultHandoffMessage: "Connecting you to an agent...",
    propNodeType: "Node Type",
    propProperties: "Properties",
    propEnabled: "Enabled",
    propLogOutput: "Log output",
    btnDeleteNode: "Delete Node",
    nodeSingular: "node",
    nodesPlural: "nodes",
    connectionSingular: "connection",
    connectionsPlural: "connections",
    toastNodeAdded: "{label} added",
    toastNodesConnected: "Nodes connected",
    toastAddNodesFirst: "Add nodes first!",
    chatFlowCompleted: "✓ Flow completed",
    logFlowFinished: "Flow finished — {count} nodes executed",
    toastFlowRan: "Flow ran!",
    simUserHello: "Hello!",
    simUserAnswer: "Ahmed",
    simChecking: "⚙ Checking: ",
    simCalling: "⚡ Calling: ",
    simOk200: "✓ 200 OK",
    simHandoff: "👤 Handoff: ",
    interactive: "Interactive",
    tryFeatureFree: "Try {title} free →",
    allFeatures: "← All features",
  },
  ar: {
    backToFeatures: "← العودة إلى المميزات",
    flowBuilderSubtitle: "منشئ التدفقات — عرض تفاعلي",
    chipNodesZero: "0 عقد",
    chipConnectionsZero: "0 اتصالات",
    statusDraft: "مسودة",
    hintDragStart: "← اسحب عقدة إلى اللوحة للبدء",
    hintConnect: "اربط العقد بسحب من المنفذ الأيمن إلى الأيسر",
    hintRun: "انقر ▶ تشغيل لمحاكاة التدفق",
    sidebarNodes: "العقد",
    groupTriggers: "المشغّلات",
    nodeUserMessage: "رسالة المستخدم",
    nodeUserMessageDesc: "أي رسالة واردة",
    nodeKeywordMatch: "تطابق كلمة مفتاحية",
    nodeKeywordMatchDesc: "عندما يقول المستخدم...",
    groupActions: "الإجراءات",
    nodeSendMessage: "إرسال رسالة",
    nodeSendMessageDesc: "نص، صورة، بطاقة",
    nodeAskQuestion: "طرح سؤال",
    nodeAskQuestionDesc: "انتظر الإجابة",
    nodeCondition: "شرط",
    nodeConditionDesc: "منطق إذا / وإلا",
    nodeApiAction: "إجراء API",
    nodeApiActionDesc: "استدعاء webhook/API",
    nodeHumanHandoff: "تحويل لبشري",
    nodeHumanHandoffDesc: "نقل إلى وكيل",
    canvasLabel: "تدفق جديد — بدون عنوان",
    btnClear: "مسح",
    btnAutoLayout: "ترتيب تلقائي",
    btnRun: "▶ تشغيل",
    btnRunning: "جاري التشغيل...",
    dropHintTitle: "اسحب العقد هنا لبناء تدفقك",
    dropHintSub: "اربطها بخطوط، ثم اضغط ▶ تشغيل",
    tabProps: "خصائص",
    tabPreview: "معاينة",
    tabLog: "السجل",
    emptyPropsSelect: "اختر عقدة لتعديل خصائصها",
    emptyPropsShort: "اختر عقدة لتعديل الخصائص",
    previewPlaceholder: "ستظهر المعاينة هنا",
    previewRunHint: "شغّل التدفق لرؤية المحادثة",
    logWaiting: "في انتظار التشغيل...",
    infoCard3FlowsTitle: "3 أنواع تدفق",
    infoCard3FlowsDesc:
      "Sub Flow وWorkflow وFunction Flow — كل نوع لنمط أتمتة مختلف.",
    infoCard7NodesTitle: "7 أنواع عقد",
    infoCard7NodesDesc:
      "إرسال رسالة، سؤال، إجراء، شرط، Split، بريد، وGoto — كل نمط مغطى.",
    infoCardPublishTitle: "نشر ومسودة",
    infoCardPublishDesc:
      "عدّل في المسودة — بوتك المباشر يستمر حتى تنشر الإصدار الجديد.",
    fieldTriggerOn: "التشغيل عند",
    defaultTriggerEvent: "المستخدم يرسل رسالة",
    fieldMessageText: "نص الرسالة",
    defaultMessageText: "مرحباً! كيف يمكنني مساعدتك اليوم؟ 👋",
    fieldQuestion: "السؤال",
    defaultQuestion: "ما اسمك؟",
    fieldSaveTo: "حفظ في",
    fieldIfVariable: "إذا المتغير",
    fieldOperator: "المشغّل",
    opIsNotEmpty: "ليس فارغاً",
    opEquals: "يساوي",
    opContains: "يحتوي",
    opStartsWith: "يبدأ بـ",
    fieldWebhookUrl: "رابط Webhook",
    defaultWebhookUrl: "https://api.example.com/data",
    fieldMethod: "الطريقة",
    methodGet: "GET",
    methodPost: "POST",
    methodPut: "PUT",
    methodDelete: "DELETE",
    fieldAgentGroup: "مجموعة الوكلاء",
    defaultAgentGroup: "فريق الدعم",
    fieldHandoffMessage: "رسالة التحويل",
    defaultHandoffMessage: "جاري ربطك بوكيل...",
    propNodeType: "نوع العقدة",
    propProperties: "الخصائص",
    propEnabled: "مفعّل",
    propLogOutput: "تسجيل المخرجات",
    btnDeleteNode: "حذف العقدة",
    nodeSingular: "عقدة",
    nodesPlural: "عقد",
    connectionSingular: "اتصال",
    connectionsPlural: "اتصالات",
    toastNodeAdded: "تمت إضافة {label}",
    toastNodesConnected: "تم ربط العقد",
    toastAddNodesFirst: "أضف عقداً أولاً!",
    chatFlowCompleted: "✓ اكتمل التدفق",
    logFlowFinished: "انتهى التدفق — تم تنفيذ {count} عقدة",
    toastFlowRan: "تم تشغيل التدفق!",
    simUserHello: "مرحباً!",
    simUserAnswer: "أحمد",
    simChecking: "⚙ فحص: ",
    simCalling: "⚡ استدعاء: ",
    simOk200: "✓ 200 OK",
    simHandoff: "👤 تحويل: ",
    interactive: "تفاعلي",
    tryFeatureFree: "جرّب {title} مجاناً →",
    allFeatures: "← كل المميزات",
  },
};

function flowT(lang: Lang, key: string): string {
  return featuresFlowStrings[lang][key] ?? featuresFlowStrings.en[key] ?? key;
}

/** Full flow-builder overlay markup (replaces hardcoded EN template in samy-features-v2.js). */
export function buildFlowOverlayHtml(lang: Lang): string {
  const t = (key: string) => flowT(lang, key);
  return `
    <div class="fb-overlay">
      <div class="fb-overlay-nav">
        <button class="fb-back" onclick="closeOverlay()">${t("backToFeatures")}</button>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="font-size:12px;font-family:var(--font-body);color:var(--muted);">${t("flowBuilderSubtitle")}</div>
          <button type="button" class="fb-close" onclick="closeOverlay()" aria-label="Close">×</button>
        </div>
      </div>
      <div class="fb-content">
        <div class="status-bar">
          <div class="status-chips">
            <div class="status-chip" id="chip-nodes"><span class="chip-dot"></span><span id="chip-nodes-txt">${t("chipNodesZero")}</span></div>
            <div class="status-chip" id="chip-conn"><span class="chip-dot"></span><span id="chip-conn-txt">${t("chipConnectionsZero")}</span></div>
            <div class="status-chip" id="chip-status"><span class="chip-dot"></span><span>${t("statusDraft")}</span></div>
          </div>
          <span class="hint-text" id="hint-text">${t("hintDragStart")}</span>
        </div>
        <div class="builder-wrap" id="builder">
          <div class="sidebar-left">
            <div class="sidebar-title">${t("sidebarNodes")}</div>
            <div style="flex:1;overflow-y:auto;padding:6px 0;">
              <div class="tool-group">
                <div class="tool-group-label">${t("groupTriggers")}</div>
                <div class="tool-node" draggable="true" data-type="trigger" data-label="${t("nodeUserMessage")}">
                  <div class="node-icon ni-trigger"><svg viewBox="0 0 16 16"><path d="M8 2v4l3 1.5" stroke="#EF9F27"/><circle cx="8" cy="8" r="6" stroke="#EF9F27"/></svg></div>
                  <div><div class="node-label">${t("nodeUserMessage")}</div><div class="node-desc">${t("nodeUserMessageDesc")}</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="trigger" data-label="${t("nodeKeywordMatch")}">
                  <div class="node-icon ni-trigger"><svg viewBox="0 0 16 16"><path d="M3 8h10M6 5l-3 3 3 3" stroke="#EF9F27"/></svg></div>
                  <div><div class="node-label">${t("nodeKeywordMatch")}</div><div class="node-desc">${t("nodeKeywordMatchDesc")}</div></div>
                </div>
              </div>
              <div class="tool-group">
                <div class="tool-group-label">${t("groupActions")}</div>
                <div class="tool-node" draggable="true" data-type="message" data-label="${t("nodeSendMessage")}">
                  <div class="node-icon ni-message"><svg viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="9" rx="2" stroke="#7F77DD"/><path d="M5 7h6M5 10h4" stroke="#7F77DD"/></svg></div>
                  <div><div class="node-label">${t("nodeSendMessage")}</div><div class="node-desc">${t("nodeSendMessageDesc")}</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="question" data-label="${t("nodeAskQuestion")}">
                  <div class="node-icon ni-question"><svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="#378ADD"/><path d="M8 5.5c0-1 1.5-1 1.5 0C9.5 7 8 7 8 8.5M8 10.5v.5" stroke="#378ADD"/></svg></div>
                  <div><div class="node-label">${t("nodeAskQuestion")}</div><div class="node-desc">${t("nodeAskQuestionDesc")}</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="condition" data-label="${t("nodeCondition")}">
                  <div class="node-icon ni-condition"><svg viewBox="0 0 16 16"><path d="M8 2v4M4 10l4-4 4 4M4 14h8" stroke="#D85A30"/></svg></div>
                  <div><div class="node-label">${t("nodeCondition")}</div><div class="node-desc">${t("nodeConditionDesc")}</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="action" data-label="${t("nodeApiAction")}">
                  <div class="node-icon ni-action"><svg viewBox="0 0 16 16"><rect x="2" y="5" width="5" height="6" rx="1" stroke="#1D9E75"/><rect x="9" y="5" width="5" height="6" rx="1" stroke="#1D9E75"/><path d="M7 8h2" stroke="#1D9E75"/></svg></div>
                  <div><div class="node-label">${t("nodeApiAction")}</div><div class="node-desc">${t("nodeApiActionDesc")}</div></div>
                </div>
                <div class="tool-node" draggable="true" data-type="handoff" data-label="${t("nodeHumanHandoff")}">
                  <div class="node-icon ni-handoff"><svg viewBox="0 0 16 16"><circle cx="6" cy="5" r="2.5" stroke="#D4537E"/><path d="M2 13c0-2.5 1.8-4 4-4M10 9l2 2 2-2M12 11V7" stroke="#D4537E"/></svg></div>
                  <div><div class="node-label">${t("nodeHumanHandoff")}</div><div class="node-desc">${t("nodeHumanHandoffDesc")}</div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="canvas-area" id="canvas">
            <div class="canvas-toolbar">
              <div class="canvas-label" id="canvas-label">${t("canvasLabel")}</div>
              <div class="canvas-actions">
                <button class="canvas-btn" onclick="clearCanvas()">${t("btnClear")}</button>
                <button class="canvas-btn" onclick="autoLayout()">${t("btnAutoLayout")}</button>
                <button class="canvas-btn run-btn" onclick="runFlow()" id="run-btn">${t("btnRun")}</button>
              </div>
            </div>
            <div class="drop-hint" id="drop-hint">
              <div class="drop-hint-icon"><svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#7F77DD" stroke-width="1.5"><path d="M11 4v14M4 11h14"/></svg></div>
              <p>${t("dropHintTitle")}</p>
              <small>${t("dropHintSub")}</small>
            </div>
            <svg id="connections-svg"></svg>
          </div>
          <div class="panel-right">
            <div class="panel-tabs">
              <div class="panel-tab active" onclick="switchTab('props',this)">${t("tabProps")}</div>
              <div class="panel-tab" onclick="switchTab('preview',this)">${t("tabPreview")}</div>
              <div class="panel-tab" onclick="switchTab('log',this)">${t("tabLog")}</div>
            </div>
            <div class="panel-content" id="panel-props">
              <div class="empty-panel">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#9B97C4" stroke-width="1.2"><rect x="4" y="4" width="24" height="24" rx="4"/><path d="M10 16h12M10 21h8M10 11h12"/></svg>
                <p>${t("emptyPropsSelect")}</p>
              </div>
            </div>
            <div class="panel-content" id="panel-preview" style="display:none;">
              <div class="chat-preview" id="chat-preview">
                <div class="chat-bubble system">${t("previewPlaceholder")}</div>
                <p style="font-size:10px;color:var(--muted);text-align:center;margin-top:8px;">${t("previewRunHint")}</p>
              </div>
            </div>
            <div class="panel-content" id="panel-log" style="display:none;">
              <div id="log-content"><p style="font-size:10px;color:var(--muted);font-family:var(--font-body);">${t("logWaiting")}</p></div>
            </div>
          </div>
        </div>
        <div class="below-section">
          <div class="info-card">
            <div class="info-card-icon" style="background:var(--amber-dim);border:0.5px solid rgba(239,159,39,0.3);"><svg viewBox="0 0 18 18" stroke="#EF9F27"><path d="M9 2v5l3 1.5"/><circle cx="9" cy="9" r="7"/></svg></div>
            <h3>${t("infoCard3FlowsTitle")}</h3>
            <p>${t("infoCard3FlowsDesc")}</p>
          </div>
          <div class="info-card">
            <div class="info-card-icon" style="background:var(--purple-dim);border:0.5px solid var(--purple-border);"><svg viewBox="0 0 18 18" stroke="#7F77DD"><rect x="2" y="5" width="6" height="8" rx="1"/><rect x="10" y="5" width="6" height="8" rx="1"/><path d="M8 9h2"/></svg></div>
            <h3>${t("infoCard7NodesTitle")}</h3>
            <p>${t("infoCard7NodesDesc")}</p>
          </div>
          <div class="info-card">
            <div class="info-card-icon" style="background:var(--green-dim);border:0.5px solid var(--green-border);"><svg viewBox="0 0 18 18" stroke="#1D9E75"><path d="M3 9h12M9 3v12"/></svg></div>
            <h3>${t("infoCardPublishTitle")}</h3>
            <p>${t("infoCardPublishDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function syncFeaturesOverlayI18n(lang: Lang): void {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    __FEAT_LANG__?: Lang;
    __FEAT_INFO__?: typeof featuresInfoByLang;
    __FEAT_FLOW__?: typeof featuresFlowStrings;
    buildFeatFlowOverlay?: () => string;
  };
  w.__FEAT_LANG__ = lang;
  w.__FEAT_INFO__ = featuresInfoByLang;
  w.__FEAT_FLOW__ = featuresFlowStrings;
  w.buildFeatFlowOverlay = () => buildFlowOverlayHtml(lang);
}
