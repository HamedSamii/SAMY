import type { Lang } from "@/lib/i18n";
import type { Localized } from "@/lib/locale";

export const featuresHeroCopy: Localized<{
  chip: string;
  titleLine1: string;
  titleEm: string;
  sub: string;
  counters: { channels: string; integrations: string; nodes: string; conversations: string };
  categories: { all: string; automation: string; ai: string; channels: string; analytics: string };
}> = {
  en: {
    chip: "★ ALL FEATURES",
    titleLine1: "Everything your bot needs",
    titleEm: "to perform",
    sub: "6 complete systems — each one built for real businesses. Click any card to explore.",
    counters: {
      channels: "Channels",
      integrations: "Integrations",
      nodes: "Node types",
      conversations: "Conversations",
    },
    categories: {
      all: "All",
      automation: "Automation",
      ai: "AI",
      channels: "Channels",
      analytics: "Analytics",
    },
  },
  ar: {
    chip: "★ كل المميزات",
    titleLine1: "كل اللي يحتاجه بوتك",
    titleEm: "لأداء قوي",
    sub: "6 أنظمة كاملة — كل واحد مبني لبيزنس حقيقي. اضغط على أي بطاقة للاستكشاف.",
    counters: {
      channels: "قنوات",
      integrations: "تكاملات",
      nodes: "أنواع العقد",
      conversations: "محادثات",
    },
    categories: {
      all: "الكل",
      automation: "أتمتة",
      ai: "ذكاء اصطناعي",
      channels: "قنوات",
      analytics: "تحليلات",
    },
  },
};

export function getFeaturesHeroCopy(lang: Lang) {
  return featuresHeroCopy[lang];
}
