"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { pick } from "@/lib/locale";
import type { Lang } from "@/lib/i18n";

const contactCopy = {
  en: {
    title: "Let's talk",
    subtitle: "Book a free discovery call or message us on WhatsApp — we'll reply within one business day.",
    name: "Full name",
    email: "Work email",
    company: "Company",
    message: "What would you like to automate?",
    submit: "Send message",
    whatsapp: "Chat on WhatsApp",
    or: "or",
    note: "Prefer email? hello@samy.agency",
  },
  ar: {
    title: "تواصل معنا",
    subtitle: "احجز مكالمة اكتشاف مجانية أو راسلنا على واتساب — نرد خلال يوم عمل واحد.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    company: "الشركة",
    message: "وش تبي تأتمت؟",
    submit: "إرسال الرسالة",
    whatsapp: "تواصل واتساب",
    or: "أو",
    note: "تفضل الإيميل؟ hello@samy.agency",
  },
} satisfies Record<Lang, Record<string, string>>;

export function ContactPageContent() {
  const { lang } = useLanguage();
  const t = pick(contactCopy, lang);

  return (
    <div className="contact-page mx-auto max-w-xl space-y-8 px-4 py-10 sm:py-14">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">{t.title}</h1>
        <p className="text-[var(--muted)]">{t.subtitle}</p>
      </div>

      <form
        className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm"
          placeholder={t.name}
          aria-label={t.name}
        />
        <input
          type="email"
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm"
          placeholder={t.email}
          aria-label={t.email}
        />
        <input
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm"
          placeholder={t.company}
          aria-label={t.company}
        />
        <textarea
          className="min-h-28 w-full rounded-xl border border-[var(--border)] bg-[var(--surface2)] p-3 text-sm"
          placeholder={t.message}
          aria-label={t.message}
        />
        <button type="submit" className="w-full rounded-xl bg-[var(--purple)] py-3 text-sm font-medium">
          {t.submit}
        </button>
      </form>

      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-xs text-[var(--muted)]">{t.or}</span>
        <Link
          href="https://wa.me/"
          className="inline-flex items-center justify-center rounded-xl border border-[rgba(37,211,102,0.3)] bg-[rgba(37,211,102,0.08)] px-6 py-3 text-sm font-medium text-[#25d366] no-underline"
        >
          {t.whatsapp}
        </Link>
        <p className="text-xs text-[var(--muted)]">{t.note}</p>
      </div>
    </div>
  );
}
