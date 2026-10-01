'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';

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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-text-muted hover:text-volt transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Autoniex</span>
        </Link>
      </div>

      {/* Header */}
      <div className="pb-8 border-b border-line mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-volt/10 text-volt text-[11px] font-bold uppercase tracking-wider mb-4 border border-volt/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Autoniex Page</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight mb-4">
          {page.title}
        </h1>
        {page.subtitle && (
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {page.subtitle}
          </p>
        )}
      </div>

      {/* Content Body */}
      <div className="prose prose-invert max-w-none text-text-muted leading-relaxed space-y-4 whitespace-pre-line text-sm sm:text-base">
        {page.content}
      </div>
    </article>
  );
}
