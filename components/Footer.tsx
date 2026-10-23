import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-[#f7f7f5] dark:bg-[#0c0d0e] py-12 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#e5e5e1] dark:border-[#2b2c30]">
          <div className="space-y-2">
            <a href="#" className="inline-block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6] rounded">
              <Logo />
            </a>
            <p className="text-xs text-[#70706b] dark:text-[#9e9e98] max-w-sm">
              The connected workspace for modern business operations.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#product" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Product
            </a>
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#why-diamonds" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="text-left font-medium text-slate-900 dark:text-white hover:text-[#3478f6] dark:hover:text-[#60a5fa] transition-colors"
            >
              Contact Us
            </button>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#70706b] dark:text-[#9e9e98]">
          <div>
            © {currentYear} Diamonds ERP. All rights reserved.
          </div>
          <div>
            Public marketing preview.
          </div>
        </div>
      </div>
    </footer>
  );
}
