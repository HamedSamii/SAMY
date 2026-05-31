"use client";

import { useState } from "react";
import {
  comparisonSections,
  comparisonPlanKeys,
  comparisonPlanLabels,
  comparisonPlanColors,
  planPrices,
  getYearlyPrice,
  type ComparisonCell,
  type ComparisonPlanKey,
} from "@/lib/pricing-data";

type BillingCycle = "monthly" | "yearly";

type ComparisonTableProps = {
  billingCycle: BillingCycle;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span className={`section-toggle${open ? " open" : ""}`} aria-hidden>
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

function renderCell(val: ComparisonCell, highlight: boolean) {
  const cellClass = `td cell${highlight ? " col-highlight" : ""}`;

  if (val === true) {
    return (
      <div className={cellClass}>
        <span className="icon-check">✓</span>
      </div>
    );
  }
  if (val === false) {
    return (
      <div className={cellClass}>
        <span className="icon-x">—</span>
      </div>
    );
  }
  if (typeof val === "object" && "addon" in val) {
    return (
      <div className={cellClass}>
        <span className="cell-addon">{val.addon}</span>
      </div>
    );
  }
  return (
    <div className={cellClass}>
      <span className="cell-text">{val}</span>
    </div>
  );
}

function getHeaderPrice(planId: ComparisonPlanKey, billingCycle: BillingCycle): string {
  const base = planPrices[planId];
  const price = billingCycle === "yearly" ? getYearlyPrice(base) : base;
  return `$${price}/mo`;
}

export function ComparisonTable({ billingCycle }: ComparisonTableProps) {
  const [openSections, setOpenSections] = useState<boolean[]>(
    () => comparisonSections.map(() => true),
  );

  const toggleSection = (index: number) => {
    setOpenSections((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <>
      <div className="section-title">Full Plan Comparison</div>
      <div className="section-sub">See exactly what&apos;s included in every plan.</div>

      <div className="comparison-wrap">
        <div className="table-header">
          <div className="th-label">Features</div>
          {comparisonPlanKeys.map((key) => (
            <div
              key={key}
              className={`th-plan${key === "growth" ? " col-highlight" : ""}`}
            >
              <div className="th-plan-name" style={{ color: comparisonPlanColors[key] }}>
                {comparisonPlanLabels[key]}
              </div>
              <div className="th-plan-price">{getHeaderPrice(key, billingCycle)}</div>
            </div>
          ))}
        </div>

        {comparisonSections.map((section, sectionIndex) => {
          const isOpen = openSections[sectionIndex];

          return (
            <div key={section.title} className="table-section">
              <button
                type="button"
                className="section-header"
                onClick={() => toggleSection(sectionIndex)}
                aria-expanded={isOpen}
              >
                <span className="section-header-name">{section.title}</span>
                <ChevronIcon open={isOpen} />
              </button>

              <div
                className="section-rows"
                style={{ maxHeight: isOpen ? "2000px" : "0px" }}
              >
                {section.rows.map((row) => (
                  <div key={row.feature} className="table-row">
                    <div className="td feature">{row.feature}</div>
                    {comparisonPlanKeys.map((key) =>
                      renderCell(row[key], key === "growth"),
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
