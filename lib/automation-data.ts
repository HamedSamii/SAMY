export type CaseCategory = "content" | "data" | "ecom" | "crm" | "schedule";

export type FlowStepColor = "purple" | "amber" | "green" | "coral";

export type ToolBadge = "n8n" | "make" | "zap" | "api" | "samy";

export const caseTabs: { key: CaseCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "content", label: "Content Generation" },
  { key: "data", label: "Data Pipelines" },
  { key: "ecom", label: "eCommerce" },
  { key: "crm", label: "CRM & Sales" },
  { key: "schedule", label: "Scheduled Flows" },
];

export const pillars = [
  {
    num: "01",
    title: "Scheduled Pipelines",
    description:
      "Workflows that run on a timer — hourly, daily, weekly. Scraping, syncing, generating content, sending reports. No user needed to trigger them.",
  },
  {
    num: "02",
    title: "Data & Content Factories",
    description:
      "AI-powered pipelines that collect raw data, process it with LLMs, and output structured content — articles, videos, summaries, or database records.",
  },
  {
    num: "03",
    title: "Multi-System Orchestration",
    description:
      "When an action in one system needs to trigger 5 others in sequence — CRM, warehouse, accounting, Slack, WhatsApp — we wire them all together.",
  },
];

export const useCases: {
  id: string;
  category: CaseCategory;
  icon: string;
  iconBg: string;
  title: string;
  industry: string;
  steps: { text: string; color: FlowStepColor }[];
  badges: { label: string; type: ToolBadge }[];
}[] = [
  {
    id: "news-digest",
    category: "data",
    icon: "📰",
    iconBg: "rgba(239,159,39,0.1)",
    title: "Daily industry news digest to WhatsApp",
    industry: "Media · Marketing · B2B",
    steps: [
      { text: "n8n cron triggers every morning at 7am", color: "purple" },
      { text: "Web scraper fetches top 20 articles by keyword from RSS + Google News", color: "amber" },
      { text: "GPT-4 filters relevant ones, removes duplicates, writes a 3-line Arabic summary per article", color: "amber" },
      { text: "SAMY bot broadcasts the digest to subscribed contacts on WhatsApp", color: "green" },
    ],
    badges: [
      { label: "n8n", type: "n8n" },
      { label: "GPT-4", type: "api" },
      { label: "SAMY Broadcast", type: "samy" },
    ],
  },
  {
    id: "video-content",
    category: "content",
    icon: "🎬",
    iconBg: "rgba(127,119,221,0.1)",
    title: "Auto video content from product catalog",
    industry: "eCommerce · Real Estate · Education",
    steps: [
      { text: "Make.com watches for new products added to Sheets / WooCommerce", color: "purple" },
      { text: "GPT-4 writes a short script in Arabic dialect — hook, features, CTA", color: "amber" },
      { text: "HeyGen or Runway generates a 30s video with AI voiceover + product visuals", color: "amber" },
      { text: "Video saved to Drive, link sent to admin via SAMY — ready to post", color: "green" },
    ],
    badges: [
      { label: "Make.com", type: "make" },
      { label: "HeyGen API", type: "api" },
      { label: "GPT-4", type: "api" },
      { label: "SAMY Notify", type: "samy" },
    ],
  },
  {
    id: "lead-enrichment",
    category: "crm",
    icon: "🎯",
    iconBg: "rgba(29,158,117,0.1)",
    title: "Lead enrichment + auto CRM entry",
    industry: "Real Estate · B2B · Services",
    steps: [
      { text: "SAMY collects lead (name, phone, interest) → fires webhook to n8n", color: "purple" },
      { text: "n8n queries LinkedIn, checks existing DB, scores the lead by budget/interest", color: "amber" },
      { text: "Creates deal in HubSpot, assigns to salesperson by territory, logs conversation", color: "amber" },
      { text: "Slack ping to sales team with full lead profile + SAMY conversation link", color: "green" },
    ],
    badges: [
      { label: "n8n", type: "n8n" },
      { label: "HubSpot API", type: "api" },
      { label: "Slack", type: "api" },
    ],
  },
  {
    id: "order-pipeline",
    category: "ecom",
    icon: "📦",
    iconBg: "rgba(216,90,48,0.1)",
    title: "Order → warehouse → invoice → notify",
    industry: "eCommerce · Retail · Wholesale",
    steps: [
      { text: "Customer orders via SAMY bot → n8n receives the order payload", color: "purple" },
      { text: "Pushes to warehouse system, decrements inventory in Sheets/ERP", color: "amber" },
      { text: "Generates PDF invoice via API, sends to customer email automatically", color: "amber" },
      { text: "SAMY sends order confirmation + tracking link to customer on WhatsApp", color: "green" },
    ],
    badges: [
      { label: "n8n", type: "n8n" },
      { label: "Custom API", type: "api" },
      { label: "SAMY Notify", type: "samy" },
    ],
  },
  {
    id: "content-factory",
    category: "content",
    icon: "✍️",
    iconBg: "rgba(239,159,39,0.1)",
    title: "Weekly blog + social content factory",
    industry: "Agencies · Brands · Consultants",
    steps: [
      { text: "n8n scrapes top trending topics in client's niche from Reddit, X, Google Trends", color: "purple" },
      { text: "GPT-4 writes full Arabic blog post + 5 social captions + 3 hook variations", color: "amber" },
      { text: "Content saved to Notion/Google Docs for review, images generated via DALL-E", color: "amber" },
      { text: 'SAMY notifies marketing team on WhatsApp: "هفتة الكونتنت جاهز للمراجعة ✅"', color: "green" },
    ],
    badges: [
      { label: "n8n", type: "n8n" },
      { label: "GPT-4", type: "api" },
      { label: "DALL-E", type: "api" },
      { label: "SAMY Notify", type: "samy" },
    ],
  },
  {
    id: "nightly-sync",
    category: "schedule",
    icon: "🔄",
    iconBg: "rgba(29,158,117,0.1)",
    title: "Nightly data sync across all systems",
    industry: "Any business with multiple tools",
    steps: [
      { text: "Make.com triggers at midnight — fetches all new contacts from SAMY", color: "purple" },
      { text: "Deduplicates, enriches, and syncs to HubSpot + Google Sheets + Supabase", color: "amber" },
      { text: "Flags any contacts that need follow-up based on status or inactivity", color: "amber" },
      { text: "Morning report sent via SAMY to manager: leads synced, flagged contacts, summary", color: "green" },
    ],
    badges: [
      { label: "Make.com", type: "make" },
      { label: "HubSpot", type: "api" },
      { label: "SAMY Report", type: "samy" },
    ],
  },
  {
    id: "abandoned-cart",
    category: "ecom",
    icon: "🛒",
    iconBg: "rgba(216,90,48,0.1)",
    title: "Abandoned cart recovery sequence",
    industry: "eCommerce · Dropshipping",
    steps: [
      { text: "Make.com monitors Shopify for carts abandoned over 1 hour", color: "purple" },
      { text: "Checks if order was completed in the meantime — skips if yes", color: "amber" },
      { text: "Fires SAMY webhook → bot sends personalized WhatsApp recovery message with cart link", color: "green" },
    ],
    badges: [
      { label: "Make.com", type: "make" },
      { label: "Shopify API", type: "api" },
      { label: "SAMY Bot", type: "samy" },
    ],
  },
  {
    id: "ai-podcast",
    category: "content",
    icon: "🎙️",
    iconBg: "rgba(127,119,221,0.1)",
    title: "AI podcast / audio content generation",
    industry: "Education · Media · Coaches",
    steps: [
      { text: "n8n scrapes new content in a topic (articles, YouTube transcripts, PDFs)", color: "purple" },
      { text: "GPT-4 writes a conversational script — summary + key insights in client's voice", color: "amber" },
      { text: "ElevenLabs generates Arabic audio with custom cloned voice", color: "amber" },
      { text: "SAMY sends the audio episode to subscribers automatically via WhatsApp", color: "green" },
    ],
    badges: [
      { label: "n8n", type: "n8n" },
      { label: "ElevenLabs", type: "api" },
      { label: "GPT-4", type: "api" },
      { label: "SAMY Broadcast", type: "samy" },
    ],
  },
];

export const tools = [
  {
    id: "n8n",
    icon: "n8n",
    iconClass: "ti-n8n",
    title: "n8n",
    description:
      "Self-hosted, no limits on complexity. Best for heavy pipelines, AI chains, and anything needing custom code nodes.",
    tags: ["Self-hosted", "Code nodes", "AI ready"],
  },
  {
    id: "make",
    icon: "Mk",
    iconClass: "ti-make",
    title: "Make.com",
    description:
      "Visual builder perfect for scheduled flows, eCommerce triggers, and any pipeline the client wants to manage themselves later.",
    tags: ["Scheduler", "Visual", "1000+ apps"],
  },
  {
    id: "zapier",
    icon: "Zp",
    iconClass: "ti-zap",
    title: "Zapier",
    description:
      "Best when the client manages their own automations. Simple, reliable, and connects almost any app to SAMY via webhook.",
    tags: ["Client-friendly", "6000+ apps", "No code"],
  },
  {
    id: "api",
    icon: "API",
    iconClass: "ti-api",
    title: "Custom Integrations",
    description:
      "When no tool covers it — we build direct API connections, custom scrapers, or purpose-built microservices.",
    tags: ["Any API", "Scrapers", "Microservices"],
  },
];

export const bookingSteps = [
  { num: "01", title: "Book a call", desc: "Free 30-min discovery session" },
  { num: "02", title: "Get a quote", desc: "Scoped & priced via WhatsApp" },
  { num: "03", title: "We deliver", desc: "Built, tested, documented" },
];
