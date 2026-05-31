"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CaseCardCover } from "@/components/cases/CaseCardCover";
import { CaseStudyModal } from "@/components/cases/CaseStudyModal";
import { caseIndexCards, getCaseById, type CaseStudy } from "@/lib/cases-index-data";

import "@/styles/cases.css";

export function CasesLanding() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const openCase = useCallback(
    (id: string) => {
      const study = getCaseById(id);
      if (!study) return;
      setActiveStudy(study);
      const url = new URL(window.location.href);
      url.searchParams.set("case", id);
      router.replace(url.pathname + url.search, { scroll: false });
    },
    [router],
  );

  const closeCase = useCallback(() => {
    setActiveStudy(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("case");
    const next = url.searchParams.toString();
    router.replace(next ? `${url.pathname}?${next}` : url.pathname, { scroll: false });
  }, [router]);

  useEffect(() => {
    const id = searchParams.get("case");
    if (!id) {
      setActiveStudy(null);
      return;
    }
    setActiveStudy(getCaseById(id));
  }, [searchParams]);

  return (
    <div className="cases-page">
      <section className="page-hero page-hero-centered">
        <div className="hero-kicker">Case Studies</div>
        <h1>
          Real businesses.
          <br />
          <em>Real results.</em>
        </h1>
        <p>
          See how brands across Egypt, Iraq, and the Gulf use SAMY-powered chatbots to automate sales,
          qualify leads, and deliver better customer experiences — around the clock.
        </p>
      </section>

      <section className="cases-section">
        <div className="cases-grid">
          {caseIndexCards.map((card) => {
            const featured = Boolean(card.featuredWhenAll);

            return (
              <article
                key={card.id}
                role="button"
                tabIndex={0}
                className={`case-card${featured ? " featured" : ""}`}
                data-cat={card.category}
                onClick={() => openCase(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openCase(card.id);
                  }
                }}
              >
                <CaseCardCover card={card} featured={featured} />
                <div className="card-body">
                  <div className="card-title">{card.listTitle}</div>
                  <p className="card-excerpt">{card.listExcerpt}</p>

                  <div className="card-metrics">
                    {card.metrics.map((metric) => (
                      <div key={metric.label} className="metric">
                        <span className={`metric-val ${metric.color}`}>{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="card-tags">
                      {card.tags.map((tag) => (
                        <span key={tag} className="card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="read-more">Read case →</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="cta-strip">
        <h2>Your business could be next.</h2>
        <p>Book a free discovery call — we&apos;ll map out your automation and show you what&apos;s possible.</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-p">
            Book a Free Call
          </Link>
          <Link href="/contact" className="btn-g">
            WhatsApp Us ↗
          </Link>
        </div>
      </section>

      <CaseStudyModal study={activeStudy} onClose={closeCase} />
    </div>
  );
}
