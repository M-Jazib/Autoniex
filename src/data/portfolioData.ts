import { PortfolioItem, ServiceItem, EngagementPlan, FaqItem, HeroContent, SiteSettings, CustomPage } from '@/types';

export const DEFAULT_HERO: HeroContent = {
  badge: 'Working with clients in USA · UK · Canada & beyond',
  headline: 'Stop doing it manually.',
  highlight: "We'll automate it.",
  subheadline: 'n8n workflows, AI agents & fast websites — built in weeks, running 24/7.',
  guarantees: [
    'Fixed price, no surprises',
    'Ships in 2–4 weeks',
    'You own everything we build',
    'Works while you sleep'
  ],
  leadResponseSpeed: '< 45 Seconds',
  targetRegion: 'USA · UK · CA'
};

export const DEFAULT_SETTINGS: SiteSettings = {
  agencyName: 'Autoniex',
  contactEmail: 'info@autoniex.com',
  phone: '+1 (415) 890-5214',
  address: 'San Francisco, CA & London, UK',
  adminPin: 'jaijhamu2026',
  calendlyUrl: 'https://calendly.com'
};

export const DEFAULT_CUSTOM_PAGES: CustomPage[] = [
  {
    id: 'page-1',
    slug: 'about',
    title: 'About Autoniex',
    subtitle: 'We build the systems your business should already have.',
    content: `## A bit about us

Autoniex is a small, focused team of developers and automation specialists. We work with growing businesses that are tired of doing the same repetitive tasks every day — manual follow-ups, copy-pasting data between apps, missed leads because nobody was online at 2am.

We fix that. Quietly, efficiently, without making it complicated.

## What we actually do

We build three types of things:

**1. Workflow automations with n8n**
We set up systems that run in the background 24/7 — capturing leads, sending follow-ups, syncing your CRM, notifying your team, routing calls. You set it once, it runs forever.

**2. AI agents that handle real work**
From voice bots that answer your phone and book appointments, to AI assistants that respond to customer messages, handle support tickets, or generate weekly reports — we build agents that actually do something useful.

**3. Fast, clean websites with Next.js**
Websites that load in under a second, look great on every device, and are built to convert. No bloated WordPress setups — just clean, maintainable code that you own.

## How we work

We keep things simple. You tell us what problem you want solved. We scope it, give you a fixed price, and ship it in 2–4 weeks. You get a working demo every Friday so there are no surprises at the end.

When we're done, everything goes to you — the code, the workflows, the credentials. No subscriptions, no lock-in.

## Why clients stay with us

Most of our clients come back. Not because of a contract, but because once you've seen how much time a good automation saves, you start noticing other things that could be automated too.

We're honest about what's possible. If something isn't worth building, we'll tell you. If a simpler solution exists, we'll suggest it.

That's how we prefer to work.

## Get in touch

If you have a repetitive process that's eating your team's time, or you want a website that actually performs — we'd love to talk. No sales pitch, just a conversation.`,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'page-2',
    slug: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'Last updated: October 2025',
    content: `## Overview

This Privacy Policy explains how Autoniex ("we", "us", "our") handles information when you visit our website (autoniex.com) or engage us for services. We keep this simple and honest — no legal jargon walls.

## What information we collect

**When you contact us:**
We collect your name, email address, and any details you share in your message. We use this only to respond to your inquiry or discuss a potential project.

**When you visit our website:**
Our hosting provider (Hostinger) may collect standard server logs including your IP address, browser type, and pages visited. We do not run any tracking pixels or sell this data.

**When you become a client:**
We collect project-related information needed to do the work — this may include access credentials, API keys, business data, or system configurations. All of this is handled confidentially and deleted or transferred to you upon project completion.

## How we use your information

We use the information we collect to:
- Respond to your messages and project inquiries
- Deliver and manage agreed services
- Send project updates and deliverables
- Comply with legal obligations

We do not use your data for advertising, we do not sell it, and we do not share it with third parties except where required to deliver your project (e.g. cloud hosting providers under your direction).

## Data security

We take security seriously:
- Client credentials and API keys are stored in encrypted environment variables, never in code or plain text files
- We do not train public AI models on your proprietary data
- Project files are transferred securely and removed from our systems after handover
- We support private cloud and dedicated VPS deployments for clients with compliance requirements (HIPAA, GDPR)

## Third-party services

When building your systems, we may work with services like OpenAI, Groq, Vapi, Twilio, Google Cloud, or similar providers — always under your account and at your direction. We are not responsible for the privacy practices of these third-party platforms.

## Cookies

Our website uses minimal cookies required for basic functionality. We do not use advertising or tracking cookies. The admin panel uses sessionStorage (not persistent cookies) for authentication — this clears when you close your browser.

## Your rights

You have the right to:
- Request what personal information we hold about you
- Ask us to correct or delete your information
- Withdraw consent for any communication at any time

To exercise these rights, email us at info@autoniex.com.

## Changes to this policy

If we make significant changes to this policy, we will update the "Last updated" date at the top. Continued use of our website after changes constitutes acceptance.

## Contact

For any privacy-related questions or requests:
**Email:** info@autoniex.com
**Response time:** We aim to respond within 2 business days.`,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'page-3',
    slug: 'n8n-automation',
    title: 'n8n Workflow Automation Services',
    subtitle: 'Self-hosted automation that runs 24/7 — without the Zapier bill.',
    content: `## What is n8n automation?

n8n is an open-source workflow automation tool that connects your apps, databases, APIs, and AI models into automated pipelines. Unlike Zapier or Make, it runs on your own server — so there are no per-execution fees and your data never leaves your infrastructure.

We build n8n automations for businesses that are ready to stop doing things manually.

## What we automate with n8n

**Lead capture & CRM sync**
Every form submission, LinkedIn message, or email inquiry gets captured, enriched, scored, and pushed to your CRM automatically. Your team gets notified only for high-quality leads.

**AI-powered follow-up sequences**
We connect n8n to OpenAI or Groq so your follow-up emails are generated fresh for each prospect — not templates. Personalized, timely, and sent while you sleep.

**Document processing & data extraction**
Invoices, contracts, and reports go in — structured data comes out. n8n reads PDFs, extracts fields using AI, and updates your spreadsheets or database automatically.

**Customer support automation**
We build RAG (Retrieval-Augmented Generation) pipelines that answer customer queries from your knowledge base in under 2 seconds — deflecting 70–85% of support tickets.

**Internal team notifications**
Slack alerts, email digests, dashboard updates — triggered by real business events like a deal closing, a payment failing, or an SLA breach.

## Why n8n instead of Zapier or Make?

Zapier and Make charge per task execution. When your automations run thousands of times per month, the bill adds up fast. n8n runs on a $10–20/month VPS and costs nothing per execution.

You also get full control: run private AI models, connect internal databases, write custom code nodes, and own 100% of the infrastructure.

## Our n8n process

1. We audit your current manual workflows in a 30-minute call
2. We scope and price the automation with a fixed deliverable
3. We build, test, and document everything in 1–3 weeks
4. You get the full workflow JSON + server access

## Get started

If you have a process that your team repeats more than 10 times a week, it should probably be automated. Let's talk about it.`,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'page-4',
    slug: 'ai-agents',
    title: 'Custom AI Agents for Business',
    subtitle: 'AI that actually does things — not just chats.',
    content: `## What is an AI agent?

An AI agent is software that can understand instructions, take actions, and complete tasks on its own — without a human doing each step. It's not just a chatbot that answers questions. It's a system that books appointments, sends emails, looks up data, makes decisions, and reports back.

We build AI agents that do real work in your business.

## Types of agents we build

**AI voice agents (phone & scheduling)**
Your phone line, answered by AI. It checks your availability, books appointments on Google Calendar, answers common questions, and only routes to a human when genuinely needed. Handles 100% of inbound calls, 24/7.

Built with: Vapi / Retell / Twilio + n8n + Google Calendar API

**Customer support AI agents**
Reads your documentation, FAQs, and past tickets. Answers customer questions in under 2 seconds with accurate, on-brand responses. Escalates complex issues to your team with full context.

Built with: n8n + LangChain + OpenAI / Groq + Vector database (Pinecone / Qdrant)

**Lead qualification agents**
Engages new leads via chat or email, asks qualifying questions, scores them based on your criteria, and books discovery calls with only the best prospects.

**Internal knowledge assistants**
Your team asks questions in Slack or a chat interface — the agent searches your internal docs, SOPs, and databases to give accurate answers instantly.

## What makes a good AI agent?

The difference between a demo and a production agent is reliability. We build agents with:
- Error handling and fallback paths
- Human escalation triggers
- Logging and monitoring
- Token cost controls
- Latency under 1 second for most responses

## Who this is for

AI agents work best for businesses with:
- High inbound volume (calls, support tickets, leads)
- Repetitive decision-making processes
- 24/7 coverage requirements
- Teams that are bottlenecked by manual qualification or response time

## Get started

Tell us what task your team does manually, repeatedly. We'll tell you if an AI agent can handle it — and what it would take to build one.`,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'page-5',
    slug: 'web-development',
    title: 'Next.js Web Development Services',
    subtitle: 'Fast, clean websites built to convert — not just to look good.',
    content: `## What we build

We build custom websites and web applications using Next.js — the same framework used by Netflix, TikTok, Twitch, and thousands of high-growth startups. The result is a site that loads in under a second, ranks well on Google, and works on every device.

No WordPress. No page builders. Clean, maintainable code that you own.

## Types of projects we take on

**Business & agency websites**
Professional websites that communicate what you do, build trust, and convert visitors into leads. Built with your brand, your content, and your conversion goals in mind.

**SaaS landing pages & marketing sites**
High-converting pages for software products, with fast load times and proper SEO foundations. A/B testing friendly and easy to update.

**E-commerce storefronts**
Custom Next.js storefronts connected to Shopify, WooCommerce, or your own backend. Faster than any theme, fully customized to your brand.

**Client portals & dashboards**
Internal tools, client-facing dashboards, and data visualization interfaces. Authentication, role management, real-time updates.

**AI-powered web applications**
Web apps with AI features built in — chatbots, content generators, search, recommendations. We integrate OpenAI, Groq, or your model of choice.

## Why Next.js?

Next.js delivers:
- Sub-second page loads (important for both UX and Google rankings)
- Server-side rendering for SEO
- Built-in image optimization
- Edge-ready deployment
- TypeScript for maintainability

Compared to WordPress or Webflow, a Next.js site is faster, more secure, and easier to extend with custom features.

## Our development process

1. **Discovery** — we map your goals, pages, and content in a brief
2. **Design** — wireframes and visual direction, aligned on before we write code
3. **Build** — 3–5 week sprint with Friday demos
4. **Launch** — deployment, testing, and handover
5. **Support** — 30-day post-launch warranty included

You get the full source code. Host it anywhere, modify it anytime.

## Get started

Tell us what you need. We'll scope it, quote it, and ship it — without the project management overhead most agencies add.`,
    updatedAt: new Date().toISOString()
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'NovaCart AI Support Copilot & RAG Engine',
    cat: 'automation',
    image: '/images/sage-agent.jpg',
    alt: 'n8n AI autonomous e-commerce customer support workflow and vector database',
    blurb: 'Autonomous tier-1 customer support architecture built on n8n, LangChain, Groq LLM, and OpenAI embeddings. Ingests store manuals from Google Drive, answers order & refund queries in < 1.2s, and deflects 83% of live tickets.',
    built: [
      'n8n Webhook trigger integrated with live storefront chat & helpdesk',
      'LangChain Agent powered by Groq Llama-3 with sub-second response latency',
      'Automated RAG knowledge ingestion pipeline syncing SOPs from Google Drive',
      'Autonomous order lookup, return eligibility validation & refund processing',
      'Human-in-the-loop escalation with automated agent ticket routing'
    ],
    stack: ['n8n', 'LangChain', 'Groq Llama-3', 'OpenAI Embeddings', 'Google Drive', 'Webhooks'],
    sample: false,
    client: 'NovaCart E-Commerce (Austin, TX)',
    metrics: '83% ticket deflection, < 1.2s response time, 4.9/5 CSAT rating',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-2',
    title: 'HubSpot AI CRM Inbound Reply & Follow-Up Engine',
    cat: 'automation',
    image: '/images/nova-crm.jpg',
    alt: 'n8n automated Gmail and HubSpot CRM inbound reply and lead follow up engine',
    blurb: 'Zero-delay inbound email qualification and pipeline sync engine. Triggers on Gmail messages, analyzes lead intent via Groq LLM, creates deals in HubSpot CRM, and delivers hyper-personalized response drafts within 45 seconds.',
    built: [
      'Real-time Gmail trigger filtering executive inquiries and RFPs',
      'Groq Llama-3 AI intent classification & key stakeholder information extraction',
      'Automated two-way HubSpot CRM contact, company & deal stage synchronizer',
      'Context-aware draft reply generator matching executive brand voice',
      'Slack channel alert for high-priority enterprise opportunities ($25k+)'
    ],
    stack: ['n8n', 'HubSpot CRM', 'Gmail API', 'Groq LLM', 'Slack API', 'JavaScript'],
    sample: false,
    client: 'Apex Growth Partners (London, UK)',
    metrics: 'Under 45s first-response speed & $340k closed pipeline in 60 days',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-3',
    title: 'Autonomous AI Voice Agent & Calendar Dispatcher',
    cat: 'automation',
    image: '/images/ledger-bot.jpg',
    alt: 'n8n real-time AI voice agent appointment booking and calendar availability workflow',
    blurb: 'Conversational voice AI telephony workflow handling 24/7 inbound phone inquiries, live Google Calendar availability checks, instant appointment scheduling, and automated VIP human transfers.',
    built: [
      'Real-time Webhook ingestion from AI telephony provider (Retell/Vapi/Twilio)',
      'Live bidirectional Google Calendar slot availability query and timezone handler',
      'Instant booking confirmation with calendar invite and SMS reminder dispatch',
      'Automated emergency human handoff via Gmail alert to on-call supervisor',
      'Voice RAG ingestion module embedding clinic FAQs into vector store'
    ],
    stack: ['n8n', 'Google Calendar API', 'Gmail API', 'OpenAI Embeddings', 'Telephony Webhooks'],
    sample: false,
    client: 'Beacon Health & Wellness Clinics (Toronto, CA)',
    metrics: '100% phone answer rate, 420+ monthly appointments booked on autopilot',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-4',
    title: 'HubSpot AI Deal Recovery & Pipeline Nurturing Agent',
    cat: 'automation',
    image: '/images/orbit-marketing.jpg',
    alt: 'n8n automated sales pipeline follow up and deal recovery agent',
    blurb: 'Autonomous sales pipeline revival system running on n8n. Periodically audits stalled deals in HubSpot CRM, generates customized objection-handling follow-ups based on past meeting transcripts, and re-engages dormant buyers.',
    built: [
      'Scheduled cron trigger auditing CRM deals inactive for > 5 business days',
      'Historical activity aggregation across past emails, notes, and call summaries',
      'AI agent formulating personalized re-engagement hooks and price incentives',
      'Automated CRM task assignment and pipeline stage progression',
      'Weekly executive summary digest on recovered deal velocity'
    ],
    stack: ['n8n', 'HubSpot API', 'Groq Llama-3', 'Cron Scheduler', 'PostgreSQL'],
    sample: false,
    client: 'VentureScale B2B SaaS (San Francisco, CA)',
    metrics: '24.6% dormant deal revival rate, +$190k recovered ARR in Q3',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-5',
    title: 'Multi-Channel Inbound Lead Qualification & Routing',
    cat: 'automation',
    image: '/images/pulse-analytics.jpg',
    alt: 'n8n multi-channel lead scoring and instant database distribution pipeline',
    blurb: 'High-throughput lead qualification engine processing leads from webhooks, Google Ads, and Meta funnels. Enriches lead profiles, scores against ICP criteria via Groq LLM, and logs clean records to Google Sheets & CRM.',
    built: [
      'Multi-source webhook receiver handling 10,000+ incoming web leads/day',
      'AI ICP scoring evaluating budget, timeline, employee count & purchasing power',
      'Dynamic conditional branching routing Tier-1 leads directly to senior reps',
      'Real-time Google Sheets backup ledger with automated data deduplication',
      'Instant SMS and push notification dispatch to sales reps in < 30 seconds'
    ],
    stack: ['n8n', 'Google Sheets API', 'Groq LLM', 'Webhooks', 'Twilio SMS'],
    sample: false,
    client: 'Crestview Financial Group (Miami, FL)',
    metrics: '0 lead leakage, +310% lead-to-call conversion acceleration',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-6',
    title: 'Autonomous Enterprise Knowledge Ingestion & Vector RAG',
    cat: 'automation',
    image: '/images/bloom-storefront.jpg',
    alt: 'n8n automated Google Drive document ingestion and vector embedding RAG pipeline',
    blurb: 'Automated document processing and RAG pipeline running in n8n. Continuously monitors Google Drive repository for new SOPs, policy PDFs, and contracts, chunks text, and generates OpenAI embeddings for AI copilots.',
    built: [
      'Google Drive folder change detector triggering on new PDF & doc uploads',
      'Document parser extracting raw text, tables, and policy metadata',
      'Text chunking & tokenization with OpenAI text-embedding-3-small model',
      'Vector store synchronization enabling instant semantic search for company AI',
      'Automated versioning and stale document deletion to prevent hallucination'
    ],
    stack: ['n8n', 'Google Drive API', 'OpenAI Embeddings', 'Vector Store', 'LangChain'],
    sample: false,
    client: 'Meridian Legal & Compliance Partners (Chicago, IL)',
    metrics: 'Sub-second semantic search across 5,000+ corporate legal documents',
    liveUrl: '#contact',
    video: ''
  },
];

export const SERVICES: ServiceItem[] = [
  {
    num: '01',
    title: 'Automation Systems',
    kicker: 'Stop burning hours on repetitive work.',
    desc: 'We engineer end-to-end autonomous business workflows that connect your CRM, databases, inbox, and spreadsheets into a unified engine that runs 24/7 without human error.',
    items: [
      'CRM & lead qualification pipelines',
      'Automated invoice & document processing',
      'Multi-app data synchronization (Zapier, Make, custom APIs)',
      'Slack & WhatsApp team notification bots'
    ],
    icon: 'cpu',
  },
  {
    num: '02',
    title: 'Custom AI Agents',
    kicker: 'Intelligent digital teammates that never sleep.',
    desc: 'We train domain-specific LLM agents on your proprietary business knowledge, SOPs, and ticket history to handle customer service, outbound sales outreach, and internal research.',
    items: [
      'Customer support agents with 80%+ deflection',
      'Autonomous outbound voice & chat SDR agents',
      'Private internal knowledge base copilots',
      'Continuous prompt & intent accuracy tuning'
    ],
    icon: 'bot',
  },
  {
    num: '03',
    title: 'High-Performance Websites',
    kicker: 'Websites that convert high-ticket clients.',
    desc: 'We craft high-converting web applications, landing pages, and headless e-commerce platforms using Next.js and Tailwind with 3D interactions and sub-second load times.',
    items: [
      'Custom Next.js & React agency web applications',
      'Interactive 3D graphics & WebGL product showcases',
      'High-converting landing pages engineered for paid ads',
      'Enterprise headless CMS & e-commerce architecture'
    ],
    icon: 'layout',
  },
  {
    num: '04',
    title: 'Growth & Marketing Engines',
    kicker: 'Predictable client acquisition on autopilot.',
    desc: 'We build high-converting acquisition funnels, automated email marketing sequences, and hyper-targeted ad engines that consistently generate qualified B2B pipeline.',
    items: [
      'Full-funnel client acquisition campaigns',
      'Automated email nurturing & cold outreach pipelines',
      'Ad creative testing & ROAS attribution tracking',
      'Conversion rate optimization (CRO) & A/B testing'
    ],
    icon: 'rocket',
  },
];

export const ENGAGEMENT_PLANS: EngagementPlan[] = [
  {
    name: 'Project',
    kicker: 'One system, shipped and delivered.',
    desc: 'A defined fixed-scope build: one robust automation pipeline, AI agent, or custom website — delivered, thoroughly tested, and handed over with complete documentation.',
    features: [
      'Fixed scope & guaranteed transparent pricing',
      'Rapid 2–5 week sprint delivery',
      'Full source code & admin ownership handover',
      'Loom video documentation & staff training',
      '30-day post-launch warranty & support'
    ],
    popular: false,
    ctaText: 'Choose Project'
  },
  {
    name: 'Retainer',
    kicker: 'Your dedicated AI & growth team.',
    desc: 'Continuous monthly development and optimization: new automations, agent capabilities, landing pages, and performance tuning that compound your business revenue.',
    features: [
      'Monthly prioritized roadmap & agile sprint builds',
      'Rapid 48-hour turnarounds for core requests',
      'Continuous AI model tuning & prompt maintenance',
      'Bi-weekly strategy & performance review calls',
      'Pause, scale, or cancel anytime with 30-day notice'
    ],
    popular: true,
    ctaText: 'Choose Retainer'
  },
  {
    name: 'Partner',
    kicker: 'Embedded strategic engineering pod.',
    desc: 'An elite technical partner embedded inside your executive suite for ambitious digital transformation — architecture, deep engineering, and high-velocity execution.',
    features: [
      'Dedicated engineering & growth architects',
      'Quarterly in-depth technology roadmap planning',
      'Enterprise SLA & direct priority Slack channel',
      'Custom security compliance & private cloud deployment',
      'Tailored terms and flexible resource allocation'
    ],
    popular: false,
    ctaText: 'Choose Partner'
  }
];

export const FAQS: FaqItem[] = [
  {
    q: 'Why n8n instead of Zapier or Make?',
    a: 'Zapier and Make charge you per task — which sounds fine until your automations actually run at scale and you get a \$800 monthly bill for clicking buttons. n8n runs on your own server, so there\'s no per-execution cost. You also get full control: private data, custom code, and integrations that Zapier just doesn\'t support. Most clients pay \$15–\$20/month for hosting and that\'s it.'
  },
  {
    q: 'How long does a project actually take?',
    a: 'For most n8n automations and AI agent projects, we\'re talking 2 to 4 weeks from kickoff to handover. A full website takes around 3 to 5 weeks. You get a proper timeline before we start, not vague estimates. And every Friday you get a video showing exactly where things are.'
  },
  {
    q: 'Do we keep ownership of everything after you build it?',
    a: 'Yes — 100%. The code, the workflows, the prompts, the database — everything goes to you when we\'re done. You can host it yourself, modify it, hand it to another developer — whatever you need. We don\'t lock you into a platform or charge ongoing fees for something we already built.'
  },
  {
    q: 'How do the AI voice agents actually handle phone calls?',
    a: 'They connect to your phone line (via Twilio, Vapi, or Retell), listen to the caller in real time, and respond naturally — checking availability, booking appointments, answering questions, or routing to a human when needed. Response time is under a second. It sounds like a real person, not a phone tree.'
  },
  {
    q: 'Is our data safe when you\'re building these systems?',
    a: 'Yes. We don\'t feed your data to public AI models. Credentials are stored in encrypted environment variables, not in code. If you need HIPAA or GDPR compliance, we set up private cloud deployments. Your data stays yours — we just build the pipes.'
  },
  {
    q: 'What does it actually cost to run these systems monthly?',
    a: 'Usually between \$15 and \$80/month total. That\'s a cheap VPS for n8n (\$10–20) and whatever you use in AI tokens (OpenAI, Groq, etc.). We build with token caching so you\'re not burning money on repeated calls. Most clients are shocked at how low the operating costs are.'
  },
  {
    q: 'Can you take over or fix a system someone else built?',
    a: 'Yes, and we do this regularly. Whether it\'s a Zapier setup that broke, a custom script nobody understands anymore, or an agency handover with no documentation — we dig in, audit what\'s there, and either fix it or rebuild it properly. Takes 2–3 days to audit before we touch anything.'
  },
  {
    q: 'What happens after you hand over the project?',
    a: 'Every project comes with 30 days of free support. If something breaks, an API changes, or a webhook misbehaves — we fix it at no extra cost. After that, most clients join our Care Retainer for ongoing updates and new features. But there\'s no pressure; the system works fine on its own too.'
  }
];
