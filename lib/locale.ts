import type { Lang } from "@/lib/i18n";

export type Localized<T> = Record<Lang, T>;

export function pick<T>(data: Localized<T>, lang: Lang): T {
  return data[lang];
}

export function dirForLang(lang: Lang): "rtl" | "ltr" {
  return lang === "ar" ? "rtl" : "ltr";
}

export function arrow(lang: Lang, direction: "forward" | "back" = "forward"): string {
  if (lang === "ar") {
    return direction === "forward" ? "←" : "→";
  }
  return direction === "forward" ? "→" : "←";
}
