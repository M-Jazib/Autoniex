'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Plus, Video, Play, Sparkles } from 'lucide-react';
import { PortfolioItem, ProjectCategory } from '@/types';
import { useSiteContent } from '@/context/SiteContext';
import PortfolioModal from './PortfolioModal';
import PortfolioUploader from './PortfolioUploader';

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

  const filteredProjects = portfolio.filter((p) =>
    activeCategory === 'all' ? true : p.cat === activeCategory
  );

  return (
    <section id="work" className="py-24 bg-bg-soft/60 border-y border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Top Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-volt font-display font-bold text-xs uppercase tracking-widest mb-3">
              <span>02 · Proof of Work</span>
              <div className="w-12 h-0.5 bg-volt/50" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text leading-tight">
              Selected Systems Shipped &amp; Deployed
            </h2>
            <p className="mt-3 text-base text-text-muted">
              Explore real production automations, multi-agent deployments, and web architectures engineered for tier-1 North American and European businesses.
            </p>
          </div>

          {/* Add / Upload Project Button */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsUploaderOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface border border-line hover:border-volt text-volt hover:bg-volt/10 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              <span>Add / Upload Project</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {categories.map((tab) => {
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

        {/* Portfolio 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-surface border border-line hover:border-volt/60 overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Card Media Preview */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  <Image
                    src={project.image}
                    alt={project.alt || project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                      {project.cat}
                    </span>
                    {project.video && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-volt text-volt-ink text-[10px] font-extrabold uppercase shadow-sm">
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Video</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {project.client && (
                    <p className="text-[11px] font-bold uppercase tracking-wider text-text-faint mb-1.5">
                      {project.client}
                    </p>
                  )}
                  <h3 className="font-display font-bold text-xl text-text group-hover:text-volt transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed mb-4">
                    {project.blurb}
                  </p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line/60">
                    {project.stack.slice(0, 3).map((st, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-text-muted bg-bg px-2 py-0.5 rounded border border-line"
                      >
                        {st}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-[10px] font-semibold text-volt px-1 py-0.5">
                        +{project.stack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-volt">
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Add New Project Uploader Modal */}
      <PortfolioUploader
        isOpen={isUploaderOpen}
        onClose={() => setIsUploaderOpen(false)}
        onAddProject={addProject}
      />
    </section>
  );
}
