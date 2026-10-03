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
  title: 'Autoniex — AI Agents, n8n Workflow Automation & Next.js Web Development',
  description:
    'Autoniex is a premier enterprise AI agency engineering autonomous n8n workflows, intelligent AI agents, custom Next.js websites, and automated growth engines for ambitious businesses in USA, UK, Canada, and globally.',
  keywords: [
    'Autoniex',
    'Autoniex AI Agency',
    'AI Automation Agency',
    'n8n Workflow Automation',
    'n8n Agency',
    'Next.js Web Development',
    'Custom Web Development',
    'AI Agents',
    'Conversational AI Agents',
    'AI Voice Agents',
    'HubSpot AI CRM Integration',
    'LangChain RAG Systems',
    'Enterprise AI Consulting',
    'Automated Lead Qualification',
    'Make.com n8n Migration',
    'B2B Growth Engine',
    'Web Development Agency USA UK Canada'
  ],
  authors: [{ name: 'Autoniex Team', url: 'https://autoniex.com' }],
  creator: 'Autoniex',
  alternates: {
    canonical: 'https://autoniex.com',
  },
  openGraph: {
    title: 'Autoniex — Autonomous AI Agents, n8n Automation & Web Development',
    description:
      'We engineer autonomous n8n workflows, custom conversational AI agents, and high-converting Next.js web applications that eliminate manual overhead and drive 10x business leverage.',
    url: 'https://autoniex.com',
    siteName: 'Autoniex AI Agency',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://autoniex.com/images/nova-crm.jpg',
        width: 1200,
        height: 630,
        alt: 'Autoniex AI Agents & Workflow Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autoniex — AI Agents, n8n Automation & Web Development',
    description:
      'We engineer autonomous workflows, custom AI copilots, and high-performance Next.js websites.',
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
