'use client';

import React, { useState } from 'react';
import { Plus, HelpCircle } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';

export default function FAQ() {
  const { faqs } = useSiteContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-volt font-display font-bold text-xs uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>05 · Clarity</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight mb-4">
            Frequently Answered Questions
          </h2>
          <p className="text-base text-text-muted">
            Everything ambitious founders and operations executives ask before we initiate architecture and sprint planning.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-surface border-volt/50 shadow-md'
                    : 'bg-surface/60 border-line hover:border-line-glow'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-text">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-line flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-volt text-volt-ink border-volt' : 'text-volt bg-bg'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-line/40 pt-4 animate-in fade-in-50 duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center text-xs sm:text-sm text-text-muted">
          Have an unconventional architecture or legacy stack?{' '}
          <a href="#contact" className="text-volt font-bold underline hover:text-text transition-colors">
            Ask our lead engineers directly →
          </a>
        </div>
      </div>
    </section>
  );
}
