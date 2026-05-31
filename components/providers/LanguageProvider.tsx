"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content, Lang } from "@/lib/i18n";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof content)[Lang];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "ar";
    const saved = window.localStorage.getItem("samy-lang");
    return saved === "ar" || saved === "en" ? saved : "ar";
  });

  useEffect(() => {
    window.localStorage.setItem("samy-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (nextLang: Lang) => setLangState(nextLang),
      t: content[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
