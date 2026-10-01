import { PortfolioItem, ServiceItem, EngagementPlan, FaqItem, HeroContent, SiteSettings, CustomPage } from '@/types';

export const DEFAULT_HERO: HeroContent = {
  badge: 'Serving Clients in USA · UK · Canada · Worldwide',
  headline: 'Build Intelligent Machines.',
  highlight: 'Scale Without Limits.',
  subheadline: 'Autoniex is a full-service AI agency engineering autonomous workflows, intelligent AI agents, high-converting websites, and automated growth engines for ambitious businesses.',
  guarantees: [
    'Fixed Scope & Price',
    '2–4 Week Delivery',
    '100% Code Ownership',
    '24/7 AI Reliability'
  ],
  leadResponseSpeed: '< 45 Seconds',
  targetRegion: 'USA · UK · CA'
};

export const DEFAULT_SETTINGS: SiteSettings = {
  agencyName: 'Autoniex',
  contactEmail: 'info@autoniex.com',
  phone: '+1 (415) 890-5214',
  address: 'San Francisco, CA & London, UK',
  adminPin: 'autoniex2026',
  calendlyUrl: 'https://calendly.com'
};

export const DEFAULT_CUSTOM_PAGES: CustomPage[] = [
  {
    id: 'page-1',
    slug: 'about',
    title: 'About Autoniex AI Agency',
    subtitle: 'High-leverage engineering for modern enterprises.',
    content: `## Who We Are
Autoniex was founded with a single mission: to eliminate operational friction and human fatigue in high-growth businesses.

We combine cutting-edge Large Language Models (LLMs), custom workflow orchestrations, and world-class frontend engineering to give companies an unfair competitive advantage.

### Our Core Principles
1. **Zero Fluff, 100% ROI**: We do not build novelty AI demos. Every system we build has direct revenue impact or hours saved.
2. **Speed & Reliability**: Production sprints ship in 2 to 4 weeks with weekly working demos.
3. **Total IP Ownership**: You own every line of code, prompt recipe, and dataset. No lock-in, ever.`,
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
    title: 'Nova CRM Autopilot',
    cat: 'automation',
    image: '/images/nova-crm.jpg',
    alt: 'Real modern CRM pipeline dashboard with live lead tracking',
    blurb: "A fast-growing North American real-estate firm's entire lead flow — capture, qualification, instant follow-up, and calendar booking — now runs seamlessly with zero manual delay.",
    built: [
      'Multi-channel lead ingestion from Meta Ads, Google Ads & Zillow',
      'Automated 60-second SMS + WhatsApp + Email response sequence',
      'Two-way calendar booking sync with automated SMS reminders',
      'Real-time pipeline analytics & Slack deal-won notification bot'
    ],
    stack: ['Make.com', 'HubSpot', 'Twilio', 'Google Sheets', 'OpenAI'],
    sample: false,
    client: 'Apex Capital Realty (Dallas, TX)',
    metrics: '+340% faster lead contact time & $280k closed in 60 days',
    liveUrl: '#contact',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'proj-2',
    title: 'Sage Support Agent',
    cat: 'agents',
    image: '/images/sage-agent.jpg',
    alt: 'Dual-pane enterprise AI copilot customer support workstation',
    blurb: 'An autonomous tier-1 AI support agent trained on 4,000+ support docs and past ticket logs that handles 78% of incoming customer inquiries 24/7 with human-level accuracy.',
    built: [
      'Retrieval-Augmented Generation (RAG) agent connected to knowledge base',
      'Omnichannel integration across Website Chat, Zendesk & WhatsApp',
      'Autonomous ticket resolution & sentiment-triggered human escalation',
      'Weekly automated self-evaluation & intent accuracy tuning'
    ],
    stack: ['OpenAI GPT-4o', 'LangChain', 'Pinecone', 'Zendesk', 'FastAPI'],
    sample: false,
    client: 'CloudScale SaaS (London, UK)',
    metrics: '78% deflection rate, under 8s response time, 4.9/5 CSAT',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-3',
    title: 'Pulse Analytics Dashboard',
    cat: 'websites',
    image: '/images/pulse-analytics.jpg',
    alt: 'Dark mode live telemetry analytics charts with conversion metrics',
    blurb: 'A custom, sub-second enterprise analytics web application ingesting live telemetry from payment gateways, ad platforms, and custom ERP databases into interactive 3D visualizations.',
    built: [
      'High-throughput live stream ingestion from Stripe, Meta & Shopify APIs',
      'Interactive WebGL chart components with real-time drill-down filters',
      'Role-based multi-tenant authentication with enterprise SSO',
      'Sub-500ms global page response via Edge deployment'
    ],
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'D3.js'],
    sample: false,
    client: 'VenturePulse Group (Toronto, Canada)',
    metrics: 'Sub-second queries across 10M+ rows, 99.99% uptime',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-4',
    title: 'Bloom Retail Storefront',
    cat: 'websites',
    image: '/images/bloom-storefront.jpg',
    alt: 'Minimalist luxury organic e-commerce studio storefront',
    blurb: 'A headless e-commerce flagship storefront engineered for an organic wellness lifestyle brand, featuring 3D product previews and ultra-optimized instant checkout.',
    built: [
      'Next.js headless frontend paired with Shopify Storefront API',
      'Interactive 3D product showcase and variant selector',
      'Predictive search, one-click Apple Pay & Google Pay checkout',
      'Automated abandoned-cart recovery integration with Klaviyo'
    ],
    stack: ['Shopify Plus', 'Next.js 14', 'Tailwind CSS', 'Klaviyo', 'Stripe'],
    sample: false,
    client: 'Bloom Botanical Labs (New York, USA)',
    metrics: '98/100 Google Lighthouse score, +41% mobile conversion',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-5',
    title: 'Orbit Launch Campaign',
    cat: 'marketing',
    image: '/images/orbit-marketing.jpg',
    alt: 'B2B SaaS growth funnel analytics and advertising dashboard',
    blurb: 'Full-stack growth marketing engine for a B2B AI software release: high-converting interactive landing pages, algorithmic ad creatives, and automated email nurturing funnels.',
    built: [
      'High-converting landing page with viral waitlist leaderboard',
      'AI-personalized dynamic ad copy and high-CTR video hooks',
      '7-touch automated email sequence with behavioral branching',
      'Full-funnel attribution dashboard tracking ROAS and CAC'
    ],
    stack: ['Google Ads', 'Meta Ads', 'Next.js', 'Mailchimp', 'Segment'],
    sample: false,
    client: 'Orbit AI Labs (San Francisco, CA)',
    metrics: '14,200 waitlist signups in 18 days at $0.84 CPL',
    liveUrl: '#contact',
    video: ''
  },
  {
    id: 'proj-6',
    title: 'Ledger Reconciliation Bot',
    cat: 'automation',
    image: '/images/ledger-bot.jpg',
    alt: 'Financial technology bank feed automated transaction workspace',
    blurb: 'Autonomous financial accounting bot that matches thousands of daily stripe charges, merchant receipts, and bank transactions directly into accounting software without human fatigue.',
    built: [
      'Nightly multi-bank transaction sync via Plaid financial API',
      'OCR-powered invoice & PDF receipt parsing with automated line-item match',
      'Autonomous journal entry reconciliation and QuickBooks/Xero ledger sync',
      'Daily morning Slack digest highlighting discrepancies for CFO approval'
    ],
    stack: ['Python', 'Plaid API', 'QuickBooks API', 'Slack Bot', 'AWS Lambda'],
    sample: false,
    client: 'Meridian Logistics Corp (Vancouver, Canada)',
    metrics: 'Saved 35+ accountant hours every week, 0 reconciliation errors',
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
    q: 'How long does a typical project take to launch?',
    a: 'Most automation workflows and custom AI agents ship within 2 to 4 weeks. Full custom Next.js websites typically take 3 to 5 weeks depending on scope. You receive a guaranteed fixed delivery timeline before we write a single line of code, along with weekly milestone demo videos every Friday.'
  },
  {
    q: 'Do you integrate with our existing software and tools?',
    a: 'Yes, 100%. We integrate with over 200+ popular enterprise platforms — including HubSpot, Salesforce, Stripe, Shopify, QuickBooks, Slack, Zendesk, Google Workspace, and any service offering a REST, GraphQL, or webhook API. If your software lacks a public API, our engineers build secure database hooks or headless browser workers.'
  },
  {
    q: 'Who owns the intellectual property and code when complete?',
    a: 'You own 100% of everything we build. All source code, AI prompts, workflow recipes, training datasets, and custom integrations are transferred directly to your organization with full administrative access. No vendor lock-in, recurring licensing fees to us, or hidden royalty clauses.'
  },
  {
    q: 'What are the ongoing operating costs for an AI Agent or Automation?',
    a: 'Running costs are typically minimal — mostly raw cloud or LLM API usage (e.g. OpenAI, Anthropic, or Twilio) which scales directly with your usage volume. For most small to mid-sized businesses, this is between $15 to $150 per month. We optimize every agent with token caching and efficient prompts to keep running costs as low as possible.'
  },
  {
    q: 'Can you take over or fix an existing half-built system?',
    a: 'Absolutely. We frequently audit and rescue stalled agency builds, broken Zapier/Make setups, or legacy custom code. We start with a comprehensive 48-hour architectural code and logic audit to pinpoint bottlenecks, secure vulnerabilities, and bring it up to enterprise production standards.'
  },
  {
    q: 'Do you offer ongoing support and maintenance after launch?',
    a: 'Every single project we deliver includes 30 days of complimentary white-glove warranty and bug-fix support. Following launch, over 80% of our clients transition to our monthly Retainer or Care Plan so our engineering pod continues monitoring, upgrading, and expanding systems as business needs evolve.'
  }
];
