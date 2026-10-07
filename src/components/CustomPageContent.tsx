'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';

function renderContent(raw: string) {
  const lines = raw.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-display font-bold text-2xl sm:text-3xl text-text mt-10 mb-4 border-b border-line pb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-display font-bold text-xl text-text mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-bold text-text text-base mt-5 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (/^\*\*\d+\./.test(line)) {
      // **1. Title** style
      const cleaned = line.replace(/\*\*/g, '');
      elements.push(
        <p key={i} className="font-bold text-text text-base mt-6 mb-1">
          {cleaned}
        </p>
      );
    } else if (line.match(/^\d+\.\s\*\*/)) {
      // numbered list with bold: 1. **Bold** text
      const cleaned = line.replace(/\*\*(.*?)\*\*/g, '$1');
      elements.push(
        <li key={i} className="text-text-muted text-sm sm:text-base leading-relaxed ml-4 list-decimal">
          <span className="font-semibold text-text">{cleaned.split(':')[0].replace(/^\d+\.\s/, '')}</span>
          {cleaned.includes(':') ? ': ' + cleaned.split(':').slice(1).join(':') : ''}
        </li>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-text-muted text-sm sm:text-base leading-relaxed ml-4 list-disc">
          {renderInline(line.slice(2))}
        </li>
      );
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-text-muted text-sm sm:text-base leading-relaxed">
          {renderInline(line)}
        </p>
      );
    }
    i++;
  }
  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Handle **bold** inline
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, idx) =>
    idx % 2 === 1 ? <strong key={idx} className="text-text font-semibold">{part}</strong> : part
  );
}

export default function CustomPageContent({ slug }: { slug: string }) {
  const { customPages } = useSiteContent();

  const page = customPages.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h1 className="font-display font-bold text-3xl text-text mb-4">Page Not Found</h1>
        <p className="text-text-muted mb-8 text-sm">
          The requested page <span className="font-mono text-volt">/p/{slug}</span> does not exist or has been unpublished.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase shadow-neon"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-volt transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Autoniex</span>
        </Link>
      </div>

      {/* Header */}
      <div className="pb-10 border-b border-line mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-volt/10 text-volt text-[11px] font-bold uppercase tracking-wider mb-6 border border-volt/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Autoniex</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-text leading-tight mb-5">
          {page.title}
        </h1>
        {page.subtitle && (
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed font-medium">
            {page.subtitle}
          </p>
        )}
      </div>

      {/* Content Body */}
      <div className="space-y-2">
        {renderContent(page.content)}
      </div>

      {/* CTA at bottom */}
      <div className="mt-16 pt-10 border-t border-line">
        <div className="bg-surface rounded-2xl border border-line p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-lg text-text mb-1">Ready to talk?</p>
            <p className="text-sm text-text-muted">Tell us what you need. We'll give you a straight answer.</p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-volt text-volt-ink font-display font-bold text-sm px-6 py-3 rounded-full shadow-neon hover:scale-105 transition-all whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
