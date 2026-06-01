import type { Lang } from "@/lib/i18n";
import { pick, type Localized } from "@/lib/locale";
import {
  YEARLY_DISCOUNT,
  getYearlyPrice,
  plans,
  type Plan,
  enterprisePlan,
  faqs,
  comparisonSections,
  type ComparisonSection,
  comparisonPlanLabels,
  comparisonPlanKeys,
  type ComparisonPlanKey,
} from "@/lib/pricing-data";

type BillingCycle = "monthly" | "yearly";
type FaqItem = (typeof faqs)[number];

export type PricingPageCopy = {
  hero: {
    eyebrow: string;
    h1: string;
    h1Accent: string;
    sub: string;
  };
  billingToggle: {
    monthly: string;
    yearly: string;
    save: string;
  };
  comparison: {
    title: string;
    subtitle: string;
    featuresLabel: string;
  };
  faqTitle: string;
  enterpriseStrip: {
    customPriceLabel: string;
    pricingForScaleLabel: string;
  };
  ctaSection: {
    title: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    socialProof: string;
  };
  planCard: {
    popularBadge: string;
    contactsLabel: string;
    billedMonthly: string;
    billedAnnually: (monthlyPrice: number | null) => string;
  };
};

const savePercent = Math.round((1 - YEARLY_DISCOUNT) * 100);

const pageCopyByLang: Localized<PricingPageCopy> = {
  en: {
    hero: {
      eyebrow: "Simple, Transparent Pricing",
      h1: "The right plan for your",
      h1Accent: "business",
      sub: "Start free for 14 days. No credit card required.",
    },
    billingToggle: {
      monthly: "Monthly",
      yearly: "Yearly",
      save: `Save ${savePercent}%`,
    },
    comparison: {
      title: "Full Plan Comparison",
      subtitle: "See exactly what's included in every plan.",
      featuresLabel: "Features",
    },
    faqTitle: "Frequently Asked Questions",
    enterpriseStrip: {
      customPriceLabel: "Custom",
      pricingForScaleLabel: "pricing for your scale",
    },
    ctaSection: {
      title: "Ready to automate your business?",
      sub: "Join hundreds of businesses across the Gulf using Samy.",
      primaryCta: "Start Free Trial - 14 Days",
      secondaryCta: "Book a Demo",
      socialProof: "Trusted by 200+ businesses in KSA, UAE & Egypt",
    },
    planCard: {
      popularBadge: "Most Popular",
      contactsLabel: "contacts",
      billedMonthly: "Billed monthly",
      billedAnnually: (monthlyPrice: number | null) =>
        monthlyPrice == null
          ? "Billed annually"
          : `Billed annually ($${getYearlyPrice(monthlyPrice)}/mo)`,
    },
  },
  ar: {
    hero: {
      eyebrow: "تسعير بسيط وواضح",
      h1: "الخطة المناسبة",
      h1Accent: "لعملك",
      sub: "ابدأ مجاناً لمدة 14 يوماً. لا حاجة لبطاقة ائتمان.",
    },
    billingToggle: {
      monthly: "شهري",
      yearly: "سنوي",
      save: `وفر ${savePercent}%`,
    },
    comparison: {
      title: "مقارنة كاملة بين الخطط",
      subtitle: "اعرف بالضبط ما الذي تتضمنه كل خطة.",
      featuresLabel: "المميزات",
    },
    faqTitle: "الأسئلة الشائعة",
    enterpriseStrip: {
      customPriceLabel: "سعر مخصص",
      pricingForScaleLabel: "تسعير مناسب لحجم أعمالك",
    },
    ctaSection: {
      title: "جاهز لأتمتة أعمالك؟",
      sub: "انضم إلى مئات الشركات في الخليج التي تستخدم Samy.",
      primaryCta: "ابدأ التجربة المجانية - 14 يوماً",
      secondaryCta: "احجز عرضاً",
      socialProof: "موثوق من +200 شركة في السعودية والإمارات ومصر",
    },
    planCard: {
      popularBadge: "الأكثر اختياراً",
      contactsLabel: "جهة اتصال",
      billedMonthly: "يتم الدفع شهرياً",
      billedAnnually: (monthlyPrice: number | null) =>
        monthlyPrice == null
          ? "يتم الدفع سنوياً"
          : `يتم الدفع سنوياً (${getYearlyPrice(monthlyPrice)}$/شهرياً)`,
    },
  },
};

const planArabicContent: Record<
  string,
  Pick<Plan, "name" | "tagline" | "cta" | "features">
> = {
  starter: {
    name: "المبتدئة",
    tagline: "أرسل الرسائل لآلاف العملاء وزد من وصولك بسهولة.",
    cta: "ابدأ التجربة المجانية",
    features: [
      "يشمل 5 أعضاء فريق",
      "وكلاء ذكاء اصطناعي وروبوتات دردشة متعددة",
      "واتساب وفيسبوك وإنستغرام وتيليجرام",
      "تدفقات غير محدودة",
      "رسائل جماعية",
      "إعداد علامة واتساب الزرقاء مجاناً",
      "دعم بريد إلكتروني 24×5",
    ],
  },
  growth: {
    name: "النمو",
    tagline: "أنشئ الأتمتة والتكاملات واحصل على تحليلات قوية.",
    cta: "ابدأ التجربة المجانية",
    features: [
      "كل ما في خطة المبتدئة",
      "Zapier وMake وPabbly وأكثر من 40 أداة",
      "تكامل Shopify وWooCommerce",
      "Stripe وRazorpay وحلول الدفع",
      "لوحة تحليلات",
      "OpenAI وClaude AI وGemini",
      "دعم بريد إلكتروني ودردشة 24×5",
    ],
  },
  scale: {
    name: "التوسع",
    tagline: "سير عمل متقدم وأتمتة بمستوى المؤسسات بسرعة عالية.",
    cta: "ابدأ التجربة المجانية",
    features: [
      "كل ما في خطة النمو",
      "دعم مخصص لمرحلة الإعداد",
      "تكاملات API للمؤسسات",
      "استعادة السلات المتروكة",
      "تقارير مخصصة متقدمة",
      "5 ساعات تنفيذ شهرياً",
      "دعم أولوية 24×5 مع TAM",
    ],
  },
};

const plansByLang: Localized<Plan[]> = {
  en: plans,
  ar: plans.map((plan) => {
    const translated = planArabicContent[plan.id];
    return translated
      ? { ...plan, ...translated }
      : { ...plan };
  }),
};

const enterprisePlanByLang: Localized<typeof enterprisePlan> = {
  en: enterprisePlan,
  ar: {
    name: "المؤسسات",
    title: "حجم مخصص ودعم مخصص بالكامل.",
    description:
      "إرشاد استراتيجي، اتفاقية مستوى خدمة للمؤسسات، إعداد مخصص، وإدارة حساب تقنية مصممة حسب حجم أعمالك.",
    cta: "احجز عرضاً توضيحياً ←",
    ctaHref: enterprisePlan.ctaHref,
  },
};

const faqsByLang: Localized<FaqItem[]> = {
  en: faqs,
  ar: [
    {
      q: "هل يمكنني تغيير خطتي لاحقاً؟",
      a: "نعم، يمكنك الترقية أو التخفيض في أي وقت من لوحة التحكم، وتُطبق التغييرات فوراً.",
    },
    {
      q: "ماذا يحدث إذا تجاوزت حد جهات الاتصال؟",
      a: "سنقوم بإشعارك قبل الوصول إلى الحد. يمكنك الترقية للخطة التالية أو شراء إضافة جهات اتصال.",
    },
    {
      q: "هل توجد تجربة مجانية؟",
      a: "نعم! جميع الخطط تشمل تجربة مجانية لمدة 14 يوماً، ولا تحتاج إلى بطاقة ائتمان للبدء.",
    },
    {
      q: "ماذا يُقصد بـ \"جهة اتصال\"؟",
      a: "جهة الاتصال هي أي مستخدم فريد أرسل أو استقبل رسالة عبر حسابك في Samy.",
    },
    {
      q: "هل أحتاج إلى حساب WhatsApp Business API؟",
      a: "نعم، لكننا نساعدك في الإعداد مجاناً، بما في ذلك دعم توثيق العلامة الزرقاء.",
    },
    {
      q: "ما طرق الدفع التي تقبلونها؟",
      a: "نقبل جميع بطاقات الائتمان الرئيسية وPayPal والتحويلات البنكية لخطط المؤسسات.",
    },
  ],
};

const comparisonSectionTitlesAr: Record<string, string> = {
  "Core Platform": "المنصة الأساسية",
  "WhatsApp Channel": "قناة واتساب",
  "Social Channels": "القنوات الاجتماعية",
  "Other Channels": "قنوات أخرى",
  "Advanced Tools": "أدوات متقدمة",
  "eCommerce & Payments": "التجارة الإلكترونية والمدفوعات",
  "AI & Integrations": "الذكاء الاصطناعي والتكاملات",
  "Team Collaboration": "تعاون الفريق",
  "Support & Onboarding": "الدعم والتهيئة",
};

const comparisonFeatureLabelsAr: Record<string, string> = {
  "Contacts / Leads": "جهات الاتصال / العملاء المحتملون",
  "Team Members (included)": "أعضاء الفريق (المتضمنون)",
  "Additional Users": "مستخدمون إضافيون",
  "Unlimited Flows": "تدفقات غير محدودة",
  "Multiple AI Agents": "وكلاء ذكاء اصطناعي متعددون",
  "Unified Omnichannel Inbox": "صندوق وارد موحد متعدد القنوات",
  "Broadcast Messaging": "رسائل جماعية",
  "Automation & Sequences": "الأتمتة والتسلسلات",
  "User Tagging & Segments": "وسوم المستخدمين والشرائح",
  "Live Chat & Web Widget": "دردشة مباشرة وويدجت الويب",
  "WhatsApp Cloud API": "WhatsApp Cloud API",
  "WhatsApp Chatbots": "روبوتات دردشة واتساب",
  "Blue Tick Verification Support": "دعم توثيق العلامة الزرقاء",
  "Click-to-WhatsApp Ads (CTWA)": "إعلانات النقر إلى واتساب (CTWA)",
  "Round-robin Assignment": "توزيع دوري للمحادثات",
  "In-Chat Commerce": "التجارة داخل المحادثة",
  "WhatsApp Catalog": "كتالوج واتساب",
  "Order Management": "إدارة الطلبات",
  "Instagram Direct Messages": "رسائل إنستغرام المباشرة",
  "Instagram Comments": "تعليقات إنستغرام",
  "Story Mentions Reply": "الرد على منشن القصص",
  "Facebook Messenger": "فيسبوك ماسنجر",
  "Facebook Comments": "تعليقات فيسبوك",
  "Click-to-Messenger Ads": "إعلانات النقر إلى ماسنجر",
  "Facebook Paid Messages": "رسائل فيسبوك المدفوعة",
  "Facebook Business Integration": "تكامل Facebook Business",
  Telegram: "تيليجرام",
  Slack: "سلاك",
  WeChat: "وي تشات",
  Viber: "فايبر",
  Line: "لاين",
  Voice: "صوتي",
  RCS: "RCS",
  "Email & SMS": "البريد الإلكتروني والرسائل النصية",
  "Analytics Dashboard": "لوحة التحليلات",
  "Custom Reports": "تقارير مخصصة",
  "AI Hubs": "مراكز الذكاء الاصطناعي",
  "Mini Apps & Integrations": "تطبيقات مصغرة وتكاملات",
  "Inbound Webhooks": "ويب هوك واردة",
  "Templates & Content Library": "القوالب ومكتبة المحتوى",
  "Meta Conversions API": "Meta Conversions API",
  "Google Tag Manager": "Google Tag Manager",
  "Shopify Integration": "تكامل Shopify",
  "WooCommerce Integration": "تكامل WooCommerce",
  Stripe: "Stripe",
  PayPal: "PayPal",
  Razorpay: "Razorpay",
  "Abandoned Cart Recovery": "استعادة السلات المتروكة",
  "Full E-commerce Automation": "أتمتة كاملة للتجارة الإلكترونية",
  OpenAI: "OpenAI",
  "Claude AI": "Claude AI",
  Gemini: "Gemini",
  DeepSeek: "DeepSeek",
  Dialogflow: "Dialogflow",
  "Eleven Labs": "Eleven Labs",
  Zapier: "Zapier",
  "Make (Integromat)": "Make (Integromat)",
  "Pabbly Connect": "Pabbly Connect",
  "Google Sheets": "Google Sheets",
  Calendly: "Calendly",
  "Go High Level": "Go High Level",
  Twilio: "Twilio",
  SendGrid: "SendGrid",
  Mailchimp: "Mailchimp",
  "Workspaces & Roles": "مساحات العمل والأدوار",
  "Multilingual Dashboard": "لوحة تحكم متعددة اللغات",
  "Pipelines / Boards": "مسارات العمل / اللوحات",
  "Quick Replies": "ردود سريعة",
  "Export Chats": "تصدير المحادثات",
  "Agent Group Chat": "دردشة جماعية للوكلاء",
  "Ticket System": "نظام التذاكر",
  "Documentation & Bot Support": "التوثيق ودعم البوت",
  "Email Support": "دعم عبر البريد الإلكتروني",
  "Chat Support": "دعم عبر الدردشة",
  "Priority 24×5 Support": "دعم أولوية 24×5",
  "Dedicated Customer Success Manager": "مدير نجاح عملاء مخصص",
  "Guided Onboarding": "تهيئة موجهة",
  "Custom Onboarding & Setup": "تهيئة وإعداد مخصصان",
  "Monthly Implementation Support": "دعم تنفيذ شهري",
};

const comparisonSectionsByLang: Localized<ComparisonSection[]> = {
  en: comparisonSections,
  ar: comparisonSections.map((section) => ({
    title: comparisonSectionTitlesAr[section.title] ?? section.title,
    rows: section.rows.map((row) => ({
      ...row,
      feature: comparisonFeatureLabelsAr[row.feature] ?? row.feature,
    })),
  })),
};

const comparisonPlanLabelsByLang: Localized<Record<ComparisonPlanKey, string>> = {
  en: comparisonPlanLabels,
  ar: {
    starter: "المبتدئة",
    growth: "النمو",
    scale: "التوسع",
  },
};

export function getPricingPageCopy(lang: Lang): PricingPageCopy {
  return pick(pageCopyByLang, lang);
}

export function getPlans(lang: Lang): Plan[] {
  return pick(plansByLang, lang);
}

export function getEnterprisePlan(lang: Lang): typeof enterprisePlan {
  return pick(enterprisePlanByLang, lang);
}

export function getFaqs(lang: Lang): FaqItem[] {
  return pick(faqsByLang, lang);
}

const comparisonCellAr: Record<string, string> = {
  "Add-on": "إضافة",
  "$10/user": "10$/مستخدم",
};

export function localizeComparisonCell(
  val: import("@/lib/pricing-data").ComparisonCell,
  lang: Lang,
): import("@/lib/pricing-data").ComparisonCell {
  if (lang === "en") return val;
  if (typeof val === "string") return comparisonCellAr[val] ?? val;
  if (typeof val === "object" && val !== null && "addon" in val) {
    return { addon: comparisonCellAr[val.addon] ?? val.addon };
  }
  return val;
}

export function getComparisonSections(lang: Lang): ComparisonSection[] {
  const sections = pick(comparisonSectionsByLang, lang);
  if (lang === "en") return sections;
  return sections.map((section) => ({
    ...section,
    rows: section.rows.map((row) => ({
      ...row,
      starter: localizeComparisonCell(row.starter, lang),
      growth: localizeComparisonCell(row.growth, lang),
      scale: localizeComparisonCell(row.scale, lang),
    })),
  }));
}

export function getComparisonPlanLabels(
  lang: Lang,
): Record<ComparisonPlanKey, string> {
  const labels = pick(comparisonPlanLabelsByLang, lang);
  const ordered: Partial<Record<ComparisonPlanKey, string>> = {};

  for (const key of comparisonPlanKeys) {
    ordered[key] = labels[key];
  }

  return ordered as Record<ComparisonPlanKey, string>;
}

export function getBillingPriceLabel(
  lang: Lang,
  cycle: BillingCycle,
  monthlyPrice: number | null,
): string {
  const copy = getPricingPageCopy(lang);
  return cycle === "yearly"
    ? copy.planCard.billedAnnually(monthlyPrice)
    : copy.planCard.billedMonthly;
}
