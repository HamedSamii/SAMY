import type { CaseCategory, FlowStepColor, ToolBadge } from "@/lib/automation-data";
import type { Localized } from "@/lib/locale";

export type AutomationContent = {
  heroBadge: string;
  heroTitleLead: string;
  heroTitleDim: string;
  heroTitleAccent: string;
  heroSub: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  pillarsLabel: string;
  pillarsTitleLine1: string;
  pillarsTitleLine2: string;
  pillarsSub: string;
  casesLabel: string;
  casesTitleLine1: string;
  casesTitleLine2: string;
  toolsLabel: string;
  toolsTitleLine1: string;
  toolsTitleLine2: string;
  pricingLabel: string;
  pricingTitleLine1: string;
  pricingTitleLine2: string;
  pricingHeaderDesc: string;
  pricingCardTitle: string;
  pricingCardDesc: string;
  pricingBookCta: string;
  pricingWhatsAppCta: string;
  pricingNote: string;
  ctaTitle: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  caseTabs: { key: CaseCategory | "all"; label: string }[];
  pillars: { num: string; title: string; description: string }[];
  useCases: {
    id: string;
    category: CaseCategory;
    icon: string;
    iconBg: string;
    title: string;
    industry: string;
    steps: { text: string; color: FlowStepColor }[];
    badges: { label: string; type: ToolBadge }[];
  }[];
  tools: {
    id: string;
    icon: string;
    iconClass: string;
    title: string;
    description: string;
    tags: string[];
  }[];
  bookingSteps: { num: string; title: string; desc: string }[];
};

export const automationContent: Localized<AutomationContent> = {
  en: {
    heroBadge: "Automation Add-ons",
    heroTitleLead: "Your chatbot,",
    heroTitleDim: "connected to",
    heroTitleAccent: "everything.",
    heroSub:
      "SAMY runs your conversations. We build the automation layer behind it — the pipelines, triggers, and workflows that make your whole business run on autopilot.",
    heroPrimaryCta: "Book a Free Discovery Call",
    heroSecondaryCta: "Explore Use Cases ↓",
    pillarsLabel: "What we build",
    pillarsTitleLine1: "Three types of",
    pillarsTitleLine2: "automation we add",
    pillarsSub:
      "These workflows live outside the chatbot — they feed it, extend it, and connect it to everything else in your business.",
    casesLabel: "Real Use Cases",
    casesTitleLine1: "Automations we've",
    casesTitleLine2: "built for clients",
    toolsLabel: "Our Stack",
    toolsTitleLine1: "Tools we use to",
    toolsTitleLine2: "build your pipeline",
    pricingLabel: "Pricing",
    pricingTitleLine1: "Every project is scoped",
    pricingTitleLine2: "on a discovery call",
    pricingHeaderDesc:
      "Automation complexity varies. A simple flow takes 2 hours. A full AI content pipeline takes 2 weeks. We scope it with you — you pay only for what you need.",
    pricingCardTitle: "Let's scope your workflow",
    pricingCardDesc:
      "Tell us what you want to automate — we'll map it out, recommend the right tools, and give you a clear quote.",
    pricingBookCta: "📅 Book a Free Discovery Call",
    pricingWhatsAppCta: "Chat on WhatsApp instead",
    pricingNote: "No fixed pricing — scoped per project after the call",
    ctaTitle: "Got a workflow in mind?",
    ctaSub: "Tell us what you want to automate — we'll figure out how to build it.",
    ctaPrimary: "Book a Free Call",
    ctaSecondary: "WhatsApp Us ↗",
    caseTabs: [
      { key: "all", label: "All" },
      { key: "content", label: "Content Generation" },
      { key: "data", label: "Data Pipelines" },
      { key: "ecom", label: "eCommerce" },
      { key: "crm", label: "CRM & Sales" },
      { key: "schedule", label: "Scheduled Flows" },
    ],
    pillars: [
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
    ],
    useCases: [
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
    ],
    tools: [
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
    ],
    bookingSteps: [
      { num: "01", title: "Book a call", desc: "Free 30-min discovery session" },
      { num: "02", title: "Get a quote", desc: "Scoped & priced via WhatsApp" },
      { num: "03", title: "We deliver", desc: "Built, tested, documented" },
    ],
  },
  ar: {
    heroBadge: "إضافات الأتمتة",
    heroTitleLead: "شات بوتك،",
    heroTitleDim: "موصول بـ",
    heroTitleAccent: "كل شيء.",
    heroSub:
      "SAMY يدير محادثاتك، وإحنا نبني طبقة الأتمتة اللي وراه — البايبلاينات، التريغرز، والوركفلوز اللي تخلي شغلك يمشي أوتوماتيك.",
    heroPrimaryCta: "احجز مكالمة اكتشاف مجانية",
    heroSecondaryCta: "استكشف حالات الاستخدام ↓",
    pillarsLabel: "وش نبني لك",
    pillarsTitleLine1: "ثلاثة أنواع من",
    pillarsTitleLine2: "الأتمتة نضيفها لك",
    pillarsSub:
      "هذي التدفقات تكون خارج الشات بوت نفسه — تغذّيه، توسّعه، وتربطه مع باقي أنظمة البيزنس عندك.",
    casesLabel: "حالات استخدام حقيقية",
    casesTitleLine1: "أتمتات سوّيناها",
    casesTitleLine2: "لعملاء فعليين",
    toolsLabel: "الستاك اللي نشتغل عليه",
    toolsTitleLine1: "الأدوات اللي نستخدمها",
    toolsTitleLine2: "لبناء بايبلاينك",
    pricingLabel: "الأسعار",
    pricingTitleLine1: "كل مشروع يتم تسعيره",
    pricingTitleLine2: "بعد مكالمة اكتشاف",
    pricingHeaderDesc:
      "تعقيد الأتمتة يفرق من حالة لحالة. فيه فلو بسيط يخلص خلال ساعتين، وفيه بايبلاين محتوى ذكاء اصطناعي يأخذ أسبوعين. نحدده معك بدقة — وتدفع فقط على قد احتياجك.",
    pricingCardTitle: "خلّنا نحدد ورڪفلوك",
    pricingCardDesc: "قل لنا وش تبي تأتمت — نرسمه لك، نرشّح الأدوات المناسبة، ونعطيك عرض سعر واضح.",
    pricingBookCta: "📅 احجز مكالمة اكتشاف مجانية",
    pricingWhatsAppCta: "أو تواصل واتساب",
    pricingNote: "ما عندنا سعر ثابت — كل مشروع يتسعّر بعد المكالمة",
    ctaTitle: "في بالك وركفلو معيّن؟",
    ctaSub: "قل لنا وش تبي تأتمت — وإحنا نحدد لك أفضل طريقة نبنيه فيها.",
    ctaPrimary: "احجز مكالمة مجانية",
    ctaSecondary: "تواصل واتساب ↗",
    caseTabs: [
      { key: "all", label: "الكل" },
      { key: "content", label: "توليد المحتوى" },
      { key: "data", label: "بايبلاينات البيانات" },
      { key: "ecom", label: "التجارة الإلكترونية" },
      { key: "crm", label: "إدارة العملاء والمبيعات" },
      { key: "schedule", label: "التدفقات المجدولة" },
    ],
    pillars: [
      {
        num: "01",
        title: "بايبلاينات مجدولة",
        description:
          "وركفلوز تشتغل بوقت محدد — كل ساعة، يوميًا، أو أسبوعيًا. سحب بيانات، مزامنة، توليد محتوى، وإرسال تقارير بدون أي تدخل يدوي.",
      },
      {
        num: "02",
        title: "مصانع بيانات ومحتوى",
        description:
          "بايبلاينات مدعومة بالذكاء الاصطناعي تجمع البيانات الخام، تعالجها بـ LLMs، وتطلع لك محتوى منظّم — مقالات، فيديوهات، ملخصات، أو سجلات قاعدة بيانات.",
      },
      {
        num: "03",
        title: "تنسيق بين عدة أنظمة",
        description:
          "إذا إجراء واحد في نظام يحتاج يشغّل 5 أنظمة وراه بالتسلسل — CRM، مخزون، محاسبة، Slack، WhatsApp — نربطهم لك كسلسلة واحدة متكاملة.",
      },
    ],
    useCases: [
      {
        id: "news-digest",
        category: "data",
        icon: "📰",
        iconBg: "rgba(239,159,39,0.1)",
        title: "ملخّص يومي لأخبار المجال على واتساب",
        industry: "إعلام · تسويق · B2B",
        steps: [
          { text: "n8n cron يشتغل كل صباح الساعة 7", color: "purple" },
          { text: "Web scraper يسحب أفضل 20 مقال بالكلمات المفتاحية من RSS + Google News", color: "amber" },
          { text: "GPT-4 يفلتر المقالات المهمة، يشيل التكرار، ويكتب ملخص عربي من 3 أسطر لكل مقال", color: "amber" },
          { text: "بوت SAMY يرسل الملخص تلقائيًا للمشتركين عبر واتساب", color: "green" },
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
        title: "توليد فيديو تلقائي من كتالوج المنتجات",
        industry: "تجارة إلكترونية · عقار · تعليم",
        steps: [
          { text: "Make.com يراقب المنتجات الجديدة المضافة في Sheets / WooCommerce", color: "purple" },
          { text: "GPT-4 يكتب سكربت قصير بلهجة عربية — خطاف، مزايا، وCTA", color: "amber" },
          { text: "HeyGen أو Runway يولد فيديو 30 ثانية بصوت ذكاء اصطناعي + صور المنتج", color: "amber" },
          { text: "ينحفظ الفيديو في Drive وينرسل الرابط للمشرف عبر SAMY — جاهز للنشر", color: "green" },
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
        title: "إثراء الليد + إدخال تلقائي في CRM",
        industry: "عقار · B2B · خدمات",
        steps: [
          { text: "SAMY يجمع بيانات الليد (الاسم، الجوال، الاهتمام) ثم يرسل webhook لـ n8n", color: "purple" },
          { text: "n8n يفحص LinkedIn، يراجع قاعدة البيانات الحالية، ويقيّم الليد حسب الميزانية والاهتمام", color: "amber" },
          { text: "ينشئ Deal في HubSpot ويوزعها على مندوب المبيعات حسب المنطقة مع توثيق المحادثة", color: "amber" },
          { text: "تنبيه في Slack لفريق المبيعات مع بروفايل الليد الكامل + رابط محادثة SAMY", color: "green" },
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
        title: "الطلب → المخزن → الفاتورة → الإشعار",
        industry: "تجارة إلكترونية · تجزئة · جملة",
        steps: [
          { text: "العميل يطلب عبر بوت SAMY → n8n يستقبل بيانات الطلب", color: "purple" },
          { text: "يرسل الطلب لنظام المخزون ويحدّث الكميات في Sheets/ERP", color: "amber" },
          { text: "يولّد فاتورة PDF عبر API ويرسلها تلقائيًا لإيميل العميل", color: "amber" },
          { text: "SAMY يرسل تأكيد الطلب + رابط التتبع للعميل على واتساب", color: "green" },
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
        title: "مصنع أسبوعي للمقالات ومحتوى السوشال",
        industry: "وكالات · علامات تجارية · مستشارين",
        steps: [
          { text: "n8n يسحب أكثر المواضيع ترندًا في مجال العميل من Reddit وX وGoogle Trends", color: "purple" },
          { text: "GPT-4 يكتب مقال عربي كامل + 5 كابشنات سوشال + 3 نسخ hooks", color: "amber" },
          { text: "ينحفظ المحتوى في Notion/Google Docs للمراجعة وتُولد الصور عبر DALL-E", color: "amber" },
          { text: 'SAMY يبلغ فريق التسويق على واتساب: "هفتة الكونتنت جاهز للمراجعة ✅"', color: "green" },
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
        title: "مزامنة ليلية للبيانات بين كل الأنظمة",
        industry: "أي بيزنس يستخدم أكثر من أداة",
        steps: [
          { text: "Make.com يشتغل منتصف الليل — ويسحب كل جهات الاتصال الجديدة من SAMY", color: "purple" },
          { text: "يشيل التكرار، يثري البيانات، ويزامنها مع HubSpot + Google Sheets + Supabase", color: "amber" },
          { text: "يعلّم جهات الاتصال اللي تحتاج متابعة حسب الحالة أو عدم النشاط", color: "amber" },
          { text: "تقرير صباحي عبر SAMY للمدير: جهات تمت مزامنتها، حالات مميّزة، وملخص عام", color: "green" },
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
        title: "تسلسل استرجاع السلة المتروكة",
        industry: "تجارة إلكترونية · دروبشيبنغ",
        steps: [
          { text: "Make.com يراقب Shopify للسلال المتروكة لأكثر من ساعة", color: "purple" },
          { text: "يتأكد إذا اكتمل الطلب لاحقًا — وإذا تم، يتجاوز الحالة", color: "amber" },
          { text: "يرسل webhook لـ SAMY → البوت يرسل رسالة واتساب مخصصة مع رابط السلة", color: "green" },
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
        title: "توليد بودكاست/محتوى صوتي بالذكاء الاصطناعي",
        industry: "تعليم · إعلام · كوتشز",
        steps: [
          { text: "n8n يسحب المحتوى الجديد في موضوع معين (مقالات، تفريغ يوتيوب، ملفات PDF)", color: "purple" },
          { text: "GPT-4 يكتب سكربت حواري — ملخص + أهم الأفكار بنفس أسلوب العميل", color: "amber" },
          { text: "ElevenLabs يولد صوت عربي باستخدام Voice Clone مخصص", color: "amber" },
          { text: "SAMY يرسل الحلقة الصوتية تلقائيًا للمشتركين عبر واتساب", color: "green" },
        ],
        badges: [
          { label: "n8n", type: "n8n" },
          { label: "ElevenLabs", type: "api" },
          { label: "GPT-4", type: "api" },
          { label: "SAMY Broadcast", type: "samy" },
        ],
      },
    ],
    tools: [
      {
        id: "n8n",
        icon: "n8n",
        iconClass: "ti-n8n",
        title: "n8n",
        description:
          "حل Self-hosted بدون حدود للتعقيد. مناسب جدًا للبايبلاينات الثقيلة، سلاسل الذكاء الاصطناعي، وأي حالة تحتاج code nodes مخصصة.",
        tags: ["Self-hosted", "Code nodes", "جاهز للـ AI"],
      },
      {
        id: "make",
        icon: "Mk",
        iconClass: "ti-make",
        title: "Make.com",
        description:
          "منشئ بصري ممتاز للتدفقات المجدولة، تريغرز التجارة الإلكترونية، وأي بايبلاين العميل يحب يديره بنفسه لاحقًا.",
        tags: ["Scheduler", "Visual", "1000+ تطبيق"],
      },
      {
        id: "zapier",
        icon: "Zp",
        iconClass: "ti-zap",
        title: "Zapier",
        description:
          "أفضل خيار إذا العميل يدير الأتمتة بنفسه. بسيط وموثوق، ويربط تقريبًا أي تطبيق مع SAMY عبر webhook.",
        tags: ["سهل للعميل", "6000+ تطبيق", "بدون كود"],
      },
      {
        id: "api",
        icon: "API",
        iconClass: "ti-api",
        title: "تكاملات مخصصة",
        description:
          "إذا الأدوات الجاهزة ما تكفي — نبني لك ربط مباشر عبر API، سكريبرات خاصة، أو microservices مصممة على المقاس.",
        tags: ["أي API", "Scrapers", "Microservices"],
      },
    ],
    bookingSteps: [
      { num: "01", title: "احجز مكالمة", desc: "جلسة اكتشاف مجانية لمدة 30 دقيقة" },
      { num: "02", title: "استلم عرض السعر", desc: "تحديد النطاق والتسعير عبر واتساب" },
      { num: "03", title: "إحنا ننفّذ", desc: "بناء كامل + اختبار + توثيق" },
    ],
  },
};

export function getAutomationContent(lang: "ar" | "en") {
  return automationContent[lang];
}
