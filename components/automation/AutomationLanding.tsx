"use client";

import { useState } from "react";
import Link from "next/link";
import { AutomationHeroCanvas } from "@/components/automation/AutomationHeroCanvas";
import {
  bookingSteps,
  caseTabs,
  pillars,
  tools,
  useCases,
  type CaseCategory,
  type FlowStepColor,
  type ToolBadge,
} from "@/lib/automation-data";

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
  const [activeCategory, setActiveCategory] = useState<CaseCategory | "all">("all");

  const isCaseVisible = (category: CaseCategory) =>
    activeCategory === "all" || activeCategory === category;

  return (
    <div dir="ltr" className="automation-page">
      <section className="hero">
        <AutomationHeroCanvas />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            <span>Automation Add-ons</span>
          </div>
          <h1>
            Your chatbot, <span className="dim">connected to</span> <span className="accent">everything.</span>
          </h1>
          <p className="hero-sub">
            SAMY runs your conversations. We build the automation layer behind it — the pipelines, triggers, and
            workflows that make your whole business run on autopilot.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Book a Free Discovery Call
            </Link>
            <button type="button" className="btn-ghost" onClick={scrollToCases}>
              Explore Use Cases ↓
            </button>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="section-label">What we build</div>
        <h2 className="section-title">
          Three types of
          <br />
          automation we add
        </h2>
        <p className="section-sub" style={{ marginBottom: 40 }}>
          These workflows live outside the chatbot — they feed it, extend it, and connect it to everything else in
          your business.
        </p>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="pillar">
              <div className="pillar-num">{pillar.num}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cases-section" id="cases">
        <div className="section-label">Real Use Cases</div>
        <h2 className="section-title">
          Automations we&apos;ve
          <br />
          built for clients
        </h2>
        <div className="cases-tabs">
          {caseTabs.map((tab) => (
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
          {useCases.map((useCase) => (
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
        <div className="section-label">Our Stack</div>
        <h2 className="section-title">
          Tools we use to
          <br />
          build your pipeline
        </h2>
        <div className="tools-grid">
          {tools.map((tool) => (
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
            <div className="section-label">Pricing</div>
            <h2 className="section-title">
              Every project is scoped
              <br />
              on a discovery call
            </h2>
            <p className="pricing-header-desc">
              Automation complexity varies. A simple flow takes 2 hours. A full AI content pipeline takes 2 weeks. We
              scope it with you — you pay only for what you need.
            </p>
          </div>
          <div className="pricing-cta-card">
            <h2>Let&apos;s scope your workflow</h2>
            <p>
              Tell us what you want to automate — we&apos;ll map it out, recommend the right tools, and give you a clear
              quote.
            </p>
            <div className="pricing-steps">
              {bookingSteps.map((step) => (
                <div key={step.num} className="p-step">
                  <div className="p-step-num">{step.num}</div>
                  <div className="p-step-title">{step.title}</div>
                  <div className="p-step-desc">{step.desc}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="book-btn">
              📅 Book a Free Discovery Call
            </Link>
            <Link href="/contact" className="wa-btn">
              <WhatsAppIcon />
              Chat on WhatsApp instead
            </Link>
            <div className="pricing-note">No fixed pricing — scoped per project after the call</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Got a workflow in mind?</h2>
        <p>Tell us what you want to automate — we&apos;ll figure out how to build it.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "15px 34px" }}>
            Book a Free Call
          </Link>
          <Link href="/contact" className="btn-ghost" style={{ fontSize: 15, padding: "15px 34px" }}>
            WhatsApp Us ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
