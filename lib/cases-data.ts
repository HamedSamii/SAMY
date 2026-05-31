import rawCases from "./cases-data.json";

export type CaseCategory = "edu" | "re" | "eco" | "health" | "rest" | "svc" | "ret";

export type ChipColor = "purple" | "coral" | "green" | "amber";

export interface CaseChip {
  t: string;
  k: boolean;
  col?: ChipColor;
}

export interface FlowStep {
  n: string;
  title: string;
  desc: string;
}

export interface CaseIntegration {
  name: string;
  badge: boolean;
  why: string;
}

export interface CaseResult {
  n: string;
  l: string;
}

export interface SamyCase {
  id: number;
  cat: CaseCategory;
  ind: string;
  ic: string;
  ac: string;
  title: string;
  sector: string;
  problem: string;
  chips: CaseChip[];
  metrics: string[];
  mlabels: string[];
  flow: FlowStep[];
  integrations: CaseIntegration[];
  insight: string;
  results: CaseResult[];
}

export const useCases = rawCases as SamyCase[];

export const caseFilters: { id: CaseCategory | "all"; label: string }[] = [
  { id: "all", label: "الكل (25)" },
  { id: "edu", label: "تعليم" },
  { id: "re", label: "عقارات" },
  { id: "eco", label: "تجارة إلكترونية" },
  { id: "health", label: "صحة" },
  { id: "rest", label: "مطاعم وكافيهات" },
  { id: "svc", label: "خدمات" },
  { id: "ret", label: "ريتيل" },
];

export const caseKpis = [
  { n: "25", l: "حالة استخدام" },
  { n: "12", l: "قطاع تجاري" },
  { n: "18+", l: "تكامل مختلف" },
  { n: "100%", l: "حالات واقعية" },
];
