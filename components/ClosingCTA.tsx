import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Check } from 'lucide-react';

interface ClosingCTAProps {
  onOpenConsultation: () => void;
}

export function ClosingCTA({ onOpenConsultation }: ClosingCTAProps) {
  return (
    <section className="py-20 sm:py-28 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#111110] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#3478f6]/10 blur-3xl" />
        <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-[#3478f6]/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Anti-Pill unboxed kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3478f6] dark:text-[#60a5fa] mb-4">
          <span>Operational Clarity</span>
          <span aria-hidden="true">·</span>
          <span>Unified Enterprise Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 text-balance">
          Bring your business into focus.
        </h2>

        <p className="text-base sm:text-lg text-[#70706b] dark:text-[#9e9e98] leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
          Schedule a technical discovery session with our team to explore how Diamonds
          can connect your sales, inventory, and financial operations into one disciplined system.
        </p>

        {/* Action Trigger Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#f7f7f5] dark:bg-[#18191c] border border-[#e5e5e1] dark:border-[#2b2c30] max-w-xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Request a Scoping Consultation
              </div>
              <div className="text-xs text-[#70706b] dark:text-[#9e9e98] mt-0.5">
                Technical review · No generic sales pitch
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#20201e] hover:bg-[#121211] dark:bg-[#3478f6] dark:hover:bg-[#2365e4] rounded-lg transition-all shadow-xs active:scale-[0.98] whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6]"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 pt-5 border-t border-[#e5e5e1] dark:border-[#2b2c30] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-left text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Tailored architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Direct engineer intake</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Clear migration map</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
