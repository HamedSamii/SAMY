"use client";

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

export function MarkdownField({
  arName,
  enName,
  arValue,
  enValue,
}: {
  arName: string;
  enName: string;
  arValue?: string;
  enValue?: string;
}) {
  const [tab, setTab] = useState<"ar" | "en">("ar");
  const [ar, setAr] = useState(arValue ?? "");
  const [en, setEn] = useState(enValue ?? "");

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button type="button" onClick={() => setTab("ar")} className={`rounded px-3 py-1 text-xs ${tab === "ar" ? "bg-[var(--purple)]" : "bg-[var(--surface2)]"}`}>
          AR
        </button>
        <button type="button" onClick={() => setTab("en")} className={`rounded px-3 py-1 text-xs ${tab === "en" ? "bg-[var(--purple)]" : "bg-[var(--surface2)]"}`}>
          EN
        </button>
      </div>
      {tab === "ar" ? (
        <MDEditor value={ar} onChange={(v) => setAr(v ?? "")} preview="edit" height={260} />
      ) : (
        <MDEditor value={en} onChange={(v) => setEn(v ?? "")} preview="edit" height={260} />
      )}
      <input type="hidden" name={arName} value={ar} />
      <input type="hidden" name={enName} value={en} />
    </div>
  );
}
