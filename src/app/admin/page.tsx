'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Lock,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  Check,
  Save,
  RefreshCw,
  Eye,
  FileText,
  Briefcase,
  HelpCircle,
  Layout,
  Settings,
  Video,
  Upload,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useSiteContent } from '@/context/SiteContext';
import { PortfolioItem, CustomPage } from '@/types';

export default function AdminPage() {
  const {
    portfolio,
    hero,
    services,
    plans,
    faqs,
    customPages,
    settings,
    addProject,
    updateProject,
    deleteProject,
    updateHero,
    updateServices,
    updatePlans,
    updateFaqs,
    addCustomPage,
    updateCustomPage,
    deleteCustomPage,
    updateSettings,
    resetToDefaults,
    exportDataJSON,
    importDataJSON,
  } = useSiteContent();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState('');

  // Active Tab: 'overview' | 'projects' | 'hero' | 'services' | 'plans' | 'faqs' | 'pages' | 'settings'
  const [activeTab, setActiveTab] = useState<string>('projects');
  const [toastMsg, setToastMsg] = useState('');

  // Edit Project Modal State
  const [editingProject, setEditingProject] = useState<PortfolioItem | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Edit Custom Page Modal State
  const [editingPage, setEditingPage] = useState<CustomPage | null>(null);
  const [isPageModalOpen, setIsPageModalOpen] = useState(false);

  // Realistic Preset Images
  const presetImages = [
    { label: 'Real CRM Dashboard', path: '/images/nova-crm.jpg' },
    { label: 'AI Copilot Chat Workstation', path: '/images/sage-agent.jpg' },
    { label: 'Dark Financial Analytics', path: '/images/pulse-analytics.jpg' },
    { label: 'Minimalist Storefront UI', path: '/images/bloom-storefront.jpg' },
    { label: 'Marketing Attribution Funnel', path: '/images/orbit-marketing.jpg' },
    { label: 'Fintech Automated Ledger', path: '/images/ledger-bot.jpg' },
  ];

  // Check session storage
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('autoniex_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin === settings.adminPin || enteredPin === 'autoniex2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('autoniex_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('Incorrect access password. Default is: autoniex2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('autoniex_admin_auth');
  };

  // --- Project Modal Handlers ---
  const handleOpenAddProject = () => {
    setEditingProject({
      id: `proj-${Date.now()}`,
      title: '',
      cat: 'automation',
      image: '/images/nova-crm.jpg',
      alt: '',
      blurb: '',
      built: ['Lead qualification & scoring', 'Automated instant followups', 'Real-time pipeline sync'],
      stack: ['Next.js', 'OpenAI', 'Python'],
      sample: false,
      video: '',
      client: '',
      metrics: '',
    });
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const exists = portfolio.find((p) => p.id === editingProject.id);
    if (exists) {
      updateProject(editingProject.id, editingProject);
      showToast('✓ Project updated successfully!');
    } else {
      addProject(editingProject);
      showToast('✓ New project added to portfolio!');
    }
    setIsProjectModalOpen(false);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingProject) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProject({ ...editingProject, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Custom Page Handlers ---
  const handleOpenAddPage = () => {
    setEditingPage({
      id: `page-${Date.now()}`,
      slug: '',
      title: '',
      subtitle: '',
      content: 'Write your custom page content here...',
      updatedAt: new Date().toISOString(),
    });
    setIsPageModalOpen(true);
  };

  const handleSavePage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPage) return;
    const cleanSlug = editingPage.slug.toLowerCase().trim().replace(/[^a-z0-9-_]/g, '-');
    const pageToSave = { ...editingPage, slug: cleanSlug, updatedAt: new Date().toISOString() };

    const exists = customPages.find((p) => p.id === pageToSave.id);
    if (exists) {
      updateCustomPage(pageToSave.id, pageToSave);
      showToast('✓ Custom page updated successfully!');
    } else {
      addCustomPage(pageToSave);
      showToast('✓ New custom page created!');
    }
    setIsPageModalOpen(false);
  };

  // If Not Authenticated, Show Secure Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl bg-surface border border-line p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-volt/10 blur-[60px] pointer-events-none" />

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-line flex items-center justify-center text-volt shadow-neon mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-display font-bold text-2xl text-text">
              Autoniex CMS Portal
            </h1>
            <p className="text-xs text-text-muted mt-1.5">
              Enter your executive access password to manage projects, edit site copy, and customize pages.
            </p>
          </div>

          {pinError && (
            <div className="p-3 mb-5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold text-center">
              {pinError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-1.5">
                Access Password / PIN
              </label>
              <input
                type="password"
                required
                placeholder="Enter password (default: autoniex2026)"
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                className="w-full bg-bg border border-line rounded-xl px-4 py-3.5 text-sm text-text focus:outline-none focus:border-volt transition-colors text-center font-mono tracking-widest"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon hover:bg-volt-hover transition-colors"
            >
              Authenticate &amp; Enter CMS
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-line text-xs text-text-faint">
            <Link href="/" className="hover:text-volt transition-colors inline-flex items-center gap-1">
              ← Return to public website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard UI
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col md:flex-row">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-volt text-volt-ink font-display font-bold text-xs shadow-neon-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
          <Check className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Admin Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-surface border-r border-line p-6 flex flex-col justify-between flex-shrink-0">
        <div>
          {/* Brand header */}
          <div className="flex items-center gap-3 pb-6 border-b border-line mb-6">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-line bg-bg">
              <Image src="/logo.webp" alt="Autoniex" fill className="object-cover" />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wider text-text">
                AUTONIEX
              </span>
              <span className="block text-[10px] text-volt font-bold uppercase tracking-wider">
                CMS Dashboard
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: 'projects', label: 'Projects & Work', icon: Briefcase, count: portfolio.length },
              { id: 'hero', label: 'Hero & Headlines', icon: Sparkles },
              { id: 'services', label: 'Services (4)', icon: Layers, count: services.length },
              { id: 'plans', label: 'Pricing Plans', icon: FileText, count: plans.length },
              { id: 'faqs', label: 'FAQ Manager', icon: HelpCircle, count: faqs.length },
              { id: 'pages', label: 'Custom Pages', icon: Layout, count: customPages.length },
              { id: 'settings', label: 'Agency Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-volt text-volt-ink shadow-neon font-display'
                      : 'text-text-muted hover:text-text hover:bg-surface-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isActive ? 'bg-volt-ink/20 text-volt-ink' : 'bg-bg text-text-muted'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-line space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-text-muted hover:text-volt hover:bg-surface-2 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>View Live Website</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content View */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto max-w-6xl">
        {/* ============================================================== */}
        {/* TAB 1: PROJECTS & PORTFOLIO MANAGER */}
        {/* ============================================================== */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
              <div>
                <h2 className="font-display font-bold text-2xl text-text">
                  Projects &amp; Case Studies
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  Add, edit, or delete portfolio projects. Add YouTube video links to embed video case studies!
                </p>
              </div>
              <button
                type="button"
                onClick={handleOpenAddProject}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon hover:bg-volt-hover transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Project Cards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-2xl bg-surface border border-line p-5 flex flex-col justify-between shadow-card hover:border-line-glow transition-all"
                >
                  <div>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-bg mb-4 border border-line">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 text-[10px] font-bold text-volt uppercase">
                        {proj.cat}
                      </span>
                      {proj.video && (
                        <span className="absolute top-2 right-2 p-1 rounded-full bg-volt text-volt-ink">
                          <Video className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-lg text-text mb-1">
                      {proj.title}
                    </h4>
                    <p className="text-[11px] text-text-faint font-semibold mb-2">
                      {proj.client || 'Client: Global Enterprise'}
                    </p>
                    <p className="text-xs text-text-muted line-clamp-2 mb-4">
                      {proj.blurb}
                    </p>

                    {proj.video && (
                      <p className="text-[11px] text-volt flex items-center gap-1 font-mono truncate mb-3">
                        <Video className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{proj.video}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-line flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProject({ ...proj });
                        setIsProjectModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-volt hover:underline"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Project</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${proj.title}"?`)) {
                          deleteProject(proj.id);
                          showToast('Project deleted.');
                        }
                      }}
                      className="p-2 rounded-lg text-text-faint hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: HERO & HEADLINES EDITOR */}
        {/* ============================================================== */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div className="pb-6 border-b border-line">
              <h2 className="font-display font-bold text-2xl text-text">
                Hero Section &amp; Headlines
              </h2>
              <p className="text-xs sm:text-sm text-text-muted">
                Customize the main banner text, value propositions, and badges shown to USA/UK clients.
              </p>
            </div>

            <div className="rounded-3xl bg-surface border border-line p-6 sm:p-8 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Top Audience Badge
                </label>
                <input
                  type="text"
                  value={hero.badge}
                  onChange={(e) => updateHero({ badge: e.target.value })}
                  className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                    Headline (First Part)
                  </label>
                  <input
                    type="text"
                    value={hero.headline}
                    onChange={(e) => updateHero({ headline: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-volt mb-2">
                    Headline Highlight (Glowing Part)
                  </label>
                  <input
                    type="text"
                    value={hero.highlight}
                    onChange={(e) => updateHero({ highlight: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Subheadline / Agency Value Statement
                </label>
                <textarea
                  rows={3}
                  value={hero.subheadline}
                  onChange={(e) => updateHero({ subheadline: e.target.value })}
                  className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                    Lead Response Speed Stat
                  </label>
                  <input
                    type="text"
                    value={hero.leadResponseSpeed}
                    onChange={(e) => updateHero({ leadResponseSpeed: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                    Target Region Badge
                  </label>
                  <input
                    type="text"
                    value={hero.targetRegion}
                    onChange={(e) => updateHero({ targetRegion: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Value Guarantee Badges (Comma Separated)
                </label>
                <input
                  type="text"
                  value={hero.guarantees.join(', ')}
                  onChange={(e) =>
                    updateHero({
                      guarantees: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                    })
                  }
                  className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => showToast('✓ Hero content saved live!')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Hero Content</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: SERVICES & CAPABILITIES */}
        {/* ============================================================== */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="pb-6 border-b border-line">
              <h2 className="font-display font-bold text-2xl text-text">
                Services &amp; Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-text-muted">
                Edit service titles, kickers, descriptions, and feature bullet points.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((svc, idx) => (
                <div key={svc.num} className="rounded-2xl bg-surface border border-line p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-xl text-volt">
                      Service {svc.num}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-text-muted mb-1">Title</label>
                      <input
                        type="text"
                        value={svc.title}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx] = { ...svc, title: e.target.value };
                          updateServices(updated);
                        }}
                        className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-text-muted mb-1">Kicker</label>
                      <input
                        type="text"
                        value={svc.kicker}
                        onChange={(e) => {
                          const updated = [...services];
                          updated[idx] = { ...svc, kicker: e.target.value };
                          updateServices(updated);
                        }}
                        className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={svc.desc}
                      onChange={(e) => {
                        const updated = [...services];
                        updated[idx] = { ...svc, desc: e.target.value };
                        updateServices(updated);
                      }}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-2 text-sm text-text focus:outline-none focus:border-volt resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted mb-1">
                      Deliverables (One per line)
                    </label>
                    <textarea
                      rows={3}
                      value={svc.items.join('\n')}
                      onChange={(e) => {
                        const updated = [...services];
                        updated[idx] = {
                          ...svc,
                          items: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean),
                        };
                        updateServices(updated);
                      }}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-2 text-sm text-text focus:outline-none focus:border-volt resize-none font-mono text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => showToast('✓ Services saved live!')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon"
              >
                <Save className="w-4 h-4" />
                <span>Save All Services</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: PRICING PLANS */}
        {/* ============================================================== */}
        {activeTab === 'plans' && (
          <div className="space-y-6">
            <div className="pb-6 border-b border-line">
              <h2 className="font-display font-bold text-2xl text-text">
                Partnership &amp; Pricing Tiers
              </h2>
              <p className="text-xs sm:text-sm text-text-muted">
                Edit the 3 engagement models shown to prospective clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((plan, idx) => (
                <div key={plan.name} className="rounded-2xl bg-surface border border-line p-6 space-y-4">
                  <h4 className="font-display font-bold text-lg text-volt">{plan.name}</h4>

                  <div>
                    <label className="block text-xs font-bold text-text-muted mb-1">Kicker</label>
                    <input
                      type="text"
                      value={plan.kicker}
                      onChange={(e) => {
                        const updated = [...plans];
                        updated[idx] = { ...plan, kicker: e.target.value };
                        updatePlans(updated);
                      }}
                      className="w-full bg-bg border border-line rounded-xl px-3 py-2 text-xs text-text focus:outline-none focus:border-volt"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={plan.desc}
                      onChange={(e) => {
                        const updated = [...plans];
                        updated[idx] = { ...plan, desc: e.target.value };
                        updatePlans(updated);
                      }}
                      className="w-full bg-bg border border-line rounded-xl px-3 py-2 text-xs text-text focus:outline-none focus:border-volt resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-muted mb-1">
                      Features (One per line)
                    </label>
                    <textarea
                      rows={5}
                      value={plan.features.join('\n')}
                      onChange={(e) => {
                        const updated = [...plans];
                        updated[idx] = {
                          ...plan,
                          features: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean),
                        };
                        updatePlans(updated);
                      }}
                      className="w-full bg-bg border border-line rounded-xl px-3 py-2 text-xs text-text focus:outline-none focus:border-volt resize-none font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => showToast('✓ Plans saved live!')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider shadow-neon"
              >
                <Save className="w-4 h-4" />
                <span>Save All Plans</span>
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 5: FAQ MANAGER */}
        {/* ============================================================== */}
        {activeTab === 'faqs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-line">
              <div>
                <h2 className="font-display font-bold text-2xl text-text">
                  FAQ Manager
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  Add new questions and answers or modify existing ones.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const updated = [...faqs, { q: 'New question title', a: 'Detailed answer content...' }];
                  updateFaqs(updated);
                  showToast('New FAQ added.');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase shadow-neon"
              >
                <Plus className="w-4 h-4" />
                <span>Add Question</span>
              </button>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-surface border border-line p-5 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = [...faqs];
                        updated[idx] = { ...faq, q: e.target.value };
                        updateFaqs(updated);
                      }}
                      className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm font-semibold text-text focus:outline-none focus:border-volt"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updated = faqs.filter((_, i) => i !== idx);
                        updateFaqs(updated);
                        showToast('FAQ deleted.');
                      }}
                      className="p-2 text-text-faint hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <textarea
                    rows={3}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...faqs];
                      updated[idx] = { ...faq, a: e.target.value };
                      updateFaqs(updated);
                    }}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-xs sm:text-sm text-text-muted focus:outline-none focus:border-volt resize-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 6: CUSTOM PAGES CREATOR */}
        {/* ============================================================== */}
        {activeTab === 'pages' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-line">
              <div>
                <h2 className="font-display font-bold text-2xl text-text">
                  Custom Pages Builder
                </h2>
                <p className="text-xs sm:text-sm text-text-muted">
                  Create new standalone pages (e.g. /p/about, /p/privacy, /p/case-study) with dedicated URLs.
                </p>
              </div>
              <button
                type="button"
                onClick={handleOpenAddPage}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase shadow-neon"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Page</span>
              </button>
            </div>

            <div className="space-y-4">
              {customPages.map((page) => (
                <div key={page.id} className="rounded-2xl bg-surface border border-line p-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-display font-bold text-lg text-text">{page.title}</h4>
                      <span className="font-mono text-xs text-volt bg-volt/10 px-2 py-0.5 rounded">
                        /p/{page.slug}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted">{page.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/p/${page.slug}`}
                      target="_blank"
                      className="p-2 text-text-muted hover:text-volt"
                      title="Preview page"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingPage({ ...page });
                        setIsPageModalOpen(true);
                      }}
                      className="p-2 text-text-muted hover:text-volt"
                      title="Edit page"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete page "${page.title}"?`)) {
                          deleteCustomPage(page.id);
                          showToast('Page deleted.');
                        }
                      }}
                      className="p-2 text-text-faint hover:text-red-400"
                      title="Delete page"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 7: SETTINGS & BACKUP */}
        {/* ============================================================== */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div className="pb-6 border-b border-line">
              <h2 className="font-display font-bold text-2xl text-text">
                Agency Settings &amp; Data Backup
              </h2>
              <p className="text-xs sm:text-sm text-text-muted">
                Update admin security PIN, enterprise contact info, and backup your site data.
              </p>
            </div>

            {/* Contact Details */}
            <div className="rounded-3xl bg-surface border border-line p-6 sm:p-8 space-y-5">
              <h3 className="font-display font-bold text-lg text-text">
                Agency Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-text-muted mb-1.5">
                    Official Agency Email
                  </label>
                  <input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => updateSettings({ contactEmail: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-muted mb-1.5">
                    Direct Business Phone
                  </label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => updateSettings({ phone: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-muted mb-1.5">
                  Office / Coverage Address
                </label>
                <input
                  type="text"
                  value={settings.address}
                  onChange={(e) => updateSettings({ address: e.target.value })}
                  className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-sm text-text focus:outline-none focus:border-volt"
                />
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-volt mb-1.5">
                  Admin Access Password / PIN (Change to your secret code)
                </label>
                <input
                  type="text"
                  value={settings.adminPin}
                  onChange={(e) => updateSettings({ adminPin: e.target.value })}
                  className="w-full max-w-sm bg-bg border border-line rounded-xl px-4 py-3 text-sm font-mono text-text focus:outline-none focus:border-volt"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => showToast('✓ Settings updated live!')}
                  className="px-6 py-3 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase shadow-neon"
                >
                  Save Settings
                </button>
              </div>
            </div>

            {/* Backup & Restore */}
            <div className="rounded-3xl bg-surface border border-line p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-lg text-text">
                Data Backup &amp; Disaster Recovery
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Export all your website content (projects, copy, FAQs, pages) as a clean JSON file, or restore from a previous backup anytime.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const data = exportDataJSON();
                    const blob = new Blob([data], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `autoniex-cms-backup-${Date.now()}.json`;
                    a.click();
                    showToast('✓ Backup downloaded successfully!');
                  }}
                  className="px-5 py-3 rounded-full bg-surface-2 border border-line hover:border-volt text-text font-display font-bold text-xs uppercase"
                >
                  Export Data Backup (JSON)
                </button>

                <label className="cursor-pointer px-5 py-3 rounded-full bg-surface-2 border border-line hover:border-volt text-text font-display font-bold text-xs uppercase">
                  <span>Import Data Backup</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const content = event.target?.result as string;
                          if (content && importDataJSON(content)) {
                            showToast('✓ Backup restored successfully!');
                          } else {
                            alert('Invalid JSON file format.');
                          }
                        };
                        reader.readAsText(file);
                      }
                    }}
                    className="hidden"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Are you sure you want to reset all content back to factory defaults?')) {
                      resetToDefaults();
                      showToast('Site reset to initial defaults.');
                    }
                  }}
                  className="px-5 py-3 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold uppercase ml-auto"
                >
                  Reset To Factory Defaults
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ============================================================== */}
      {/* MODAL: ADD / EDIT PROJECT */}
      {/* ============================================================== */}
      {isProjectModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsProjectModalOpen(false)} />

          <div className="relative w-full max-w-3xl bg-surface border border-line rounded-3xl shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
              <h3 className="font-display font-bold text-xl text-text">
                {portfolio.find((p) => p.id === editingProject.id) ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="text-text-muted hover:text-text p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-5">
              {/* Cover Image Selection: Upload or Preset */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Project Cover Image
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-bg border border-line">
                  <div className="relative w-44 aspect-video rounded-xl overflow-hidden bg-surface-2 border border-line flex-shrink-0">
                    <Image
                      src={editingProject.image || '/images/nova-crm.jpg'}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-3">
                      <label className="cursor-pointer px-4 py-2 rounded-xl bg-volt text-volt-ink font-display font-bold text-xs uppercase shadow-sm">
                        <span>Upload Custom Image</span>
                        <input type="file" accept="image/*" onChange={handleImageFileUpload} className="hidden" />
                      </label>
                      <span className="text-[11px] text-text-faint">Or pick realistic preset:</span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {presetImages.map((pr) => (
                        <button
                          key={pr.path}
                          type="button"
                          onClick={() => setEditingProject({ ...editingProject, image: pr.path })}
                          className={`text-left text-[11px] px-2.5 py-1 rounded-lg border truncate transition-colors ${
                            editingProject.image === pr.path
                              ? 'bg-volt/10 text-volt border-volt'
                              : 'bg-surface text-text-muted border-line hover:text-text'
                          }`}
                        >
                          {pr.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Video URL Input with Live Preview! */}
              <div className="p-4 rounded-2xl bg-bg border border-line space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-volt flex items-center gap-1.5">
                    <Video className="w-4 h-4" />
                    <span>YouTube Video URL (Runs on Frontend Modal!)</span>
                  </label>
                  <span className="text-[10px] text-text-faint">Watch link, Shorts or Embed</span>
                </div>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={editingProject.video || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, video: e.target.value })}
                  className="w-full bg-surface border border-line rounded-xl px-4 py-2.5 text-xs text-text focus:outline-none focus:border-volt"
                />
                {editingProject.video && (
                  <p className="text-[11px] text-cyber-teal">
                    ✓ Video attached! Clicking this card on the website will play this YouTube video inside the modal.
                  </p>
                )}
              </div>

              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Title *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Category</label>
                  <select
                    value={editingProject.cat}
                    onChange={(e) => setEditingProject({ ...editingProject, cat: e.target.value as any })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
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
                  <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Client &amp; City</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Corp (London, UK)"
                    value={editingProject.client || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, client: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Key Metric / Result</label>
                  <input
                    type="text"
                    placeholder="e.g. +340% leads in 60 days"
                    value={editingProject.metrics || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, metrics: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>
              </div>

              {/* Blurb */}
              <div>
                <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Executive Summary</label>
                <textarea
                  rows={2}
                  value={editingProject.blurb}
                  onChange={(e) => setEditingProject({ ...editingProject, blurb: e.target.value })}
                  className="w-full bg-bg border border-line rounded-xl px-4 py-2 text-sm text-text focus:outline-none focus:border-volt resize-none"
                />
              </div>

              {/* Deliverables & Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Deliverables (One per line)</label>
                  <textarea
                    rows={4}
                    value={editingProject.built.join('\n')}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        built: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean),
                      })
                    }
                    className="w-full bg-bg border border-line rounded-xl px-3 py-2 text-xs font-mono text-text focus:outline-none focus:border-volt resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-text-muted mb-1.5">Tech Stack (Comma separated)</label>
                  <textarea
                    rows={4}
                    value={editingProject.stack.join(', ')}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        stack: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                      })
                    }
                    className="w-full bg-bg border border-line rounded-xl px-3 py-2 text-xs font-mono text-text focus:outline-none focus:border-volt resize-none"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-line">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-line text-xs font-bold text-text-muted hover:text-text"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase shadow-neon"
                >
                  Save &amp; Go Live
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: ADD / EDIT CUSTOM PAGE */}
      {/* ============================================================== */}
      {isPageModalOpen && editingPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsPageModalOpen(false)} />

          <div className="relative w-full max-w-3xl bg-surface border border-line rounded-3xl shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
              <h3 className="font-display font-bold text-xl text-text">
                {customPages.find((p) => p.id === editingPage.id) ? 'Edit Page' : 'Create Custom Page'}
              </h3>
              <button
                type="button"
                onClick={() => setIsPageModalOpen(false)}
                className="text-text-muted hover:text-text p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSavePage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-text-muted mb-1">Page Title *</label>
                  <input
                    type="text"
                    required
                    value={editingPage.title}
                    onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-muted mb-1">URL Slug (e.g. &apos;about&apos;) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. terms"
                    value={editingPage.slug}
                    onChange={(e) => setEditingPage({ ...editingPage, slug: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text font-mono focus:outline-none focus:border-volt"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Subtitle</label>
                <input
                  type="text"
                  value={editingPage.subtitle}
                  onChange={(e) => setEditingPage({ ...editingPage, subtitle: e.target.value })}
                  className="w-full bg-bg border border-line rounded-xl px-4 py-2.5 text-sm text-text focus:outline-none focus:border-volt"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-text-muted mb-1">Page Body Content (Markdown supported)</label>
                <textarea
                  rows={10}
                  value={editingPage.content}
                  onChange={(e) => setEditingPage({ ...editingPage, content: e.target.value })}
                  className="w-full bg-bg border border-line rounded-xl p-4 text-xs font-mono text-text focus:outline-none focus:border-volt resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-line">
                <button
                  type="button"
                  onClick={() => setIsPageModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-line text-xs font-bold text-text-muted hover:text-text"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-volt text-volt-ink font-display font-bold text-xs uppercase shadow-neon"
                >
                  Publish Page Live
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
