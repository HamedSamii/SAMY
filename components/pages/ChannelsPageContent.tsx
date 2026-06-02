"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    title: "Connect on Every Channel Your Customers Use",
    logo: "Logo",
    integration: "Integration",
    channels: [
      ["WhatsApp", "Automate the world's most popular chat app"],
      ["Instagram", "DMs, comments, stories, mentions"],
      ["Facebook Messenger", "Page, ads, comments automation"],
      ["Telegram", "High-quality service via Telegram bots"],
      ["WebChat", "Live chat on your website"],
      ["Email", "Email automation and sequences"],
      ["SMS", "SMS bot for customer experience"],
      ["Voice", "IVR and voice automation"],
      ["Slack", "Internal team automation"],
      ["Viber", "Viber business automation"],
      ["WeChat", "WeChat for business"],
      ["Line", "Line messaging automation"],
    ] as const,
  },
  ar: {
    title: "تواصل على كل القنوات اللي يستخدمها عملاؤك",
    logo: "شعار",
    integration: "تكامل",
    channels: [
      ["واتساب", "أتمتة أكثر تطبيق محادثة شعبية"],
      ["انستجرام", "رسائل، تعليقات، ستوريز، منشن"],
      ["فيسبوك ماسنجر", "صفحة، إعلانات، تعليقات"],
      ["تيليجرام", "خدمة عالية الجودة عبر بوتات تيليجرام"],
      ["ويب شات", "شات مباشر على موقعك"],
      ["إيميل", "أتمتة الإيميل والتسلسلات"],
      ["SMS", "بوت SMS لتجربة العميل"],
      ["صوت", "IVR وأتمتة صوتية"],
      ["سلاك", "أتمتة الفريق الداخلي"],
      ["فايبر", "أتمتة Viber للأعمال"],
      ["وي تشات", "وي تشات للأعمال"],
      ["لاين", "أتمتة رسائل Line"],
    ] as const,
  },
} satisfies Record<Lang, Record<string, unknown>>;

export function ChannelsPageContent() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="space-y-6 py-6">
      <h1 className="mkt-scale-heading text-3xl font-bold">{t.title as string}</h1>
      <div className="mkt-grid-3 grid grid-cols-3 gap-4">
        {(t.channels as readonly (readonly [string, string])[]).map(([name, desc]) => (
          <div key={name} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="mb-3 grid h-14 place-items-center rounded bg-[var(--surface2)] text-xs">
              {t.logo as string}
            </div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-[var(--muted)]">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mkt-grid-6 grid grid-cols-6 gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid h-12 place-items-center rounded bg-[var(--surface2)] text-xs">
            {t.integration as string}
          </div>
        ))}
      </div>
    </div>
  );
}
