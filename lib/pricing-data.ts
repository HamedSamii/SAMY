export type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  contacts: string;
  highlight: boolean;
  accentColor: string;
  accentDim: string;
  borderColor?: string;
  cta: string;
  ctaHref: string;
  features: string[];
};

export const YEARLY_DISCOUNT = 0.9;

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Send messages to thousands of users and improve reach.",
    monthlyPrice: 22,
    contacts: "1,000",
    highlight: false,
    accentColor: "var(--green)",
    accentDim: "var(--green-dim)",
    borderColor: "rgba(29,158,117,0.3)",
    cta: "Start Free Trial",
    ctaHref: "https://app.samy.agency/register",
    features: [
      "5 Team Members included",
      "Multiple AI Agents & Chatbots",
      "WhatsApp, FB, IG & Telegram",
      "Unlimited Flows",
      "Broadcast Messaging",
      "Free WhatsApp Blue Tick Setup",
      "24×5 Email Support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Set up automations, integrations and get powerful analytics.",
    monthlyPrice: 99,
    contacts: "10,000",
    highlight: true,
    accentColor: "var(--purple)",
    accentDim: "var(--purple-dim)",
    cta: "Start Free Trial",
    ctaHref: "https://app.samy.agency/register",
    features: [
      "Everything in Starter",
      "Zapier, Make, Pabbly & 40+ tools",
      "Shopify & WooCommerce",
      "Stripe, Razorpay & payments",
      "Analytics Dashboard",
      "OpenAI, Claude AI, Gemini",
      "24×5 Email & Chat Support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Advanced workflows and enterprise-level automation at speed.",
    monthlyPrice: 250,
    contacts: "50,000",
    highlight: false,
    accentColor: "var(--coral)",
    accentDim: "var(--coral-dim)",
    borderColor: "rgba(216,90,48,0.3)",
    cta: "Start Free Trial",
    ctaHref: "https://app.samy.agency/register",
    features: [
      "Everything in Growth",
      "Dedicated Onboarding Support",
      "Enterprise API Integrations",
      "Abandoned Cart Recovery",
      "Advanced Custom Reports",
      "5 hrs/mo Implementation",
      "Priority 24×5 SLA + TAM",
    ],
  },
];

export const enterprisePlan = {
  name: "Enterprise",
  title: "Custom volume, dedicated support.",
  description:
    "Strategic guidance, enterprise SLA, custom onboarding, and technical account management tailored to your scale.",
  cta: "Book a Demo →",
  ctaHref: "/contact",
};

export function getYearlyPrice(monthlyPrice: number): number {
  return Math.round(monthlyPrice * YEARLY_DISCOUNT * 10) / 10;
}

export type ComparisonCell = boolean | string | { addon: string };

export type ComparisonRow = {
  feature: string;
  starter: ComparisonCell;
  growth: ComparisonCell;
  scale: ComparisonCell;
};

export type ComparisonSection = {
  title: string;
  rows: ComparisonRow[];
};

export const comparisonSections: ComparisonSection[] = [
  {
    title: "Core Platform",
    rows: [
      { feature: "Contacts / Leads", starter: "1,000", growth: "10,000", scale: "50,000" },
      { feature: "Team Members (included)", starter: "5", growth: "5", scale: "5" },
      { feature: "Additional Users", starter: "$10/user", growth: "$10/user", scale: "$10/user" },
      { feature: "Unlimited Flows", starter: true, growth: true, scale: true },
      { feature: "Multiple AI Agents", starter: true, growth: true, scale: true },
      { feature: "Unified Omnichannel Inbox", starter: true, growth: true, scale: true },
      { feature: "Broadcast Messaging", starter: true, growth: true, scale: true },
      { feature: "Automation & Sequences", starter: true, growth: true, scale: true },
      { feature: "User Tagging & Segments", starter: true, growth: true, scale: true },
      { feature: "Live Chat & Web Widget", starter: true, growth: true, scale: true },
    ],
  },
  {
    title: "WhatsApp Channel",
    rows: [
      { feature: "WhatsApp Cloud API", starter: true, growth: true, scale: true },
      { feature: "WhatsApp Chatbots", starter: true, growth: true, scale: true },
      { feature: "Blue Tick Verification Support", starter: true, growth: true, scale: true },
      { feature: "Click-to-WhatsApp Ads (CTWA)", starter: true, growth: true, scale: true },
      { feature: "Round-robin Assignment", starter: true, growth: true, scale: true },
      { feature: "In-Chat Commerce", starter: false, growth: true, scale: true },
      { feature: "WhatsApp Catalog", starter: false, growth: true, scale: true },
      { feature: "Order Management", starter: false, growth: true, scale: true },
    ],
  },
  {
    title: "Social Channels",
    rows: [
      { feature: "Instagram Direct Messages", starter: true, growth: true, scale: true },
      { feature: "Instagram Comments", starter: true, growth: true, scale: true },
      { feature: "Story Mentions Reply", starter: true, growth: true, scale: true },
      { feature: "Facebook Messenger", starter: true, growth: true, scale: true },
      { feature: "Facebook Comments", starter: true, growth: true, scale: true },
      { feature: "Click-to-Messenger Ads", starter: true, growth: true, scale: true },
      { feature: "Facebook Paid Messages", starter: false, growth: true, scale: true },
      { feature: "Facebook Business Integration", starter: false, growth: true, scale: true },
    ],
  },
  {
    title: "Other Channels",
    rows: [
      { feature: "Telegram", starter: true, growth: true, scale: true },
      { feature: "Slack", starter: true, growth: true, scale: true },
      { feature: "WeChat", starter: true, growth: true, scale: true },
      { feature: "Viber", starter: true, growth: true, scale: true },
      { feature: "Line", starter: true, growth: true, scale: true },
      { feature: "Voice", starter: true, growth: true, scale: true },
      { feature: "RCS", starter: true, growth: true, scale: true },
      { feature: "Email & SMS", starter: true, growth: true, scale: true },
    ],
  },
  {
    title: "Advanced Tools",
    rows: [
      { feature: "Analytics Dashboard", starter: false, growth: true, scale: true },
      { feature: "Custom Reports", starter: false, growth: true, scale: true },
      { feature: "AI Hubs", starter: false, growth: true, scale: true },
      { feature: "Mini Apps & Integrations", starter: false, growth: true, scale: true },
      { feature: "Inbound Webhooks", starter: false, growth: true, scale: true },
      { feature: "Templates & Content Library", starter: false, growth: true, scale: true },
      { feature: "Meta Conversions API", starter: false, growth: true, scale: true },
      { feature: "Google Tag Manager", starter: false, growth: true, scale: true },
    ],
  },
  {
    title: "eCommerce & Payments",
    rows: [
      { feature: "Shopify Integration", starter: false, growth: true, scale: true },
      { feature: "WooCommerce Integration", starter: false, growth: true, scale: true },
      { feature: "Stripe", starter: false, growth: true, scale: true },
      { feature: "PayPal", starter: false, growth: true, scale: true },
      { feature: "Razorpay", starter: false, growth: true, scale: true },
      { feature: "Order Management", starter: false, growth: true, scale: true },
      { feature: "Abandoned Cart Recovery", starter: false, growth: false, scale: true },
      { feature: "Full E-commerce Automation", starter: false, growth: false, scale: true },
    ],
  },
  {
    title: "AI & Integrations",
    rows: [
      { feature: "OpenAI", starter: false, growth: true, scale: true },
      { feature: "Claude AI", starter: false, growth: true, scale: true },
      { feature: "Gemini", starter: false, growth: true, scale: true },
      { feature: "DeepSeek", starter: false, growth: true, scale: true },
      { feature: "Dialogflow", starter: false, growth: true, scale: true },
      { feature: "Eleven Labs", starter: false, growth: true, scale: true },
      { feature: "Zapier", starter: false, growth: true, scale: true },
      { feature: "Make (Integromat)", starter: false, growth: true, scale: true },
      { feature: "Pabbly Connect", starter: false, growth: true, scale: true },
      { feature: "Google Sheets", starter: false, growth: true, scale: true },
      { feature: "Calendly", starter: false, growth: true, scale: true },
      { feature: "Go High Level", starter: false, growth: true, scale: true },
      { feature: "Twilio", starter: false, growth: true, scale: true },
      { feature: "SendGrid", starter: false, growth: true, scale: true },
      { feature: "Mailchimp", starter: false, growth: true, scale: true },
    ],
  },
  {
    title: "Team Collaboration",
    rows: [
      { feature: "Workspaces & Roles", starter: true, growth: true, scale: true },
      { feature: "Multilingual Dashboard", starter: true, growth: true, scale: true },
      { feature: "Pipelines / Boards", starter: true, growth: true, scale: true },
      { feature: "Quick Replies", starter: true, growth: true, scale: true },
      { feature: "Export Chats", starter: true, growth: true, scale: true },
      { feature: "Agent Group Chat", starter: false, growth: true, scale: true },
      {
        feature: "Ticket System",
        starter: { addon: "$10" },
        growth: { addon: "$10" },
        scale: { addon: "$10" },
      },
    ],
  },
  {
    title: "Support & Onboarding",
    rows: [
      { feature: "Documentation & Bot Support", starter: true, growth: true, scale: true },
      { feature: "Email Support", starter: true, growth: true, scale: true },
      { feature: "Chat Support", starter: true, growth: true, scale: true },
      {
        feature: "Priority 24×5 Support",
        starter: { addon: "Add-on" },
        growth: { addon: "Add-on" },
        scale: true,
      },
      {
        feature: "Dedicated Customer Success Manager",
        starter: { addon: "Add-on" },
        growth: { addon: "Add-on" },
        scale: true,
      },
      {
        feature: "Guided Onboarding",
        starter: { addon: "Add-on" },
        growth: { addon: "Add-on" },
        scale: true,
      },
      {
        feature: "Custom Onboarding & Setup",
        starter: { addon: "Add-on" },
        growth: { addon: "Add-on" },
        scale: true,
      },
      {
        feature: "Monthly Implementation Support",
        starter: false,
        growth: false,
        scale: "5 hrs/mo",
      },
    ],
  },
];

export const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade anytime from your dashboard. Changes take effect immediately.",
  },
  {
    q: "What happens when I exceed my contact limit?",
    a: "We'll notify you before you hit the limit. You can upgrade to the next plan or purchase a contact add-on.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! All plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "What counts as a 'Contact'?",
    a: "A contact is any unique user who has sent or received a message through your Samy account.",
  },
  {
    q: "Do I need a WhatsApp Business API account?",
    a: "Yes, but we help you set it up for free — including Blue Tick verification support.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
  },
];

export const comparisonPlanKeys = ["starter", "growth", "scale"] as const;
export type ComparisonPlanKey = (typeof comparisonPlanKeys)[number];

export const comparisonPlanColors: Record<ComparisonPlanKey, string> = {
  starter: "var(--green)",
  growth: "var(--purple)",
  scale: "var(--coral)",
};

export const comparisonPlanLabels: Record<ComparisonPlanKey, string> = {
  starter: "Starter",
  growth: "Growth",
  scale: "Scale",
};

export const planPrices: Record<ComparisonPlanKey, number> = {
  starter: 22,
  growth: 99,
  scale: 250,
};
