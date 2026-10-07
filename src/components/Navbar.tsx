'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Sparkles, Sun, Moon, Zap, ChevronDown, Cpu, Bot, Layout, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  // Are we on homepage?
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: 'n8n Workflow Automation',
      desc: 'Self-hosted 24/7 pipelines & integrations',
      href: '/p/n8n-automation',
      icon: Cpu,
      color: 'text-volt',
      badge: 'POPULAR',
    },
    {
      title: 'Custom AI Agents & Voice',
      desc: 'Telephony bots & 80%+ support deflection',
      href: '/p/ai-agents',
      icon: Bot,
      color: 'text-cyber-teal',
      badge: '24/7 LIVE',
    },
    {
      title: 'Next.js Web Development',
      desc: 'Sub-second custom high-conversion sites',
      href: '/p/web-development',
      icon: Layout,
      color: 'text-volt',
      badge: 'SUB-SECOND',
    },
  ];

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Models', href: '#engage' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  // Smart anchor navigation: if on homepage scroll to section, otherwise go to /#section
  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (isHome) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/' + href);
      }
      setMobileOpen(false);
    }
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const nav = navRef.current;
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }

  function handleMouseLeave() {
    setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
  }

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-3 shadow-[0_2px_32px_rgba(198,245,46,0.08)]'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Animated top border glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] overflow-hidden">
        <div
          className={`h-full transition-all duration-700 ${
            scrolled
              ? 'bg-gradient-to-r from-transparent via-volt/60 to-transparent w-full'
              : 'w-0'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo & Wordmark — always go to homepage */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
            aria-label="Autoniex Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-line bg-surface flex items-center justify-center shadow-neon group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(198,245,46,0.5)] transition-all duration-300">
              <Image
                src="/logo.webp"
                alt="Autoniex Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-text flex items-center gap-2">
                AUTONIEX
                <Zap className="w-3.5 h-3.5 text-volt fill-volt animate-pulse" />
              </span>
              <span className="text-[10px] tracking-widest text-text-muted uppercase font-semibold">
                AI &amp; Automation Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative"
            aria-label="Main Navigation"
            onMouseLeave={handleMouseLeave}
          >
            {/* Sliding pill indicator */}
            <span
              className="absolute top-0 bottom-0 rounded-full bg-volt/10 border border-volt/20 pointer-events-none transition-all duration-200"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
              }}
            />

            {/* Solutions Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={(e) => {
                handleMouseEnter(e);
                handleDropdownEnter();
              }}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  if (isHome) {
                    const el = document.querySelector('#services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    router.push('/#services');
                  }
                }}
                className="relative text-sm font-semibold text-text-muted hover:text-volt transition-colors duration-200 px-4 py-2 rounded-full z-10 inline-flex items-center gap-1.5 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? 'rotate-180 text-volt' : ''
                  }`}
                />
              </button>

              {/* Flyout Dropdown */}
              {servicesDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-surface/95 backdrop-blur-xl border border-line p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="text-[10px] uppercase font-bold tracking-widest text-text-muted px-3 py-1.5 border-b border-line mb-2 flex items-center justify-between">
                    <span>Dedicated Architectures</span>
                    <span className="text-volt font-mono">3 LIVE</span>
                  </div>
                  <div className="space-y-1">
                    {solutions.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesDropdown(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-volt/10 transition-colors group"
                        >
                          <div className={`p-2 rounded-lg bg-bg border border-line mt-0.5 group-hover:border-volt/40 transition-colors ${item.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-text group-hover:text-volt transition-colors">
                                {item.title}
                              </span>
                              <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-volt/10 text-volt border border-volt/30">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-text-muted line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-line px-2">
                    <a
                      href={isHome ? '#services' : '/#services'}
                      onClick={() => setServicesDropdown(false)}
                      className="text-[11px] font-bold text-volt hover:underline flex items-center justify-between"
                    >
                      <span>View All Capabilities on Home</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={isHome ? link.href : '/' + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={handleMouseEnter}
                className="relative text-sm font-semibold text-text-muted hover:text-volt transition-colors duration-200 px-4 py-2 rounded-full z-10"
              >
                {link.label}
              </a>
            ))}

            {/* About page link in desktop nav */}
            <Link
              href="/p/about"
              onMouseEnter={handleMouseEnter}
              className="relative text-sm font-semibold text-text-muted hover:text-volt transition-colors duration-200 px-4 py-2 rounded-full z-10"
            >
              About
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="relative w-10 h-10 rounded-xl border border-line bg-surface hover:border-volt/60 hover:bg-volt/5 text-text-muted hover:text-volt flex items-center justify-center transition-all duration-200 group overflow-hidden"
              aria-label="Toggle Dark/Light Mode"
            >
              <span className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                <Moon className="w-4.5 h-4.5" />
              </span>
              <span className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              </span>
            </button>

            {/* CTA */}
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="inline-flex items-center gap-2 bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-neon hover:bg-volt-hover hover:scale-105 hover:shadow-[0_0_24px_rgba(198,245,46,0.6)] active:scale-100 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Build With Us
            </a>
          </div>

          {/* Mobile: theme + menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-line text-text-muted hover:text-volt hover:border-volt transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl border border-line text-text hover:text-volt hover:border-volt transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[38rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-panel border-t border-line py-5 px-6 shadow-2xl flex flex-col gap-4 mt-2 mx-2 rounded-2xl">
          <div className="text-[10px] uppercase font-bold tracking-widest text-text-muted border-b border-line pb-2 flex items-center justify-between">
            <span>Specialized Architectures</span>
            <span className="text-volt font-mono">3 PAGES</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs font-bold text-text hover:text-volt py-2 px-3 rounded-lg hover:bg-volt/5 flex items-center justify-between"
              >
                <span>{item.title}</span>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-volt/10 text-volt">
                  {item.badge}
                </span>
              </Link>
            ))}
          </div>

          <nav className="flex flex-col gap-1 border-t border-line pt-3">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={isHome ? link.href : '/' + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-text hover:text-volt hover:bg-volt/5 py-2.5 px-4 rounded-xl flex items-center justify-between transition-all duration-150"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span>{link.label}</span>
                <span className="text-xs text-volt opacity-60">→</span>
              </a>
            ))}
            <Link
              href="/p/about"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-text hover:text-volt hover:bg-volt/5 py-2.5 px-4 rounded-xl flex items-center justify-between transition-all duration-150"
            >
              <span>About</span>
              <span className="text-xs text-volt opacity-60">→</span>
            </Link>
          </nav>
          <a
            href={isHome ? '#contact' : '/#contact'}
            onClick={() => setMobileOpen(false)}
            className="w-full text-center bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider py-3.5 rounded-full shadow-neon"
          >
            Build With Us
          </a>
        </div>
      </div>
    </header>
  );
}
