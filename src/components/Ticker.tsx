import React from 'react';

export default function Ticker() {
  const items = [
    'AI AGENTS & AUTOPILOTS',
    'NEXT.JS WEB APPLICATIONS',
    'WORKFLOW AUTOMATION',
    'B2B GROWTH ENGINES',
    '78% SUPPORT DEFLECTION',
    'ZERO MANUAL LEAD LAG',
    'NORTH AMERICA & UK COMPLIANT',
    'CUSTOM RAG ARCHITECTURES',
    'HIGH-CONVERTING FUNNELS'
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-line bg-bg-soft/80 py-4 backdrop-blur-md z-20">
      <div className="flex w-max animate-marquee">
        {/* Double the list for infinite seamless looping */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap px-6">
            <span className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-text-muted hover:text-text transition-colors">
              {item}
            </span>
            <span className="mx-6 text-volt font-black text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
