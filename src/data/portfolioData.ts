import { PortfolioItem, ServiceItem, EngagementPlan, FaqItem, HeroContent, SiteSettings, CustomPage } from '@/types';

export const DEFAULT_HERO: HeroContent = {
  badge: 'Working with clients in USA · UK · Canada & beyond',
  headline: 'We build automations that actually save you time.',
  highlight: 'And websites that bring real results.',
  subheadline: 'We use n8n, AI agents, and Next.js to cut out the boring manual work — so your team can focus on what matters. No fluff, just systems that run 24/7 without you babysitting them.',
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
    subtitle: 'Real people building real tools for real businesses.',
    content: `## Who We Are
We started Autoniex because we saw too many businesses spending hours every day on work that a computer should be doing. Copy-pasting data between apps. Manually following up on leads. Chasing invoices. Sending the same email 40 times.

We fix that.

We build n8n automations, AI agents, and custom websites. Not demos — actual working systems that run in the background while your team does more important things.

### How We Work
1. **We keep it honest**: If something can't be automated or isn't worth it, we'll tell you upfront. No overselling.
2. **We move fast**: Most projects go from kickoff to live in 2 to 4 weeks. You get a working demo every Friday.
3. **You own it all**: Every workflow, every script, every database — it's yours when we're done. No monthly licensing nonsense.`,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'page-2',
    slug: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'How we respect and safeguard your enterprise data.',
    content: `## Privacy & Data Protection Commitment
At Autoniex, enterprise data privacy is foundational to everything we build.

### Data Security
- We never train public AI models on proprietary client data.
- All API integrations use encrypted HTTPS protocols with isolated environment variables.
- We support private cloud / dedicated VPC deployments for healthcare and financial institutions.`,
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
