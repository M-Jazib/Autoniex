'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Mail, MapPin, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';

export default function Footer() {
  const { settings } = useSiteContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactEmail = settings.contactEmail || 'info@autoniex.com';

  return (
    <footer className="bg-bg border-t border-line pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-volt/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-teal/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-line">
          
          {/* Column 1: Brand & Executive Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden border border-line bg-surface flex items-center justify-center shadow-neon group">
                <Image
                  src="/logo.webp"
                  alt="Autoniex Enterprise Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl tracking-wider text-text flex items-center gap-2">
                  AUTONIEX
                  <span className="w-2 h-2 rounded-full bg-volt animate-pulse" />
                </span>
                <span className="text-[10px] tracking-widest text-text-muted uppercase font-semibold">
                  Enterprise AI Systems Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-muted max-w-md leading-relaxed">
              Autoniex engineers bespoke workflow automation, domain-trained AI agents, high-converting Next.js web applications, and algorithmic growth engines for ambitious companies in North America, the UK, and Europe.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-line text-[11px] font-semibold text-text-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-volt" />
                <span>100% IP Code Handover</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-line text-[11px] font-semibold text-text-muted">
                <Zap className="w-3.5 h-3.5 text-cyber-teal" />
                <span>Fixed-Scope Guarantees</span>
              </div>
            </div>

            {/* Direct Contact Line */}
            <div className="pt-2 space-y-1.5 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-volt flex-shrink-0" />
                <span>Executive Inbox:</span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-bold text-text hover:text-volt transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyber-teal flex-shrink-0" />
                <span>Operating Hubs: San Francisco, CA · London, UK</span>
              </div>
            </div>
          </div>

          {/* Column 2: Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-text mb-5 flex items-center gap-2">
              <span>Capabilities</span>
              <div className="w-6 h-0.5 bg-volt/60" />
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-text-muted font-medium">
              <li>
                <a href="#services" className="hover:text-volt transition-colors flex items-center justify-between group">
                  <span>Workflow Automation</span>
                  <span className="text-volt opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-volt transition-colors flex items-center justify-between group">
                  <span>Custom AI Copilots & SDRs</span>
                  <span className="text-volt opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-volt transition-colors flex items-center justify-between group">
                  <span>High-Performance Websites</span>
                  <span className="text-volt opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-volt transition-colors flex items-center justify-between group">
                  <span>B2B Growth & Acquisition</span>
                  <span className="text-volt opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-volt transition-colors flex items-center justify-between group">
                  <span>Enterprise RAG & APIs</span>
                  <span className="text-volt opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-text mb-5 flex items-center gap-2">
              <span>Company</span>
              <div className="w-6 h-0.5 bg-cyber-teal/60" />
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-text-muted font-medium">
              <li>
                <a href="#work" className="hover:text-volt transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#process" className="hover:text-volt transition-colors">Sprint Cycle</a>
              </li>
              <li>
                <a href="#engage" className="hover:text-volt transition-colors">Pricing Models</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-volt transition-colors">Client FAQ</a>
              </li>
              <li>
                <Link href="/p/about" className="hover:text-volt transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/p/privacy" className="hover:text-volt transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Target Regions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-text mb-5 flex items-center gap-2">
              <span>Target Markets</span>
              <Globe className="w-3.5 h-3.5 text-volt" />
            </h4>
            <ul className="space-y-2.5 text-xs text-text-muted font-medium">
              <li className="flex items-center gap-2">
                <span className="text-sm">🇺🇸</span>
                <span>United States</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🇬🇧</span>
                <span>United Kingdom</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🇨🇦</span>
                <span>Canada</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🇦🇪</span>
                <span>United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm">🇦🇺</span>
                <span>Australia / NZ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-text-faint">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Autoniex. All intellectual property & source code reserved.</p>
            <span className="hidden sm:inline text-line">•</span>
            <Link href="/p/privacy" className="hover:text-volt transition-colors">
              Data Governance & Security
            </Link>
          </div>

          <div>
            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-surface hover:border-volt hover:text-volt text-text font-bold transition-all shadow-sm group"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
