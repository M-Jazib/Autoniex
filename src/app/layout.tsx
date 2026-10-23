import type { Metadata } from 'next';
import { Unbounded, Manrope } from 'next/font/google';
import './globals.css';
import { SiteProvider } from '@/context/SiteContext';
import { ThemeProvider } from '@/context/ThemeContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MetaPixel from '@/components/MetaPixel';

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://autoniex.com'),
  title: 'Autoniex — AI Automation Agency | n8n Workflows | AI Agents | Web Development',
  description:
    'Autoniex is a top-rated AI automation agency. We build n8n workflow automations, custom AI agents, AI voice bots, and high-performance Next.js websites. Fixed price, 2–4 week delivery, 100% code ownership. Serving businesses in USA, UK, Canada & worldwide.',
  keywords: [
    'Autoniex',
    // Agency / brand
    'AI automation agency',
    'AI agency',
    'automation agency',
    'AI development agency',
    'AI consulting agency',
    'AI solutions agency',
    // n8n specific
    'n8n automation agency',
    'n8n workflow automation',
    'hire n8n developer',
    'n8n expert',
    'n8n vs zapier',
    'n8n freelancer',
    'n8n consultant',
    // AI Agents
    'custom AI agents',
    'AI agents for business',
    'build AI agents',
    'autonomous AI agents',
    'AI agent development',
    'AI agent builder',
    'AI voice agent',
    'AI phone agent',
    'AI receptionist',
    'AI customer service agent',
    'AI SDR agent',
    // Chatbots
    'AI chatbot for business',
    'custom AI chatbot',
    'AI support bot',
    'business chatbot',
    // Workflow automation
    'workflow automation',
    'business process automation',
    'workflow automation consultant',
    'automated lead generation',
    'CRM automation',
    'email automation',
    // RAG / LLM
    'LangChain development',
    'RAG pipeline development',
    'LLM integration',
    'OpenAI integration',
    // Web dev
    'Next.js web development agency',
    'Next.js developer',
    'React web development',
    'high converting landing page',
    // Location
    'AI automation agency USA',
    'automation agency UK',
    'AI agency Canada',
    'software house',
    // Trending 2024-2025
    'agentic AI',
    'AI agent workflow',
    'multi agent system',
    'AI powered automation',
    'no code automation agency',
    'intelligent automation',
  ],
  authors: [{ name: 'Autoniex', url: 'https://autoniex.com' }],
  creator: 'Autoniex',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://autoniex.com',
  },
  openGraph: {
    title: 'Autoniex — AI Automation Agency | n8n Workflows | AI Agents',
    description:
      'We build AI agents, n8n workflow automations, and fast Next.js websites for businesses ready to scale. Fixed price. Ships in weeks. You own everything.',
    url: 'https://autoniex.com',
    siteName: 'Autoniex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://autoniex.com/images/nova-crm.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoniex — AI Automation Agency & AI Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoniex — AI Automation Agency | n8n & AI Agents',
    description:
      'AI agents, n8n workflow automations, and fast Next.js websites. Fixed price, ships in weeks.',
    images: ['https://autoniex.com/images/nova-crm.jpg'],
  },
  icons: {
    icon: '/logo.webp',
    shortcut: '/logo.webp',
    apple: '/logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${manrope.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3NXKWNCLH9"
        />
        <script
          id="ga4-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3NXKWNCLH9', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <script
          id="meta-pixel-init"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4528939364024228');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7918538749688490"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://autoniex.com/#website',
                  url: 'https://autoniex.com',
                  name: 'Autoniex',
                  description:
                    'Top-rated AI automation agency building n8n workflows, AI agents, AI voice bots, and Next.js websites for businesses worldwide.',
                  publisher: {
                    '@id': 'https://autoniex.com/#organization',
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://autoniex.com/?q={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': ['ProfessionalService', 'SoftwareApplication'],
                  '@id': 'https://autoniex.com/#organization',
                  name: 'Autoniex',
                  alternateName: ['Autoniex AI Agency', 'Autoniex Automation'],
                  url: 'https://autoniex.com',
                  logo: 'https://autoniex.com/logo.webp',
                  image: 'https://autoniex.com/images/nova-crm.jpg',
                  description:
                    'Autoniex is a premier AI automation agency specializing in n8n workflow automation, custom AI agents, AI voice bots, agentic systems, and high-performance Next.js web development. We serve businesses in USA, UK, Canada, UAE and Australia.',
                  email: 'info@autoniex.com',
                  telephone: '+1 (415) 890-5214',
                  priceRange: '$$$$',
                  knowsAbout: [
                    'AI Agents', 'n8n Automation', 'Workflow Automation', 'AI Voice Agents',
                    'LangChain', 'RAG Pipelines', 'OpenAI', 'Next.js', 'Business Process Automation',
                    'Agentic AI', 'CRM Automation', 'Lead Generation Automation',
                  ],
                  areaServed: [
                    { '@type': 'Country', name: 'United States' },
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'Canada' },
                    { '@type': 'Country', name: 'United Arab Emirates' },
                    { '@type': 'Country', name: 'Australia' },
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Autoniex AI & Automation Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'n8n Workflow Automation Agency',
                          description:
                            'End-to-end autonomous business workflows. Connect CRM, databases, email, and APIs into a unified 24/7 automation engine with n8n.',
                          url: 'https://autoniex.com/p/n8n-automation',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Custom AI Agents & Voice Bots',
                          description:
                            'Domain-specific LLM agents, AI voice receptionists, customer support deflection bots, and autonomous SDR agents.',
                          url: 'https://autoniex.com/p/ai-agents',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'High-Performance Next.js Web Development',
                          description:
                            'Sub-second custom Next.js web applications, headless e-commerce, and high-converting landing pages.',
                          url: 'https://autoniex.com/p/web-development',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://autoniex.com/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Why n8n instead of Zapier or Make?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'n8n runs on your own server with no per-execution fees. Zapier and Make charge per task — n8n costs $10–20/month for hosting, with unlimited workflow runs and full data privacy.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How long does an automation or AI agent project take?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Most n8n automations and AI agents ship in 2–4 weeks. Full Next.js websites take 3–5 weeks. You get a fixed timeline before we start and a working demo every Friday.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do we keep ownership of everything you build?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes — 100%. All code, workflows, prompts, and databases are transferred to you at project completion. No licensing fees or ongoing dependencies on Autoniex.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What does it cost to run these systems monthly?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Usually $15–$80/month total — a VPS for n8n ($10–20) plus AI token usage (OpenAI, Groq). We build with token caching to keep costs low and predictable.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg text-text antialiased selection:bg-volt selection:text-volt-ink">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4528939364024228&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <GoogleAnalytics />
        <MetaPixel />
        <ThemeProvider>
          <SiteProvider>
            {children}
          </SiteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
