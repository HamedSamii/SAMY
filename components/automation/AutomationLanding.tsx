"use client";

import { useState } from "react";
import Link from "next/link";
import { AutomationHeroCanvas } from "@/components/automation/AutomationHeroCanvas";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getAutomationContent } from "@/lib/automation-i18n";
import type { CaseCategory, FlowStepColor, ToolBadge } from "@/lib/automation-data";
import { dirForLang } from "@/lib/locale";

import "@/styles/automation.css";

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FlowSteps({ steps }: { steps: { text: string; color: FlowStepColor }[] }) {
  return (
    <div className="flow-steps">
      {steps.map((step, i) => (
        <div key={i} className={`flow-step step-${step.color}`}>
          <div className="flow-step-line">
            <div className="flow-dot" />
            <div className="flow-connector" />
          </div>
          <div className="flow-step-text">{step.text}</div>
        </div>
      ))}
    </div>
  );
}

function Badge({ label, type }: { label: string; type: ToolBadge }) {
  return <span className={`cbadge cb-${type}`}>{label}</span>;
}

function scrollToCases() {
  document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" });
}

export function AutomationLanding() {
  const { lang } = useLanguage();
  const t = getAutomationContent(lang);
  const dir = dirForLang(lang);
  const [activeCategory, setActiveCategory] = useState<CaseCategory | "all">("all");

  const isCaseVisible = (category: CaseCategory) =>
    activeCategory === "all" || activeCategory === category;

  return (
    <div dir={dir} className="automation-page">
      <section className="hero">
        <div dir="ltr" className="automation-hero-canvas">
          <AutomationHeroCanvas />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            <span>{t.heroBadge}</span>
          </div>
          <h1>
            {t.heroTitleLead} <span className="dim">{t.heroTitleDim}</span>{" "}
            <span className="accent">{t.heroTitleAccent}</span>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              {t.heroPrimaryCta}
            </Link>
            <button type="button" className="btn-ghost" onClick={scrollToCases}>
              {t.heroSecondaryCta}
            </button>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="section-label">{t.pillarsLabel}</div>
        <h2 className="section-title">
          {t.pillarsTitleLine1}
          <br />
          {t.pillarsTitleLine2}
        </h2>
        <p className="section-sub" style={{ marginBottom: 40 }}>
          {t.pillarsSub}
        </p>
        <div className="pillars-grid">
          {t.pillars.map((pillar) => (
            <div key={pillar.num} className="pillar">
              <div className="pillar-num">{pillar.num}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cases-section" id="cases">
        <div className="section-label">{t.casesLabel}</div>
        <h2 className="section-title">
          {t.casesTitleLine1}
          <br />
          {t.casesTitleLine2}
        </h2>
        <div className="cases-tabs">
          {t.caseTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`case-tab${activeCategory === tab.key ? " active" : ""}`}
              onClick={() => setActiveCategory(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="cases-grid" id="cases-grid">
          {t.useCases.map((useCase) => (
            <div
              key={useCase.id}
              className={`case-card${isCaseVisible(useCase.category) ? "" : " hidden"}`}
              data-cat={useCase.category}
            >
              <div className="case-header">
                <div className="case-ico" style={{ background: useCase.iconBg }}>
                  {useCase.icon}
                </div>
                <div>
                  <h3>{useCase.title}</h3>
                  <div className="case-industry">{useCase.industry}</div>
                </div>
              </div>
              <FlowSteps steps={useCase.steps} />
              <div className="case-footer">
                {useCase.badges.map((badge) => (
                  <Badge key={badge.label} label={badge.label} type={badge.type} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tools-section">
        <div className="section-label">{t.toolsLabel}</div>
        <h2 className="section-title">
          {t.toolsTitleLine1}
          <br />
          {t.toolsTitleLine2}
        </h2>
        <div className="tools-grid">
          {t.tools.map((tool) => (
            <div key={tool.id} className="tool-card">
              <div className={`tool-icon ${tool.iconClass}`}>{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <div className="tool-tags">
                {tool.tags.map((tag) => (
                  <span key={tag} className="tool-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-section-inner">
          <div className="pricing-header">
            <div className="section-label">{t.pricingLabel}</div>
            <h2 className="section-title">
              {t.pricingTitleLine1}
              <br />
              {t.pricingTitleLine2}
            </h2>
            <p className="pricing-header-desc">{t.pricingHeaderDesc}</p>
          </div>
          <div className="pricing-cta-card">
            <h2>{t.pricingCardTitle}</h2>
            <p>{t.pricingCardDesc}</p>
            <div className="pricing-steps">
              {t.bookingSteps.map((step) => (
                <div key={step.num} className="p-step">
                  <div className="p-step-num">{step.num}</div>
                  <div className="p-step-title">{step.title}</div>
                  <div className="p-step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="book-btn">
              {t.pricingBookCta}
            </Link>
            <Link href="/contact" className="wa-btn">
              <WhatsAppIcon />
              {t.pricingWhatsAppCta}
            </Link>
            <div className="pricing-note">{t.pricingNote}</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaSub}</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "15px 34px" }}>
            {t.ctaPrimary}
          </Link>
          <Link href="/contact" className="btn-ghost" style={{ fontSize: 15, padding: "15px 34px" }}>
            {t.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  );
}
