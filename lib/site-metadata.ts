import type { Lang } from "@/lib/i18n";

export type SitePageMeta = { title: string; description: string };

const metaByPath: Record<string, LocalizedMeta> = {
  "/": {
    en: { title: "Samy Agency", description: "AI Chatbot Agency for Arabic Gulf markets" },
    ar: { title: "Samy Agency", description: "وكالة شات بوت ذكية لأسواق الخليج العربي" },
  },
  "/features": {
    en: { title: "Features | Samy", description: "Everything your bot needs to perform — flows, AI, channels, analytics." },
    ar: { title: "المميزات | Samy", description: "كل ما يحتاجه بوتك — تدفقات، ذكاء اصطناعي، قنوات، تحليلات." },
  },
  "/pricing": {
    en: { title: "Pricing | Samy", description: "Simple, transparent pricing. Start free for 14 days." },
    ar: { title: "الأسعار | Samy", description: "تسعير بسيط وواضح. ابدأ مجاناً 14 يوماً." },
  },
  "/automation": {
    en: { title: "Automation | Samy", description: "Custom automation pipelines for your SAMY chatbot." },
    ar: { title: "الأتمتة | Samy", description: "خطوط أتمتة مخصصة لشات بوت SAMY." },
  },
  "/cases": {
    en: { title: "Case Studies | Samy", description: "Real businesses. Real results with SAMY." },
    ar: { title: "قصص النجاح | Samy", description: "شركات حقيقية. نتائج حقيقية مع SAMY." },
  },
  "/academy": {
    en: { title: "Academy | Samy", description: "Free hands-on courses for chatbot automation and AI agents." },
    ar: { title: "الأكاديمية | Samy", description: "دورات عملية مجانية لأتمتة الشات بوت والأجنت الذكي." },
  },
  "/integrations": {
    en: { title: "Integrations | Samy", description: "Connect Samy to 500+ tools your business uses." },
    ar: { title: "التكاملات | Samy", description: "اربط Samy بأكثر من 500 أداة." },
  },
  "/contact": {
    en: { title: "Contact | Samy", description: "Book a discovery call or message us on WhatsApp." },
    ar: { title: "تواصل | Samy", description: "احجز مكالمة أو راسلنا على واتساب." },
  },
  "/build-agent": {
    en: { title: "Build Agent | Samy", description: "Build your bilingual AI agent in minutes." },
    ar: { title: "ابني وكيلك | Samy", description: "ابنِ وكيلك الذكي ثنائي اللغة في دقائق." },
  },
  "/channels": {
    en: { title: "Channels | Samy", description: "Connect on every channel your customers use." },
    ar: { title: "القنوات | Samy", description: "تواصل على كل قنوات عملائك." },
  },
  "/industries": {
    en: { title: "Industries | Samy", description: "AI chatbots tailored to your industry." },
    ar: { title: "القطاعات | Samy", description: "شات بوت مخصص لقطاعك." },
  },
  "/knowledge-base": {
    en: { title: "Knowledge Base | Samy", description: "Help articles and guides." },
    ar: { title: "قاعدة المعرفة | Samy", description: "مقالات ودلائل المساعدة." },
  },
  "/login": {
    en: { title: "Login | Samy", description: "Sign in to your Samy account." },
    ar: { title: "تسجيل الدخول | Samy", description: "سجّل دخولك إلى حساب Samy." },
  },
};

type LocalizedMeta = Record<Lang, SitePageMeta>;

export function getSitePageMeta(pathname: string, lang: Lang): SitePageMeta {
  const base = metaByPath[pathname];
  if (base) return base[lang];

  if (pathname.startsWith("/academy/")) {
    return lang === "ar"
      ? { title: "دورة | Samy Academy", description: "تعلّم Samy من الصفر للاحتراف." }
      : { title: "Course | Samy Academy", description: "Learn Samy from scratch to advanced." };
  }
  if (pathname.startsWith("/cases/")) {
    return lang === "ar"
      ? { title: "قصة نجاح | Samy", description: "كيف حققت شركة نتائج مع SAMY." }
      : { title: "Case Study | Samy", description: "How a business achieved results with SAMY." };
  }

  return metaByPath["/"][lang];
}
