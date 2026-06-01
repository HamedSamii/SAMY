"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { HomeBackgroundCanvas } from "@/components/home/HomeBackgroundCanvas";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homeLandingCopy, type HomeLang } from "@/lib/homeLandingCopy";

import "@/styles/home-landing.css";

/** Full-page marketing home from Designs/samy_home (1).html */
export function HomeLanding() {
  const { lang: siteLang } = useLanguage();
  const lg: HomeLang = siteLang === "ar" ? "ar" : "en";
  const t = homeLandingCopy[lg];
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    root.querySelectorAll(".hp-fade-up").forEach((el) => obs.observe(el));
    const idle = window.setTimeout(() => {
      root.querySelectorAll(".hp-fade-up").forEach((el) => el.classList.add("visible"));
    }, 100);
    return () => {
      obs.disconnect();
      window.clearTimeout(idle);
    };
  }, []);

  const dir = lg === "ar" ? "rtl" : "ltr";

  return (
    <div ref={rootRef} className="samy-home-page font-sans" dir={dir} style={{ background: "var(--hp-dark)", color: "var(--hp-text)", minHeight: "100vh" }}>
      <HomeBackgroundCanvas />

      <section className="hp-hero">
        <div className="hp-hero-left hp-fade-up">
          <div className="hp-hero-badge">
            <span className="hp-pulse" />
            <span>{t.badge}</span>
          </div>
          <h1 className="hp-hero-headline">
            <span>{t.hl1}</span>
            <br />
            <span className="line2">{t.hl2}</span>
            <br />
            <span className="line3">
              {t.hl3Before}
              <span className="accent">{t.hl3Accent}</span>
            </span>
          </h1>
          <p className="hp-hero-sub">{t.sub}</p>
          <div className="hp-hero-ctas">
            <Link href="https://app.samy.agency" className="hp-btn-primary" style={{ textDecoration: "none" }}>
              <span>{t.cta1t}</span>
              {" →"}
            </Link>
            <button type="button" className="hp-btn-ghost">
              ▷ <span>{t.cta2t}</span>
            </button>
          </div>
          <div className="hp-trust-strip">
            <span className="hp-trust-item">
              <span className="hp-trust-check" />
              <span>{t.t1}</span>
            </span>
            <span className="hp-trust-item">
              <span className="hp-trust-check" />
              <span>{t.t2}</span>
            </span>
            <span className="hp-trust-item">
              <span className="hp-trust-check" />
              <span>{t.t3}</span>
            </span>
          </div>
        </div>

        <div className="hp-hero-right hp-fade-up" style={{ transitionDelay: "0.15s" }}>
          <div className="hp-ai-rings">
            <div className="hp-ring hp-ring1">
              <div className="hp-ring-dot" />
            </div>
            <div className="hp-ring hp-ring2">
              <div className="hp-ring-dot" />
            </div>
            <div className="hp-ring hp-ring3">
              <div className="hp-ring-dot" />
            </div>
          </div>
          <div className="hp-hero-logo-wrap">
            <HeroBotSvgLarge />
          </div>
        </div>
      </section>

      <div className="hp-proof-strip hp-fade-up">
        <div className="hp-proof-stat">
          <div className="hp-stat-num">+500</div>
          <div className="hp-stat-lbl">{t.s1}</div>
        </div>
        <div className="hp-proof-stat">
          <div className="hp-stat-num">+15</div>
          <div className="hp-stat-lbl">{t.s2}</div>
        </div>
        <div className="hp-proof-stat">
          <div className="hp-stat-num">+5</div>
          <div className="hp-stat-lbl">{t.s3}</div>
        </div>
        <div className="hp-industry-chips">
          {t.chips.map((chip) => (
            <span key={chip} className="hp-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <section className="hp-section">
        <div className="hp-sec-inner hp-fade-up">
          <div className="hp-sec-label">{t.probLabel}</div>
          <h2 className="hp-sec-title">
            {t.probTitleBefore}
            <span>{t.probTitleSpan}</span>
          </h2>
          <br />
          <div className="hp-prob-sol-grid">
            <div className="hp-prob-col">
              <div className="hp-col-head">{t.beforeLbl}</div>
              <div className="hp-pain-item">
                <span className="hp-item-icon">✕</span>
                <span>{t.p1}</span>
              </div>
              <div className="hp-pain-item">
                <span className="hp-item-icon">✕</span>
                <span>{t.p2}</span>
              </div>
              <div className="hp-pain-item">
                <span className="hp-item-icon">✕</span>
                <span>{t.p3}</span>
              </div>
            </div>
            <div className="hp-arrow-col">→</div>
            <div className="hp-sol-col">
              <div className="hp-col-head">{t.afterLbl}</div>
              <div className="hp-sol-item">
                <span className="hp-item-icon">✓</span>
                <span>{t.sol1}</span>
              </div>
              <div className="hp-sol-item">
                <span className="hp-item-icon">✓</span>
                <span>{t.sol2}</span>
              </div>
              <div className="hp-sol-item">
                <span className="hp-item-icon">✓</span>
                <span>{t.sol3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hp-divider" />

      <section className="hp-section">
        <div className="hp-sec-inner hp-fade-up">
          <div className="hp-sec-label">{t.featLabel}</div>
          <h2 className="hp-sec-title">
            {t.featTitleBefore}
            <span>{t.featTitleSpan}</span>
          </h2>
          <br />
          <br />
          <div className="hp-features-grid">
            <FeatureCard
              title={t.f1t}
              desc={t.f1d}
              icon={
                <svg viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="5" />
                  <path d="M8 5v3l2 1.5" />
                </svg>
              }
              linkHref="/features"
              linkLabel={t.learnMore}
            />
            <FeatureCard
              title={t.f2t}
              desc={t.f2d}
              icon={
                <svg viewBox="0 0 16 16">
                  <path d="M3 4h10M3 8h7M3 12h5" />
                </svg>
              }
              linkHref="/features"
              linkLabel={t.learnMore}
            />
            <FeatureCard
              title={t.f3t}
              desc={t.f3d}
              icon={
                <svg viewBox="0 0 16 16">
                  <rect x="2" y="3" width="12" height="10" rx="2" />
                  <path d="M5 7h6M5 10h4" />
                </svg>
              }
              linkHref="/channels"
              linkLabel={t.learnMore}
            />
            <FeatureCard
              title={t.f4t}
              desc={t.f4d}
              icon={
                <svg viewBox="0 0 16 16">
                  <circle cx="5" cy="8" r="2" />
                  <circle cx="11" cy="8" r="2" />
                  <path d="M7 8h2" />
                </svg>
              }
              linkHref="/features"
              linkLabel={t.learnMore}
            />
          </div>
          <br />
          <Link href="/features" className="hp-feat-link" style={{ fontSize: 12, display: "inline-block", textDecoration: "none" }}>
            → {t.featSeeAll}
          </Link>
        </div>
      </section>

      <div className="hp-divider" />

      <section className="hp-section">
        <div className="hp-sec-inner hp-fade-up">
          <div className="hp-sec-label">{t.indLabel}</div>
          <h2 className="hp-sec-title">
            {t.indTitleBefore}
            <span>{t.indTitleSpan}</span>
          </h2>
          <br />
          <br />
          <div className="hp-industries-grid">
            <IndustryCard icon={<IndustryIconRetail />} name={t.retail} desc={t.indRetailDesc} href="/cases" link={t.casesLink} />
            <IndustryCard icon={<IndustryIconUser />} name={t.medical} desc={t.indMedicalDesc} href="/cases" link={t.casesLink} />
            <IndustryCard icon={<IndustryIconBriefcase />} name={t.realEstate} desc={t.indReDesc} href="/cases" link={t.casesLink} />
            <IndustryCard icon={<IndustryIconClock />} name={t.services} desc={t.indServDesc} href="/cases" link={t.casesLink} />
            <IndustryCard icon={<IndustryIconChart />} name={t.education} desc={t.indEduDesc} href="/cases" link={t.casesLink} />
          </div>
        </div>
      </section>

      <div className="hp-divider" />

      <section className="hp-section">
        <div className="hp-sec-inner hp-fade-up">
          <div className="hp-sec-label">{t.testiLabel}</div>
          <h2 className="hp-sec-title">
            {t.testiTitleBefore}
            <span>{t.testiTitleSpan}</span>
          </h2>
          <br />
          <br />
          <div className="hp-testi-grid">
            <TestimonialCard quote={t.testi1} initial="A" name="Ahmed M." biz="GIVARI Gallery, Cairo" />
            <TestimonialCard quote={t.testi2} initial="S" name="Sara K." biz="Mimi Store, Baghdad" />
            <TestimonialCard quote={t.testi3} initial="D" name="Dr. Ihab Y." biz="Orthopedic Clinic, Iraq" />
          </div>
        </div>
      </section>

      <section className="hp-cta-section hp-fade-up">
        <div className="hp-cta-grid-bg" />
        <div className="hp-cta-inner">
          <div className="hp-cta-urgency">
            <span className="hp-pulse" />
            <span>{t.urgencyTxt}</span>
          </div>
          <h2 className="hp-cta-headline">
            {t.ctaHlBefore}
            <span>{t.ctaHlSpan}</span>
          </h2>
          <p className="hp-cta-sub">{t.ctaSub}</p>
          <div className="hp-cta-btns">
            <Link href="https://app.samy.agency" className="hp-btn-primary" style={{ textDecoration: "none" }}>
              <span>{t.ctaB1}</span>
              {" →"}
            </Link>
            <a href="#" className="hp-btn-wa">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              <span>{t.ctaB2}</span>
            </a>
          </div>
          <div className="hp-trust-cta">
            <span>{t.tc1}</span>
            <span>{t.tc2}</span>
            <span>{t.tc3}</span>
          </div>
        </div>
      </section>

      <button type="button" className="hp-float-bot" title="Chat with Samy" aria-label="Chat with Samy">
        <svg width="26" height="26" viewBox="0 0 600 520" style={{ overflow: "visible" }}>
          <rect x="130" y="108" width="340" height="280" rx="65" fill="#E1F5EE" />
          <circle cx="215" cy="192" r="28" fill="#7F77DD" />
          <circle cx="385" cy="192" r="28" fill="#D85A30" />
          <rect x="200" y="282" width="200" height="36" rx="18" fill="#1e2340" stroke="#378ADD" strokeWidth="3" />
        </svg>
      </button>
    </div>
  );
}

function HeroBotSvgLarge() {
  return (
    <svg width={320} viewBox="0 0 600 520" role="img">
      <title>Samy bot logo</title>
      <circle className="d1" cx="88" cy="155" r="7" fill="#EF9F27" opacity="0.85" />
      <circle className="d2" cx="512" cy="205" r="6" fill="#5DCAA5" opacity="0.85" />
      <circle className="d3" cx="500" cy="355" r="8" fill="#D4537E" opacity="0.75" />
      <circle className="d4" cx="100" cy="360" r="5" fill="#378ADD" opacity="0.75" />
      <circle className="d5" cx="525" cy="130" r="5" fill="#7F77DD" opacity="0.65" />
      <circle className="d6" cx="75" cy="300" r="4" fill="#5DCAA5" opacity="0.55" />
      <rect x="248" y="52" width="104" height="62" rx="14" fill="#1e2340" />
      <rect x="268" y="38" width="64" height="24" rx="10" fill="#7F77DD" />
      <circle cx="300" cy="38" r="13" fill="#5DCAA5" />
      <circle cx="300" cy="38" r="5" fill="#E1F5EE" />
      <rect x="130" y="108" width="340" height="320" rx="65" fill="#1e2340" />
      <g className="ear-l">
        <circle cx="130" cy="255" r="36" fill="#1D9E75" stroke="#5DCAA5" strokeWidth="3" />
        <circle cx="130" cy="255" r="15" fill="#E1F5EE" />
      </g>
      <g className="ear-r">
        <circle cx="470" cy="255" r="36" fill="#EF9F27" stroke="#FAC775" strokeWidth="3" />
        <circle cx="470" cy="255" r="15" fill="#FAEEDA" />
      </g>
      <rect x="152" y="140" width="126" height="104" rx="22" fill="#2a1a4e" stroke="#7F77DD" strokeWidth="3" />
      <rect x="322" y="140" width="126" height="104" rx="22" fill="#3a1a10" stroke="#D85A30" strokeWidth="3" />
      <g className="eye-l">
        <circle cx="215" cy="192" r="32" fill="#7F77DD" />
        <circle cx="228" cy="180" r="11" fill="#EEEDFE" />
        <circle cx="233" cy="185" r="5" fill="#1e2340" />
      </g>
      <g className="eye-r">
        <circle cx="385" cy="192" r="32" fill="#D85A30" />
        <circle cx="398" cy="180" r="11" fill="#FAECE7" />
        <circle cx="403" cy="185" r="5" fill="#1e2340" />
      </g>
      <rect x="188" y="282" width="224" height="44" rx="22" fill="#1e2340" stroke="#378ADD" strokeWidth="2" />
      <rect className="l1" x="200" y="296" width="34" height="16" rx="8" fill="#378ADD" />
      <rect className="l2" x="241" y="296" width="34" height="16" rx="8" fill="#7F77DD" />
      <rect className="l3" x="282" y="296" width="34" height="16" rx="8" fill="#1D9E75" />
      <rect className="l4" x="323" y="296" width="34" height="16" rx="8" fill="#EF9F27" />
      <rect x="364" y="296" width="38" height="16" rx="8" fill="#D4537E" opacity="0.6" />
      <rect x="200" y="358" width="200" height="52" rx="26" fill="#1D9E75" />
      <text x="300" y="393" textAnchor="middle" fontSize="26" fontWeight="500" fontFamily="var(--font-body)" fill="#E1F5EE" letterSpacing="4">
        SAMY
      </text>
      <circle cx="300" cy="412" r="9" fill="#1D9E75" />
      <rect x="296" y="420" width="8" height="22" rx="4" fill="#1D9E75" />
    </svg>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
  linkHref,
  linkLabel,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
  linkHref: string;
  linkLabel: string;
}) {
  return (
    <div className="hp-feat-card">
      <div className="hp-feat-icon">{icon}</div>
      <div className="hp-feat-title">{title}</div>
      <div className="hp-feat-desc">{desc}</div>
      <Link href={linkHref} className="hp-feat-link" style={{ textDecoration: "none" }}>
        {linkLabel}
      </Link>
    </div>
  );
}

function IndustryCard({
  icon,
  name,
  desc,
  href,
  link,
}: {
  icon: ReactNode;
  name: string;
  desc: string;
  href: string;
  link: string;
}) {
  return (
    <Link href={href} className="hp-ind-card" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="hp-ind-icon">{icon}</div>
      <div className="hp-ind-name">{name}</div>
      <div className="hp-ind-desc">{desc}</div>
      <div className="hp-ind-link">{link}</div>
    </Link>
  );
}

function IndustryIconRetail() {
  return (
    <svg viewBox="0 0 20 20">
      <path d="M3 18V9l7-5 7 5v9" />
      <rect x="7" y="12" width="6" height="6" />
    </svg>
  );
}
function IndustryIconUser() {
  return (
    <svg viewBox="0 0 20 20">
      <path d="M10 3a4 4 0 100 8 4 4 0 000-8z" />
      <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  );
}
function IndustryIconBriefcase() {
  return (
    <svg viewBox="0 0 20 20">
      <rect x="3" y="6" width="14" height="12" rx="1" />
      <path d="M7 6V5a3 3 0 016 0v1" />
    </svg>
  );
}
function IndustryIconClock() {
  return (
    <svg viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l3 2" />
    </svg>
  );
}
function IndustryIconChart() {
  return (
    <svg viewBox="0 0 20 20">
      <path d="M3 17l5-5 3 3 6-8" />
    </svg>
  );
}

function TestimonialCard({ quote, initial, name, biz }: { quote: string; initial: string; name: string; biz: string }) {
  return (
    <div className="hp-testi-card">
      <div className="hp-stars">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="hp-star" />
        ))}
      </div>
      <div className="hp-quote">&ldquo;{quote}&rdquo;</div>
      <div className="hp-author">
        <div className="hp-avatar">{initial}</div>
        <div>
          <div className="hp-author-name">{name}</div>
          <div className="hp-author-biz">{biz}</div>
        </div>
      </div>
    </div>
  );
}

