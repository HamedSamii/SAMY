export type IntegrationCategory =
  | "ai"
  | "voice-sms"
  | "ecommerce"
  | "email"
  | "payments"
  | "map"
  | "calendar"
  | "storage"
  | "integration-platform"
  | "live-chat"
  | "crm"
  | "others";

export type Integration = {
  id: string;
  name: string;
  description: string;
  category: IntegrationCategory;
  logo: string;
  href: string;
};

export const filterCategories = [
  { label: "All", key: "all" },
  { label: "AI", key: "ai" },
  { label: "Voice / SMS", key: "voice-sms" },
  { label: "eCommerce", key: "ecommerce" },
  { label: "Email", key: "email" },
  { label: "Payments", key: "payments" },
  { label: "Maps", key: "map" },
  { label: "Calendar", key: "calendar" },
  { label: "Storage", key: "storage" },
  { label: "Automation", key: "integration-platform" },
  { label: "Live Chat", key: "live-chat" },
  { label: "CRM", key: "crm" },
  { label: "Others", key: "others" },
] as const;

export type FilterKey = (typeof filterCategories)[number]["key"];

export const integrations: Integration[] = [
  // ─── Artificial Intelligence ───────────────────
  {
    id: "openai",
    name: "OpenAI",
    description:
      "Leverage the full power of OpenAI within Samy — including embeddings, assistants, and AI agents connected to your own business data.",
    category: "ai",
    logo: "/integrations/logos/openai.svg",
    href: "/integrations/openai",
  },
  {
    id: "claude-ai",
    name: "Claude AI",
    description:
      "Integrate Claude AI to power intelligent, context-aware conversations in Samy with natural language understanding and AI Function support.",
    category: "ai",
    logo: "/integrations/logos/claude.svg",
    href: "/integrations/claude-ai",
  },
  {
    id: "google-gemini",
    name: "Google Gemini",
    description:
      "Connect Google Gemini to bring advanced multimodal AI into your Samy bots with text, images, and context-aware responses.",
    category: "ai",
    logo: "/integrations/logos/google-gemini.svg",
    href: "/integrations/google-gemini",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description:
      "Integrate DeepSeek to power your Samy bots with advanced language understanding and reasoning for complex queries.",
    category: "ai",
    logo: "/integrations/logos/deepseek.svg",
    href: "/integrations/deepseek",
  },
  {
    id: "x-ai",
    name: "X.AI",
    description:
      "Connect xAI to enable intelligent, real-time conversations in Samy with business data integration and AI Functions.",
    category: "ai",
    logo: "/integrations/logos/xai.svg",
    href: "/integrations/x-ai",
  },
  {
    id: "dialogflow",
    name: "Dialogflow",
    description:
      "Integrate Dialogflow to bring natural language understanding into your Samy bots with intents, entities, and conversational flows.",
    category: "ai",
    logo: "/integrations/logos/dialogflow.svg",
    href: "/integrations/dialogflow",
  },
  {
    id: "coze",
    name: "Coze",
    description:
      "Empowers rapid AI bot creation with no-code workflows, multi-platform deployment, and plugin integrations.",
    category: "ai",
    logo: "/integrations/logos/coze.svg",
    href: "/integrations/coze",
  },
  {
    id: "groq",
    name: "Groq",
    description:
      "Connect Groq for ultra-fast AI inference in Samy bots — power real-time responses with low-latency language models.",
    category: "ai",
    logo: "/integrations/logos/groq.svg",
    href: "/integrations/groq",
  },

  // ─── Voice / SMS / WhatsApp ──────────────────
  {
    id: "phone-numbers",
    name: "Phone Numbers",
    description:
      "Provision and manage phone numbers directly in Samy for SMS, voice, and WhatsApp channels.",
    category: "voice-sms",
    logo: "/integrations/logos/phone-numbers.svg",
    href: "/integrations/phone-numbers",
  },
  {
    id: "twilio",
    name: "Twilio",
    description:
      "Twilio powers SMS, Voice, and WhatsApp channels in Samy — enabling seamless communication through text, calls, and messaging.",
    category: "voice-sms",
    logo: "/integrations/logos/twilio.svg",
    href: "/integrations/twilio",
  },
  {
    id: "signalwire",
    name: "SignalWire",
    description:
      "Build SMS and Voice bots using SignalWire. Automate conversations, send alerts, and handle voice interactions within Samy.",
    category: "voice-sms",
    logo: "/integrations/logos/signalwire.svg",
    href: "/integrations/signalwire",
  },
  {
    id: "telnyx",
    name: "Telnyx",
    description:
      "Use Telnyx to build and automate SMS bots within Samy with reliable delivery and full control over messaging workflows.",
    category: "voice-sms",
    logo: "/integrations/logos/telnyx.svg",
    href: "/integrations/telnyx",
  },
  {
    id: "message-media",
    name: "Message Media",
    description:
      "Integrate MessageMedia to build SMS bots in Samy. Send and receive text messages and automate replies effortlessly.",
    category: "voice-sms",
    logo: "/integrations/logos/messagemedia.svg",
    href: "/integrations/message-media",
  },
  {
    id: "vudu-mobile",
    name: "Vudu Mobile",
    description:
      "Connect Vudu Mobile to power SMS bots in Samy. Automate text messaging workflows and engage customers reliably.",
    category: "voice-sms",
    logo: "/integrations/logos/vudu-mobile.svg",
    href: "/integrations/vudu-mobile",
  },
  {
    id: "dialpad",
    name: "Dialpad",
    description:
      "Use Dialpad to build and automate SMS conversations within Samy. Send, receive, and manage messages effortlessly.",
    category: "voice-sms",
    logo: "/integrations/logos/dialpad.svg",
    href: "/integrations/dialpad",
  },
  {
    id: "asmsc",
    name: "ASMSC",
    description:
      "Connect ASMSC to send and receive SMS messages through Samy with reliable delivery and automation support.",
    category: "voice-sms",
    logo: "/integrations/logos/asmsc.svg",
    href: "/integrations/asmsc",
  },

  // ─── eCommerce ───────────────────────────────
  {
    id: "shopify",
    name: "Shopify",
    description:
      "Integrate your Shopify store with Samy to automate product recommendations, order tracking, and cart recovery.",
    category: "ecommerce",
    logo: "/integrations/logos/shopify.svg",
    href: "/integrations/shopify",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    description:
      "Integrate your WooCommerce store with Samy to automate product recommendations, order tracking, and cart recovery.",
    category: "ecommerce",
    logo: "/integrations/logos/woocommerce.svg",
    href: "/integrations/woocommerce",
  },
  {
    id: "facebook-catalog",
    name: "Facebook Catalog",
    description:
      "Connect your Facebook Catalog to deliver a native shopping experience inside WhatsApp with your Samy chatbot.",
    category: "ecommerce",
    logo: "/integrations/logos/facebook-catalog.svg",
    href: "/integrations/facebook-catalog",
  },
  {
    id: "facebook-business",
    name: "Facebook Business",
    description:
      "Manage and automate replies across your Facebook Business assets — pages, Messenger, and comments.",
    category: "ecommerce",
    logo: "/integrations/logos/facebook-business.svg",
    href: "/integrations/facebook-business",
  },

  // ─── Email Marketing ─────────────────────────
  {
    id: "smtp-profile",
    name: "SMTP Profile",
    description:
      "Send emails through your own SMTP provider with custom settings to control sender identity and reliable delivery.",
    category: "email",
    logo: "/integrations/logos/smtp.svg",
    href: "/integrations/smtp-profile",
  },
  {
    id: "gmail",
    name: "Gmail",
    description:
      "Send emails directly from your Gmail account within Samy — perfect for follow-ups, notifications, and personalized communication.",
    category: "email",
    logo: "/integrations/logos/gmail.svg",
    href: "/integrations/gmail",
  },
  {
    id: "sendgrid",
    name: "SendGrid",
    description:
      "Fully integrated two-way email sync. Send and receive emails through SendGrid directly within Samy.",
    category: "email",
    logo: "/integrations/logos/sendgrid.svg",
    href: "/integrations/sendgrid",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description:
      "Automatically sync leads and contact data from Samy to your Mailchimp audience for seamless email marketing.",
    category: "email",
    logo: "/integrations/logos/mailchimp.svg",
    href: "/integrations/mailchimp",
  },

  // ─── Payment Gateway ─────────────────────────
  {
    id: "stripe",
    name: "Stripe",
    description:
      "Integrate Stripe to dynamically generate checkout pages and accept payments directly through your chatbot.",
    category: "payments",
    logo: "/integrations/logos/stripe.svg",
    href: "/integrations/stripe",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Connect PayPal to enable secure, real-time payments directly within your chatbot.",
    category: "payments",
    logo: "/integrations/logos/paypal.svg",
    href: "/integrations/paypal",
  },

  // ─── Maps ────────────────────────────────────
  {
    id: "google-map",
    name: "Google Map",
    description:
      "Perfect for delivery services, store locators, and travel planning — accurate location data within your bot flows.",
    category: "map",
    logo: "/integrations/logos/google-maps.svg",
    href: "/integrations/google-map",
  },
  {
    id: "mapbox",
    name: "Mapbox",
    description:
      "Perfect for delivery services, store locators, and travel planning — accurate location data within your bot flows.",
    category: "map",
    logo: "/integrations/logos/mapbox.svg",
    href: "/integrations/mapbox",
  },

  // ─── Calendar ────────────────────────────────
  {
    id: "calendly",
    name: "Calendly",
    description: "Seamlessly connect Samy with Calendly to automate appointment scheduling.",
    category: "calendar",
    logo: "/integrations/logos/calendly.svg",
    href: "/integrations/calendly",
  },
  {
    id: "cal-com",
    name: "Cal.com",
    description: "Connect Cal.com to Samy and let users book appointments directly from your chatbot flows.",
    category: "calendar",
    logo: "/integrations/logos/cal-com.svg",
    href: "/integrations/cal-com",
  },

  // ─── Data / File Storage ─────────────────────
  {
    id: "google-sheets",
    name: "Google Sheets",
    description: "Sync chat data with your Google Sheets spreadsheets in real-time for reporting and automation.",
    category: "storage",
    logo: "/integrations/logos/google-sheets.svg",
    href: "/integrations/google-sheets",
  },
  {
    id: "data-store-mongodb",
    name: "Data Store (MongoDB)",
    description: "Store and retrieve chatbot data in MongoDB — persist user sessions, variables, and custom records.",
    category: "storage",
    logo: "/integrations/logos/mongodb.svg",
    href: "/integrations/data-store-mongodb",
  },
  {
    id: "data-store-mysql",
    name: "Data Store (MySQL)",
    description: "Connect MySQL as a data store in Samy to save and query chatbot data with structured tables.",
    category: "storage",
    logo: "/integrations/logos/mysql.svg",
    href: "/integrations/data-store-mysql",
  },
  {
    id: "data-store-postgresql",
    name: "Data Store (PostgreSQL)",
    description: "Use PostgreSQL as a data store in Samy for reliable, scalable chatbot data persistence.",
    category: "storage",
    logo: "/integrations/logos/postgresql.svg",
    href: "/integrations/data-store-postgresql",
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    description: "Manage images and media automatically from your Samy workflows with Cloudinary integration.",
    category: "storage",
    logo: "/integrations/logos/cloudinary.svg",
    href: "/integrations/cloudinary",
  },
  {
    id: "s3-storage",
    name: "S3 Storage",
    description: "Store and retrieve files from Amazon S3 directly within your Samy bot automation flows.",
    category: "storage",
    logo: "/integrations/logos/s3-storage.svg",
    href: "/integrations/s3-storage",
  },

  // ─── Integration Platform ────────────────────
  {
    id: "zapier",
    name: "Zapier",
    description: "Connect Samy to thousands of apps with Zapier.",
    category: "integration-platform",
    logo: "/integrations/logos/zapier.svg",
    href: "/integrations/zapier",
  },
  {
    id: "make",
    name: "Make / Integromat",
    description: "Easily connect Samy to any app or service with Make (formerly Integromat).",
    category: "integration-platform",
    logo: "/integrations/logos/make.svg",
    href: "/integrations/make",
  },
  {
    id: "pabbly",
    name: "Pabbly",
    description: "Integrate Samy with hundreds of tools through Pabbly Connect.",
    category: "integration-platform",
    logo: "/integrations/logos/pabbly.svg",
    href: "/integrations/pabbly",
  },
  {
    id: "integrately",
    name: "Integrately",
    description: "One-click integrations for smarter automation — connect Samy to thousands of apps instantly.",
    category: "integration-platform",
    logo: "/integrations/logos/integrately.svg",
    href: "/integrations/integrately",
  },

  // ─── Live Chat Transfer ──────────────────────
  {
    id: "go-high-level",
    name: "Go High Level",
    description:
      "Pause the bot and transfer live chats to Go High Level with two-way communication for smooth handoffs.",
    category: "live-chat",
    logo: "/integrations/logos/gohighlevel.png",
    href: "/integrations/go-high-level",
  },
  {
    id: "intercom",
    name: "Intercom",
    description:
      "Hand off conversations by pausing the bot and transferring live chats to Intercom for real-time support.",
    category: "live-chat",
    logo: "/integrations/logos/intercom.svg",
    href: "/integrations/intercom",
  },
  {
    id: "freshchat",
    name: "FreshChat",
    description:
      "Pause the bot and transfer live chats seamlessly to Freshchat with two-way communication for real-time support.",
    category: "live-chat",
    logo: "/integrations/logos/freshchat.svg",
    href: "/integrations/freshchat",
  },
  {
    id: "front",
    name: "Front",
    description:
      "Pause the bot and transfer live chats seamlessly to Front for real-time support while keeping automation connected.",
    category: "live-chat",
    logo: "/integrations/logos/front.svg",
    href: "/integrations/front",
  },
  {
    id: "jivochat",
    name: "JivoChat",
    description:
      "Build automated flows in Samy and seamlessly transfer conversations to JivoChat for real-time live chat support.",
    category: "live-chat",
    logo: "/integrations/logos/jivochat.svg",
    href: "/integrations/jivochat",
  },
  {
    id: "chatwoot",
    name: "Chatwoot",
    description:
      "Build automation with Samy's visual flow builder and transfer conversations to Chatwoot for live chat support.",
    category: "live-chat",
    logo: "/integrations/logos/chatwoot.svg",
    href: "/integrations/chatwoot",
  },
  {
    id: "drift",
    name: "Drift",
    description:
      "Enable live chat transfer from Samy to Drift by pausing the bot for real-time support.",
    category: "live-chat",
    logo: "/integrations/logos/drift.svg",
    href: "/integrations/drift",
  },
  {
    id: "slack-agent",
    name: "Slack Agent",
    description:
      "Automatically transfer conversations to your Slack workspace when the bot is paused for real-time engagement.",
    category: "live-chat",
    logo: "/integrations/logos/slack.svg",
    href: "/integrations/slack-agent",
  },
  {
    id: "webhook",
    name: "Webhook",
    description:
      "Forward all incoming messages to your endpoint and send replies back using Samy's API for unlimited integrations.",
    category: "live-chat",
    logo: "/integrations/logos/webhook.png",
    href: "/integrations/webhook",
  },

  // ─── CRM ─────────────────────────────────────
  {
    id: "go-high-level-v2",
    name: "Go High Level V2",
    description:
      "Sync conversations across all channels. Transfer live chats into GHL's CRM and trigger automations both ways.",
    category: "crm",
    logo: "/integrations/logos/gohighlevel.png",
    href: "/integrations/go-high-level-v2",
  },
  {
    id: "go-high-level-v1",
    name: "Go High Level V1",
    description:
      "Sync conversations across all channels. Transfer live chats into GHL's CRM and trigger automations both ways.",
    category: "crm",
    logo: "/integrations/logos/gohighlevel.png",
    href: "/integrations/go-high-level-v1",
  },

  // ─── Others ──────────────────────────────────
  {
    id: "facebook-ads",
    name: "Facebook Ads",
    description:
      "Connect Facebook Ads to track and optimize ad-driven conversations and conversions from your Samy chatbot.",
    category: "others",
    logo: "/integrations/logos/facebook-ads.svg",
    href: "/integrations/facebook-ads",
  },
  {
    id: "meta-conversions-api",
    name: "Meta Conversions API",
    description:
      "Send conversion events from Samy directly to Meta for accurate ad attribution and campaign optimization.",
    category: "others",
    logo: "/integrations/logos/meta.svg",
    href: "/integrations/meta-conversions-api",
  },
  {
    id: "google-tag-manager",
    name: "Google Tag Manager",
    description:
      "Track web chat interactions and conversions. Send events to Google Analytics, Facebook Pixel, and more via GTM.",
    category: "others",
    logo: "/integrations/logos/google-tag-manager.svg",
    href: "/integrations/google-tag-manager",
  },
  {
    id: "google-my-business",
    name: "Google My Business",
    description:
      "Connect Google My Business to Samy for location-based customer engagement and automated responses.",
    category: "others",
    logo: "/integrations/logos/google-my-business.svg",
    href: "/integrations/google-my-business",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description:
      "Integrate ElevenLabs text-to-speech and voice AI into Samy for natural, human-like voice responses.",
    category: "others",
    logo: "/integrations/logos/elevenlabs.svg",
    href: "/integrations/elevenlabs",
  },
  {
    id: "slack-webhook",
    name: "Slack Webhook",
    description:
      "Send real-time notifications and chat events from Samy to your Slack channels via incoming webhooks.",
    category: "others",
    logo: "/integrations/logos/slack.svg",
    href: "/integrations/slack-webhook",
  },
  {
    id: "videosdk",
    name: "VideoSDK",
    description:
      "Enable video calls and screen sharing directly within live chat for real-time, face-to-face support.",
    category: "others",
    logo: "/integrations/logos/videosdk.svg",
    href: "/integrations/videosdk",
  },
  {
    id: "au-property-report",
    name: "Au Property Report",
    description:
      "Generate Australian property reports automatically within Samy chatbot flows for real estate use cases.",
    category: "others",
    logo: "/integrations/logos/au-property-report.svg",
    href: "/integrations/au-property-report",
  },
];
