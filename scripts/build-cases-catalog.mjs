import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {Record<string, object>} */
const CASES = {
  "blue-arrow": {
    category: "real-estate",
    featured: true,
    industryLabel: "Real Estate",
    badge: "ib-re",
    listTitle: "How a real estate firm closed 3x more property deals with an AI sales agent that never sleeps",
    listExcerpt:
      "A WhatsApp AI agent qualifies leads by budget and interest, presents property cards, and books site visits automatically — cutting manual follow-up by 70%.",
    cover: "linear-gradient(135deg,#0f1f3d,#1a3a6b,#0f2744)",
    logo: "BA",
    logoStyle: { background: "rgba(59,130,246,.2)", border: "1px solid rgba(59,130,246,.35)" },
    orbs: [{ bg: "#3B82F6", top: "-50px", right: "60px", w: "160px", h: "160px" }],
    metrics: [
      { v: "↑ 68%", l: "Lead response rate", c: "green" },
      { v: "70%", l: "Less manual follow-up", c: "amber" },
    ],
    tags: ["WhatsApp", "Lead Qual.", "GPT-4.1"],
    detail: {
      kicker: "Real Estate · Baghdad, Iraq",
      title: "How a real estate firm closed 3x more property deals with an AI sales agent that never sleeps",
      background:
        "The sales team receives dozens of property inquiries daily via WhatsApp and social channels. With a small team, following up with every lead manually was impossible — hot buyers were slipping through.",
      challenges: [
        "Slow response time meant buyers moved to competitors",
        "Agents spent hours re-explaining the same property details",
        "No system to qualify budget or interest before a site visit",
        "Zero visibility into which leads were worth pursuing",
      ],
      flow: [
        "WhatsApp inquiry arrives → the agent greets and opens a qualification conversation",
        "The bot asks budget range, property type, and preferred area",
        "Matches the lead to the best available property from the catalog",
        "Sends a formatted property card with photos, specs, price, and floor plan",
        "If interested, books a site visit and notifies the agent on Slack",
        "Lead data and conversation summary logged to Google Sheets automatically",
      ],
      tags: ["WhatsApp", "GPT-4.1", "Lead Qualification", "Property Cards", "Booking", "Google Sheets"],
      metrics: [
        { v: "↑ 68%", l: "Lead response rate", c: "green" },
        { v: "70%", l: "Less manual follow-up", c: "amber" },
        { v: "3x", l: "More deals closed", c: "purple" },
      ],
    },
  },
  itshare: {
    category: "education",
    industryLabel: "Education",
    badge: "ib-ed",
    listTitle: "AI enrollment agent handling 200+ daily inquiries across 3 branches",
    listExcerpt:
      "A bilingual AI agent answers course questions, shares branch schedules, and captures student leads 24/7 — with zero branch schedule mixing.",
    cover: "linear-gradient(135deg,#1a0a2e,#2d1554,#1a0a2e)",
    logo: "IT",
    logoStyle: { background: "rgba(127,119,221,.2)", border: "1px solid rgba(127,119,221,.35)" },
    orbs: [{ bg: "#7F77DD", top: "-20px", right: "30px", w: "120px", h: "120px" }],
    metrics: [
      { v: "200+", l: "Daily inquiries", c: "purple" },
      { v: "↑ 45%", l: "Lead capture rate", c: "green" },
    ],
    tags: ["WhatsApp", "Enrollment", "Arabic AI"],
    detail: {
      kicker: "Education · Egypt (3 branches)",
      title: "AI enrollment agent handling 200+ daily inquiries across 3 branches without schedule mix-ups",
      background:
        "An academy offers IT training across three Egyptian branches plus online options. Students ask about schedules, prices, and enrollment via WhatsApp — admin staff were overwhelmed and occasionally gave wrong branch information.",
      challenges: [
        "Students receiving the wrong branch schedule",
        "Manual lead collection from WhatsApp was inconsistent",
        "High inquiry volume with limited admin bandwidth",
        "No structured handoff from bot conversation to sales team",
      ],
      flow: [
        "Student sends inquiry → the agent identifies branch by location or preference",
        "Presents course options relevant to interest and level",
        "Shares the correct branch schedule — isolated per branch",
        "Captures name, phone, and course interest into a structured lead form",
        "Hot leads flagged and sent to the enrollment team via notification",
        "Follow-up sequence triggered automatically if no response after 24 hours",
      ],
      tags: ["WhatsApp", "GPT-4.1", "Arabic AI", "Lead Capture", "Branch Logic", "Enrollment"],
      metrics: [
        { v: "200+", l: "Daily inquiries handled", c: "purple" },
        { v: "↑ 45%", l: "Lead capture rate", c: "green" },
        { v: "0", l: "Branch mix-ups", c: "amber" },
      ],
    },
  },
  givari: {
    category: "ecommerce",
    industryLabel: "eCommerce",
    badge: "ib-ec",
    listTitle: "Dual-agent fashion bot with WooCommerce and vision-based product lookup",
    listExcerpt:
      "Customers send a photo — the AI identifies the item, pulls it from the store catalog, and completes the order inside WhatsApp.",
    cover: "linear-gradient(135deg,#1f0a0a,#3d1212,#2a0d0d)",
    logo: "GV",
    logoStyle: { background: "rgba(216,90,48,.2)", border: "1px solid rgba(216,90,48,.35)" },
    orbs: [{ bg: "#D85A30", top: "-30px", left: "50px", w: "130px", h: "130px" }],
    metrics: [
      { v: "↑ 55%", l: "Orders via WhatsApp", c: "green" },
      { v: "0", l: "Manual lookups", c: "amber" },
    ],
    tags: ["WooCommerce", "Vision AI", "Dual Agent"],
    detail: {
      kicker: "eCommerce · Fashion · Iraq",
      title: "Dual-agent fashion bot with WooCommerce and vision-based product lookup",
      background:
        "A women's fashion retailer with a large WooCommerce catalog. Customers constantly sent product photos asking if items were in stock — staff spent hours manually searching the catalog.",
      challenges: [
        "Customers sending photos that staff had to match manually",
        "Catalog too large to browse easily in conversation",
        "Sales and support journeys needed different tones",
        "High cart abandonment from ordering friction",
      ],
      flow: [
        "Customer sends a product photo → vision AI analyzes and identifies the item",
        "Sales agent searches the catalog by visual match or product code",
        "Returns availability, price, sizes, and color options",
        "Customer confirms → agent guides through size selection and order",
        "Payment and delivery confirmed → order logged automatically",
        "Complaints or returns → support agent takes over with a different persona",
      ],
      tags: ["WooCommerce API", "GPT-4 Vision", "Dual Agent", "WhatsApp", "Fashion"],
      metrics: [
        { v: "↑ 55%", l: "Orders via WhatsApp", c: "green" },
        { v: "0", l: "Manual lookups needed", c: "amber" },
        { v: "↑ 28%", l: "Avg. basket size", c: "purple" },
      ],
    },
  },
  waseem: {
    category: "services",
    industryLabel: "ISP / Services",
    badge: "ib-sv",
    listTitle: "Separate AI agents for sales and technical support — one number, two brains",
    listExcerpt:
      "A dual-agent system routes customers between sales and support — eliminating crossed conversations and misrouted tickets.",
    cover: "linear-gradient(135deg,#0a1a0f,#0f3320,#0a1a12)",
    logo: "WN",
    logoStyle: { background: "rgba(29,158,117,.2)", border: "1px solid rgba(29,158,117,.35)" },
    orbs: [{ bg: "#1D9E75", top: "-15px", right: "50px", w: "100px", h: "100px" }],
    metrics: [
      { v: "80%", l: "Support auto-resolved", c: "green" },
      { v: "↑ 40%", l: "Upsell conversion", c: "purple" },
    ],
    tags: ["Dual Agent", "Support Bot", "Routing"],
    detail: {
      kicker: "ISP & Services · Iraq",
      title: "Separate AI agents for sales and technical support on one WhatsApp number",
      background:
        "An ISP sells internet plans across Baghdad. One WhatsApp inbox mixed upgrade requests with outage complaints — handled by the same team, creating confusion.",
      challenges: [
        "Sales and support conversations mixed in one inbox",
        "Support staff accidentally upselling during outage complaints",
        "No systematic way to resolve common technical issues",
        "Agents context-switching constantly",
      ],
      flow: [
        "Customer messages → intent classifier determines sales or support",
        "Sales agent presents plans, compares speeds, processes upgrades",
        "Support agent runs diagnostic checklist, resolves most issues",
        "Unresolved issues escalated to human with full context summary",
        "Sales agent may offer plan upgrades after support resolution",
        "All conversations tagged and logged for weekly reporting",
      ],
      tags: ["Dual Agent", "Intent Classification", "ISP", "Sales Bot", "Support Bot"],
      metrics: [
        { v: "80%", l: "Support tickets auto-resolved", c: "green" },
        { v: "↑ 40%", l: "Upsell conversion", c: "purple" },
        { v: "↓ 65%", l: "Human escalations", c: "amber" },
      ],
    },
  },
  sultan: {
    category: "shipping",
    industryLabel: "Shipping",
    badge: "ib-sh",
    listTitle: "Automated order intake — inquiry to shipment booking in under 2 minutes",
    listExcerpt:
      "The AI collects shipment details, calculates costs, confirms orders, and logs everything to a central sheet — removing manual back-and-forth from dispatch.",
    cover: "linear-gradient(135deg,#1a1000,#3d2a00,#1f1500)",
    logo: "SB",
    logoStyle: { background: "rgba(239,159,39,.2)", border: "1px solid rgba(239,159,39,.35)" },
    orbs: [{ bg: "#EF9F27", bottom: "-30px", right: "30px", w: "120px", h: "120px" }],
    metrics: [
      { v: "↓ 85%", l: "Manual data entry", c: "amber" },
      { v: "<2 min", l: "Booking time", c: "green" },
    ],
    tags: ["Order Processing", "Sheets Sync"],
    detail: {
      kicker: "Shipping & Logistics · Southern Iraq",
      title: "Automated shipment booking from WhatsApp inquiry to confirmation in under 2 minutes",
      background:
        "A logistics company handles inter-city shipments. Each booking used to require phone calls, manual spreadsheet entry, and a confirmation call — taking 15–20 minutes per order.",
      challenges: [
        "Every booking required staff on the phone for 15+ minutes",
        "Manual spreadsheet entry caused errors",
        "No confirmation system for customers after booking",
        "Staff capacity limited daily order volume",
      ],
      flow: [
        "Customer sends shipping request → bot collects origin, destination, weight, and type",
        "Calculates cost automatically based on route and weight table",
        "Presents quote and confirms with customer",
        "On confirmation: creates row in Google Sheets and assigns tracking ID",
        "Sends confirmation with tracking ID and estimated pickup time",
        "Daily summary sheet generated for the dispatch team",
      ],
      tags: ["WhatsApp", "Google Sheets", "Shipping", "Order Bot", "Automation"],
      metrics: [
        { v: "↓ 85%", l: "Manual data entry", c: "amber" },
        { v: "<2 min", l: "Booking time", c: "green" },
        { v: "↑ 3x", l: "Daily order capacity", c: "purple" },
      ],
    },
  },
  "rz-estate": {
    category: "real-estate",
    featured: true,
    industryLabel: "Real Estate",
    badge: "ib-re",
    listTitle: "Trilingual AI agent converting international property inquiries 24/7",
    listExcerpt:
      "The bot detects Arabic, Kurdish Sorani, or English automatically, qualifies leads by property type and budget, and hands off warm prospects.",
    cover: "linear-gradient(135deg,#0a0a1a,#1a1a3d,#0f0f2a)",
    logo: "RZ",
    logoStyle: { background: "rgba(127,119,221,.2)", border: "1px solid rgba(127,119,221,.35)" },
    orbs: [
      { bg: "#7F77DD", top: "-40px", left: "80px", w: "150px", h: "150px" },
      { bg: "#D85A30", bottom: "-10px", right: "40px", w: "80px", h: "80px" },
    ],
    metrics: [
      { v: "3 langs", l: "AR · Sorani · EN", c: "purple" },
      { v: "↑ 60%", l: "Intl. lead conversion", c: "green" },
    ],
    tags: ["Multilingual", "Lead Routing", "Kurdish Sorani"],
    detail: {
      kicker: "Real Estate · Kurdistan Region",
      title: "Trilingual AI agent unlocking international property inquiries around the clock",
      background:
        "A real estate firm serves buyers from Iraq, the Gulf, and diaspora communities. Inquiries arrived in Arabic, Kurdish Sorani, and English — the team could only respond confidently in one language.",
      challenges: [
        "Sorani-speaking buyers receiving Arabic-only responses",
        "English-speaking diaspora buyers with no follow-up in their language",
        "No qualification system across three buyer segments",
        "Agents unavailable after hours for international time zones",
      ],
      flow: [
        "Inquiry arrives → agent detects language from the first message",
        "Responds in the detected language throughout",
        "Qualifies by property type, budget, and timeline",
        "Presents matched property cards in the buyer's language",
        "Books a callback with the appropriate bilingual agent",
        "Lead profile with language flag sent to CRM",
      ],
      tags: ["Multilingual AI", "Kurdish Sorani", "Arabic", "English", "Real Estate", "Lead Routing"],
      metrics: [
        { v: "3 langs", l: "Arabic · Sorani · EN", c: "purple" },
        { v: "↑ 60%", l: "International conversion", c: "green" },
        { v: "24/7", l: "Response coverage", c: "amber" },
      ],
    },
  },
  mimi: {
    category: "retail",
    industryLabel: "Fashion Retail",
    badge: "ib-rt",
    listTitle: "AI shopping assistant that boosted repeat purchase rate for a fashion brand",
    listExcerpt:
      "The bot greets returning customers, recommends from order history, and handles size inquiries — a personalized WhatsApp shopping experience.",
    cover: "linear-gradient(135deg,#1a0f2e,#2d1a4a,#1a0f2e)",
    logo: "MM",
    logoStyle: { background: "rgba(216,90,48,.2)", border: "1px solid rgba(216,90,48,.35)" },
    orbs: [{ bg: "#D85A30", top: "-15px", right: "40px", w: "100px", h: "100px" }],
    metrics: [
      { v: "↑ 38%", l: "Repeat purchase", c: "green" },
      { v: "92%", l: "CSAT score", c: "amber" },
    ],
    tags: ["Fashion Bot", "Personalization"],
    detail: {
      kicker: "Fashion Retail · Iraq",
      title: "AI shopping assistant that boosted repeat purchase rate for a women's fashion brand",
      background:
        "A fashion retailer with a loyal WhatsApp customer base. Customers expected personalized service — size memory and past orders — but the team could not maintain that manually at scale.",
      challenges: [
        "Staff forgetting customer size preferences",
        "Generic broadcast messages getting ignored",
        "High repeat inquiries for size and availability",
        "No proactive surfacing of new arrivals to the right customers",
      ],
      flow: [
        "Returning customer messages → bot retrieves purchase history",
        "Greets by name and references last purchase context",
        "Recommends new arrivals matching past preferences and budget",
        "Handles size inquiries with stored measurements",
        "Processes order with address and payment preference from profile",
        "Sends styled outfit suggestion as follow-up after delivery",
      ],
      tags: ["Personalization", "Customer History", "Fashion Bot", "WhatsApp", "Repeat Sales"],
      metrics: [
        { v: "↑ 38%", l: "Repeat purchase rate", c: "green" },
        { v: "92%", l: "CSAT score", c: "amber" },
        { v: "↑ 25%", l: "Avg. order value", c: "purple" },
      ],
    },
  },
  "dr-ihab": {
    category: "services",
    industryLabel: "Healthcare",
    badge: "ib-hc",
    listTitle: "Appointment booking bot that cut front-desk calls by 60% for an orthopedic clinic",
    listExcerpt:
      "Patients book, reschedule, or cancel via WhatsApp — the bot checks real-time availability and sends Arabic confirmations automatically.",
    cover: "linear-gradient(135deg,#0a1a10,#0f2e1a,#0a1a10)",
    logo: "IY",
    logoStyle: { background: "rgba(29,158,117,.2)", border: "1px solid rgba(29,158,117,.35)" },
    orbs: [{ bg: "#1D9E75", top: "-20px", left: "60px", w: "110px", h: "110px" }],
    metrics: [
      { v: "↓ 60%", l: "Front-desk calls", c: "green" },
      { v: "24/7", l: "Booking availability", c: "purple" },
    ],
    tags: ["Appointment Bot", "Healthcare", "Arabic"],
    detail: {
      kicker: "Healthcare · Orthopedic clinic · Iraq",
      title: "Appointment bot handling booking, rescheduling, and cancellations 24/7 in Arabic",
      background:
        "A busy orthopedic clinic handles high patient volume. The front desk was overwhelmed with appointment calls, and many patients called outside working hours with no response.",
      challenges: [
        "Patients calling outside hours with no way to book",
        "Front desk spending much of the day on appointment calls",
        "High no-show rate without automated reminders",
        "Manual appointment book with no conflict checking",
      ],
      flow: [
        "Patient sends WhatsApp message → bot identifies new or returning patient",
        "Presents available slots for the next 7 days",
        "Patient selects slot → bot confirms and logs appointment",
        "Automated reminder sent 24 hours before appointment",
        "Day-of reminder with clinic location details",
        "Cancellation or reschedule handled in chat, slot freed instantly",
      ],
      tags: ["Appointment Bot", "Healthcare", "Arabic", "Reminders", "Scheduling"],
      metrics: [
        { v: "↓ 60%", l: "Front-desk calls", c: "green" },
        { v: "24/7", l: "Booking availability", c: "purple" },
        { v: "↓ 30%", l: "No-show rate", c: "amber" },
      ],
    },
  },
  panda: {
    category: "ecommerce",
    industryLabel: "eCommerce",
    badge: "ib-ec",
    listTitle: "AI product advisor that cut support tickets by 50% for a tech accessories store",
    listExcerpt:
      "The agent handles compatibility questions, recommends accessories by device model, and processes orders — no human needed for most conversations.",
    cover: "linear-gradient(135deg,#0f1a10,#1a3020,#0f1a10)",
    logo: "PP",
    logoStyle: { background: "rgba(29,158,117,.2)", border: "1px solid rgba(29,158,117,.35)" },
    orbs: [{ bg: "#1D9E75", top: "-15px", right: "40px", w: "110px", h: "110px" }],
    metrics: [
      { v: "↓ 50%", l: "Support tickets", c: "green" },
      { v: "80%", l: "Fully automated", c: "amber" },
    ],
    tags: ["Product Advisor", "Order Bot"],
    detail: {
      kicker: "eCommerce · Tech Accessories · Iraq",
      title: "AI product advisor automating 80% of customer conversations for a tech accessories store",
      background:
        "A tech accessories store gets constant compatibility questions like whether a case fits a specific phone model — requiring product knowledge staff could not always answer quickly.",
      challenges: [
        "High volume of device compatibility questions",
        "Customers leaving without buying when no one answered in time",
        "No system to recommend complementary accessories at inquiry",
        "Inconsistent product knowledge across support staff",
      ],
      flow: [
        "Customer asks about compatibility → agent identifies device model",
        "Checks compatibility database and confirms fit or suggests variant",
        "Presents product with price, availability, and shipping time",
        "Recommends complementary accessories bundle",
        "Processes order with address and payment method",
        "Sends tracking update when shipped",
      ],
      tags: ["Tech Accessories", "Compatibility AI", "Cross-sell", "WhatsApp", "Order Bot"],
      metrics: [
        { v: "↓ 50%", l: "Support tickets", c: "green" },
        { v: "80%", l: "Fully automated", c: "amber" },
        { v: "↑ 35%", l: "Cross-sell rate", c: "purple" },
      ],
    },
  },
  villa: {
    category: "retail",
    industryLabel: "Retail",
    badge: "ib-rt",
    listTitle: "Conversational sales agent that made WhatsApp the top revenue channel",
    listExcerpt:
      "A warm Iraqi Arabic sales agent presents product lines, handles pricing questions, and guides customers to purchase.",
    cover: "linear-gradient(135deg,#1a100a,#3a2010,#1a100a)",
    logo: "VG",
    logoStyle: { background: "rgba(239,159,39,.2)", border: "1px solid rgba(239,159,39,.35)" },
    orbs: [{ bg: "#EF9F27", top: "-20px", left: "50px", w: "120px", h: "120px" }],
    metrics: [
      { v: "↑ 42%", l: "WhatsApp revenue", c: "amber" },
      { v: "3 min", l: "Avg. close time", c: "green" },
    ],
    tags: ["Sales Agent", "Iraqi Arabic"],
    detail: {
      kicker: "Retail · Baghdad, Iraq",
      title: "Conversational sales agent that turned WhatsApp into the store's top revenue channel",
      background:
        "A Baghdad retail store had strong walk-in traffic but informal WhatsApp usage — inquiries went cold when staff replied late.",
      challenges: [
        "Informal WhatsApp responses with hours of delay",
        "No catalog presentation — staff typed details manually",
        "Customers asking prices then going silent",
        "No data on which products drove most inquiries",
      ],
      flow: [
        "Customer messages → agent greets in Iraqi Arabic dialect",
        "Presents product categories with visual descriptions",
        "Customer selects interest → agent shares price, availability, colors",
        "Handles objections and suggests alternatives",
        "Closes sale with delivery or pickup confirmation",
        "Post-sale follow-up at 24h and 72h intervals",
      ],
      tags: ["Sales Agent", "Iraqi Arabic Dialect", "Retail", "WhatsApp", "Catalog Bot"],
      metrics: [
        { v: "↑ 42%", l: "WhatsApp revenue", c: "amber" },
        { v: "3 min", l: "Avg. close time", c: "green" },
        { v: "60 days", l: "To top channel", c: "purple" },
      ],
    },
  },
  noor: {
    category: "print",
    industryLabel: "Print & Media",
    badge: "ib-pr",
    listTitle: "Curriculum book sales bot — 300+ school orders in peak season, zero errors",
    listExcerpt:
      "The bot guides teachers and parents through grade-specific book bundles, confirms orders, and coordinates pickup — all via WhatsApp.",
    cover: "linear-gradient(135deg,#0a0f1a,#101a30,#0a0f1a)",
    logo: "NP",
    logoStyle: { background: "rgba(127,119,221,.2)", border: "1px solid rgba(127,119,221,.35)" },
    orbs: [{ bg: "#7F77DD", top: "-15px", right: "50px", w: "110px", h: "110px" }],
    metrics: [
      { v: "300+", l: "Peak season orders", c: "purple" },
      { v: "0", l: "Order entry errors", c: "green" },
    ],
    tags: ["Order Bot", "Seasonal Scale"],
    detail: {
      kicker: "Print & Education · Southern Iraq",
      title: "Automated curriculum book sales during peak school season with zero entry errors",
      background:
        "A print house sells curriculum books to schools and families each academic year. During back-to-school season, orders flooded WhatsApp — each requiring manual entry and confirmation.",
      challenges: [
        "Hundreds of orders in the first two weeks of school season",
        "Manual order entry creating wrong grade combinations",
        "No confirmation sent to customers after ordering",
        "Staff overwhelmed leading to delayed responses",
      ],
      flow: [
        "Parent or teacher messages → bot asks school level and grade",
        "Presents correct book bundle for that grade",
        "Confirms quantities and subject additions",
        "Calculates total price and confirms payment method",
        "Order logged to Google Sheets with customer info",
        "Pickup confirmation with date and location sent automatically",
      ],
      tags: ["Book Sales", "Curriculum Bot", "Seasonal Automation", "WhatsApp", "Google Sheets"],
      metrics: [
        { v: "300+", l: "Peak season orders", c: "purple" },
        { v: "0", l: "Entry errors", c: "green" },
        { v: "↓ 90%", l: "Admin time on orders", c: "amber" },
      ],
    },
  },
  fofa: {
    category: "retail",
    industryLabel: "Fashion Retail",
    badge: "ib-rt",
    listTitle: "One AI agent managing two fashion brands from a single WhatsApp number",
    listExcerpt:
      "One agent routes customers to the right brand, handles sizing, and processes orders — with consistent Arabic tone across both.",
    cover: "linear-gradient(135deg,#1a0a18,#30103a,#1a0a18)",
    logo: "FS",
    logoStyle: { background: "rgba(216,90,48,.2)", border: "1px solid rgba(216,90,48,.35)" },
    orbs: [{ bg: "#D85A30", top: "-20px", right: "50px", w: "110px", h: "110px" }],
    metrics: [
      { v: "2 brands", l: "One WhatsApp #", c: "purple" },
      { v: "↑ 33%", l: "Cross-brand sales", c: "green" },
    ],
    tags: ["Multi-Brand", "Fashion Bot"],
    detail: {
      kicker: "Fashion Retail · Iraq",
      title: "One AI agent managing two women's fashion brands from a single WhatsApp number",
      background:
        "Two clothing brands run by the same owner used separate WhatsApp numbers — splitting workload and confusing loyal customers.",
      challenges: [
        "Two separate numbers creating operational overhead",
        "Customers unsure which number handles which brand",
        "No way to cross-sell between brands",
        "Inconsistent tone and response time across accounts",
      ],
      flow: [
        "Customer messages shared number → bot identifies which brand they mean",
        "Presents relevant brand catalog with appropriate tone",
        "If inquiry fits both brands, suggests the other option",
        "Handles size, availability, and pricing per brand",
        "Order processed with brand-specific delivery details",
        "Cross-brand recommendation when relevant",
      ],
      tags: ["Multi-Brand", "Fashion Bot", "Iraqi Arabic", "Single Inbox", "Cross-sell"],
      metrics: [
        { v: "2 brands", l: "One WhatsApp number", c: "purple" },
        { v: "↑ 33%", l: "Cross-brand sales", c: "green" },
        { v: "0", l: "Brand mix-up incidents", c: "amber" },
      ],
    },
  },
  amcupcakes: {
    category: "food",
    industryLabel: "Food & Bakery",
    badge: "ib-fo",
    listTitle: "WhatsApp ordering bot that doubled weekend capacity and eliminated phone orders",
    listExcerpt:
      "Customers browse the menu, customize orders, and confirm payment — all inside WhatsApp, with zero phone calls needed.",
    cover: "linear-gradient(135deg,#1a080a,#380f15,#1a080a)",
    logo: "AM",
    logoStyle: { background: "rgba(216,90,48,.2)", border: "1px solid rgba(216,90,48,.35)" },
    orbs: [{ bg: "#D85A30", top: "-20px", right: "40px", w: "110px", h: "110px" }],
    metrics: [
      { v: "↑ 2x", l: "Weekend capacity", c: "coral" },
      { v: "0", l: "Phone orders needed", c: "green" },
    ],
    tags: ["Food Ordering", "WhatsApp", "Egypt"],
    detail: {
      kicker: "Food & Bakery · Cairo, Egypt",
      title: "WhatsApp ordering bot that doubled weekend capacity and eliminated phone orders",
      background:
        "A Cairo bakery had a cult following but took all orders by phone. On weekends the phone rang non-stop and orders got mixed up.",
      challenges: [
        "Manual phone orders collapsing on busy weekends",
        "Order mix-ups from verbal confirmations",
        "No upselling — customers only ordered what they called about",
        "No visibility into upcoming order volume for production",
      ],
      flow: [
        "Customer messages → bot presents menu with photos and prices",
        "Flavor and quantity selection with customization options",
        "Delivery slot selection from available times",
        "Upsell prompt for card message or gift box",
        "Order total confirmed with payment instructions",
        "Order added to production sheet with delivery time",
      ],
      tags: ["Food Ordering", "WhatsApp", "Menu Bot", "Delivery Slots", "Egypt", "Bakery"],
      metrics: [
        { v: "↑ 2x", l: "Weekend order capacity", c: "coral" },
        { v: "0", l: "Phone orders needed", c: "green" },
        { v: "↑ 28%", l: "Avg. order value", c: "amber" },
      ],
    },
  },
  noorart: {
    category: "retail",
    industryLabel: "Wall Art & Print",
    badge: "ib-rt",
    listTitle: "Canvas bot with Pinterest search — find and order artwork without leaving WhatsApp",
    listExcerpt:
      "Customers describe a vibe or theme; the bot returns matching visuals, captures size and material, then confirms the print order.",
    cover: "linear-gradient(135deg,#0f0a1a,#1e1035,#0f0a1a)",
    logo: "NA",
    logoStyle: { background: "rgba(127,119,221,.2)", border: "1px solid rgba(127,119,221,.35)" },
    orbs: [{ bg: "#7F77DD", top: "-20px", left: "60px", w: "120px", h: "120px" }],
    metrics: [
      { v: "Pinterest", l: "Live search in WA", c: "purple" },
      { v: "↑ 70%", l: "Order completion", c: "green" },
    ],
    tags: ["Pinterest API", "Print Orders"],
    detail: {
      kicker: "Wall Art & Custom Print · Iraq",
      title: "Pinterest-powered canvas ordering inside WhatsApp",
      background:
        "A custom canvas studio prints art in Iraq. Customers struggled to describe what they wanted and were sent to browse Pinterest themselves — a broken experience.",
      challenges: [
        "Customers struggling to describe what they wanted clearly",
        "Long back-and-forth to clarify design references",
        "No structured capture of canvas size and material preferences",
        "High drop-off when asked to send Pinterest links manually",
      ],
      flow: [
        "Customer describes vibe or theme (e.g. modern Arabic calligraphy)",
        "Bot queries Pinterest API and returns matching images in chat",
        "Customer picks favorite → bot confirms canvas size options",
        "Material selection: matte, glossy, or framed",
        "Price calculated based on size and material",
        "Order confirmed with delivery time and payment details",
      ],
      tags: ["Pinterest API", "Canvas Printing", "Custom Orders", "WhatsApp", "Visual Search"],
      metrics: [
        { v: "Pinterest", l: "Live search in WhatsApp", c: "purple" },
        { v: "↑ 70%", l: "Order completion rate", c: "green" },
        { v: "0", l: "Website visits needed", c: "amber" },
      ],
    },
  },
  areef: {
    category: "education",
    featured: true,
    industryLabel: "EdTech Platform",
    badge: "ib-ed",
    listTitle: "RAG-powered AI tutor — 15 Tawjihi subjects, 300+ lessons indexed",
    listExcerpt:
      "Students get instant, curriculum-accurate answers from an Arabic AI tutor with source citations — built on Next.js, Supabase, and pgvector.",
    cover: "linear-gradient(135deg,#0a1020,#101a3a,#0a1020)",
    logo: "عف",
    logoStyle: { background: "rgba(127,119,221,.2)", border: "1px solid rgba(127,119,221,.35)" },
    orbs: [
      { bg: "#7F77DD", top: "-40px", right: "80px", w: "160px", h: "160px" },
      { bg: "#1D9E75", bottom: "-10px", left: "60px", w: "80px", h: "80px" },
    ],
    metrics: [
      { v: "300+", l: "Lessons indexed", c: "purple" },
      { v: "15", l: "Tawjihi subjects", c: "green" },
    ],
    tags: ["RAG", "Next.js 15", "Supabase", "pgvector"],
    detail: {
      kicker: "EdTech Platform · Palestinian Tawjihi",
      title: "Full-stack RAG educational platform with an Arabic AI tutor for Tawjihi students",
      background:
        "Palestinian Tawjihi students had limited access to quality tutoring. The platform was built using RAG to answer curriculum-accurate questions in Arabic from indexed lesson content.",
      challenges: [
        "Building curriculum-accurate AI that avoids hallucinating exam answers",
        "Structuring 300+ lessons from 15 subjects into a vector database",
        "Arabic RTL rendering across all UI components",
        "Keeping API costs manageable for a student-facing platform",
      ],
      flow: [
        "Student logs in and selects subject",
        "Types a question in Arabic → system embeds and queries pgvector",
        "Retrieves relevant lesson chunks from Supabase",
        "GPT-4 generates answer grounded in context with citation",
        "Follow-up questions maintain session context",
        "Admin uploads new lessons → auto-embedded and indexed",
      ],
      tags: ["RAG", "pgvector", "Next.js 15", "Supabase", "OpenAI", "Arabic AI", "Education"],
      metrics: [
        { v: "300+", l: "Lessons indexed", c: "purple" },
        { v: "15", l: "Tawjihi subjects", c: "green" },
        { v: "pgvector", l: "RAG architecture", c: "amber" },
      ],
    },
  },
  mina: {
    category: "retail",
    industryLabel: "Furniture",
    badge: "ib-rt",
    listTitle: "Showroom AI agent that pre-qualifies buyers by room type and budget",
    listExcerpt:
      "The AI presents collections by room, filters by style and budget, and books showroom visits — reducing no-shows.",
    cover: "linear-gradient(135deg,#150f0a,#2a1e10,#150f0a)",
    logo: "MF",
    logoStyle: { background: "rgba(239,159,39,.2)", border: "1px solid rgba(239,159,39,.35)" },
    orbs: [{ bg: "#EF9F27", top: "-15px", right: "45px", w: "110px", h: "110px" }],
    metrics: [
      { v: "↓ 45%", l: "No-show rate", c: "amber" },
      { v: "↑ 52%", l: "Qualified visits", c: "green" },
    ],
    tags: ["Showroom Bot", "Booking", "Gulf"],
    detail: {
      kicker: "Furniture & Interior · Gulf Region",
      title: "Showroom AI agent that pre-qualifies furniture buyers before they visit",
      background:
        "A Gulf furniture retailer receives showroom visit requests via WhatsApp. Many visitors arrived without clear budget or decision-making authority.",
      challenges: [
        "High no-show rate from unqualified leads",
        "Sales team spending equal time on browsers and buyers",
        "No pre-visit qualification to match inventory",
        "Inconsistent follow-up after visit requests",
      ],
      flow: [
        "Customer expresses interest in visiting → qualification conversation",
        "Identifies room(s) to furnish and approximate budget",
        "Presents relevant collections for their criteria",
        "Confirms visit time slot in the system",
        "Sends pre-visit prep: what to measure and parking info",
        "Post-visit follow-up at 24h and 72h",
      ],
      tags: ["Showroom Bot", "Furniture", "Lead Qualification", "Booking", "Gulf", "WhatsApp"],
      metrics: [
        { v: "↓ 45%", l: "No-show rate", c: "amber" },
        { v: "↑ 52%", l: "Qualified showroom visits", c: "green" },
        { v: "3 min", l: "Qualification time", c: "purple" },
      ],
    },
  },
  zain: {
    category: "shipping",
    industryLabel: "Logistics",
    badge: "ib-sh",
    listTitle: "Tracking bot answering 400+ weekly status inquiries with no human agent",
    listExcerpt:
      "Customers text a shipment number; the bot returns live status, ETA, and branch contact — instantly in Arabic.",
    cover: "linear-gradient(135deg,#0a0f15,#101828,#0a0f15)",
    logo: "ZL",
    logoStyle: { background: "rgba(127,119,221,.2)", border: "1px solid rgba(127,119,221,.35)" },
    orbs: [{ bg: "#7F77DD", top: "-20px", right: "50px", w: "120px", h: "120px" }],
    metrics: [
      { v: "400+", l: "Weekly auto-replies", c: "purple" },
      { v: "100%", l: "No human needed", c: "green" },
    ],
    tags: ["Tracking Bot", "API Integration"],
    detail: {
      kicker: "Logistics & Tracking · Iraq",
      title: "Real-time shipment tracking bot handling 400+ weekly inquiries automatically",
      background:
        "A logistics company handles inter-city shipments. The biggest WhatsApp volume was 'where is my package?' — answered hundreds of times per week manually.",
      challenges: [
        "Staff answering the same tracking question repeatedly",
        "API data available but not integrated with WhatsApp",
        "Customers calling outside hours with no self-serve option",
        "No escalation path for genuinely stuck shipments",
      ],
      flow: [
        "Customer sends shipment ID",
        "Bot queries tracking API in real time",
        "Returns status, last checkpoint, ETA, and branch contact",
        "If delayed → explains why and gives new ETA",
        "If problem reported → escalates to human with full context",
        "All queries logged for delay pattern analysis",
      ],
      tags: ["Tracking Bot", "Logistics", "API Integration", "WhatsApp", "Automation"],
      metrics: [
        { v: "400+", l: "Weekly auto-replies", c: "purple" },
        { v: "100%", l: "No human needed", c: "green" },
        { v: "↓ 80%", l: "Support load", c: "amber" },
      ],
    },
  },
  hayat: {
    category: "services",
    industryLabel: "Healthcare",
    badge: "ib-hc",
    listTitle: "Patient intake bot routing to the right department in under 30 seconds",
    listExcerpt:
      "Patients describe symptoms in Arabic or English; the bot identifies the department, shows slots, and confirms the appointment.",
    cover: "linear-gradient(135deg,#0f1a1a,#103030,#0f1a1a)",
    logo: "HC",
    logoStyle: { background: "rgba(29,158,117,.2)", border: "1px solid rgba(29,158,117,.35)" },
    orbs: [{ bg: "#1D9E75", top: "-15px", left: "55px", w: "110px", h: "110px" }],
    metrics: [
      { v: "<30s", l: "Dept. routing time", c: "green" },
      { v: "5 depts", l: "One WhatsApp number", c: "purple" },
    ],
    tags: ["Multi-Dept.", "Bilingual", "Qatar"],
    detail: {
      kicker: "Healthcare · Multi-dept. clinic · Qatar",
      title: "One WhatsApp number routing patients to the right specialist in under 30 seconds",
      background:
        "A Doha clinic has five departments. Patients often did not know which department they needed — causing misdirected bookings.",
      challenges: [
        "Patients unsure which department handles their symptoms",
        "Misdirected bookings wasting specialist slots",
        "Bilingual patient base with inconsistent handling",
        "High no-show rate due to location confusion in the clinic",
      ],
      flow: [
        "Patient describes symptoms or mentions specialty",
        "AI classifies the correct department",
        "Confirms in patient's language",
        "Shows available slots for that department",
        "Booking confirmed → calendar entry created",
        "Reminder sent 24h before with floor and what to bring",
        "Missed appointment → bot follows up to reschedule",
      ],
      tags: ["Multi-Department", "Healthcare", "Bilingual", "Arabic", "English", "Qatar", "Booking Bot"],
      metrics: [
        { v: "<30s", l: "Routing time", c: "green" },
        { v: "5 depts", l: "One WhatsApp number", c: "purple" },
        { v: "↓ 55%", l: "Misdirected bookings", c: "amber" },
      ],
    },
  },
  bloom: {
    category: "retail",
    industryLabel: "Flowers & Gifts",
    badge: "ib-rt",
    listTitle: "Gift recommendation AI that increased average order value by 35%",
    listExcerpt:
      "Customers describe occasion and budget; the AI recommends bundles, message cards, and same-day delivery in Gulf Arabic.",
    cover: "linear-gradient(135deg,#0f150f,#1a2a1a,#0f150f)",
    logo: "BL",
    logoStyle: { background: "rgba(29,158,117,.2)", border: "1px solid rgba(29,158,117,.35)" },
    orbs: [{ bg: "#1D9E75", top: "-15px", right: "45px", w: "110px", h: "110px" }],
    metrics: [
      { v: "↑ 35%", l: "Avg. order value", c: "green" },
      { v: "Gulf AR", l: "Dialect-aware AI", c: "amber" },
    ],
    tags: ["Gift AI", "Gulf Arabic", "Saudi"],
    detail: {
      kicker: "Flowers & Gifts · Riyadh, Saudi Arabia",
      title: "Gift recommendation AI that increased average order value by 35%",
      background:
        "A Riyadh florist targets premium gifting. Customers expected consultative service for occasions, not just a product catalog.",
      challenges: [
        "Customers asking for recommendations with no clear answer path",
        "Gulf Arabic dialect expected — formal Arabic felt off-brand",
        "No structured bundle-building",
        "Same-day delivery slots filling up from late orders",
      ],
      flow: [
        "Customer describes occasion and recipient",
        "Bot asks budget range and delivery urgency",
        "Recommends three curated bundles with descriptions",
        "Add-ons: personalized card, luxury wrap, chocolate box",
        "Customer picks bundle → delivery slot from live availability",
        "Order confirmed with delivery window and driver contact",
      ],
      tags: ["Gulf Arabic", "Gift AI", "Flowers", "Luxury Retail", "Saudi Arabia", "Same-day Delivery"],
      metrics: [
        { v: "↑ 35%", l: "Avg. order value", c: "green" },
        { v: "Gulf AR", l: "Dialect-native AI", c: "amber" },
        { v: "↑ 48%", l: "Same-day delivery rate", c: "purple" },
      ],
    },
  },
  sama: {
    category: "real-estate",
    industryLabel: "Real Estate",
    badge: "ib-re",
    listTitle: "Facebook Ads → WhatsApp pipeline qualifying 500+ leads per month",
    listExcerpt:
      "Leads from ads land in WhatsApp. The AI qualifies by budget, visa status, and property type before any sales call.",
    cover: "linear-gradient(135deg,#100a1a,#201535,#100a1a)",
    logo: "SR",
    logoStyle: { background: "rgba(127,119,221,.2)", border: "1px solid rgba(127,119,221,.35)" },
    orbs: [{ bg: "#7F77DD", top: "-30px", right: "60px", w: "130px", h: "130px" }],
    metrics: [
      { v: "500+", l: "Leads/month qualified", c: "purple" },
      { v: "↑ 78%", l: "Qualified lead rate", c: "green" },
    ],
    tags: ["FB Ads", "Lead Pipeline", "Dubai"],
    detail: {
      kicker: "Real Estate · Dubai, UAE",
      title: "Facebook Ads to WhatsApp pipeline qualifying 500+ leads per month on autopilot",
      background:
        "A Dubai real estate firm runs Facebook ad campaigns. Leads clicked through to WhatsApp with no qualification — agents called hundreds of unqualified contacts monthly.",
      challenges: [
        "Agents wasting time on leads with unrealistic budgets",
        "No standardized qualification before first sales call",
        "High cost per qualified lead from manual filtering",
        "Leads going cold between ad click and first call",
      ],
      flow: [
        "Facebook ad click → WhatsApp opens with property interest",
        "Bot greets in under 5 seconds",
        "Qualifies: budget, timeline, residency status, property type",
        "Hot leads → instant callback booking with an agent",
        "Warm leads → nurture sequence with market updates",
        "Cold leads → tagged in CRM, removed from agent pipeline",
      ],
      tags: ["Facebook Ads", "Lead Pipeline", "Dubai", "Real Estate", "Qualification", "CRM Integration"],
      metrics: [
        { v: "500+", l: "Leads/month qualified", c: "purple" },
        { v: "↑ 78%", l: "Qualified lead rate", c: "green" },
        { v: "↓ 70%", l: "Cost per qualified lead", c: "amber" },
      ],
    },
  },
};

const badgeMap = {
  "ib-re": "badge-real-estate",
  "ib-ed": "badge-education",
  "ib-ec": "badge-ecommerce",
  "ib-sv": "badge-services",
  "ib-sh": "badge-shipping",
  "ib-rt": "badge-retail",
  "ib-hc": "badge-healthcare",
  "ib-fo": "badge-food",
  "ib-pr": "badge-print",
};

function shapeFromOrb(o) {
  const s = { background: o.bg };
  if (o.top) s.top = o.top;
  if (o.right) s.right = o.right;
  if (o.bottom) s.bottom = o.bottom;
  if (o.left) s.left = o.left;
  if (o.w) s.width = o.w;
  if (o.h) s.height = o.h;
  return s;
}

const cards = Object.entries(CASES).map(([id, c]) => ({
  id,
  category: c.category,
  featuredWhenAll: Boolean(c.featured),
  industryLabel: c.industryLabel,
  industryBadgeClass: badgeMap[c.badge] ?? "badge-services",
  listTitle: c.listTitle,
  listExcerpt: c.listExcerpt,
  metrics: c.metrics.map((m) => ({ value: m.v, label: m.l, color: m.c })),
  tags: c.tags,
  logoInitials: c.logo,
  logoStyle: c.logoStyle,
  coverImage: `/cases/covers/${id}.jpg`,
  coverBg: c.cover,
  coverShapes: (c.orbs ?? []).map(shapeFromOrb),
  detail: {
    kicker: c.detail.kicker,
    title: c.detail.title,
    background: c.detail.background,
    challenges: c.detail.challenges,
    flow: c.detail.flow,
    tags: c.detail.tags,
    metrics: c.detail.metrics.map((m) => ({ value: m.v, label: m.l, color: m.c })),
  },
}));

const out = `/* Generated by scripts/build-cases-catalog.mjs — do not edit by hand */
import type { CSSProperties } from "react";

export type CaseIndexCategory =
  | "real-estate"
  | "education"
  | "ecommerce"
  | "services"
  | "shipping"
  | "retail"
  | "food"
  | "print";

export type MetricColor = "green" | "purple" | "amber" | "coral";

export type CoverShape = {
  background: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
};

export type CaseStudyDetail = {
  kicker: string;
  title: string;
  background: string;
  challenges: string[];
  flow: string[];
  tags: string[];
  metrics: { value: string; label: string; color: MetricColor }[];
};

export type CaseIndexCard = {
  id: string;
  category: CaseIndexCategory;
  featuredWhenAll?: boolean;
  industryLabel: string;
  industryBadgeClass: string;
  listTitle: string;
  listExcerpt: string;
  metrics: { value: string; label: string; color: MetricColor }[];
  tags: string[];
  logoInitials: string;
  logoStyle: CSSProperties;
  coverImage: string;
  coverBg?: string;
  coverShapes: CoverShape[];
};

export type CaseStudy = CaseIndexCard & { detail: CaseStudyDetail };

export const caseIndexCards: CaseIndexCard[] = ${JSON.stringify(
  cards.map(({ detail: _d, ...card }) => card),
  null,
  2,
).replace(/"([^"]+)":/g, "$1:")};

export const caseStudyDetails: Record<string, CaseStudyDetail> = ${JSON.stringify(
  Object.fromEntries(cards.map((c) => [c.id, c.detail])),
  null,
  2,
)};

export function getCaseById(id: string): CaseStudy | null {
  const card = caseIndexCards.find((c) => c.id === id);
  const detail = caseStudyDetails[id];
  if (!card || !detail) return null;
  return { ...card, detail };
}

export function getAllCaseIds(): string[] {
  return caseIndexCards.map((c) => c.id);
}

export const caseIndexFilters: { id: CaseIndexCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "real-estate", label: "Real Estate" },
  { id: "education", label: "Education" },
  { id: "ecommerce", label: "eCommerce" },
  { id: "services", label: "Services" },
  { id: "shipping", label: "Shipping" },
  { id: "retail", label: "Retail" },
  { id: "food", label: "Food & Bakery" },
  { id: "print", label: "Print & Media" },
];

export const caseIndexStats = [
  { num: "40", suffix: "+", label: "Active clients" },
  { num: "8", suffix: "", label: "Industries" },
  { num: "3", suffix: "x", label: "Avg. response lift" },
  { num: "24", suffix: "/7", label: "Bot uptime" },
];
`;

fs.writeFileSync(path.join(__dirname, "../lib/cases-catalog.ts"), out, "utf8");
console.log("Wrote lib/cases-catalog.ts with", cards.length, "cases");