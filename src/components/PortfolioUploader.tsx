'use client';

import React, { useState } from 'react';
import { X, Upload, Plus, Image as ImageIcon, Check } from 'lucide-react';
import { PortfolioItem } from '@/types';

interface PortfolioUploaderProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (newProject: PortfolioItem) => void;
}

export default function PortfolioUploader({ isOpen, onClose, onAddProject }: PortfolioUploaderProps) {
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState<'automation' | 'agents' | 'websites' | 'marketing'>('automation');
  const [client, setClient] = useState('');
  const [metrics, setMetrics] = useState('');
  const [blurb, setBlurb] = useState('');
  const [builtText, setBuiltText] = useState('');
  const [stackText, setStackText] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image file is larger than 5MB. Please choose a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setError('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please provide a project title.');
      return;
    }
    if (!blurb.trim()) {
      setError('Please provide a brief description.');
      return;
    }

    const defaultImage = imagePreview || '/images/nova-crm.jpg';

    const builtArray = builtText
      ? builtText.split('\n').map((s) => s.trim()).filter(Boolean)
      : ['Custom solution architecture', 'Full-stack deployment and integration', 'Continuous monitoring'];

    const stackArray = stackText
      ? stackText.split(',').map((s) => s.trim()).filter(Boolean)
      : ['AI Engine', 'Next.js', 'Automation API'];

    const newProject: PortfolioItem = {
      id: `custom-proj-${Date.now()}`,
      title: title.trim(),
      cat,
      image: defaultImage,
      alt: title.trim(),
      blurb: blurb.trim(),
      built: builtArray,
      stack: stackArray,
      sample: false,
      video: videoUrl.trim(),
      client: client.trim() || 'Global Enterprise Client',
      metrics: metrics.trim() || 'Deployed in Production'
    };

    onAddProject(newProject);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      // Reset form
      setTitle('');
      setBlurb('');
      setClient('');
      setMetrics('');
      setBuiltText('');
      setStackText('');
      setVideoUrl('');
      setImagePreview('');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} aria-hidden="true" />

      {/* Upload Dialog Card */}
      <div className="relative w-full max-w-2xl bg-surface border border-line rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-line text-text hover:text-volt hover:border-volt transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-volt/10 text-volt border border-volt/20">
            <Plus className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-text">
              Upload / Add New Project
            </h3>
            <p className="text-xs sm:text-sm text-text-muted">
              Add case studies directly to your Autoniex portfolio. Saved to live showcase!
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3.5 mb-5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3.5 mb-5 rounded-xl bg-volt/10 border border-volt/30 text-volt text-xs font-bold flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Project uploaded and published to portfolio successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload Area */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
              Project Screenshot / Cover Image
            </label>
            <div className="border-2 border-dashed border-line hover:border-volt/50 rounded-2xl p-6 text-center transition-colors bg-bg/50 relative">
              {imagePreview ? (
                <div className="flex flex-col items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-h-48 rounded-xl object-cover border border-line shadow-md"
                  />
                  <label className="cursor-pointer text-xs font-bold text-volt hover:underline">
                    Change Image
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                </div>
              ) : (
                <label className="cursor-pointer flex flex-col items-center justify-center gap-2">
                  <div className="p-3 rounded-full bg-surface border border-line text-text-muted">
                    <Upload className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-text">
                    Click to upload project cover image
                  </span>
                  <span className="text-[11px] text-text-faint">
                    Supports PNG, JPG, WebP up to 5MB
                  </span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              )}
            </div>
          </div>

          {/* Title & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Project Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Nexus AI Pipeline"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Category
              </label>
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value as any)}
                className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
              >
                <option value="automation">Automation System</option>
                <option value="agents">AI Agent</option>
                <option value="websites">Website / Web App</option>
                <option value="marketing">Growth Marketing</option>
              </select>
            </div>
          </div>

          {/* Client & Metric */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Client / Location
              </label>
              <input
                type="text"
                placeholder="e.g. Horizon Labs (London, UK)"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Key Result / Metric
              </label>
              <input
                type="text"
                placeholder="e.g. +310% lead conversion in 30 days"
                value={metrics}
                onChange={(e) => setMetrics(e.target.value)}
                className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
              />
            </div>
          </div>

          {/* Blurb */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
              Project Description / Blurb *
            </label>
            <textarea
              required
              rows={3}
              placeholder="What problem did this project solve and how does the system operate?"
              value={blurb}
              onChange={(e) => setBlurb(e.target.value)}
              className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt resize-none"
            />
          </div>

          {/* Deliverables */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
              Key Deliverables (one per line)
            </label>
            <textarea
              rows={3}
              placeholder="Lead capture & qualification&#10;Instant SMS & WhatsApp followups&#10;Live analytics dashboard"
              value={builtText}
              onChange={(e) => setBuiltText(e.target.value)}
              className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt resize-none"
            />
          </div>

          {/* Tech Stack & Video */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Tech Stack (comma separated)
              </label>
              <input
                type="text"
                placeholder="Next.js, Python, OpenAI, Stripe"
                value={stackText}
                onChange={(e) => setStackText(e.target.value)}
                className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                YouTube Video URL (optional)
              </label>
              <input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-line">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-line text-xs font-bold text-text-muted hover:text-text transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon hover:bg-volt-hover transition-colors"
            >
              Publish Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
