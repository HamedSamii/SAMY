"use client";

import { useEffect, useState } from "react";
import type { CaseStudy } from "@/lib/cases-index-data";
import { caseCoverRemoteUrl, getCaseCoverSrc } from "@/lib/case-cover-images";

type Props = {
  study: CaseStudy | null;
  onClose: () => void;
};

function ModalCover({ study }: { study: CaseStudy }) {
  const localSrc = getCaseCoverSrc(study.id);
  const remoteSrc = caseCoverRemoteUrl[study.id];
  const [src, setSrc] = useState(localSrc);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSrc(localSrc);
    setFailed(false);
  }, [study.id, localSrc]);

  return (
    <div className="modal-cover">
      {!failed ? (
        <img
          src={src}
          alt={study.industryLabel}
          className="modal-cover-photo"
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
        <div className="modal-cover-bg" style={{ background: study.coverBg ?? undefined }} />
      )}
      <div className="modal-cover-ov" aria-hidden />
    </div>
  );
}

export function CaseStudyModal({ study, onClose }: Props) {
  useEffect(() => {
    if (!study) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [study, onClose]);

  if (!study) return null;

  const { detail } = study;

  return (
    <div
      className="cases-modal-root case-overlay open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="case-modal">
        <ModalCover study={study} />
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-body">
          <div className="modal-kicker">{detail.kicker}</div>
          <h2 id="case-modal-title" className="modal-title">
            {detail.title}
          </h2>

          <div className="modal-metrics">
            {detail.metrics.map((m) => (
              <div key={m.label} className="mm">
                <span className={`mm-v ${m.color}`}>{m.value}</span>
                <span className="mm-l">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="modal-section">
            <h3>Background</h3>
            <p>{detail.background}</p>
          </div>

          <div className="modal-section">
            <h3>Challenges</h3>
            <div className="modal-challenges">
              {detail.challenges.map((c) => (
                <div key={c} className="challenge">
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>How we built it</h3>
            <div className="modal-flow">
              {detail.flow.map((step, i) => (
                <div key={step} className="flow-step">
                  <div className="flow-num">{i + 1}</div>
                  <div className="flow-txt">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-tags">
            {detail.tags.map((tag) => (
              <span key={tag} className="mtag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
