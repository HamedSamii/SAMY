import Link from "next/link";
import type { CaseStudy } from "@/lib/cases-index-data";
import { CaseCardCover } from "@/components/cases/CaseCardCover";

import "@/styles/cases.css";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const buildHref = `/build-agent?prompt=${encodeURIComponent(`I want a bot similar to: ${study.listTitle}`)}`;
  const { detail } = study;

  return (
    <div className="cases-page case-detail-page">
      <div className="case-detail-top">
        <Link href="/cases" className="case-detail-back">
          ← All case studies
        </Link>
      </div>

      <header className="case-detail-hero">
        <CaseCardCover card={study} tall />
        <div className="case-detail-hero-body">
          <span className="case-detail-kicker">{detail.kicker}</span>
          <h1>{detail.title}</h1>
          <div className="case-detail-results case-detail-results-hero">
            {detail.metrics.map((m) => (
              <div key={m.label} className="case-detail-res">
                <span className={`metric-val ${m.color}`}>{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <article className="case-detail-content">
        <section className="case-detail-block">
          <h2 className="case-detail-label">Background</h2>
          <p>{detail.background}</p>
        </section>

        <section className="case-detail-block">
          <h2 className="case-detail-label">Challenges</h2>
          <ul className="case-detail-challenges">
            {detail.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="case-detail-block">
          <h2 className="case-detail-label">How we built it</h2>
          <ol className="case-detail-flow">
            {detail.flow.map((step, i) => (
              <li key={step}>
                <span className="case-flow-num">{i + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-detail-block">
          <div className="card-tags case-detail-tags">
            {detail.tags.map((tag) => (
              <span key={tag} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </article>

      <section className="cta-strip case-detail-cta">
        <h2>Want similar results for your business?</h2>
        <p>We&apos;ll map your workflow and show you what a SAMY-powered bot can automate.</p>
        <div className="cta-actions">
          <Link href={buildHref} className="btn-p">
            Build a similar bot ↗
          </Link>
          <Link href="/contact" className="btn-g">
            Book a Free Call
          </Link>
        </div>
      </section>
    </div>
  );
}
