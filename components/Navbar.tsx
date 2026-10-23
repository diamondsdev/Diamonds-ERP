'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ onOpenConsultation, isDark, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Solutions', href: '#features' },
    { label: 'About', href: '#why-diamonds' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0f1011]/95 backdrop-blur-md border-b border-[#e5e5e1] dark:border-[#2b2c30]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6] rounded-md"
            aria-label="Diamonds ERP Home"
          >
            <Logo />
          </a>

          {/* Clean, concise navigation links (Zone 2) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#70706b] dark:text-[#9e9e98]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6] rounded-sm py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + Contact Us Button (Zone 3) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6]"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Single Prominent Contact Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#20201e] hover:bg-[#121211] dark:bg-[#3478f6] dark:hover:bg-[#2365e4] rounded-lg transition-all shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6]"
            >
              Contact Us
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="md:hidden fixed inset-x-0 top-16 bg-white dark:bg-[#111110] border-b border-[#e5e5e1] dark:border-[#2b2c30] shadow-lg px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-800 dark:text-slate-100 hover:text-[#3478f6] py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#20201e] dark:bg-[#3478f6] rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
