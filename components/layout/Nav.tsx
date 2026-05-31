"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { homeLandingCopy, type HomeLang } from "@/lib/homeLandingCopy";
import { marketingNavRoutes } from "@/lib/marketingNav";

import "@/styles/marketing-nav.css";

function SamyLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 600 520" style={{ flexShrink: 0 }}>
      <rect x="130" y="108" width="340" height="300" rx="65" fill="#1e2340" />
      <g className="ear-l">
        <circle cx="130" cy="255" r="36" fill="#1D9E75" stroke="#5DCAA5" strokeWidth="3" />
        <circle cx="130" cy="255" r="15" fill="#E1F5EE" />
      </g>
      <g className="ear-r">
        <circle cx="470" cy="255" r="36" fill="#EF9F27" stroke="#FAC775" strokeWidth="3" />
        <circle cx="470" cy="255" r="15" fill="#FAEEDA" />
      </g>
      <rect x="152" y="140" width="126" height="104" rx="22" fill="#2a1a4e" stroke="#7F77DD" strokeWidth="3" />
      <rect x="322" y="140" width="126" height="104" rx="22" fill="#3a1a10" stroke="#D85A30" strokeWidth="3" />
      <g className="eye-l">
        <circle cx="215" cy="192" r="32" fill="#7F77DD" />
        <circle cx="228" cy="180" r="11" fill="#EEEDFE" />
        <circle cx="233" cy="185" r="5" fill="#1e2340" />
      </g>
      <g className="eye-r">
        <circle cx="385" cy="192" r="32" fill="#D85A30" />
        <circle cx="398" cy="180" r="11" fill="#FAECE7" />
        <circle cx="403" cy="185" r="5" fill="#1e2340" />
      </g>
      <rect x="188" y="282" width="224" height="44" rx="22" fill="#1e2340" stroke="#378ADD" strokeWidth="2" />
      <rect className="l1" x="200" y="296" width="34" height="16" rx="8" fill="#378ADD" />
      <rect className="l2" x="241" y="296" width="34" height="16" rx="8" fill="#7F77DD" />
      <rect className="l3" x="282" y="296" width="34" height="16" rx="8" fill="#1D9E75" />
      <rect className="l4" x="323" y="296" width="34" height="16" rx="8" fill="#EF9F27" />
    </svg>
  );
}

/** Global marketing navbar (same design as the home page). */
export function Nav() {
  const pathname = usePathname();
  const { lang: siteLang, setLang } = useLanguage();
  const lg: HomeLang = siteLang === "ar" ? "ar" : "en";
  const t = homeLandingCopy[lg];
  const dir = lg === "ar" ? "rtl" : "ltr";

  return (
    <div className="samy-marketing-nav" dir={dir}>
      <nav className="hp-nav">
        <Link className="hp-logo" href="/">
          <SamyLogo />
          <span className="hp-logo-badge">SAMY</span>
        </Link>

        <div className="hp-nav-links">
          {t.navLinks.map((label, i) => {
            const href = marketingNavRoutes[i];
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link key={label + href} href={href} className={isActive ? "active" : undefined}>
                {label}
              </Link>
            );
          })}
        </div>

        <div className="hp-nav-right">
          <div className="hp-lang-toggle">
            <button type="button" className={lg === "en" ? "active" : ""} onClick={() => setLang("en")}>
              EN
            </button>
            <button type="button" className={lg === "ar" ? "active" : ""} onClick={() => setLang("ar")}>
              AR
            </button>
          </div>
          <Link href="https://app.samy.agency" className="hp-btn-build">
            {t.btnBuild}
          </Link>
        </div>
      </nav>
    </div>
  );
}
