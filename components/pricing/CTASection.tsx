"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getPricingPageCopy } from "@/lib/pricing-i18n";

export function CTASection() {
  const { lang } = useLanguage();
  const copy = getPricingPageCopy(lang).ctaSection;

  return (
    <div className="cta-section">
      <div className="cta-glow-1" aria-hidden />
      <div className="cta-glow-2" aria-hidden />
      <h2>{copy.title}</h2>
      <p>{copy.sub}</p>
      <div className="cta-btns">
        <Link
          href="https://app.samy.agency/register"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn-primary"
        >
          {copy.primaryCta}
        </Link>
        <Link href="/contact" className="cta-btn-outline">
          {copy.secondaryCta}
        </Link>
      </div>
      <div className="social-proof">
        <span className="stars">★★★★★</span> {copy.socialProof}
      </div>
    </div>
  );
}
