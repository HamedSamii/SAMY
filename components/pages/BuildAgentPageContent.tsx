"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    title: "Build Your AI Agent in Minutes",
    sub: "No coding required. Choose your industry, customize your bot, go live.",
    step1: "Step 1 — Choose Industry",
    step2: "Step 2 — Configure",
    step3: "Step 3 — Preview & Launch",
    botName: "Bot name",
    primaryChannel: "Primary channel",
    language: "Language",
    tone: "Tone",
    preview: "Chat preview mockup",
    connect: "Connect to app.samy.agency",
    industries: ["E-commerce", "Real Estate", "Restaurant", "Education", "Healthcare", "Other"],
    channels: ["WhatsApp", "Instagram"],
    languages: ["Arabic", "English", "Both"],
    tones: ["Professional", "Friendly", "Formal"],
  },
  ar: {
    title: "ابنِ وكيلك الذكي في دقائق",
    sub: "بدون كود. اختر صناعتك، خصّص البوت، وانطلق.",
    step1: "الخطوة 1 — اختر الصناعة",
    step2: "الخطوة 2 — الإعداد",
    step3: "الخطوة 3 — معاينة وإطلاق",
    botName: "اسم البوت",
    primaryChannel: "القناة الأساسية",
    language: "اللغة",
    tone: "النبرة",
    preview: "معاينة الشات",
    connect: "الاتصال بـ app.samy.agency",
    industries: ["تجارة إلكترونية", "عقارات", "مطاعم", "تعليم", "رعاية صحية", "أخرى"],
    channels: ["واتساب", "انستجرام"],
    languages: ["عربي", "إنجليزي", "كلاهما"],
    tones: ["احترافي", "ودود", "رسمي"],
  },
} satisfies Record<Lang, Record<string, unknown>>;

export function BuildAgentPageContent() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <div className="space-y-6 py-6">
      <h1 className="mkt-scale-heading text-3xl font-bold">{t.title as string}</h1>
      <p className="mkt-scale-text text-[var(--muted)]">{t.sub as string}</p>
      <section className="mkt-scale-card space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="mkt-scale-heading text-xl font-semibold">{t.step1 as string}</h2>
        <div className="mkt-grid-3 grid grid-cols-3 gap-3">
          {(t.industries as string[]).map((i) => (
            <button key={i} className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm">
              {i}
            </button>
          ))}
        </div>
      </section>
      <section className="mkt-scale-card space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="mkt-scale-heading text-xl font-semibold">{t.step2 as string}</h2>
        <div className="mkt-grid-2 grid grid-cols-2 gap-3">
          <input className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3" placeholder={t.botName as string} />
          <select className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3">
            <option>{t.primaryChannel as string}</option>
            {(t.channels as string[]).map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3">
            <option>{t.language as string}</option>
            {(t.languages as string[]).map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
          <select className="rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3">
            <option>{t.tone as string}</option>
            {(t.tones as string[]).map((tone) => (
              <option key={tone}>{tone}</option>
            ))}
          </select>
        </div>
      </section>
      <section className="mkt-scale-card space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="mkt-scale-heading text-xl font-semibold">{t.step3 as string}</h2>
        <div className="grid h-48 place-items-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface2)]">
          {t.preview as string}
        </div>
        <a href="https://app.samy.agency" className="inline-flex rounded-xl bg-[var(--purple)] px-5 py-2.5 text-sm">
          {t.connect as string}
        </a>
      </section>
    </div>
  );
}
