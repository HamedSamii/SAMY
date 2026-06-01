import type { Lang } from "@/lib/i18n";
import type { Localized } from "@/lib/locale";

export type FeaturesBentoCopy = {
  flowStrip: { trigger: string; message: string; condition: string; action: string; handoff: string };
  automation: {
    cat: string;
    title: string;
    desc: string;
    tags: string[];
    cta: string;
    explore: string;
  };
  ai: {
    cat: string;
    prompt: string;
    arr: string;
    resp: string;
    title: string;
    desc: string;
    tags: string[];
    cta: string;
    explore: string;
  };
  channels: { cat: string; title: string; desc: string; tags: string[]; cta: string; explore: string };
  live: {
    queueTitle: string;
    active: string;
    inquiry1: string;
    inquiry2: string;
    badgeBot: string;
    badgeHandoff: string;
    cat: string;
    title: string;
    desc: string;
    tags: string[];
    cta: string;
    explore: string;
  };
  analytics: {
    conversations: string;
    resolution: string;
    avgResponse: string;
    cat: string;
    title: string;
    desc: string;
    tags: string[];
    cta: string;
    explore: string;
  };
  integrations: { cat: string; title: string; desc: string; tags: string[]; cta: string; explore: string };
  bottomCta: { urgency: string; title: string; titleEm: string; primary: string; secondary: string };
};

export const featuresBentoCopy: Localized<FeaturesBentoCopy> = {
  en: {
    flowStrip: {
      trigger: "⚡ Trigger",
      message: "💬 Message",
      condition: "⚙ Condition",
      action: "✓ Action",
      handoff: "👤 Handoff",
    },
    automation: {
      cat: "Automation",
      title: "Flow Builder — Visual drag-and-drop logic editor",
      desc: "Build complete conversation flows by dragging nodes onto a canvas and connecting them. 7 node types, 3 flow patterns, publish/draft system.",
      tags: ["Sub Flow", "Workflow", "Function Flow", "7 nodes", "Publish / Draft"],
      cta: "→ Try the interactive builder",
      explore: "⤢ Open builder",
    },
    ai: {
      cat: "AI",
      prompt: "You are a helpful sales agent. Answer from the knowledge base only.",
      arr: "→ AI responds in 0.4s",
      resp: "Yes! The Floral Dress (SKU-2241) is available in M. Want to order? 🌸",
      title: "AI Hub",
      desc: "Full AI agents with web search, MCP servers, and knowledge base. Auto-suggests replies to human agents in real time.",
      tags: ["AI Agents", "MCP Servers", "Knowledge Base"],
      cta: "→ Explore AI Hub",
      explore: "⤢ Explore",
    },
    channels: {
      cat: "Channels",
      title: "Omni Channel",
      desc: "Build once, deploy to 15+ channels. WhatsApp, Instagram, Facebook, Voice AI, SMS, Telegram, TikTok and more.",
      tags: ["15+ channels", "Build once", "Per-channel config"],
      cta: "→ All channels",
      explore: "⤢ Explore",
    },
    live: {
      queueTitle: "Live Queue",
      active: "3 active",
      inquiry1: "Ahmed K. — order inquiry",
      inquiry2: "Sara M. — refund request",
      badgeBot: "Bot",
      badgeHandoff: "Handoff",
      cat: "Human",
      title: "Live Chat & Handoff",
      desc: "Seamless bot-to-agent handoff with full context. AI suggests replies to agents in real time. Agent groups and queue management.",
      tags: ["Smart handoff", "Agent groups", "AI suggestions"],
      cta: "→ See handoff demo",
      explore: "⤢ Explore",
    },
    analytics: {
      conversations: "Conversations",
      resolution: "Resolution",
      avgResponse: "Avg response",
      cat: "Analytics",
      title: "Analytics & Reporting — Complete visibility into every conversation",
      desc: "Real-time dashboards, agent performance reports, channel breakdown, custom reports, activity heatmaps, and live feed. Know exactly how your bot performs.",
      tags: ["Real-time", "Agent performance", "Custom reports", "Heatmap", "Live feed"],
      cta: "→ View analytics dashboard",
      explore: "⤢ Explore",
    },
    integrations: {
      cat: "Connect",
      title: "30+ Integrations — Connect everything your business uses",
      desc: "AI models, ecommerce, payments, CRM, databases, email, and automation platforms. One-click connect for most integrations — no developer needed.",
      tags: ["One-click", "Inbound webhooks", "No-code", "API access"],
      cta: "→ Browse all integrations",
      explore: "⤢ Explore",
    },
    bottomCta: {
      urgency: "Only 3 new clients this month",
      title: "Ready to build your ",
      titleEm: "smarter agent?",
      primary: "Build your agent free →",
      secondary: "See pricing",
    },
  },
  ar: {
    flowStrip: {
      trigger: "⚡ محفّز",
      message: "💬 رسالة",
      condition: "⚙ شرط",
      action: "✓ إجراء",
      handoff: "👤 تحويل",
    },
    automation: {
      cat: "أتمتة",
      title: "منشئ التدفقات — محرر منطق بصري بالسحب والإفلات",
      desc: "ابنِ تدفقات محادثة كاملة بسحب العقد على اللوحة وربطها. 7 أنواع عقد، 3 أنماط تدفق، نظام نشر/مسودة.",
      tags: ["تدفق فرعي", "سير عمل", "تدفق وظائف", "7 عقد", "نشر / مسودة"],
      cta: "← جرّب المنشئ التفاعلي",
      explore: "⤢ افتح المنشئ",
    },
    ai: {
      cat: "ذكاء اصطناعي",
      prompt: "أنت وكيل مبيعات مساعد. أجب من قاعدة المعرفة فقط.",
      arr: "← الذكاء الاصطناعي يرد خلال 0.4 ث",
      resp: "أيوه! فستان Floral (كود 2241) متوفر بمقاس M. تحبي أضيفه للطلب؟ 🌸",
      title: "مركز الذكاء الاصطناعي",
      desc: "وكلاء ذكاء اصطناعي كاملون مع بحث الويب وخوادم MCP وقاعدة المعرفة. يقترح ردوداً على الوكلاء البشريين في الوقت الفعلي.",
      tags: ["وكلاء AI", "خوادم MCP", "قاعدة المعرفة"],
      cta: "← استكشف مركز AI",
      explore: "⤢ استكشف",
    },
    channels: {
      cat: "قنوات",
      title: "قنوات متعددة",
      desc: "ابنِ مرة واحدة وانشر على +15 قناة. واتساب، انستجرام، فيسبوك، Voice AI، SMS، تيليجرام، تيك توك والمزيد.",
      tags: ["+15 قناة", "ابنِ مرة", "إعداد لكل قناة"],
      cta: "← كل القنوات",
      explore: "⤢ استكشف",
    },
    live: {
      queueTitle: "طابور مباشر",
      active: "3 نشطة",
      inquiry1: "أحمد ك. — استفسار طلب",
      inquiry2: "سارة م. — طلب استرداد",
      badgeBot: "بوت",
      badgeHandoff: "تحويل",
      cat: "بشري",
      title: "شات مباشر وتحويل",
      desc: "تحويل سلس من البوت للوكيل مع السياق الكامل. الذكاء الاصطناعي يقترح ردوداً للوكلاء. مجموعات وكلاء وإدارة طابور.",
      tags: ["تحويل ذكي", "مجموعات وكلاء", "اقتراحات AI"],
      cta: "← شاهد عرض التحويل",
      explore: "⤢ استكشف",
    },
    analytics: {
      conversations: "محادثات",
      resolution: "حل المشكلات",
      avgResponse: "متوسط الرد",
      cat: "تحليلات",
      title: "التحليلات والتقارير — رؤية كاملة لكل محادثة",
      desc: "لوحات فورية، تقارير أداء الوكلاء، تفصيل القنوات، تقارير مخصصة، خرائط حرارية وبث مباشر. اعرف أداء بوتك بدقة.",
      tags: ["فوري", "أداء الوكلاء", "تقارير مخصصة", "خريطة حرارية", "بث مباشر"],
      cta: "← لوحة التحليلات",
      explore: "⤢ استكشف",
    },
    integrations: {
      cat: "ربط",
      title: "+30 تكامل — اربط كل أدوات عملك",
      desc: "نماذج AI، تجارة إلكترونية، مدفوعات، CRM، قواعد بيانات، إيميل ومنصات أتمتة. ربط بنقرة لمعظم التكاملات — بدون مطور.",
      tags: ["نقرة واحدة", "Webhooks واردة", "بدون كود", "وصول API"],
      cta: "← تصفح التكاملات",
      explore: "⤢ استكشف",
    },
    bottomCta: {
      urgency: "3 عملاء جدد فقط هذا الشهر",
      title: "جاهز تبني ",
      titleEm: "وكيلك الأذكى؟",
      primary: "ابني وكيلك مجاناً ←",
      secondary: "شوف الأسعار",
    },
  },
};

export function getFeaturesBentoCopy(lang: Lang): FeaturesBentoCopy {
  return featuresBentoCopy[lang];
}
