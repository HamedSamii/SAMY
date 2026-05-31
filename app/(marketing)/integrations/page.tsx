import type { Metadata } from "next";
import { IntegrationsLanding } from "@/components/integrations/IntegrationsLanding";

export const metadata: Metadata = {
  title: "Integrations | Samy",
  description: "Connect Samy to OpenAI, Claude, Twilio, Shopify, Stripe, Zapier, and 40+ other tools.",
};

export default function IntegrationsPage() {
  return <IntegrationsLanding />;
}
