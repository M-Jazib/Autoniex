import React from 'react';
import { Search, Compass, Cpu, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Scope',
      timeline: 'Week 1',
      desc: 'A collaborative working session to audit your workflows, identify high-ROI friction points, and deliver a fixed-scope technical blueprint with zero surprise billing.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Architecture & Design',
      timeline: 'Week 2',
      desc: 'We map out custom LLM prompt chains, data schemas, API integration hooks, and high-fidelity UI wireframes for your review and approval before writing code.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Sprint Build & Testing',
      timeline: 'Weeks 3–4',
      desc: 'We construct, integrate, and stress-test your system in transparent weekly agile sprints. You receive live working Loom video updates every Friday.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Deployment & Scale',
      timeline: 'Ongoing',
      desc: 'Live production rollout, complete source code handover, staff training, and ongoing monthly proactive monitoring to ensure 99.9% uptime as you grow.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-volt font-display font-bold text-xs uppercase tracking-widest mb-3">
            <span>03 · Methodology</span>
            <div className="w-12 h-0.5 bg-volt/50" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight mb-4">
            From Scoping Call to Live Production
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            A battle-tested, high-velocity engineering sprint cycle. You always know what is being built, what is shipping next, and exactly what it costs.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="relative rounded-2xl bg-surface border border-line hover:border-volt/50 p-6 flex flex-col justify-between shadow-card hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-extrabold text-3xl text-text-faint/40 group-hover:text-volt transition-colors">
                      {st.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-volt/10 text-volt text-[11px] font-bold uppercase tracking-wider border border-volt/20">
                      {st.timeline}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-text mb-2 group-hover:text-volt transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-line/60 flex items-center gap-2 text-xs font-bold text-text-faint group-hover:text-text transition-colors">
                  <Icon className="w-4 h-4 text-volt" />
                  <span>Verified Sprint Milestone</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
