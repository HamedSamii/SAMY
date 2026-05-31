"use client";

import { useState } from "react";
import type { CaseIndexCard } from "@/lib/cases-index-data";
import { caseCoverRemoteUrl, getCaseCoverSrc } from "@/lib/case-cover-images";

export function CaseCardCover({
  card,
  tall,
  featured,
}: {
  card: CaseIndexCard;
  tall?: boolean;
  featured?: boolean;
}) {
  const localSrc = getCaseCoverSrc(card.id);
  const remoteSrc = caseCoverRemoteUrl[card.id];
  const [src, setSrc] = useState(localSrc);
  const [failed, setFailed] = useState(false);
  const alt = `${card.industryLabel} case study`;

  return (
    <div className={`card-cover${tall ? " card-cover-tall" : ""}${featured ? " card-cover-featured" : ""}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="card-cover-photo"
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          onError={() => {
            if (remoteSrc && src !== remoteSrc) {
              setSrc(remoteSrc);
              return;
            }
            setFailed(true);
          }}
        />
      ) : (
        <>
          <div className="card-cover-bg" style={card.coverBg ? { background: card.coverBg } : undefined} />
          <div className="cover-grid" aria-hidden />
          {card.coverShapes.map((shape, i) => (
            <div
              key={i}
              className="cover-shape"
              style={{
                background: shape.background,
                top: shape.top,
                right: shape.right,
                bottom: shape.bottom,
                left: shape.left,
                width: shape.width,
                height: shape.height,
              }}
              aria-hidden
            />
          ))}
          <div className="card-client-logo" style={card.logoStyle}>
            {card.logoInitials}
          </div>
        </>
      )}
      <div className="card-cover-overlay" aria-hidden />
      <span className={`card-industry-badge ${card.industryBadgeClass}`}>{card.industryLabel}</span>
    </div>
  );
}
