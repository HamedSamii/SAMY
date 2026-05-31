import type { Metadata } from "next";
import { AcademyLanding } from "@/components/academy/AcademyLanding";

export const metadata: Metadata = {
  title: "Academy | Samy",
  description:
    "Free hands-on Samy courses — chatbot automation, AI agents, WhatsApp, integrations, and partner programs.",
};

export default function AcademyPage() {
  return <AcademyLanding />;
}
