"use client";

import { useState } from "react";
import { faqs } from "@/lib/pricing-data";

function FaqChevron({ open }: { open: boolean }) {
  return (
    <span className={`faq-arrow${open ? " open" : ""}`} aria-hidden>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 6L8 10L12 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-section">
      <div className="section-title">Frequently Asked Questions</div>

      <div>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.q} className="faq-item">
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <FaqChevron open={isOpen} />
              </button>
              <div className={`faq-answer${isOpen ? " open" : ""}`}>{faq.a}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
