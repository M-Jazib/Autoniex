'use client';

import React from 'react';
import Image from 'next/image';
import { X, CheckCircle, ExternalLink, Play, Layers } from 'lucide-react';
import { PortfolioItem } from '@/types';

interface PortfolioModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  if (!project) return null;

  // Extract YouTube video ID if provided
  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?[^#\s]*v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=0` : null;
  };

  const embedUrl = getYouTubeEmbedUrl(project.video);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-surface border border-line rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-bg/80 border border-line text-text hover:text-volt hover:border-volt flex items-center justify-center transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8">
          {/* Header & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full bg-volt/10 text-volt text-xs font-bold uppercase tracking-wider border border-volt/25">
                {project.cat}
              </span>
              {project.client && (
                <span className="text-xs font-semibold text-text-muted">
                  Client: {project.client}
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text">
              {project.title}
            </h3>
            {project.metrics && (
              <p className="mt-2 text-sm sm:text-base font-semibold text-cyber-teal">
                Key Result: {project.metrics}
              </p>
            )}
          </div>

          {/* Media Section: Video Embed or Image */}
          {embedUrl ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line bg-black">
              <iframe
                src={embedUrl}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line bg-surface-2">
              <Image
                src={project.image}
                alt={project.alt || project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-faint mb-2">
              Executive Summary
            </h4>
            <p className="text-base text-text leading-relaxed">
              {project.blurb}
            </p>
          </div>

          {/* Deliverables & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-line">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-volt mb-4">
                <CheckCircle className="w-4 h-4" />
                <span>What We Engineered</span>
              </h4>
              <ul className="space-y-3">
                {project.built.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text font-medium">
                    <span className="text-volt font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyber-teal mb-4">
                <Layers className="w-4 h-4" />
                <span>Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg border border-line bg-bg text-xs font-semibold text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-neon hover:bg-volt-hover transition-colors"
            >
              Discuss Similar Build For Your Business
            </a>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-text-muted hover:text-text"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
