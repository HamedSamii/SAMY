"use client";

import { useState } from "react";
import { FeatureOverlay } from "@/components/features/FeatureOverlay";

const features = [
  { name: "AI Hub", description: "Build intelligent agents that understand context and take actions", points: ["AI Agents", "Functions", "MCP", "Tasks", "Prompts"], accent: "#7F77DD", span: "md:col-span-5 md:row-span-2" },
  { name: "Flow Builder", description: "Design conversation flows visually without writing code", points: ["Drag & Drop canvas", "Conditions", "Loops", "API calls"], accent: "#D85A30", span: "md:col-span-4" },
  { name: "Omni Channel", description: "One inbox for all your customer conversations", points: ["WhatsApp", "Instagram", "Facebook", "Telegram", "Email"], accent: "#1D9E75", span: "md:col-span-3" },
  { name: "Live Chat", description: "Seamlessly hand off from bot to human agent", points: ["Team inbox", "Agent assignment", "Typing indicators", "File sharing"], accent: "#EF9F27", span: "md:col-span-4" },
  { name: "CRM & Tickets", description: "Turn conversations into organized sales pipelines", points: ["Pipeline view", "Lead scoring", "Ticket management", "Tags"], accent: "#D85A30", span: "md:col-span-3" },
  { name: "Voice AI", description: "Automate phone calls with intelligent voice agents", points: ["IVR builder", "Voice bots", "Call routing", "Transcription"], accent: "#7F77DD", span: "md:col-span-4 md:row-span-2" },
  { name: "Integrations", description: "Connect Samy to your existing tools", points: ["Shopify", "WooCommerce", "Google Sheets", "Zapier", "HubSpot"], accent: "#1D9E75", span: "md:col-span-4" },
  { name: "Mobile App", description: "Manage everything from your phone", points: ["iOS & Android", "Push notifications", "Mobile inbox", "Team chat"], accent: "#EF9F27", span: "md:col-span-4" },
];

export function BentoGrid() {
  const [selected, setSelected] = useState<(typeof features)[number] | null>(null);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-12">
        {features.map((f) => (
          <button key={f.name} onClick={() => setSelected(f)} className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-start transition hover:-translate-y-1 hover:shadow-xl ${f.span}`}>
            <h3 className="mb-1 text-xl font-semibold" style={{ color: f.accent }}>
              {f.name}
            </h3>
            <p className="text-sm text-[var(--muted)]">{f.description}</p>
          </button>
        ))}
      </div>
      <FeatureOverlay feature={selected} onClose={() => setSelected(null)} />
    </>
  );
}
