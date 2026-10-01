'use client';

import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';

export default function EngageModels() {
  const { plans } = useSiteContent();

  const handleSelectPlan = (planName: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to preselect plan in contact form
      window.dispatchEvent(new CustomEvent('select-plan', { detail: planName }));
    }
  };

  return (
    <section id="engage" className="py-24 bg-bg-soft/70 border-t border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-volt font-display font-bold text-xs uppercase tracking-widest mb-3">
            <span>04 · Partnership</span>
            <div className="w-12 h-0.5 bg-volt/50" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight mb-4">
            Transparent Engagement Models
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            No ambiguous hourly billing black holes. Choose the structure that aligns with your operational cadence — every relationship starts with a complimentary scoping session.
          </p>
        </div>

        {/* Pricing / Engagement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-surface border-2 border-volt shadow-neon-lg -translate-y-2'
                  : 'bg-surface/80 border border-line hover:border-volt/50 shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-volt text-volt-ink font-display font-bold text-[11px] uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                <h3 className="font-display font-bold text-2xl text-text mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm font-semibold text-volt mb-4">
                  {plan.kicker}
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8">
                  {plan.desc}
                </p>

                <ul className="space-y-3.5 mb-8 pt-6 border-t border-line">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text font-medium">
                      <span className="p-0.5 rounded-full bg-volt/15 text-volt mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-volt text-volt-ink hover:bg-volt-hover shadow-neon hover:scale-[1.02]'
                      : 'bg-bg hover:bg-volt hover:text-volt-ink text-text border border-line hover:border-volt'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
