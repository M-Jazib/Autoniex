'use client';

import React, { useState } from 'react';
import { Cpu, Bot, Layout, Rocket, ArrowRight, Check } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';

export default function Services() {
  const { services } = useSiteContent();
  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cpu':
        return <Cpu className="w-8 h-8 text-volt" />;
      case 'bot':
        return <Bot className="w-8 h-8 text-cyber-teal" />;
      case 'layout':
        return <Layout className="w-8 h-8 text-volt" />;
      case 'rocket':
        return <Rocket className="w-8 h-8 text-cyber-orange" />;
      default:
        return <Cpu className="w-8 h-8 text-volt" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-volt/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyber-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-volt font-display font-bold text-xs uppercase tracking-widest mb-3">
            <span>01 · Capabilities</span>
            <div className="w-12 h-0.5 bg-volt/50" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight mb-4">
            Engineered for Revenue &amp; Autonomous Efficiency
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            We don&apos;t build vanity toys. Every automation, intelligent agent, and website we deploy is built to eliminate payroll overhead, capture lost revenue, and run 24/7.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => {
            const pos = mousePos[svc.num] || { x: 0, y: 0 };
            return (
              <div
                key={svc.num}
                onMouseMove={(e) => handleMouseMove(e, svc.num)}
                className="spotlight-card group p-8 sm:p-10 flex flex-col justify-between bg-surface"
                style={{
                  backgroundImage: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(var(--color-volt), 0.09), transparent 45%)`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-2xl bg-bg border border-line shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {getIcon(svc.icon)}
                    </div>
                    <span className="font-display font-extrabold text-2xl text-text-faint/50 group-hover:text-volt/60 transition-colors">
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-text mb-2 group-hover:text-volt transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-volt font-semibold text-sm mb-4">
                    {svc.kicker}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <ul className="space-y-3 mb-8 pt-6 border-t border-line/60">
                    {svc.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-text">
                        <span className="p-0.5 rounded-full bg-volt/10 text-volt mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold font-display uppercase tracking-wider text-volt hover:text-text group-hover:translate-x-1 transition-all"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
