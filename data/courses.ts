/* Auto-generated from Samy Academy HTML — do not edit by hand; re-run scripts/parse-academy-html.mjs */
export type CourseCategory =
  | "Basic"
  | "AI Agent"
  | "Appointment Booking"
  | "Intermediate"
  | "Advanced";

export type AcademyLesson = {
  id: string;
  title: string;
  description: string;
  duration: string | null;
  isFree: boolean;
};

export type AcademyModule = {
  id: string;
  title: string;
  lessons: AcademyLesson[];
};

export type AcademyCourse = {
  slug: string;
  title: string;
  description: string;
  detailDescription: string;
  category: CourseCategory;
  level: string;
  videoCount: string | null;
  lessonCount: number;
  isFree: boolean;
  modules: AcademyModule[];
};

export const COURSE_CATEGORIES: CourseCategory[] = [
  "Basic",
  "AI Agent",
  "Appointment Booking",
  "Intermediate",
  "Advanced"
];

export const courses: AcademyCourse[] = [
  {
    "slug": "101-monday",
    "title": "101 Monday",
    "description": "Jumpstart your chatbot journey! This crash course covers essential Samy features — from building flows to AI integrations — in simple, actionable lessons. Perfect for beginners!",
    "detailDescription": "Jumpstart your chatbot journey! This crash course covers essential Samy features — from building flows to AI integrations — in simple, actionable lessons. Perfect for beginners!",
    "category": "Basic",
    "level": "Basic",
    "videoCount": "5 videos",
    "lessonCount": 5,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Core Features",
        "lessons": [
          {
            "id": "l1-1",
            "title": "How to Use Powerful Features Inside Keywords",
            "description": "Explains how to use keywords in chatbots to trigger flows, responses, and actions — including advanced features like hot words and resuming automation.",
            "duration": "14:58",
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Customizing Live Chat in Your Chatbot",
            "description": "How to enhance your live chat experience with customizable settings, automation, AI prompts, and agent tools for better team collaboration and customer engagement.",
            "duration": "11:22",
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Users & Segments",
        "lessons": [
          {
            "id": "l2-1",
            "title": "How to Manage Bot Users and Create Segments",
            "description": "Explains how to view and manage users who interacted with your chatbot — filtering, segmenting, and accessing user details within the bot's user section.",
            "duration": "3:54",
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Troubleshooting",
        "lessons": [
          {
            "id": "l3-1",
            "title": "How to Troubleshoot your Chatbot Like a Pro",
            "description": "Explains how to debug chatbots using test users — set up test users, track their interactions through error logs, identify issues in the flow, and remove test users after debugging.",
            "duration": "5:55",
            "isFree": true
          }
        ]
      },
      {
        "id": "m4",
        "title": "Module 4 — WhatsApp Templates",
        "lessons": [
          {
            "id": "l4-1",
            "title": "How to Create Dynamic WhatsApp Message Templates",
            "description": "How to set up WhatsApp template messages with dynamic variables, including headers, body content, and buttons. Step-by-step guide through creating, approving, and using templates.",
            "duration": "8:34",
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "ai-agent",
    "title": "AI Agent Mastery: Build No-Code AI Agents for Automation & Customer Engagement",
    "description": "Learn to build AI-powered agents that book appointments, extract data from IDs, generate emails, and run Shopify stores — without coding. Master Samy's AI Hub.",
    "detailDescription": "Transform Conversations into Conversions — Build AI-powered agents that book appointments, extract data from IDs, generate emails, and even run Shopify stores — without coding. Master Samy's AI Hub.",
    "category": "AI Agent",
    "level": "AI Agent",
    "videoCount": null,
    "lessonCount": 7,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — AI Hub Introduction",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to Samy's AI Hub",
            "description": "Overview of Samy's AI Hub — the central place to configure AI agents, tools, knowledge bases, and automation workflows.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Building Your First AI Agent",
            "description": "How to create your first AI agent from scratch — defining the agent's role, personality, knowledge base, and available tools.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Agent Use Cases",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Appointment Booking AI Agent",
            "description": "How to build an AI agent that handles the full appointment booking flow — checking availability, confirming bookings, and sending reminders.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "ID Data Extraction Agent",
            "description": "How to build an AI agent that extracts structured data from ID documents and passports using vision AI capabilities.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-3",
            "title": "Email Generation Agent",
            "description": "How to build an AI agent that generates personalized emails based on customer data and conversation context.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — E-Commerce AI Agent",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Running a Shopify Store with AI",
            "description": "How to build an AI agent that handles product inquiries, processes orders, and manages customer service for a Shopify store.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Workflow Automation with AI Agents",
            "description": "How to combine AI agents with workflow automation to create complex business processes that run entirely without human intervention.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "ai-conversation",
    "title": "Pure Conversational AI: Build Button-Free Chatbots with GPT-4 Turbo",
    "description": "Ditch buttons — build truly conversational AI chatbots! Create intent-driven flows for booking, support, and FAQs using GPT-4 Turbo. No coding, just pure chat magic.",
    "detailDescription": "Ditch buttons — build truly conversational AI chatbots! Create intent-driven flows for booking, support, and FAQs using GPT-4 Turbo. No coding, just pure chat magic.",
    "category": "AI Agent",
    "level": "AI Agent",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Conversational AI Foundations",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to Conversational AI in Samy",
            "description": "Overview of how GPT-4 Turbo integrates with Samy to create truly conversational experiences without rigid button menus.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Setting Up OpenAI Integration",
            "description": "How to connect your OpenAI API key to Samy and configure the AI assistant node for your first conversational flow.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Intent-Driven Flows",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Building Intent-Based Routing",
            "description": "How to design flows where the AI detects user intent and routes them to the right response path — booking, FAQ, support, or sales.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Creating Conversational FAQ Bots",
            "description": "How to feed your knowledge base into a GPT-4 Turbo powered FAQ bot that answers questions naturally without keyword matching.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Real-World Use Cases",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Booking Flow with Conversational AI",
            "description": "Build a fully conversational appointment booking flow — the AI collects date, time, and contact info in natural language then confirms.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Support Bot with AI Escalation",
            "description": "How to build a support bot that handles common issues autonomously and escalates to a human agent when confidence is low.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "ai-real-estate",
    "title": "AI Real Estate Assistant: Automate Outreach & Bookings with Samy",
    "description": "Build an AI chatbot that handles property inquiries, books appointments 24/7, and syncs with Cal.com/HighLevel — no manual work.",
    "detailDescription": "Transform real estate lead management! Build an AI chatbot that handles property inquiries, books appointments 24/7, and syncs with Cal.com/HighLevel — no manual work.",
    "category": "AI Agent",
    "level": "AI Agent",
    "videoCount": null,
    "lessonCount": 5,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Real Estate Bot Setup",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction and Architecture Overview",
            "description": "Overview of the AI real estate assistant architecture — how Samy, OpenAI, and Cal.com work together to handle leads end-to-end.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Setting Up Property Inquiry Flows",
            "description": "How to build the property inquiry flow — the AI collects property preferences, budget, and location from potential buyers or renters.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Booking & CRM Sync",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Integrating Cal.com for Appointment Booking",
            "description": "How to connect Cal.com to Samy so the AI can check availability and book property viewing appointments automatically.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Syncing Leads to HighLevel CRM",
            "description": "How to automatically sync captured leads from the chatbot to HighLevel for follow-up sequences and pipeline management.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Outreach Automation",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Automated Lead Follow-Up Sequences",
            "description": "How to set up automated outreach sequences that re-engage cold leads with new listings or price changes.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "airchatty",
    "title": "AirChatty Appointment Automation: Replace Calendly with AI-Powered Booking",
    "description": "Ditch Calendly and automate entire appointment workflows with AirChatty CRM + chatbots. Scheduling, SMS booking, pre-filling forms, and smart reminders — all in one system.",
    "detailDescription": "Ditch Calendly and automate entire appointment workflows with AirChatty CRM + chatbots. Scheduling, SMS booking, pre-filling forms, and smart reminders — all in one system.",
    "category": "Appointment Booking",
    "level": "Appointment Booking",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — AirChatty Setup",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to AirChatty CRM",
            "description": "Overview of AirChatty — how it works with Samy to replace Calendly for appointment scheduling with more flexibility and automation.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Connecting AirChatty to Samy",
            "description": "How to connect your AirChatty account to Samy and configure the integration for two-way data sync.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Booking Flows",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Building the SMS Booking Flow",
            "description": "How to create an SMS-based appointment booking flow — users text a keyword and the chatbot walks them through scheduling.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Pre-Filling Booking Forms",
            "description": "How to pre-fill appointment forms with data already captured in the conversation — reducing friction and improving completion rates.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Reminders & Follow-ups",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Setting Up Smart Appointment Reminders",
            "description": "How to configure automated reminder sequences — 24-hour, 1-hour, and day-of reminders via WhatsApp, SMS, or Messenger.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Post-Appointment Follow-Up Automation",
            "description": "How to build a post-appointment sequence — collecting feedback, offering rebooking, and adding to a nurture sequence.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "basic-course",
    "title": "Samy Basic Courses",
    "description": "Transform your business with Samy's all-in-one platform in this free, hands-on training. Learn all the basics about Samy Platform across 4 modules.",
    "detailDescription": "Transform your business with Samy's all-in-one platform in this free, hands-on training. Learn all the basics about Samy Platform.",
    "category": "Basic",
    "level": "Basic",
    "videoCount": "51 videos",
    "lessonCount": 61,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Foundations & E-Commerce",
        "lessons": [
          {
            "id": "l1-1",
            "title": "What is a Workspace?",
            "description": "Learn what a Samy workspace is and how it helps organize your bots and settings.",
            "duration": "1:18",
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Workspace Settings",
            "description": "Set up general workspace preferences — default languages, time zones, and branding.",
            "duration": "1:46",
            "isFree": true
          },
          {
            "id": "l1-3",
            "title": "User Settings",
            "description": "Manage your personal account — name, email, and password settings.",
            "duration": "1:07",
            "isFree": true
          },
          {
            "id": "l1-4",
            "title": "How to Get Support",
            "description": "Comprehensive overview of the available support options and documentation resources.",
            "duration": "1:09",
            "isFree": true
          },
          {
            "id": "l1-5",
            "title": "How to Create API Key",
            "description": "Guide on how to create and utilize API keys for accessing and managing various API calls.",
            "duration": "1:50",
            "isFree": true
          },
          {
            "id": "l1-6",
            "title": "How to Join the Referral Program",
            "description": "How to earn passive income through the Samy referral program.",
            "duration": "2:04",
            "isFree": true
          },
          {
            "id": "l1-7",
            "title": "My Contents Overview",
            "description": "Overview of the dashboard's key components focusing on the My Contents tab.",
            "duration": "1:05",
            "isFree": true
          },
          {
            "id": "l1-8",
            "title": "Mini App Overview",
            "description": "Explores how to build, customize, and deploy mini apps — both JSON-based and flow-based.",
            "duration": "4:57",
            "isFree": true
          },
          {
            "id": "l1-9",
            "title": "How to Create a Template",
            "description": "Process of designing, customizing, and sharing chatbot templates effectively.",
            "duration": "3:05",
            "isFree": true
          },
          {
            "id": "l1-10",
            "title": "How to Create Email Template",
            "description": "Designing email templates with a user-friendly interface that integrates into your chatbots.",
            "duration": "2:47",
            "isFree": true
          },
          {
            "id": "l1-11",
            "title": "E-commerce Overview",
            "description": "Overview of how to seamlessly integrate an e-commerce environment within the chatbot platform.",
            "duration": "0:55",
            "isFree": true
          },
          {
            "id": "l1-12",
            "title": "How to Create a Product",
            "description": "Steps involved in creating products and optimizing product listings effectively.",
            "duration": "3:57",
            "isFree": true
          },
          {
            "id": "l1-13",
            "title": "How to Create and Use Collection",
            "description": "How to create both manual and automated collections with clear steps and key features.",
            "duration": "1:38",
            "isFree": true
          },
          {
            "id": "l1-14",
            "title": "How to Create a Discount Code",
            "description": "How to set up various types of discounts, customize their parameters, and schedule their activation.",
            "duration": "2:42",
            "isFree": true
          },
          {
            "id": "l1-15",
            "title": "How to View and Manage Shopping Cart",
            "description": "How to monitor customer activity related to items added to shopping carts but not yet purchased.",
            "duration": "1:06",
            "isFree": true
          },
          {
            "id": "l1-16",
            "title": "How to Set Persona In Facebook Flow",
            "description": "How to use the Persona feature in Facebook Flow to give bots a human-like identity — creating, editing, and assigning personas.",
            "duration": "4:02",
            "isFree": true
          },
          {
            "id": "l1-17",
            "title": "Set up Greetings & Ice Breakers",
            "description": "How to set up greeting tags and icebreakers for a Facebook bot — adding greeting texts and configuring icebreaker questions.",
            "duration": "1:26",
            "isFree": true
          },
          {
            "id": "l1-18",
            "title": "How to Use ShortCuts",
            "description": "How to use the shortcuts tool to improve efficiency when replying to users in live chat — creating shortcuts with fixed or dynamic content.",
            "duration": "1:58",
            "isFree": true
          },
          {
            "id": "l1-19",
            "title": "Subflow Type - Workflow & Function Flow",
            "description": "Explains different types of subflows — general reset flow, workflow, and function flow — and how to create and use them.",
            "duration": "7:48",
            "isFree": true
          },
          {
            "id": "l1-20",
            "title": "How to use Trigger",
            "description": "Explains triggers in automation workflows — types of events (conversation open, done, tag changes, subscriptions) and how to add them.",
            "duration": "4:24",
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Business Integrations",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Manage Your Business Stores Details",
            "description": "Detailed overview of configuring your e-commerce store settings.",
            "duration": "1:28",
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "How to Find the App Store and Install Mini App",
            "description": "Step-by-step overview of how to install mini apps within a workspace environment.",
            "duration": "1:06",
            "isFree": true
          },
          {
            "id": "l2-3",
            "title": "Integration Overview",
            "description": "Overview of the platform's extensive integration capabilities and key features.",
            "duration": "2:41",
            "isFree": true
          },
          {
            "id": "l2-4",
            "title": "Phone Number Overview",
            "description": "Overview of the process and features involved when connecting a phone number to your workspace account.",
            "duration": "0:57",
            "isFree": true
          },
          {
            "id": "l2-5",
            "title": "How to Connect Paypal Account",
            "description": "Connecting your PayPal account to Samy — a straightforward process for payment integration.",
            "duration": "1:38",
            "isFree": true
          },
          {
            "id": "l2-6",
            "title": "How to Integrate Slack into Your Workspace",
            "description": "Setting up an app, enabling incoming webhooks, and configuring your workspace to receive Slack notifications.",
            "duration": "2:55",
            "isFree": true
          },
          {
            "id": "l2-7",
            "title": "How to Connect Stripe Account",
            "description": "Clear step-by-step overview of how to connect your Stripe account efficiently.",
            "duration": "1:03",
            "isFree": true
          },
          {
            "id": "l2-8",
            "title": "What is Bot Admin?",
            "description": "How to add an admin mode to a chatbot — setting up admin users, creating conditional flows based on admin status.",
            "duration": "2:54",
            "isFree": true
          },
          {
            "id": "l2-9",
            "title": "How to Display Ecommerce Products",
            "description": "How to display products using two solutions: filters/conditions or retrieving multiple products with action steps and for-each loops.",
            "duration": "30:10",
            "isFree": true
          },
          {
            "id": "l2-10",
            "title": "Deep Dive into External Request",
            "description": "How to use external requests in the chatbot platform — setting up API calls, configuring headers, mapping responses, handling errors.",
            "duration": "26:34",
            "isFree": true
          },
          {
            "id": "l2-11",
            "title": "How to use Javascript Function",
            "description": "How to use JavaScript functions within a chatbot template — demonstrated via a rock-paper-scissors game.",
            "duration": "7:33",
            "isFree": true
          },
          {
            "id": "l2-12",
            "title": "Send Delay Messages",
            "description": "How to send delay messages using five different methods — sequence, broadcast, OTN, and smart delay.",
            "duration": "16:41",
            "isFree": true
          },
          {
            "id": "l2-13",
            "title": "Google Sheet Integration",
            "description": "Update on the Google Sheets integration — getting multiple rows, deleting/clearing rows, retrieving a random row, pagination and preview mode.",
            "duration": "9:04",
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Advanced Automations",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Connect to Your Zapier Account",
            "description": "Simple steps required to connect your platform with Zapier for smooth integration.",
            "duration": "0:47",
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "How to Connect Make",
            "description": "Integrating your account with Make (Integromat) as a native feature within your chatbot platform.",
            "duration": "0:56",
            "isFree": true
          },
          {
            "id": "l3-3",
            "title": "How to Connect Pabbly account",
            "description": "Straightforward process of integrating Pabbly into your automation workflows.",
            "duration": "0:33",
            "isFree": true
          },
          {
            "id": "l3-4",
            "title": "How to Connect VideoSDK",
            "description": "How to seamlessly integrate your Video SDK Live account into your project.",
            "duration": "1:12",
            "isFree": true
          },
          {
            "id": "l3-5",
            "title": "How to Connect Google Sheet",
            "description": "Connecting your Google Sheets account to your chatbot for data management and automation.",
            "duration": "0:41",
            "isFree": true
          },
          {
            "id": "l3-6",
            "title": "How to connect Dialogflow",
            "description": "Connecting Google Dialogflow to your platform — includes notes on recent updates that made the process more complex.",
            "duration": "2:46",
            "isFree": true
          },
          {
            "id": "l3-7",
            "title": "How to Connect Stripe Account",
            "description": "Connecting your Stripe account for seamless integration with the platform.",
            "duration": "1:03",
            "isFree": true
          },
          {
            "id": "l3-8",
            "title": "How to Connect Email SMTP",
            "description": "Step-by-step guide on how to connect your email account using SMTP profiles.",
            "duration": "0:41",
            "isFree": true
          },
          {
            "id": "l3-9",
            "title": "How to Connect Gmail Account",
            "description": "Connecting your Gmail account to a chatbot platform — straightforward integration process.",
            "duration": "0:45",
            "isFree": true
          },
          {
            "id": "l3-10",
            "title": "How to Connect Your Gmail account by SMTP",
            "description": "How to resolve difficulties connecting Gmail accounts via SMTP profiles — especially when direct Google access isn't available.",
            "duration": "3:25",
            "isFree": true
          },
          {
            "id": "l3-11",
            "title": "How to Connect Office365 to SMTP Profile",
            "description": "Essential steps to connect your Office 365 account to your chat platform for sending emails.",
            "duration": "3:54",
            "isFree": true
          },
          {
            "id": "l3-12",
            "title": "How to connect Mailchimp",
            "description": "Integrating your Mailchimp account with a chatbot platform for marketing automation.",
            "duration": "0:43",
            "isFree": true
          },
          {
            "id": "l3-13",
            "title": "How to Install Templates",
            "description": "How to install and utilize chatbot templates within the platform.",
            "duration": "1:37",
            "isFree": true
          }
        ]
      },
      {
        "id": "m4",
        "title": "Module 4 — Chatbot Builder Mastery",
        "lessons": [
          {
            "id": "l4-1",
            "title": "Analysing the Performance of your Chatbot",
            "description": "How to monitor and analyze the performance of your chatbots effectively.",
            "duration": "1:13",
            "isFree": true
          },
          {
            "id": "l4-2",
            "title": "Subflow Type",
            "description": "How to create new subflows within your chatbot and manage them through the flow overview.",
            "duration": "1:53",
            "isFree": true
          },
          {
            "id": "l4-3",
            "title": "How to Create Folder to Structure Your Flow",
            "description": "How to create folders for organizing the numerous flows in your chatbot project.",
            "duration": "2:21",
            "isFree": true
          },
          {
            "id": "l4-4",
            "title": "How to Create User Fields",
            "description": "In-depth overview of creating and managing user fields within your platform — types, validation, and usage.",
            "duration": "3:27",
            "isFree": true
          },
          {
            "id": "l4-5",
            "title": "Creating bot fields",
            "description": "How to create and manage bot fields within the chatbot platform.",
            "duration": "1:23",
            "isFree": true
          },
          {
            "id": "l4-6",
            "title": "How to Create Tags",
            "description": "Comprehensive guide on managing user data and tags within the chatbot platform.",
            "duration": "1:34",
            "isFree": true
          },
          {
            "id": "l4-7",
            "title": "Create User Menus",
            "description": "Comprehensive overview of designing custom user menus for Telegram and Messenger.",
            "duration": "2:22",
            "isFree": true
          },
          {
            "id": "l4-8",
            "title": "Customerize the Flow Builder",
            "description": "How to personalize the Flow Builder to enhance productivity and match your aesthetic preferences.",
            "duration": "2:16",
            "isFree": true
          },
          {
            "id": "l4-9",
            "title": "What is the Question Block? How to Use it",
            "description": "In-depth explanation of designing dynamic, interactive user engagement flows — question types, response handling, and flow control.",
            "duration": "4:36",
            "isFree": true
          },
          {
            "id": "l4-10",
            "title": "Actions Overview",
            "description": "Overview of the various actions, integrations, and functionalities available within the chatbot platform.",
            "duration": "6:51",
            "isFree": true
          },
          {
            "id": "l4-11",
            "title": "How to Create and Use Conditions",
            "description": "Conditions are essential tools for personalized user experiences in modern chatbot design.",
            "duration": "2:34",
            "isFree": true
          },
          {
            "id": "l4-12",
            "title": "How to Send Emails inside Chatbot",
            "description": "How to seamlessly incorporate email functionalities within chatbot workflows.",
            "duration": "3:13",
            "isFree": true
          },
          {
            "id": "l4-13",
            "title": "Sending Users to Different Flows",
            "description": "Overview of how to navigate, connect, and send users to different flows within the platform.",
            "duration": "1:14",
            "isFree": true
          },
          {
            "id": "l4-14",
            "title": "How to Create Workflow",
            "description": "Workflow automation streamlines repetitive tasks, enhances efficiency, and ensures seamless data management.",
            "duration": "4:13",
            "isFree": true
          },
          {
            "id": "l4-15",
            "title": "How to Create Function Flow",
            "description": "Explores the flow management features in chatbot development — creating function flows for reusable logic.",
            "duration": "2:54",
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "calcom",
    "title": "AI-Powered Booking Agent: Automate Scheduling with Cal.com & Samy",
    "description": "Transform your scheduling with an AI-powered booking agent — handles appointments, rescheduling, and cancellations seamlessly integrated with Cal.com and Samy.",
    "detailDescription": "Transform your scheduling with an AI-powered booking agent that handles appointments, rescheduling, and cancellations seamlessly integrated with Cal.com and Samy. No manual work required!",
    "category": "Appointment Booking",
    "level": "Appointment Booking",
    "videoCount": null,
    "lessonCount": 5,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Cal.com Integration",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Connecting Cal.com to Samy",
            "description": "How to connect your Cal.com account to Samy — API configuration, event type mapping, and availability sync.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Building the AI Booking Agent",
            "description": "How to configure the AI to collect scheduling preferences, check Cal.com availability, and confirm bookings in natural conversation.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Rescheduling & Cancellations",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Handling Rescheduling Requests",
            "description": "How the AI agent detects rescheduling requests, checks alternative availability in Cal.com, and updates the booking automatically.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Automated Cancellation Flows",
            "description": "How to handle cancellation requests — confirming with the user, removing the Cal.com booking, and offering alternative times.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Reminders",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Automated Booking Reminders",
            "description": "How to set up multi-channel reminder sequences via WhatsApp, email, and SMS — reducing no-shows dramatically.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "calendly",
    "title": "Appointment Automation with Free Calendly Account",
    "description": "Automate appointment scheduling, reminders, and follow-ups across Messenger, SMS, and email — no coding required. Save time and reduce no-shows!",
    "detailDescription": "Automate appointment scheduling, reminders, and follow-ups across Messenger, SMS, and email — no coding required. Save time and reduce no-shows!",
    "category": "Appointment Booking",
    "level": "Appointment Booking",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Calendly Free Setup",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Setting Up Calendly Free Account",
            "description": "How to configure a free Calendly account with the right event types, availability windows, and booking page settings.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Connecting Calendly to Samy",
            "description": "How to integrate Calendly with Samy using webhooks — capturing booking confirmation events to trigger automated sequences.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Booking Flow",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Building the Chatbot Booking Flow",
            "description": "How to build a chatbot flow that shares your Calendly link, pre-qualifies the prospect, and captures additional info before the meeting.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Automated Booking Confirmation",
            "description": "How to send automated booking confirmation messages via Messenger, SMS, and email — with all the meeting details.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Reminders & Follow-ups",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Reminder Sequences Across Channels",
            "description": "How to set up reminder sequences that fire 24 hours and 1 hour before the appointment — across Messenger, SMS, and email.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Post-Meeting Follow-Up Automation",
            "description": "How to build a post-meeting follow-up that sends a thank you, shares next steps, and asks for feedback automatically.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "connect-the-bot",
    "title": "Connect Samy to 10+ Messaging Platforms",
    "description": "One platform, infinite channels. Master seamless connections for WhatsApp, Messenger, Instagram, SMS/Voice, Telegram, Viber, Line & VK — with zero coding.",
    "detailDescription": "One platform, infinite channels. Master seamless connections for WhatsApp, Messenger, Instagram, SMS/Voice, Telegram, Viber, Line &amp; VK — with zero coding.",
    "category": "Basic",
    "level": "Basic",
    "videoCount": "11 videos",
    "lessonCount": 11,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Meta Channels",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Connect Facebook Pages for Messenger Channel",
            "description": "Demonstrates how to connect your Facebook account to Samy for creating a Messenger chatbot. Covers linking Facebook pages, selecting pages, and creating a chatbot flow.",
            "duration": "0:59",
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Connect Instagram Channel",
            "description": "Explains how to connect your Samy account with Instagram by first setting up an Instagram business account.",
            "duration": "2:58",
            "isFree": true
          },
          {
            "id": "l1-3",
            "title": "Connect to WhatsApp Cloud API",
            "description": "Detailed walkthrough of setting up the WhatsApp Cloud API embed signup. Covers Meta Business Manager creation, phone number registration, billing, templates, catalogs, and troubleshooting.",
            "duration": "28:03",
            "isFree": true
          },
          {
            "id": "l1-4",
            "title": "Connect WhatsApp Chatbot",
            "description": "Explains how to connect WhatsApp using different options including WhatsApp Cloud, Twilio, and 360Dialog.",
            "duration": "2:05",
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Voice, SMS & Telegram",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Connect Voice & SMS Channel",
            "description": "Demonstrates how to configure SMS and voice channels using Twilio and Signalwire — creating accounts, obtaining phone numbers, and setting up chat and voice flows.",
            "duration": "2:24",
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Connect to Telegram Channel",
            "description": "Demonstrates how to connect a Samy account with a Telegram chatbot — create and set up the bot, obtain an API key, and integrate for automation.",
            "duration": "1:40",
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Viber & Line",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Connect to Viber Channel",
            "description": "Demonstrates how to connect your Samy account with Viber — create a Viber bot, obtain an API key, and integrate with Samy.",
            "duration": "1:45",
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Connect to Line Channel",
            "description": "Demonstrates how to connect a LINE official account to Samy — creating a LINE account, enabling the messaging API, obtaining credentials, and setting up a LINE chatbot.",
            "duration": "2:51",
            "isFree": true
          }
        ]
      },
      {
        "id": "m4",
        "title": "Module 4 — VK, Jivo & Intercom",
        "lessons": [
          {
            "id": "l4-1",
            "title": "Connect to VK Channel",
            "description": "Demonstrates how to connect a VK Channel to a Samy workspace — create a VK community, obtain the group ID and access token, and integrate into the platform.",
            "duration": "2:12",
            "isFree": true
          },
          {
            "id": "l4-2",
            "title": "Connect to Jivo Chat",
            "description": "Comprehensive overview of the Jivo Chat channel — features, benefits, integration process, live demo of the chat flow builder, multi-channel support, and automation capabilities.",
            "duration": "28:48",
            "isFree": true
          },
          {
            "id": "l4-3",
            "title": "Connect Intercom",
            "description": "Demonstrates how to integrate Intercom with Samy for live chat support — connecting the Intercom account, configuring the integration, and enabling automated handovers to live agents.",
            "duration": "4:12",
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "deepdive-wednesday",
    "title": "Deepdive Wednesday",
    "description": "Unlock the full power of Samy with weekly deep dives into AI automation, API integrations, and hidden platform gems. Level up your chatbot game — one advanced lesson at a time.",
    "detailDescription": "Unlock the full power of Samy with weekly deep dives into AI automation, API integrations, and hidden platform gems. Level up your chatbot game — one advanced lesson at a time.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": null,
    "lessonCount": 4,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Weekly Sessions — AI Automation",
        "lessons": [
          {
            "id": "l1-1",
            "title": "AI Automation Deep Dive",
            "description": "Weekly advanced session covering the latest AI automation capabilities inside Samy — practical demos and real-world use cases.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Advanced API Integrations",
            "description": "Deep dive into connecting third-party APIs with Samy — authentication, error handling, and data mapping.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Weekly Sessions — Platform Secrets",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Hidden Platform Features & Gems",
            "description": "Reveals lesser-known Samy features that can dramatically improve chatbot performance and reduce development time.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Advanced Flow Techniques",
            "description": "Advanced flow design patterns — loops, recursion, conditional branching, and modular architecture.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "dialogflow",
    "title": "DialogFlow + Samy Mastery: Build Smarter AI Chatbots Without Coding",
    "description": "Replace rigid keyword bots with NLP intelligence! Connect DialogFlow agents to Samy, automate slot filling, and design dynamic responses — zero code.",
    "detailDescription": "Replace rigid keyword bots with NLP intelligence! Connect DialogFlow agents to Samy, automate slot filling, and design dynamic responses — all with zero code.",
    "category": "AI Agent",
    "level": "AI Agent",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — DialogFlow Basics",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to DialogFlow NLP",
            "description": "Overview of how DialogFlow's NLP engine works — intents, entities, contexts, and how they differ from keyword matching.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Connecting DialogFlow to Samy",
            "description": "How to connect Google Dialogflow to your Samy workspace — includes notes on recent API changes and authentication updates.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Building Smart Flows",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Designing Intents and Training Phrases",
            "description": "How to design effective intents and training phrases in DialogFlow that cover the full range of user expressions for each topic.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Automating Slot Filling",
            "description": "How to use DialogFlow's slot filling capability to collect structured data (names, dates, locations) through natural conversation.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Dynamic Responses",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Creating Contextual and Dynamic Responses",
            "description": "How to design responses that change based on context — using Samy flow conditions combined with DialogFlow context parameters.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Handling Fallback and Error Cases",
            "description": "How to gracefully handle unrecognized inputs — fallback intents, escalation to human agents, and re-prompting strategies.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "event-and-report",
    "title": "Advanced Chatbot Analytics: Custom Events & Reports Mastery",
    "description": "Unlock the full power of your chatbot data! Track custom events, build dynamic reports, and automate insights — from API triggers to funnel analytics.",
    "detailDescription": "Unlock the full power of your chatbot data! Track custom events, build dynamic reports, and automate insights — from API triggers to funnel analytics. Perfect for data-driven teams.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": null,
    "lessonCount": 5,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Introduction",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to Custom Events and Reports",
            "description": "Introduces the Custom Events and Custom Reports feature — designed to monitor specific interactions within your chatbot environment including offline activities.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Creating Events",
        "lessons": [
          {
            "id": "l2-1",
            "title": "How to Create and Track Custom Events in Your Chatbot",
            "description": "Step-by-step guide to creating custom events — setting parameters and tracking user interactions like sales, bookings, and milestones.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "How to Create, Trigger, and Analyze Custom Events in Samy",
            "description": "How to create, trigger, and analyze custom events through the flow builder and API calls — advanced analytics and audience insights.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Reports & Dashboards",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Building Custom Reports",
            "description": "How to build custom report dashboards — combining event data, filtering by date ranges, and segmenting by audience.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Automating Insights with API Triggers",
            "description": "How to use API calls to trigger custom events from external systems and funnel that data into your Samy analytics dashboard.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "facebook-comments",
    "title": "Turn Facebook Comments into Paying Customers",
    "description": "Set up Facebook comment triggers using Samy to automatically convert post engagements into leads and paying customers.",
    "detailDescription": "Learn how to set up Facebook comment triggers using Samy to automatically convert post engagements into leads and paying customers.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": null,
    "lessonCount": 4,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Comment Triggers",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Setting Up Facebook Comment Automation",
            "description": "How to connect your Facebook page to Samy and configure comment triggers — detecting specific keywords in comments and firing automated responses.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Private Reply Flow Setup",
            "description": "How to send automated private replies to users who comment on your posts — starting a Messenger conversation from a Facebook comment.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Lead Conversion",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Converting Commenters to Leads",
            "description": "How to build a lead capture flow that runs after the private reply — collecting name, email, and phone number from engaged users.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Follow-Up Sequences and Retargeting",
            "description": "How to set up automated follow-up sequences for users who commented but haven't purchased — retargeting strategy inside Samy.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "instagram-comments",
    "title": "Turn Instagram Comments into Paying Customers",
    "description": "Transform casual Instagram commenters into loyal customers — automatically. This action-packed course reveals the full funnel strategy.",
    "detailDescription": "Transform casual Instagram commenters into loyal customers — automatically. This action-packed course reveals how to build the full funnel from engagement to sale.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": null,
    "lessonCount": 4,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Instagram Comment Automation",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Setting Up Instagram Comment Triggers",
            "description": "How to configure Samy to detect comments on your Instagram posts and automatically respond — keyword matching and response rules.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Sending DMs from Instagram Comments",
            "description": "How to automatically slide into the DMs of users who comment — starting a conversation that continues in Instagram Direct Messages.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Conversion Funnel",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Building the Instagram DM Sales Funnel",
            "description": "How to build a full sales funnel that runs inside Instagram DMs — from comment to lead capture to product presentation to sale.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Story Mentions and Reel Comment Automation",
            "description": "Extended automation covering Instagram Stories mentions and Reel comment triggers — expanding your reach beyond regular posts.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "mini-app",
    "title": "Samy Mini App Builder: Create No-Code Integrations & Automations",
    "description": "Build & Deploy Custom Mini Apps Without Coding — Master Samy's Mini App V2 to create API-powered workflows, dynamic forms, and payment triggers via drag-and-drop.",
    "detailDescription": "Build & Deploy Custom Mini Apps Without Coding — Master Samy's Mini App V2 to create API-powered workflows, dynamic forms, payment triggers, and seamless integrations via drag-and-drop.",
    "category": "Advanced",
    "level": "Advanced",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Mini App V2 Basics",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to Mini App V2",
            "description": "Overview of Mini App V2 — how it differs from V1, what you can build, and the drag-and-drop visual builder interface.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Building Your First Mini App",
            "description": "Step-by-step guide to building a simple mini app — creating the UI, connecting to an API, and embedding it in a chatbot flow.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — API-Powered Workflows",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Creating API-Powered Workflows",
            "description": "How to build mini apps that fetch data from external APIs and display it dynamically inside the chat widget.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Dynamic Forms and Data Collection",
            "description": "How to build multi-step dynamic forms that validate input, save data to custom fields, and trigger automated flows.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Payments & Integrations",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Payment Triggers in Mini Apps",
            "description": "How to build payment flows inside mini apps — integrating Stripe, PayPal, and other payment gateways directly in the chat experience.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Deploying and Sharing Mini Apps",
            "description": "How to publish your mini app to the Samy App Store for other users to install — documentation, versioning, and updates.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "openai-chatgpt",
    "title": "AI-Powered Chatbots: Master OpenAI & ChatGPT Integrations",
    "description": "Transform your chatbots with OpenAI's latest features — web search, intent detection, embeddings, and live chat automation. Cut response times, boost accuracy.",
    "detailDescription": "Transform your chatbots with OpenAI's latest features — web search, intent detection, embeddings, and live chat automation. Cut response times and boost accuracy.",
    "category": "AI Agent",
    "level": "AI Agent",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — OpenAI Integration Basics",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Connecting OpenAI to Samy",
            "description": "How to connect your OpenAI API key to Samy and understand the different model options — GPT-4, GPT-4 Turbo, and their trade-offs.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Web Search Integration with ChatGPT",
            "description": "How to enable web search capabilities in your chatbot — allowing the AI to fetch real-time information during conversations.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Advanced AI Features",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Intent Detection with OpenAI",
            "description": "How to use OpenAI for intent detection — replacing keyword triggers with AI-powered understanding of user goals.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Embeddings for Semantic Search",
            "description": "How to use OpenAI embeddings to build a knowledge base search — finding relevant answers even when the user's phrasing differs from stored content.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Live Chat AI Automation",
        "lessons": [
          {
            "id": "l3-1",
            "title": "AI-Assisted Live Chat",
            "description": "How to set up AI assistance for live chat agents — the AI drafts responses that agents can review and send with one click.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Automating Engagement with ChatGPT",
            "description": "How to use ChatGPT to generate personalized engagement messages — follow-ups, re-activation campaigns, and dynamic content generation.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "recurring-message",
    "title": "Recurring Notifications Mastery: Automate Daily/Weekly Engagement on Messenger",
    "description": "Turn subscribers into repeat customers! Master Meta-compliant recurring notifications for Messenger — daily/weekly automation, opt-in strategies, and multi-channel sequences.",
    "detailDescription": "Turn subscribers into repeat customers! Master Meta-compliant recurring notifications for Messenger — daily/weekly automation, opt-in strategies, and multi-channel sequences without spamming.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": null,
    "lessonCount": 5,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Setup & Opt-ins",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to Recurring Notifications",
            "description": "Overview of recurring notifications on Messenger — how they work, Meta compliance rules, and the opportunity to re-engage subscribers daily or weekly.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "How to Set Up Opt-In for Recurring Notifications",
            "description": "Step-by-step guide to creating compliant opt-in flows so subscribers consent to receive recurring messages.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Daily & Weekly Automation",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Daily Recurring Messages Walkthrough",
            "description": "Best practice setup for daily recurring notifications — creating notification topics, managing opt-in requests, setting up flows.",
            "duration": "11:38",
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Weekly Recurring Messages Walkthrough",
            "description": "How to configure weekly sequences with proper timing and content rotation to maximize engagement without fatiguing subscribers.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Multi-Channel Sequences",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Building Multi-Channel Follow-Up Sequences",
            "description": "How to combine Messenger recurring notifications with email and SMS for a full omnichannel follow-up system.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "shopify",
    "title": "Shopify Chatbot Profit Pipeline: Build Automated E-Commerce Systems with Samy",
    "description": "Turn browsers into buyers — step-by-step blueprint for Shopify + Samy. Abandoned cart recovery, AI shopping agents, WhatsApp commerce, automated order workflows.",
    "detailDescription": "Turn browsers into buyers — step-by-step blueprint for Shopify + Samy. Abandoned cart recovery, AI shopping agents, WhatsApp commerce, and automated order workflows — no coding required.",
    "category": "Advanced",
    "level": "Advanced",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Shopify Integration",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Connecting Shopify to Samy",
            "description": "How to integrate your Shopify store with Samy — API connection, product sync, and order data access.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "WhatsApp Commerce for Shopify",
            "description": "How to create a WhatsApp shopping experience that pulls products from your Shopify store — browsing, cart, and checkout.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — AI Shopping Agent",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Building an AI Shopping Agent",
            "description": "How to build a conversational AI shopping agent that understands natural language product requests and recommends matching items from your Shopify catalog.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Abandoned Cart Recovery for Shopify",
            "description": "How to detect Shopify cart abandonment and trigger automated WhatsApp or Messenger recovery sequences with personalized offers.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Order & Post-Purchase",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Automated Order Workflows",
            "description": "How to automate order confirmation, fulfillment updates, and delivery notifications via WhatsApp using Shopify webhook triggers.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Post-Purchase Follow-Up and Upsell",
            "description": "How to build a post-purchase sequence that collects reviews, offers complementary products, and turns one-time buyers into repeat customers.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "ticket",
    "title": "Mastering Ticketing Systems: From Support to Sales Automation",
    "description": "Leverage tickets, lists, and automation to streamline support, project management, and sales pipelines — all within a single platform.",
    "detailDescription": "Learn how to leverage tickets, lists, and automation to streamline support, project management, and sales pipelines — all within a single platform.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": null,
    "lessonCount": 5,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Ticket Basics",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to Tickets and Lists",
            "description": "Overview of the ticketing system — how tickets work, what they represent, and how to create your first ticket from a conversation.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Creating Custom Ticket Views",
            "description": "How to set up custom views, filters, and priority queues to keep your support team organized and efficient.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Automation",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Automating Ticket Creation and Assignment",
            "description": "How to automatically create tickets from chatbot conversations, assign them to team members, and set SLA rules.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Chatbot and Live Chat Integration with Tickets",
            "description": "How to build seamless handover flows where the chatbot creates a ticket and routes it to the right live agent.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Sales Pipeline",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Using Tickets for Sales Pipeline Management",
            "description": "How to use the ticketing system as a lightweight CRM — tracking leads through stages from initial contact to closed deal.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "voice-ai",
    "title": "Real-Time Voice AI Mastery: Build & Customize AI Agents with Samy",
    "description": "Transform phone interactions with AI-powered voice agents! Set up, customize, and deploy real-time voice AI using Samy, OpenAI, and Twilio — from basic calls to voice cloning.",
    "detailDescription": "Transform phone interactions with AI-powered voice agents! Set up, customize, and deploy real-time voice AI using Samy, OpenAI, and Twilio — from basic calls to voice cloning.",
    "category": "AI Agent",
    "level": "AI Agent",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Voice AI Foundation",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Introduction to Real-Time Voice AI",
            "description": "Overview of how real-time voice AI works — Samy + Twilio + OpenAI architecture, latency considerations, and use cases.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Setting Up Twilio for Voice Calls",
            "description": "How to configure a Twilio number, set up the webhook endpoint in Samy, and make your first test call.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — AI Voice Configuration",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Configuring the AI Voice Agent",
            "description": "How to configure the AI voice agent — selecting the AI model, setting the system prompt, adjusting voice tone and speed.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Handling Call Transfers",
            "description": "How to implement call transfer logic — the AI recognizes when a human agent is needed and transfers the call seamlessly.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Advanced Voice Features",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Voice Cloning and Custom Voices",
            "description": "How to clone a specific voice or use custom voices for your brand — creating a consistent and recognizable voice identity.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Deploying and Scaling Voice AI",
            "description": "Best practices for deploying voice AI in production — handling concurrent calls, monitoring call quality, and scaling infrastructure.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "web-chat-basic",
    "title": "Web Chat Channel: Customization, Installation & Conversion Tracking",
    "description": "Transform website chats into conversion engines! Master widget customization, flow triggering, user pre-filling, and GA4 tracking — all while matching your brand perfectly.",
    "detailDescription": "Transform website chats into conversion engines! Master widget customization, flow triggering, user pre-filling, and GA4 tracking — all while matching your brand perfectly.",
    "category": "Basic",
    "level": "Basic",
    "videoCount": "15 videos",
    "lessonCount": 15,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Widget Basics",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Where to Find the WebChat Widget",
            "description": "Introduces the webchat widget course — how to customize the widget to match your branding and install it on your website.",
            "duration": "1:12",
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Customizing the Main Elements",
            "description": "Explains how to customize the content section of a web chat widget — chat bubbles, headers, welcome messages, out-of-office replies, and chat forms.",
            "duration": "5:25",
            "isFree": true
          },
          {
            "id": "l1-3",
            "title": "Customizing the WebChat Widget",
            "description": "Covers language settings, notification sounds, emoji/attachment uploads, chat window behaviors, mobile continuation, and domain whitelisting.",
            "duration": "3:33",
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Pre-Chat Form & Colors",
        "lessons": [
          {
            "id": "l2-1",
            "title": "How to Use Pre-Chat Form",
            "description": "Covers enabling the pre-chat form, adjusting form fields (text, email, phone, date, choices), setting placeholders, hints, required fields, and layout options.",
            "duration": "3:18",
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Customizing Your Colors",
            "description": "Tutorial on customizing the appearance of a webchat widget — themes, fonts, colors, and the start chat button including rounded corners and circle shapes.",
            "duration": "4:14",
            "isFree": true
          },
          {
            "id": "l2-3",
            "title": "How to Install the Widget",
            "description": "Demonstrates how to install webchat widgets on websites using different methods — scripts to headers or specific pages, and customizing widget styles and placement.",
            "duration": "6:26",
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Flows & Styles",
        "lessons": [
          {
            "id": "l3-1",
            "title": "How to Start Different Flows and add Payload to your Widget",
            "description": "Explains how to trigger different chatbot flows using webchat widget URLs with custom parameters and payloads. Covers creating multiple flows and passing custom data points.",
            "duration": "11:01",
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Different Styles of Widget",
            "description": "Demonstrates various styles of embedding web chat widgets — inline embeds, pop-up modals, full-page integrations, and floating models.",
            "duration": "9:14",
            "isFree": true
          },
          {
            "id": "l3-3",
            "title": "How to Format Text Inside WebChat Channel",
            "description": "Explains how to format text using markdown-like syntax — bold, italic, bold-italic, and strikethrough using specific symbols.",
            "duration": "6:28",
            "isFree": true
          }
        ]
      },
      {
        "id": "m4",
        "title": "Module 4 — Advanced Integration",
        "lessons": [
          {
            "id": "l4-1",
            "title": "Embed Web Chat into any Page & Trigger Different Flow",
            "description": "Covers domain listing, installing the embed script, matching embed IDs, customizing chat appearance, and triggering different chat flows on specific pages using URL parameters.",
            "duration": "12:42",
            "isFree": true
          },
          {
            "id": "l4-2",
            "title": "Secret Trick to Open Full Page Mode",
            "description": "Explains a simple trick to open a web chat in full page mode by adding 'style=full' to the URL for a better user experience.",
            "duration": "2:54",
            "isFree": true
          },
          {
            "id": "l4-3",
            "title": "Prefill User Data For Web Chat",
            "description": "Advanced feature — passing customer information and custom parameters directly into the chat widget dynamically updating user data using scripts.",
            "duration": "14:05",
            "isFree": true
          },
          {
            "id": "l4-4",
            "title": "Set up Custom User ID",
            "description": "Explains the custom user ID feature — pass user details from an external website into the chatbot for a personalized experience for logged-in vs guest users.",
            "duration": "8:52",
            "isFree": true
          },
          {
            "id": "l4-5",
            "title": "Google Tag Manager Integration",
            "description": "Covers tracking chat engagement events, creating triggers and tags in Google Tag Manager, and sending data to Google Analytics, Facebook, and Google Ads.",
            "duration": "18:11",
            "isFree": true
          },
          {
            "id": "l4-6",
            "title": "Web Chat Conversion Tracking to GA4",
            "description": "Explains how to track web chat conversions in Google Analytics 4 — sending conversion events, attributing them to the original traffic source, using measurement protocol.",
            "duration": "28:25",
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "whatsapp-chatbot",
    "title": "WhatsApp Business Automation: Cloud API, Flows & Advanced Tactics",
    "description": "Master WhatsApp's revenue potential! Cloud API setup, dynamic templates, Flows, carousels, limited-time offers — while avoiding Meta verification pitfalls.",
    "detailDescription": "Master WhatsApp's revenue potential! Learn Cloud API setup, dynamic templates, Flows, carousels, and limited-time offers — while avoiding Meta verification pitfalls.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": "12 videos",
    "lessonCount": 12,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Cloud API Setup",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Connect to WhatsApp Cloud API",
            "description": "Detailed walkthrough of the WhatsApp Cloud API embed signup — Meta Business Manager, phone number registration, billing, templates, catalogs, and troubleshooting.",
            "duration": "27:51",
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Connect WhatsApp Chatbot",
            "description": "How to connect WhatsApp using WhatsApp Cloud, Twilio, and 360Dialog — setup, integration steps, and additional documentation.",
            "duration": "2:01",
            "isFree": true
          },
          {
            "id": "l1-3",
            "title": "Exploring WhatsApp Flows",
            "description": "Explains WhatsApp flows — interactive forms available on the WhatsApp Cloud API for lead generation, appointment booking, and feedback collection.",
            "duration": "7:32",
            "isFree": true
          },
          {
            "id": "l1-4",
            "title": "How to Create Dynamic WhatsApp Message Templates",
            "description": "How to set up WhatsApp template messages with dynamic variables — headers, body content, and buttons for chatbot interactions.",
            "duration": "8:34",
            "isFree": true
          },
          {
            "id": "l1-5",
            "title": "Troubleshooting WhatsApp Permission Issue",
            "description": "Instructions for resolving permission-related errors involving Facebook Business Manager and WhatsApp integrations.",
            "duration": "2:03",
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — WhatsApp Flows",
        "lessons": [
          {
            "id": "l2-1",
            "title": "How to Use Condition Based Logic in WhatsApp Flow",
            "description": "How to implement condition-based logic within WhatsApp flows — using formulas in the visible field to show or hide input fields based on previous user selections.",
            "duration": "4:30",
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "How to Prepopulate Sign up Forms in WhatsApp",
            "description": "Explains the WhatsApp flows update that allows setting initial values for custom fields — pre-filling user data such as name and email.",
            "duration": "8:04",
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Advanced Features",
        "lessons": [
          {
            "id": "l3-1",
            "title": "WhatsApp Channel Updates Summary",
            "description": "Summary of recent updates to the WhatsApp template feature — new editing capabilities, enhanced reply buttons, detailed analytics, flow usage tracking.",
            "duration": "9:17",
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "WhatsApp Carousel Message Templates Introduced",
            "description": "Introduces the WhatsApp Carousel message template — send a single message with up to 10 carousel cards containing images or videos with customizable buttons.",
            "duration": "7:46",
            "isFree": true
          },
          {
            "id": "l3-3",
            "title": "Customizing Pre Filled Text for WhatsApp and Workarounds",
            "description": "How to customize WhatsApp URL links to remove the default slash and start prefill text — workaround for personalized messaging.",
            "duration": "3:25",
            "isFree": true
          }
        ]
      },
      {
        "id": "m4",
        "title": "Module 4 — Notifications & Campaigns",
        "lessons": [
          {
            "id": "l4-1",
            "title": "Sending WhatsApp Notification and Messages Template Notifications",
            "description": "How to send WhatsApp notifications using a chatbot — creating notification actions and choosing between direct messages or message templates.",
            "duration": "2:25",
            "isFree": true
          },
          {
            "id": "l4-2",
            "title": "How to create discount campaign with limited time offer in WhatsApp",
            "description": "How to create and use the 'Limited Time Offer' message template — designing templates, setting expiration dates, discount codes, and URLs.",
            "duration": "7:38",
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "whatsapp-ecommerce",
    "title": "WhatsApp E-Commerce Mastery: Build a Native Checkout Experience from Scratch",
    "description": "Turn WhatsApp into a 24/7 sales engine! Build a seamless e-commerce checkout experience — from product catalogs to Stripe/PayPal/RazorPay payments.",
    "detailDescription": "Turn WhatsApp into a 24/7 sales engine! Learn to build a seamless e-commerce checkout experience — from product catalogs to Stripe/PayPal/RazorPay payments.",
    "category": "Intermediate",
    "level": "Intermediate",
    "videoCount": null,
    "lessonCount": 7,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — Product Catalog Setup",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Overview and WhatsApp Checklist",
            "description": "Step-by-step checklist for setting up a WhatsApp chatbot — tools needed, Samy account, WhatsApp API, and payment gateway.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Setting Up Your Product Catalog in WhatsApp",
            "description": "How to create and manage a WhatsApp product catalog — adding products, images, prices, and syncing with your e-commerce store.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Shopping Flow",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Building the Shopping Cart Flow",
            "description": "How to build a conversational shopping cart experience in WhatsApp — browsing products, adding to cart, and managing quantities.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Displaying Products Dynamically",
            "description": "Advanced techniques for displaying products dynamically using carousels, list messages, and catalog messages in WhatsApp.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Payments",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Stripe Integration for WhatsApp Checkout",
            "description": "How to integrate Stripe payments into a WhatsApp flow — generating payment links, handling confirmations, and updating order status.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "PayPal and RazorPay Integration",
            "description": "Alternative payment integrations for global and Indian markets — setting up PayPal and RazorPay within WhatsApp flows.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m4",
        "title": "Module 4 — Templates & Pro Tips",
        "lessons": [
          {
            "id": "l4-1",
            "title": "Free Templates and Pro Tips for India & Global Markets",
            "description": "Download ready-made templates and learn market-specific tips for India and global e-commerce on WhatsApp.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  },
  {
    "slug": "woocommerce",
    "title": "WooCommerce Chatbot Revolution: Build Automated Stores & Recover Lost Revenue",
    "description": "Transform WordPress stores into 24/7 sales machines. Master WooCommerce + Samy integration — conversational shopping, abandoned cart recovery, dynamic coupons.",
    "detailDescription": "Transform WordPress stores into 24/7 sales machines. Master WooCommerce + Samy integration — conversational shopping, abandoned cart recovery with dynamic coupons, and slashed support tickets.",
    "category": "Advanced",
    "level": "Advanced",
    "videoCount": null,
    "lessonCount": 6,
    "isFree": true,
    "modules": [
      {
        "id": "m1",
        "title": "Module 1 — WooCommerce Integration",
        "lessons": [
          {
            "id": "l1-1",
            "title": "Connecting WooCommerce to Samy",
            "description": "How to install the Samy plugin for WooCommerce and configure the API connection — syncing products, orders, and customer data.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l1-2",
            "title": "Building a Conversational Product Catalog",
            "description": "How to display WooCommerce products inside WhatsApp or Messenger — browsing by category, searching by name, and showing product details.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m2",
        "title": "Module 2 — Abandoned Cart Recovery",
        "lessons": [
          {
            "id": "l2-1",
            "title": "Setting Up Abandoned Cart Detection",
            "description": "How to detect when a customer abandons their cart and automatically trigger a recovery sequence via WhatsApp or Messenger.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l2-2",
            "title": "Dynamic Coupons for Cart Recovery",
            "description": "How to generate unique discount codes automatically and include them in abandoned cart messages to incentivize completion.",
            "duration": null,
            "isFree": true
          }
        ]
      },
      {
        "id": "m3",
        "title": "Module 3 — Order Automation",
        "lessons": [
          {
            "id": "l3-1",
            "title": "Automated Order Notifications",
            "description": "How to send automated order confirmation, shipping, and delivery notifications via WhatsApp — replacing generic email notifications.",
            "duration": null,
            "isFree": true
          },
          {
            "id": "l3-2",
            "title": "Reducing Support Tickets with Chatbot",
            "description": "How to build a self-service support bot that handles the most common WooCommerce support questions — order status, returns, refunds.",
            "duration": null,
            "isFree": true
          }
        ]
      }
    ]
  }
] as AcademyCourse[];

export function getCourseBySlug(slug: string): AcademyCourse | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(category: CourseCategory | "All"): AcademyCourse[] {
  if (category === "All") return courses;
  return courses.filter((c) => c.category === category);
}
