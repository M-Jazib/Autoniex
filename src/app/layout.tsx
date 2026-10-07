import type { Metadata } from 'next';
import { Unbounded, Manrope } from 'next/font/google';
import './globals.css';
import { SiteProvider } from '@/context/SiteContext';
import { ThemeProvider } from '@/context/ThemeContext';

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
  title: 'Autoniex — n8n Automation Agency | AI Agents | Next.js Web Development',
  description:
    'Autoniex builds n8n workflow automations, custom AI agents, and fast Next.js websites for growing businesses. Fixed price, 2–4 week delivery, 100% code ownership. Serving USA, UK, Canada & worldwide.',
  keywords: [
    'Autoniex',
    'n8n automation agency',
    'n8n workflow automation service',
    'hire n8n developer',
    'AI automation agency',
    'custom AI agents for business',
    'AI voice agent',
    'AI chatbot for business',
    'workflow automation consultant',
    'Next.js web development agency',
    'n8n vs zapier agency',
    'AI lead generation automation',
    'LangChain RAG development',
    'n8n freelancer',
    'automation agency USA',
    'automation agency UK',
    'software house',
    'AI agency',
    'web development agency',
    'n8n expert'
  ],
  authors: [{ name: 'Autoniex', url: 'https://autoniex.com' }],
  creator: 'Autoniex',
  alternates: {
    canonical: 'https://autoniex.com',
  },
  openGraph: {
    title: 'Autoniex — n8n Automation, AI Agents & Next.js Web Development',
    description:
      'We build n8n workflow automations, custom AI agents, and fast websites for businesses that are tired of doing things manually. Fixed price. Ships in weeks.',
    url: 'https://autoniex.com',
    siteName: 'Autoniex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://autoniex.com/images/nova-crm.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoniex — n8n Automation Agency & AI Agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoniex — n8n Automation, AI Agents & Web Development',
    description:
      'We build n8n workflow automations, AI agents, and fast Next.js websites. Fixed price, ships in weeks.',
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
                    'Premier AI agency engineering autonomous n8n workflows, AI agents, and custom web development.',
                  publisher: {
                    '@id': 'https://autoniex.com/#organization',
                  },
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://autoniex.com/#organization',
                  name: 'Autoniex',
                  url: 'https://autoniex.com',
                  logo: 'https://autoniex.com/logo.webp',
                  image: 'https://autoniex.com/images/nova-crm.jpg',
                  description:
                    'Full-service AI systems agency engineering autonomous n8n workflows, intelligent AI agents, custom websites, and marketing engines for enterprises in USA, UK, and Canada.',
                  email: 'info@autoniex.com',
                  telephone: '+1 (415) 890-5214',
                  priceRange: '$$$$',
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
                          name: 'n8n Workflow Automation',
                          description:
                            'End-to-end autonomous business workflows connecting CRM, databases, inbox, and APIs into a unified 24/7 engine.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Custom AI Agents & Copilots',
                          description:
                            'Domain-specific LLM agents, customer support deflection bots, and voice telephony SDR agents.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'High-Performance Next.js Web Development',
                          description:
                            'Sub-second custom Next.js web applications, headless e-commerce, and high-converting landing pages.',
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
        <ThemeProvider>
          <SiteProvider>
            {children}
          </SiteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
