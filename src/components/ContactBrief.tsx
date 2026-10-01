'use client';

import React, { useState, useEffect } from 'react';
import { Send, Copy, Check, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSiteContent } from '@/context/SiteContext';

export default function ContactBrief() {
  const { settings } = useSiteContent();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Automation');
  const [budget, setBudget] = useState('$5k – $15k');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Listen for plan selection event from EngageModels
  useEffect(() => {
    const handleSelectPlan = (e: any) => {
      if (e.detail) {
        if (e.detail === 'Retainer') setBudget('Monthly Retainer');
        if (e.detail === 'Project') setBudget('$5k – $15k');
        if (e.detail === 'Partner') setBudget('$15k+');
        setStatusMsg(`Selected plan: ${e.detail}. Please fill in your brief below.`);
      }
    };
    window.addEventListener('select-plan', handleSelectPlan);
    return () => window.removeEventListener('select-plan', handleSelectPlan);
  }, []);

  const handleCopy = () => {
    const text = `AUTONIEX INQUIRY BRIEF
Name: ${name || 'N/A'}
Email: ${email || 'N/A'}
Service: ${service}
Budget: ${budget}
Details: ${details || 'N/A'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setStatusMsg('✓ Brief copied to clipboard! You can paste it into email or Slack.');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fire celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#c6f52e', '#4fe0c0', '#ffffff'],
    });

    const targetEmail = settings.contactEmail || 'info@autoniex.com';
    const subject = encodeURIComponent(`New Project Inquiry from ${name || 'Prospective Client'} (${service})`);
    const body = encodeURIComponent(
      `Hello Autoniex Team,\n\nName: ${name}\nEmail: ${email}\nRequired Service: ${service}\nTarget Budget: ${budget}\n\nProject Scope & Goals:\n${details}\n\nLooking forward to your architecture proposal.`
    );

    setStatusMsg('🚀 Preparing your brief... Opening your email client now!');

    setTimeout(() => {
      window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-bg-soft/90 border-t border-line relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-volt/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyber-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Value Proposition & Step Timeline */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-volt font-display font-bold text-xs uppercase tracking-widest mb-3">
                <span>06 · Initiate</span>
                <div className="w-12 h-0.5 bg-volt/50" />
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight mb-4">
                Let&apos;s Build Your Digital Machine
              </h2>

              <p className="text-base text-text-muted leading-relaxed mb-8">
                Tell us where your bottleneck lies — manual followups, lost leads, or an outdated website. We&apos;ll formulate an actionable engineering plan within 24 hours.
              </p>

              {/* 3 Step Roadmap */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-volt/30 text-volt font-display font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    01
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-text">Send Your Brief</h4>
                    <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                      Takes 2 minutes. Specify what your company does and what needs automation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-cyber-teal/30 text-cyber-teal font-display font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    02
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-text">24-Hour Review</h4>
                    <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                      Our lead technical team analyzes your stack and responds with targeted questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-volt/30 text-volt font-display font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    03
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-text">Guaranteed Fixed Proposal</h4>
                    <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                      You receive a concrete scope, deliverables checklist, fixed price, and sprint calendar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Line */}
            <div className="p-6 rounded-2xl bg-surface border border-line flex items-center gap-4">
              <div className="p-3 rounded-xl bg-volt/10 text-volt border border-volt/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-semibold">Direct executive inbox:</p>
                <a
                  href={`mailto:${settings.contactEmail || 'info@autoniex.com'}`}
                  className="font-display font-bold text-base text-text hover:text-volt transition-colors"
                >
                  {settings.contactEmail || 'info@autoniex.com'}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface border border-line p-8 sm:p-10 shadow-2xl relative">
              <h3 className="font-display font-bold text-2xl text-text mb-6 flex items-center gap-2">
                <span>Interactive Project Brief</span>
                <Sparkles className="w-5 h-5 text-volt" />
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Cooper"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors"
                    />
                  </div>
                </div>

                {/* Service Required & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                      Solution Focus
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors"
                    >
                      <option>Workflow Automation</option>
                      <option>Custom AI Agent</option>
                      <option>High-Performance Website</option>
                      <option>Growth &amp; Marketing Engine</option>
                      <option>Full Architecture Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                      Target Budget (USD / GBP)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors"
                    >
                      <option>Under $2,500</option>
                      <option>$2,500 – $5,000</option>
                      <option>$5k – $15k</option>
                      <option>$15k+</option>
                      <option>Monthly Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                    Project Goals &amp; Problem Overview *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what your business does, which tools you use (CRM, payment, database), and what manual tasks you wish ran on autopilot..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors resize-none"
                  />
                </div>

                {/* Status Message */}
                {statusMsg && (
                  <p className="text-xs font-bold text-volt p-3 rounded-xl bg-volt/10 border border-volt/20">
                    {statusMsg}
                  </p>
                )}

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon hover:bg-volt-hover hover:scale-105 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Autoniex</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-bg hover:bg-surface border border-line text-text text-xs font-bold font-display uppercase tracking-wider transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-volt" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Brief'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
