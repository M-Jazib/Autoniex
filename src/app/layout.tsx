import type { Metadata } from 'next';
import { Unbounded, Manrope } from 'next/font/google';
import './globals.css';
import { SiteProvider } from '@/context/SiteContext';

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
  title: 'Autoniex — AI Agents, Workflow Automation, Websites & Growth Engines',
  description:
    'Autoniex is a premier full-service AI systems agency building autonomous business workflows, conversational AI agents, high-converting websites, and marketing engines for ambitious enterprises in USA, UK, Canada, and globally.',
  keywords: [
    'AI Agency',
    'Workflow Automation',
    'AI Agents',
    'Next.js Website Development',
    'Make.com Automation',
    'Zapier Integrations',
    'B2B Growth Engine',
    'Chatbot Support Agents',
    'Autoniex'
  ],
  authors: [{ name: 'Autoniex Team' }],
  creator: 'Autoniex',
  openGraph: {
    title: 'Autoniex — AI Agents, Automation, Websites & Growth Engines',
    description:
      'We engineer autonomous workflows, custom AI agents, and high-converting websites that eliminate manual overhead and drive 10x business leverage.',
    url: 'https://autoniex.com',
    siteName: 'Autoniex AI Agency',
    locale: 'en_US',
    type: 'website',
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
              '@type': 'Organization',
              name: 'Autoniex',
              url: 'https://autoniex.com',
              logo: 'https://autoniex.com/logo.webp',
              description:
                'Full-service AI systems agency engineering autonomous workflows, intelligent AI agents, custom websites, and marketing engines.',
              email: 'info@autoniex.com',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@autoniex.com',
                contactType: 'customer service',
              },
            }),
          }}
        />
      </head>
      <body className="bg-bg text-text antialiased selection:bg-volt selection:text-volt-ink">
        <SiteProvider>
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
