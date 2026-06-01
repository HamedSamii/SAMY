import type { Lang } from "@/lib/i18n";
import type { Localized } from "@/lib/locale";

export type CasesPageCopy = {
  kicker: string;
  titleLine1: string;
  titleEm: string;
  sub: string;
  readCase: string;
  ctaTitle: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  backToAll: string;
  background: string;
  challenges: string;
  howBuilt: string;
  detailCtaTitle: string;
  detailCtaSub: string;
  buildSimilar: string;
};

export const casesPageCopy: Localized<CasesPageCopy> = {
  en: {
    kicker: "Case Studies",
    titleLine1: "Real businesses.",
    titleEm: "Real results.",
    sub: "See how brands across Egypt, Iraq, and the Gulf use SAMY-powered chatbots to automate sales, qualify leads, and deliver better customer experiences — around the clock.",
    readCase: "Read case →",
    ctaTitle: "Your business could be next.",
    ctaSub: "Book a free discovery call — we'll map out your automation and show you what's possible.",
    ctaPrimary: "Book a Free Call",
    ctaSecondary: "WhatsApp Us ↗",
    backToAll: "← All case studies",
    background: "Background",
    challenges: "Challenges",
    howBuilt: "How we built it",
    detailCtaTitle: "Want similar results for your business?",
    detailCtaSub: "We'll map your workflow and show you what a SAMY-powered bot can automate.",
    buildSimilar: "Build a similar bot ↗",
  },
  ar: {
    kicker: "قصص النجاح",
    titleLine1: "شركات حقيقية.",
    titleEm: "نتائج حقيقية.",
    sub: "شوف كيف العلامات في مصر والعراق والخليج تستخدم شات بوت SAMY لأتمتة المبيعات وتأهيل العملاء وتقديم تجربة أفضل — على مدار الساعة.",
    readCase: "← اقرأ القصة",
    ctaTitle: "بيزنسك ممكن يكون التالي.",
    ctaSub: "احجز مكالمة اكتشاف مجانية — نرسم لك الأتمتة ونشوف وش ممكن نحققه.",
    ctaPrimary: "احجز مكالمة مجانية",
    ctaSecondary: "تواصل واتساب ↗",
    backToAll: "→ كل قصص النجاح",
    background: "الخلفية",
    challenges: "التحديات",
    howBuilt: "كيف بنيناه",
    detailCtaTitle: "تبي نتائج مشابهة لبيزنسك؟",
    detailCtaSub: "نرسم لك الوركفلو ونشوف وش يقدر بوت SAMY يأتمت لك.",
    buildSimilar: "ابني بوت مشابه ↗",
  },
};

export type AcademyPageCopy = {
  badge: string;
  titleLine1: string;
  titleEm: string;
  titleLine2: string;
  sub: string;
  searchPlaceholder: string;
  allCourses: string;
  levelTag: string;
  courseCount: (n: number) => string;
  lessonCount: (n: number) => string;
  free: string;
  empty: string;
};

export const academyPageCopy: Localized<AcademyPageCopy> = {
  en: {
    badge: "Samy Training Hub",
    titleLine1: "Learn ",
    titleEm: "Samy",
    titleLine2: "from Scratch to Advanced",
    sub: "Free hands-on courses covering chatbot automation, AI agents, omnichannel integrations, and everything in between.",
    searchPlaceholder: "Search courses…",
    allCourses: "All Courses",
    levelTag: "Level",
    courseCount: (n) => `${n} Course${n !== 1 ? "s" : ""}`,
    lessonCount: (n) => `${n} lesson${n !== 1 ? "s" : ""}`,
    free: "Free",
    empty: "No courses match your search. Try a different keyword or category.",
  },
  ar: {
    badge: "مركز تدريب Samy",
    titleLine1: "تعلّم ",
    titleEm: "Samy",
    titleLine2: "من الصفر للاحتراف",
    sub: "دورات عملية مجانية تغطي أتمتة الشات بوت، الأجنت الذكي، التكاملات متعددة القنوات، وكل ما بينهم.",
    searchPlaceholder: "ابحث في الدورات…",
    allCourses: "كل الدورات",
    levelTag: "المستوى",
    courseCount: (n) => `${n} دورة`,
    lessonCount: (n) => `${n} درس`,
    free: "مجاني",
    empty: "ما فيه دورات تطابق بحثك. جرّب كلمة أو فئة ثانية.",
  },
};

export type IntegrationsPageCopy = {
  badge: string;
  title: string;
  sub: string;
  countLabel: (n: number) => string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSub: string;
  ctaDetail: string;
  ctaPrimary: string;
  ctaSecondary: string;
  filterLabels: Record<string, string>;
};

export const integrationsPageCopy: Localized<IntegrationsPageCopy> = {
  en: {
    badge: "500+ Integrations",
    title: "Connect All Your Tools",
    sub: "Centralize all your data. Easily connect Samy to your existing tools and automate everything.",
    countLabel: (n) => `${n} integration${n !== 1 ? "s" : ""}`,
    ctaEyebrow: "No coding required · 4 minutes",
    ctaTitle: "Missing an Integration? Build Your Own—No-Code.",
    ctaSub: "Design, test, and publish custom integrations in minutes with our intuitive visual builder. No developers required—just your creativity.",
    ctaDetail:
      "Can't find the integration you need? With Mini Apps, our visual flow builder lets you design, authenticate, and publish seamless integrations tailored to your workflow—without writing a single line of code.",
    ctaPrimary: "Create Custom Integrations",
    ctaSecondary: "Request an Integration",
    filterLabels: {
      all: "All",
      ai: "AI",
      "voice-sms": "Voice / SMS",
      ecommerce: "eCommerce",
      email: "Email",
      payments: "Payments",
      map: "Maps",
      calendar: "Calendar",
      storage: "Storage",
      "integration-platform": "Automation",
      "live-chat": "Live Chat",
      crm: "CRM",
      others: "Others",
    },
  },
  ar: {
    badge: "+500 تكامل",
    title: "اربط كل أدواتك",
    sub: "جمّع بياناتك في مكان واحد. اربط Samy بأدواتك الحالية وأتمت كل شيء بسهولة.",
    countLabel: (n) => `${n} تكامل`,
    ctaEyebrow: "بدون كود · 4 دقائق",
    ctaTitle: "ما لقيت التكامل اللي تحتاجه؟ ابنه بنفسك — بدون كود.",
    ctaSub: "صمّم، اختبر، وانشر تكاملات مخصصة خلال دقائق عبر منشئنا البصري. ما تحتاج مطورين — بس إبداعك.",
    ctaDetail:
      "ما لقيت التكامل المناسب؟ مع Mini Apps، منشئ الفلو البصري يخليك تصمّم وتفوّض وتنشر تكاملات على مقاس شغلك — بدون سطر كود واحد.",
    ctaPrimary: "أنشئ تكاملات مخصصة",
    ctaSecondary: "اطلب تكامل",
    filterLabels: {
      all: "الكل",
      ai: "ذكاء اصطناعي",
      "voice-sms": "صوت / SMS",
      ecommerce: "تجارة إلكترونية",
      email: "إيميل",
      payments: "مدفوعات",
      map: "خرائط",
      calendar: "تقويم",
      storage: "تخزين",
      "integration-platform": "أتمتة",
      "live-chat": "شات مباشر",
      crm: "CRM",
      others: "أخرى",
    },
  },
};

export type FooterCopy = {
  tagline: string;
  copyright: string;
  columns: string[][];
};

export const footerCopy: Localized<FooterCopy> = {
  en: {
    tagline: "Smarter Chats. Bigger Growth.",
    copyright: "Samy © 2025. All rights reserved.",
    columns: [
      ["Samy Overview", "AI Sales and Support", "Chat Inbox", "Flow Builder", "CRM Pipeline", "About Us"],
      ["WhatsApp Automation", "Instagram Automation", "All Channels", "Become a Partner", "Find a Partner"],
      ["Pricing", "Client Reviews", "Customer Cases", "Samy Expert Services", "Shopify Integration", "All Integrations"],
      ["Get a Demo", "Academy", "Knowledge Base", "Blogs", "Support", "API & SDK"],
      ["Chat on WhatsApp", "Email Us", "YouTube", "Terms of Use", "Privacy Policy", "Refund Policy"],
    ],
  },
  ar: {
    tagline: "محادثات أذكى. نمو أكبر.",
    copyright: "Samy © 2025. جميع الحقوق محفوظة.",
    columns: [
      ["نظرة عامة", "مبيعات ودعم AI", "صندوق المحادثات", "منشئ الفلو", "CRM Pipeline", "من نحن"],
      ["أتمتة واتساب", "أتمتة انستجرام", "كل القنوات", "كن شريكاً", "ابحث عن شريك"],
      ["الأسعار", "آراء العملاء", "قصص النجاح", "خدمات Samy", "تكامل Shopify", "كل التكاملات"],
      ["احجز عرضاً", "الأكاديمية", "قاعدة المعرفة", "المدونة", "الدعم", "API & SDK"],
      ["تواصل واتساب", "راسلنا", "يوتيوب", "الشروط", "الخصوصية", "سياسة الاسترداد"],
    ],
  },
};

export function getCasesPageCopy(lang: Lang) {
  return casesPageCopy[lang];
}

export function getAcademyPageCopy(lang: Lang) {
  return academyPageCopy[lang];
}

export function getIntegrationsPageCopy(lang: Lang) {
  return integrationsPageCopy[lang];
}

export function getFooterCopy(lang: Lang) {
  return footerCopy[lang];
}
