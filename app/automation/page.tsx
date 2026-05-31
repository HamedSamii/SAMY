import type { Metadata } from "next";
import { AutomationLanding } from "@/components/automation/AutomationLanding";

export const metadata: Metadata = {
  title: "Automation | Samy",
  description:
    "Custom automation pipelines for SAMY chatbots — n8n, Make.com, Zapier, and AI workflows that connect your business on autopilot.",
};

export default function AutomationPage() {
  return <AutomationLanding />;
}
