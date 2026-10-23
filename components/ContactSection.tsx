import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export function ContactSection({ onOpenConsultation }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#111110]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
          Let&apos;s simplify the way you run your business.
        </h2>

        <p className="text-base sm:text-lg text-[#70706b] dark:text-[#9e9e98] leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
          Tell us about your business and what you need. Let&apos;s explore whether Diamonds ERP is the right fit.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#20201e] hover:bg-[#121211] dark:bg-[#3478f6] dark:hover:bg-[#2365e4] rounded-lg transition-all shadow-xs active:scale-[0.98] whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6]"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
