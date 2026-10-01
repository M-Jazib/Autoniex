'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Plus, Play, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import { PortfolioItem, ProjectCategory } from '@/types';
import { useSiteContent } from '@/context/SiteContext';
import PortfolioModal from './PortfolioModal';
import PortfolioUploader from './PortfolioUploader';

/* ─── Auto-rotating Featured Slide ─── */
function FeaturedSlider({ projects, onSelect }: { projects: PortfolioItem[]; onSelect: (p: PortfolioItem) => void }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const featured = projects.slice(0, 5); // show top 5 as featured

  function goTo(idx: number) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  }

  function next() { goTo((current + 1) % featured.length); }
  function prev() { goTo((current - 1 + featured.length) % featured.length); }

  useEffect(() => {
    if (paused || featured.length <= 1) return;
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % featured.length);
    }, 3000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, featured.length]);

  if (featured.length === 0) return null;

  const slide = featured[current];

  const catColors: Record<string, string> = {
    automation: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    agents: 'bg-volt/20 text-volt border-volt/40',
    websites: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    marketing: 'bg-orange-400/20 text-orange-300 border-orange-400/40',
    all: 'bg-surface text-text-muted border-line',
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-surface border border-line shadow-2xl mb-14 group"
      style={{ minHeight: 380 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
      >
        <Image
          src={slide.image}
          alt={slide.alt || slide.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className={`relative z-10 p-8 md:p-12 flex flex-col justify-end h-full transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`} style={{ minHeight: 380 }}>
        <div className="max-w-xl">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${catColors[slide.cat] ?? catColors.all}`}>
              {slide.cat}
            </span>
            {slide.client && (
              <span className="px-3 py-1 rounded-full bg-black/50 text-white/70 text-[11px] font-semibold border border-white/10">
                {slide.client}
              </span>
            )}
            {slide.video && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-volt text-volt-ink text-[10px] font-extrabold uppercase shadow-neon">
                <Play className="w-2.5 h-2.5 fill-current" /> Video
              </span>
            )}
          </div>

          <h3 className="font-display font-bold text-2xl md:text-3xl text-text mb-2">{slide.title}</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">{slide.blurb}</p>

          {slide.metrics && (
            <div className="inline-block px-4 py-2 bg-volt/10 border border-volt/30 rounded-xl text-xs font-bold text-volt mb-5">
              📈 {slide.metrics}
            </div>
          )}

          <button
            onClick={() => onSelect(slide)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon hover:scale-105 transition-transform"
          >
            View Case Study <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute right-6 bottom-6 flex items-center gap-2 z-20">
        {/* Dot indicators */}
        <div className="flex gap-1.5 mr-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-volt' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-black/50 backdrop-blur border border-white/20 text-white hover:border-volt hover:text-volt flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-black/50 backdrop-blur border border-white/20 text-white hover:border-volt hover:text-volt flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => setPaused(p => !p)}
          className="w-9 h-9 rounded-full bg-black/50 backdrop-blur border border-white/20 text-white hover:border-volt hover:text-volt flex items-center justify-center transition-all"
          title={paused ? 'Resume slideshow' : 'Pause slideshow'}
        >
          {paused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Auto-progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <div
            key={current}
            className="h-full bg-volt progress-animate origin-left"
          />
        </div>
      )}


    </div>
  );
}

/* ─── Portfolio Card ─── */
function PortfolioCard({ project, onClick }: { project: PortfolioItem; onClick: () => void }) {
  const catColors: Record<string, string> = {
    automation: 'text-teal-400',
    agents: 'text-volt',
    websites: 'text-blue-400',
    marketing: 'text-orange-400',
    all: 'text-text-muted',
  };

  return (
    <article
      onClick={onClick}
      className="group cursor-pointer rounded-2xl bg-surface border border-line hover:border-volt/60 overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(198,245,46,0.12)] flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        <Image
          src={project.image}
          alt={project.alt || project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-90" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
            {project.cat}
          </span>
          {project.video && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-volt text-volt-ink text-[10px] font-extrabold uppercase shadow-sm">
              <Play className="w-2.5 h-2.5 fill-current" /> Video
            </span>
          )}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-volt/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="w-12 h-12 rounded-full bg-volt/20 backdrop-blur border border-volt/40 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
            <ArrowUpRight className="w-5 h-5 text-volt" />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {project.client && (
          <p className={`text-[11px] font-bold uppercase tracking-wider mb-1.5 ${catColors[project.cat] ?? 'text-text-muted'}`}>
            {project.client}
          </p>
        )}
        <h3 className="font-display font-bold text-lg text-text group-hover:text-volt transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-3 flex-1">
          {project.blurb}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line/60">
          {project.stack.slice(0, 3).map((st, i) => (
            <span key={i} className="text-[10px] font-semibold text-text-muted bg-bg px-2 py-0.5 rounded border border-line">
              {st}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-[10px] font-semibold text-volt px-1 py-0.5">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center justify-between text-xs font-bold text-volt">
        <span>View Case Study</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </article>
  );
}

/* ─── Main Portfolio Section ─── */
export default function Portfolio() {
  const { portfolio, addProject } = useSiteContent();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Automation', value: 'automation' },
    { label: 'AI Agents', value: 'agents' },
    { label: 'Websites & Apps', value: 'websites' },
    { label: 'Growth Marketing', value: 'marketing' },
  ];

  const filteredProjects = portfolio.filter(p =>
    activeCategory === 'all' ? true : p.cat === activeCategory
  );

  return (
    <section id="work" className="py-24 bg-bg-soft/60 border-y border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-volt font-display font-bold text-xs uppercase tracking-widest mb-3">
              <span>02 · Proof of Work</span>
              <div className="w-12 h-0.5 bg-volt/50" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight">
              Selected Systems Shipped & Deployed
            </h2>
            <p className="mt-3 text-base text-text-muted">
              Real production automations, multi-agent deployments, and web architectures engineered for tier-1 North American and European businesses.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsUploaderOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface border border-line hover:border-volt text-volt hover:bg-volt/10 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              Add Project
            </button>
          </div>
        </div>

        {/* ── Featured Auto Slideshow ── */}
        <FeaturedSlider projects={portfolio} onSelect={setSelectedProject} />

        {/* Category Filters */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {categories.map(tab => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveCategory(tab.value)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold font-display uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-volt text-volt-ink shadow-neon scale-105'
                    : 'bg-surface/80 text-text-muted hover:text-text border border-line hover:border-text-faint'
                }`}
                role="tab"
                aria-selected={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <PortfolioUploader
        isOpen={isUploaderOpen}
        onClose={() => setIsUploaderOpen(false)}
        onAddProject={addProject}
      />
    </section>
  );
}
