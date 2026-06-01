"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSitePageMeta } from "@/lib/site-metadata";

/** Updates document title when route or language changes (client-side). */
export function PageTitleSync() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  useEffect(() => {
    const meta = getSitePageMeta(pathname, lang);
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [pathname, lang]);

  return null;
}
