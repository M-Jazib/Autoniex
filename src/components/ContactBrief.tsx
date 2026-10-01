'use client';

import React, { useState, useEffect } from 'react';
import { Send, Copy, Check, Mail, Sparkles, Phone, Building2, CheckCircle2, Clock, ShieldCheck, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSiteContent } from '@/context/SiteContext';

const SOLUTIONS = [
  { id: 'automation', label: '⚡ Workflow Automation' },
  { id: 'agents', label: '🤖 Custom AI Agent' },
  { id: 'websites', label: '🌐 High-Speed Website' },
  { id: 'marketing', label: '🚀 Growth & Marketing' },
  { id: 'fullsuite', label: '🏛️ Enterprise Full-Suite' },
];

const BUDGETS = [
  'Under $5,000',
  '$5k – $15k',
  '$15k – $30k',
  '$30k+',
  'Monthly Retainer',
];

export default function ContactBrief() {
  const { settings } = useSiteContent();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('⚡ Workflow Automation');
  const [budget, setBudget] = useState('$5k – $15k');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const contactEmail = settings.contactEmail || 'info@autoniex.com';

  // Listen for plan selection event from EngageModels
  useEffect(() => {
    const handleSelectPlan = (e: any) => {
      if (e.detail) {
        if (e.detail === 'Retainer') setBudget('Monthly Retainer');
        if (e.detail === 'Project') setBudget('$5k – $15k');
        if (e.detail === 'Partner') setBudget('$30k+');
        setStatusMsg(`Pre-selected plan: ${e.detail}. Please complete your project details below.`);
      }
    };
    window.addEventListener('select-plan', handleSelectPlan);
    return () => window.removeEventListener('select-plan', handleSelectPlan);
  }, []);

  const handleCopy = () => {
    const text = `AUTONIEX INQUIRY BRIEF
-------------------------------------
Name: ${name || 'N/A'}
Business Email: ${email || 'N/A'}
Company / Brand: ${company || 'N/A'}
Phone / WhatsApp: ${phone || 'N/A'}
Selected Solution: ${service}
Budget Allocation: ${budget}
Project Overview: ${details || 'N/A'}
-------------------------------------`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setStatusMsg('✓ Brief copied to clipboard! You can also paste it directly into an email or Slack.');
    setTimeout(() => setCopied(false), 3500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');
    setIsError(false);

    try {
      // Direct FormSubmit AJAX Endpoint configured to deliver straight to info@autoniex.com
      const res = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Autoniex Project Inquiry from ${name} (${company || 'Enterprise Lead'})`,
          _template: 'table',
          _captcha: 'false',
          name: name,
          email: email,
          company: company || 'Not Specified',
          phone: phone || 'Not Specified',
          service: service,
          budget: budget,
          project_details: details,
          submission_time: new Date().toLocaleString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        // Celebration confetti!
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#c6f52e', '#4fe0c0', '#ffffff'],
        });
        setStatusMsg(`✓ Thank you ${name}! Your brief has been dispatched to ${contactEmail}. Our engineering director will review your requirements and respond within 24 hours.`);
      } else {
        throw new Error('Direct endpoint returned status ' + res.status);
      }
    } catch (err) {
      // Graceful fallback to mailto if user's network or ad blocker stops the external request
      setIsError(true);
      const subject = encodeURIComponent(`New Project Inquiry from ${name} (${service})`);
      const body = encodeURIComponent(
        `Hello Autoniex Team,\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nSolution: ${service}\nBudget: ${budget}\n\nProject Scope:\n${details}`
      );
      setStatusMsg(`Notice: Opening your email client to send directly to ${contactEmail}...`);
      setTimeout(() => {
        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      }, 900);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-soft/90 border-t border-line relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-volt/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyber-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Roadmap, Assurance & Contacts */}
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
                Tell us where your bottleneck lies — manual followups, lead leakage, or an outdated platform. We formulate an actionable architecture blueprint within 24 hours.
              </p>

              {/* 3 Step Roadmap */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-volt/30 text-volt font-display font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    01
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-text">Submit Your Brief</h4>
                    <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                      Takes 2 minutes. Select your required capability, target budget, and core objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-cyber-teal/30 text-cyber-teal font-display font-bold flex items-center justify-center flex-shrink-0 shadow-sm">
                    02
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-text">24-Hour Architectural Review</h4>
                    <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                      Our lead engineers analyze your tech stack and formulate targeted implementation answers.
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
                      Receive an exact deliverables checklist, fixed scope price, and weekly sprint calendar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channel Box */}
            <div className="p-6 rounded-2xl bg-surface border border-line space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-volt/10 text-volt border border-volt/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-text-muted font-bold uppercase tracking-wider">Direct Inbox Delivery</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-display font-bold text-base text-text hover:text-volt transition-colors"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-line/60 flex items-center gap-4 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-volt" />
                  <span>SLA Response: &lt; 24h</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyber-teal" />
                  <span>NDA Protected</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface border border-line p-8 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
                <div>
                  <h3 className="font-display font-bold text-2xl text-text flex items-center gap-2">
                    <span>Interactive Scoping Brief</span>
                    <Sparkles className="w-5 h-5 text-volt" />
                  </h3>
                  <p className="text-xs text-text-muted mt-1">
                    Delivered directly to {contactEmail} with automated receipt tracking.
                  </p>
                </div>
              </div>

              {submitted ? (
                /* Post-Submission Success State */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-volt/15 border-2 border-volt text-volt mx-auto flex items-center justify-center shadow-neon">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl text-text">Inquiry Dispatched!</h4>
                    <p className="text-sm text-text-muted max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you for detailing your project. Our technical directors are reviewing your requirements and will reach out to <strong className="text-text">{email}</strong> within 24 hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-line bg-surface-2 hover:border-volt text-xs font-bold text-text-muted hover:text-text transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* The Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexander Vance"
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
                        placeholder="alexander@enterprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone / WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-volt" />
                        <span>Company / Organization</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vanguard Logistics"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-cyber-teal" />
                        <span>Phone / WhatsApp (Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interactive Solution Selector Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2.5">
                      Required Capability *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SOLUTIONS.map((s) => {
                        const isSelected = service === s.label;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setService(s.label)}
                            className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all duration-200 border ${
                              isSelected
                                ? 'bg-volt text-volt-ink border-volt shadow-neon scale-[1.02]'
                                : 'bg-bg text-text-muted hover:text-text border-line hover:border-volt/40'
                            }`}
                          >
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive Budget Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2.5">
                      Target Budget Allocation (USD / GBP) *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => {
                        const isSelected = budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudget(b)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                              isSelected
                                ? 'bg-volt text-volt-ink border-volt shadow-neon scale-105'
                                : 'bg-bg text-text-muted hover:text-text border-line hover:border-volt/40'
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                      Project Goals &amp; Operational Bottlenecks *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what your business does, your existing software stack (HubSpot, Stripe, Slack, etc.), and what manual tasks or conversions you want to scale..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt transition-colors resize-none"
                    />
                  </div>

                  {/* Status Banner */}
                  {statusMsg && (
                    <div
                      className={`p-3.5 rounded-xl text-xs font-bold border ${
                        isError
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-volt/10 text-volt border-volt/30'
                      }`}
                    >
                      {statusMsg}
                    </div>
                  )}

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon hover:bg-volt-hover hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting to {contactEmail}...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Brief to {contactEmail}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-bg hover:bg-surface border border-line text-text text-xs font-bold font-display uppercase tracking-wider transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-volt" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Brief'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
