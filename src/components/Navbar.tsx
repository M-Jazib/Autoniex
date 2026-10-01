'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Models', href: '#engage' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-volt rounded-lg p-1"
            aria-label="Autoniex Home"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-line bg-surface flex items-center justify-center shadow-neon group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.webp"
                alt="Autoniex Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-text flex items-center gap-1.5">
                AUTONIEX
                <span className="w-1.5 h-1.5 rounded-full bg-volt animate-pulse" />
              </span>
              <span className="text-[10px] tracking-widest text-text-muted uppercase font-semibold">
                AI Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-text-muted hover:text-volt transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(198,245,46,0.5)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-neon hover:bg-volt-hover hover:scale-105 active:scale-100 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Build With Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border border-line text-text hover:text-volt hover:border-volt transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[65px] inset-x-0 glass-panel border-t border-line py-5 px-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-text hover:text-volt py-2 border-b border-line flex items-center justify-between"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4 text-text-muted" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center bg-volt text-volt-ink font-display font-bold text-xs uppercase tracking-wider py-3.5 rounded-full shadow-neon mt-2"
          >
            Build With Us
          </a>
        </div>
      )}
    </header>
  );
}
