"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homeLandingCopy, type HomeLang } from "@/lib/homeLandingCopy";
import { dirForLang } from "@/lib/locale";

import "@/styles/marketing-footer.css";

function SocialTwitter() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

function SocialLinkedin() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function SocialInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/** Homepage-style footer — used on all marketing pages via AppShell */
export function Footer() {
  const { lang } = useLanguage();
  const lg: HomeLang = lang === "ar" ? "ar" : "en";
  const t = homeLandingCopy[lg];
  const dir = dirForLang(lang);

  return (
    <footer className="samy-marketing-footer font-sans" dir={dir}>
      <div className="hp-footer-main">
        <div className="hp-foot-col">
          <div className="hp-foot-logo">
            <svg width="80" viewBox="0 0 600 80" aria-hidden>
              <rect x="0" y="10" width="160" height="60" rx="8" fill="#1D9E75" />
              <text
                x="80"
                y="52"
                textAnchor="middle"
                fontSize="28"
                fontWeight="700"
                fontFamily="var(--font-body)"
                fill="#E1F5EE"
                letterSpacing="4"
              >
                SAMY
              </text>
            </svg>
          </div>
          <p className="hp-foot-tagline">{t.footTagline}</p>
          <div className="hp-foot-social">
            <div className="hp-social-btn" aria-hidden>
              <SocialTwitter />
            </div>
            <div className="hp-social-btn" aria-hidden>
              <SocialLinkedin />
            </div>
            <div className="hp-social-btn" aria-hidden>
              <SocialInstagram />
            </div>
          </div>
        </div>
        <div className="hp-foot-col">
          <div className="hp-foot-heading">{t.product}</div>
          <div className="hp-foot-links">
            <Link href="/features">{t.footLinkFeatures}</Link>
            <Link href="/integrations">{t.footLinkIntegration}</Link>
            <Link href="/pricing">{t.footLinkPricing}</Link>
            <Link href="/automation">{t.footLinkAutomation}</Link>
            <Link href="/academy">{t.footLinkAcademy}</Link>
          </div>
        </div>
        <div className="hp-foot-col">
          <div className="hp-foot-heading">{t.resources}</div>
          <div className="hp-foot-links">
            <Link href="/cases">{t.footLinkCases}</Link>
            <Link href="#">{t.footLinkBlog}</Link>
            <Link href="/knowledge-base">{t.footLinkKnowledgeBase}</Link>
            <Link href="/contact">{t.footLinkSupport}</Link>
            <Link href="#">{t.footLinkApi}</Link>
          </div>
        </div>
        <div className="hp-foot-col">
          <div className="hp-foot-heading">{t.footGetInTouch}</div>
          <p className="hp-foot-tagline" style={{ marginBottom: 12 }}>
            {t.footGetInTouchSub}
          </p>
          <a href="#" className="hp-foot-wa-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            {t.footWhatsApp}
          </a>
        </div>
      </div>
      <div className="hp-footer-bottom-wrap">
        <div className="hp-footer-bottom-inner">
          <span className="hp-copy">{t.copy}</span>
          <div className="hp-legal">
            <a href="#">{t.privacy}</a>
            <a href="#">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
