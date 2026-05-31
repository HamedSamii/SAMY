import type { MetricColor } from "./cases-index-data";

export type CaseStudyDetail = {
  challenge: string;
  flow: { title: string; description: string }[];
  integrations: { name: string; description: string; key?: boolean }[];
  insight: string;
  results: { value: string; label: string; color: MetricColor }[];
};

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "blue-arrow": {
    challenge:
      "The sales team was drowning in WhatsApp inquiries — leads came in at all hours, follow-up was manual, and hot prospects cooled off before an agent could respond with the right property details.",
    flow: [
      {
        title: "Lead capture on WhatsApp",
        description:
          "Prospects message the business number. The AI agent greets them in Arabic, asks budget range, preferred area, and property type.",
      },
      {
        title: "Real-time qualification",
        description:
          "GPT-4 scores intent and filters serious buyers. The bot sends property cards with photos, pricing, and key specs pulled from the internal catalog.",
      },
      {
        title: "Site visit booking",
        description:
          "Qualified leads pick a viewing slot. The agent confirms via WhatsApp and logs the appointment to the team calendar automatically.",
      },
      {
        title: "Handoff to human agents",
        description:
          "Warm leads sync to the CRM with full conversation context. Sales reps only step in for closing — not for repetitive Q&A.",
      },
    ],
    integrations: [
      { name: "WhatsApp Business API", description: "Primary channel for all lead conversations and property card delivery.", key: true },
      { name: "GPT-4.1", description: "Powers qualification logic, Arabic copy, and dynamic responses to buyer questions.", key: true },
      { name: "Google Sheets / CRM", description: "Stores lead data and viewing appointments for the sales team dashboard." },
    ],
    insight:
      "Speed wins in real estate. When every inquiry gets a structured response in under a minute — with the right listings attached — conversion jumps without hiring more coordinators.",
    results: [
      { value: "↑ 68%", label: "Lead response rate", color: "green" },
      { value: "70%", label: "Less manual follow-up", color: "amber" },
      { value: "3x", label: "More closed deals", color: "purple" },
    ],
  },
  itshare: {
    challenge:
      "Three academy branches meant three different schedules, prices, and course lists — but one WhatsApp number. Students got confused answers, and staff spent hours repeating the same enrollment questions.",
    flow: [
      {
        title: "Branch-aware routing",
        description:
          "The bot asks which branch the student is interested in first, then loads only that branch's courses, timings, and fees.",
      },
      {
        title: "Course Q&A in Arabic & English",
        description:
          "Students ask about diplomas, durations, and prerequisites. The AI answers from a structured knowledge base — no schedule mixing between branches.",
      },
      {
        title: "Lead capture & follow-up",
        description:
          "Interested students leave name and phone. Make.com pushes leads to Sheets and notifies branch managers on Slack.",
      },
    ],
    integrations: [
      { name: "WhatsApp", description: "Single entry point for all three branches with isolated knowledge per location.", key: true },
      { name: "Make.com", description: "Routes leads to the correct branch sheet and triggers manager alerts.", key: true },
      { name: "Google Sheets", description: "Central enrollment log per branch for the admissions team." },
    ],
    insight:
      "Multi-location education businesses fail when one bot treats every branch the same. Branch-first routing turned a chaos channel into three clean enrollment funnels.",
    results: [
      { value: "200+", label: "Daily inquiries handled", color: "purple" },
      { value: "↑ 45%", label: "Lead capture rate", color: "green" },
      { value: "0", label: "Schedule mix-ups", color: "amber" },
    ],
  },
  givari: {
    challenge:
      "Fashion shoppers message asking 'do you have this?' with a screenshot from Instagram. Staff manually searched WooCommerce — slow, error-prone, and lost sales after hours.",
    flow: [
      {
        title: "Photo-based product ID",
        description:
          "OpenAI Vision analyzes the customer's image and matches it to the closest SKU in the WooCommerce catalog.",
      },
      {
        title: "Sales vs. support routing",
        description:
          "Dual agents: one handles new orders and product questions, the other handles returns and sizing complaints — no crossed threads.",
      },
      {
        title: "Checkout on WhatsApp",
        description:
          "The sales agent builds the cart, sends payment link via Stripe, and confirms order — without leaving the chat.",
      },
    ],
    integrations: [
      { name: "WooCommerce API", description: "Live stock, variants, and product images synced into bot responses.", key: true },
      { name: "OpenAI Vision", description: "Identifies products from customer photos for instant catalog lookup.", key: true },
      { name: "Stripe", description: "Payment links generated inside the conversation flow." },
      { name: "Facebook Catalog", description: "Product cards formatted for rich WhatsApp display." },
    ],
    insight:
      "Visual commerce needs visual AI. Letting customers shop by screenshot removed the biggest friction point in WhatsApp fashion sales.",
    results: [
      { value: "↑ 55%", label: "Orders via WhatsApp", color: "green" },
      { value: "0", label: "Manual catalog lookups", color: "amber" },
      { value: "↑ 42%", label: "After-hours conversions", color: "purple" },
    ],
  },
  waseem: {
    challenge:
      "One WhatsApp number handled both 'I want a new plan' and 'my internet is down' — sales and support conversations got tangled, frustrating customers and burning agent time.",
    flow: [
      {
        title: "Intent detection at entry",
        description:
          "First message is classified: sales (new subscription, upgrade) or support (outage, billing, technical).",
      },
      {
        title: "Dedicated sales agent",
        description:
          "Presents plans, coverage checks, and promo offers. Captures install address and pushes to the sales pipeline.",
      },
      {
        title: "Dedicated support agent",
        description:
          "Runs troubleshooting scripts from a knowledge base, checks account status via webhook, and escalates to human only when needed.",
      },
      {
        title: "Slack escalation",
        description:
          "Unresolved tickets ping the right team channel with full chat history attached.",
      },
    ],
    integrations: [
      { name: "Dual SAMY agents", description: "Two isolated bot brains on one WhatsApp number with smart routing.", key: true },
      { name: "Custom API / KB", description: "Live account status and structured troubleshooting trees.", key: true },
      { name: "Slack", description: "Human handoff with conversation link for complex cases." },
      { name: "Google Sheets", description: "Logs all interactions for QA and reporting." },
    ],
    insight:
      "ISPs sell and support different products with different tones. Splitting agents on one number fixed routing without asking customers to call a different line.",
    results: [
      { value: "80%", label: "Support auto-resolved", color: "green" },
      { value: "↑ 40%", label: "Upsell conversion", color: "purple" },
      { value: "↓ 55%", label: "Misrouted tickets", color: "amber" },
    ],
  },
  sultan: {
    challenge:
      "Dispatch staff spent most of the day copying shipment details from WhatsApp chats into spreadsheets — slow, error-prone, and customers waited hours for a quote.",
    flow: [
      {
        title: "Structured intake form in chat",
        description:
          "The bot collects origin, destination, weight, dimensions, and service type step by step in Arabic.",
      },
      {
        title: "Instant pricing",
        description:
          "Rates calculated from internal rules engine. Customer gets a clear quote and confirms in-chat.",
      },
      {
        title: "Sheet sync & confirmation",
        description:
          "Confirmed orders log to Google Sheets. Customer receives booking reference and tracking info on WhatsApp.",
      },
    ],
    integrations: [
      { name: "WhatsApp", description: "End-to-end order intake without human data entry.", key: true },
      { name: "Google Sheets", description: "Operations dashboard updated in real time for dispatch.", key: true },
      { name: "Make.com", description: "Triggers notifications to drivers when new bookings arrive." },
    ],
    insight:
      "Logistics companies don't need fancier chat — they need zero retyping. Structured conversational forms replaced an entire data-entry role.",
    results: [
      { value: "↓ 85%", label: "Manual data entry", color: "amber" },
      { value: "< 2 min", label: "Order booking time", color: "green" },
      { value: "↑ 50%", label: "Daily bookings handled", color: "purple" },
    ],
  },
  "rz-estate": {
    challenge:
      "International buyers message in Arabic, Kurdish Sorani, or English — often mixing languages. Human agents couldn't cover all hours, and language gaps killed cross-border deals.",
    flow: [
      {
        title: "Automatic language detection",
        description:
          "The bot detects Arabic, Sorani, or English from the first message and responds in the same language throughout.",
      },
      {
        title: "Property qualification",
        description:
          "Asks budget, property type (residential/commercial), and timeline. Filters listings from the portfolio database.",
      },
      {
        title: "Rich property cards",
        description:
          "Sends images, maps, and spec sheets. Answers follow-up questions about amenities and payment plans.",
      },
      {
        title: "Agent handoff",
        description:
          "Warm leads route to the right salesperson by territory with full trilingual chat transcript.",
      },
    ],
    integrations: [
      { name: "Multilingual GPT-4", description: "Native-quality Arabic, Sorani, and English in one agent.", key: true },
      { name: "Property database API", description: "Live listings with filters by type, budget, and location.", key: true },
      { name: "WhatsApp", description: "Primary channel for regional and diaspora buyers." },
    ],
    insight:
      "Cross-border real estate is a language and timezone problem first, a sales problem second. A trilingual 24/7 agent turned 'we'll call you back' into instant engagement.",
    results: [
      { value: "3 langs", label: "Arabic · Sorani · EN", color: "purple" },
      { value: "↑ 60%", label: "International lead conversion", color: "green" },
      { value: "24/7", label: "Inquiry coverage", color: "amber" },
    ],
  },
  mimi: {
    challenge:
      "Repeat customers expected the brand to remember their size and past orders. Generic replies killed loyalty, and stylists couldn't scale personal service on WhatsApp.",
    flow: [
      {
        title: "Customer recognition",
        description:
          "Returning shoppers are identified by phone. The bot pulls order history and preferred sizes from WooCommerce.",
      },
      {
        title: "Personalized recommendations",
        description:
          "Suggests new arrivals and complementary items based on past purchases — in conversational Arabic.",
      },
      {
        title: "Size & availability Q&A",
        description:
          "Answers 'is this available in M?' instantly from live inventory. Reduces back-and-forth with human stylists.",
      },
    ],
    integrations: [
      { name: "WooCommerce", description: "Order history, inventory, and customer profiles for personalization.", key: true },
      { name: "WhatsApp", description: "Personal shopping experience in the channel customers already use.", key: true },
      { name: "GPT-4", description: "Natural Arabic dialect for recommendations and styling advice." },
    ],
    insight:
      "Fashion retention is memory. When the bot remembers what you bought last Eid, every message feels like your stylist — not a call center.",
    results: [
      { value: "↑ 38%", label: "Repeat purchase rate", color: "green" },
      { value: "92%", label: "CSAT score", color: "amber" },
      { value: "↓ 45%", label: "Stylist intervention", color: "purple" },
    ],
  },
  "dr-ihab": {
    challenge:
      "Front-desk staff spent hours on phone calls for appointment changes. Patients called during work hours only, and no-shows were high without automated reminders.",
    flow: [
      {
        title: "Appointment request in Arabic",
        description:
          "Patients choose book, reschedule, or cancel. The bot collects preferred date/time and reason for visit.",
      },
      {
        title: "Real-time calendar check",
        description:
          "Cal.com (or clinic calendar API) returns available slots. Patient picks one and gets instant confirmation.",
      },
      {
        title: "Automated reminders",
        description:
          "Make.com sends reminder messages 24h and 2h before the appointment. Cancellations free the slot automatically.",
      },
    ],
    integrations: [
      { name: "Cal.com / Calendar API", description: "Live availability without double-booking.", key: true },
      { name: "Make.com", description: "Reminder sequences and staff notifications.", key: true },
      { name: "WhatsApp", description: "Patients manage appointments in Arabic without phone calls." },
    ],
    insight:
      "Healthcare booking is repetitive and time-sensitive. Moving scheduling to WhatsApp in Arabic cut call volume while improving show-up rates.",
    results: [
      { value: "↓ 60%", label: "Front-desk calls", color: "green" },
      { value: "24/7", label: "Booking availability", color: "purple" },
      { value: "↓ 25%", label: "No-show rate", color: "amber" },
    ],
  },
};
