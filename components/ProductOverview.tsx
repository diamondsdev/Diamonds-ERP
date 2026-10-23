import React from 'react';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export function ProductOverview() {
  return (
    <section id="product" className="py-20 sm:py-24 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-[#f7f7f5] dark:bg-[#151618]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
            Everything your business needs to stay organized.
          </h2>
          <p className="text-base sm:text-lg text-[#70706b] dark:text-[#9e9e98] leading-relaxed text-balance">
            Manage everyday operations through one connected system, reduce fragmented workflows,
            and give your team a clearer view of the business.
          </p>
        </div>

        {/* 3 Clean Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[#3478f6] flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
              Connected Operations
            </h3>
            <p className="text-xs sm:text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
              Sales, inventory, and finance communicate automatically without manual data re-entry or CSV files.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[#3478f6] flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
              Unified Team Workspace
            </h3>
            <p className="text-xs sm:text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
              One shared environment for your entire company, ensuring everyone works from the exact same accurate records.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[#3478f6] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
              Dependable Clarity
            </h3>
            <p className="text-xs sm:text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
              Real-time visibility into your inventory levels, active client orders, and current financial health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
