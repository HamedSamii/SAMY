"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CaseCardCover } from "@/components/cases/CaseCardCover";
import { CaseStudyModal } from "@/components/cases/CaseStudyModal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { caseIndexCards, type CaseStudy } from "@/lib/cases-index-data";
import { getLocalizedCaseById, localizeCaseCard } from "@/lib/cases-i18n";
import { getCasesPageCopy } from "@/lib/marketing-pages-copy";

import "@/styles/cases.css";

export function CasesLanding() {
  const { lang } = useLanguage();
  const t = getCasesPageCopy(lang);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const openCase = useCallback(
    (id: string) => {
      const study = getLocalizedCaseById(id, lang);
      if (!study) return;
      setActiveStudy(study);
      const url = new URL(window.location.href);
      url.searchParams.set("case", id);
      router.replace(url.pathname + url.search, { scroll: false });
    },
    [router, lang],
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
    setActiveStudy(getLocalizedCaseById(id, lang));
  }, [searchParams, lang]);

  return (
    <div className="cases-page">
      <section className="page-hero page-hero-centered">
        <div className="hero-kicker">{t.kicker}</div>
        <h1>
          {t.titleLine1}
          <br />
          <em>{t.titleEm}</em>
        </h1>
        <p>{t.sub}</p>
      </section>

      <section className="cases-section">
        <div className="cases-grid">
          {caseIndexCards.map((rawCard) => {
            const card = localizeCaseCard(rawCard, lang);
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
                    <span className="read-more">{t.readCase}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="cta-strip">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaSub}</p>
        <div className="cta-actions">
          <Link href="/contact" className="btn-p">
            {t.ctaPrimary}
          </Link>
          <Link href="/contact" className="btn-g">
            {t.ctaSecondary}
          </Link>
        </div>
      </section>

      <CaseStudyModal study={activeStudy} onClose={closeCase} />
    </div>
  );
}
