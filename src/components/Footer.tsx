'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Lock } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';

export default function Footer() {
  const { settings } = useSiteContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg border-t border-line py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-line">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-line bg-surface flex items-center justify-center shadow-sm">
                <Image
                  src="/logo.webp"
                  alt="Autoniex Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-text">
                AUTONIEX
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted max-w-md leading-relaxed">
              Autoniex is a full-service AI systems engineering agency. We design and deploy autonomous workflow engines, custom conversational AI agents, high-performing websites, and full-funnel marketing machines for ambitious enterprises in USA, UK, Canada, and globally.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-text-faint">
                Enterprise support:{' '}
                <a href={`mailto:${settings.contactEmail || 'info@autoniex.com'}`} className="text-volt hover:underline">
                  {settings.contactEmail || 'info@autoniex.com'}
                </a>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-text mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-muted font-medium">
              <li><a href="#services" className="hover:text-volt transition-colors">Core Capabilities</a></li>
              <li><a href="#work" className="hover:text-volt transition-colors">Case Studies &amp; Portfolio</a></li>
              <li><a href="#process" className="hover:text-volt transition-colors">4-Week Sprint Process</a></li>
              <li><a href="#engage" className="hover:text-volt transition-colors">Engagement Models</a></li>
              <li><a href="#faq" className="hover:text-volt transition-colors">FAQ &amp; Terms</a></li>
            </ul>
          </div>

          {/* Coverage Regions */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-text mb-4">
              Target Markets
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-text-muted font-medium">
              <li>United States (PST / EST)</li>
              <li>United Kingdom (GMT)</li>
              <li>Canada (EST / MST)</li>
              <li>United Arab Emirates (GST)</li>
              <li>Australia &amp; New Zealand (AEST)</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-faint">
          <p>© {new Date().getFullYear()} Autoniex. All intellectual property, code and rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-text-faint hover:text-volt transition-colors text-xs font-medium"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-surface hover:border-volt hover:text-volt text-text-muted text-xs font-bold transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
