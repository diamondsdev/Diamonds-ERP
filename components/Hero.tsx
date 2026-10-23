'use client';

import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Building2,
  Boxes,
  BookOpenCheck,
  CheckCircle2,
  Users,
  Activity,
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  const handleScrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6 text-balance">
            Run your business. All in one place.
          </h1>

          <p className="text-lg sm:text-xl text-[#70706b] dark:text-[#9e9e98] leading-relaxed mb-8 max-w-2xl mx-auto text-balance">
            Diamonds ERP brings your business operations, sales, inventory, finance,
            and customer management together in one connected platform.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#20201e] hover:bg-[#121211] dark:bg-[#3478f6] dark:hover:bg-[#2365e4] rounded-lg transition-all shadow-xs active:scale-[0.98] whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6]"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleScrollToFeatures}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap py-2"
            >
              Explore Features
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RESTRAINED, SIMPLIFIED PRODUCT VISUAL */}
        <div className="max-w-4xl mx-auto rounded-xl bg-white dark:bg-[#141517] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-lg overflow-hidden">
          {/* Subtle Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#f7f7f5] dark:bg-[#18191c] border-b border-[#e5e5e1] dark:border-[#2b2c30]">
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
            <span className="text-xs font-medium text-[#70706b] dark:text-[#9e9e98]">
              Diamonds ERP · Connected Workspace
            </span>
            <div className="w-8" aria-hidden="true" />
          </div>

          {/* Clean Simplified Interface Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
            {/* Minimal Left Sidebar */}
            <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-[#e5e5e1] dark:border-[#2b2c30] p-3.5 bg-[#fbfbfa] dark:bg-[#161719] text-xs space-y-1">
              <div className="px-2 py-1.5 font-medium text-slate-900 dark:text-white rounded-md bg-slate-200/60 dark:bg-slate-800 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#3478f6]" />
                <span>Overview</span>
              </div>
              <div className="px-2 py-1.5 text-[#70706b] dark:text-[#9e9e98] flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                <span>CRM & Accounts</span>
              </div>
              <div className="px-2 py-1.5 text-[#70706b] dark:text-[#9e9e98] flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Sales & Orders</span>
              </div>
              <div className="px-2 py-1.5 text-[#70706b] dark:text-[#9e9e98] flex items-center gap-2">
                <Boxes className="w-3.5 h-3.5" />
                <span>Inventory</span>
              </div>
              <div className="px-2 py-1.5 text-[#70706b] dark:text-[#9e9e98] flex items-center gap-2">
                <BookOpenCheck className="w-3.5 h-3.5" />
                <span>Finance</span>
              </div>
            </div>

            {/* Clear, Calm Content Preview */}
            <div className="md:col-span-9 p-5 sm:p-6 bg-white dark:bg-[#141517] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e1] dark:border-[#2b2c30] mb-4">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Daily Business Snapshot
                    </h2>
                    <p className="text-xs text-[#70706b] dark:text-[#9e9e98]">
                      All operations synchronized in real time
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    All Systems Connected
                  </span>
                </div>

                {/* 3 Simple Overview Summary Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                  <div className="p-3 rounded-lg bg-[#f7f7f5] dark:bg-[#1b1c1f] border border-[#e5e5e1] dark:border-[#2b2c30]">
                    <div className="text-[11px] text-[#70706b] dark:text-[#9e9e98]">Orders Dispatched</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums mt-0.5">
                      128
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                      Fulfillment on schedule
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#f7f7f5] dark:bg-[#1b1c1f] border border-[#e5e5e1] dark:border-[#2b2c30]">
                    <div className="text-[11px] text-[#70706b] dark:text-[#9e9e98]">Stock Status</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums mt-0.5">
                      3 Warehouses
                    </div>
                    <div className="text-[10px] text-[#70706b] dark:text-[#9e9e98] mt-0.5">
                      Balanced allocation
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#f7f7f5] dark:bg-[#1b1c1f] border border-[#e5e5e1] dark:border-[#2b2c30]">
                    <div className="text-[11px] text-[#70706b] dark:text-[#9e9e98]">Accounts Balance</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white tabular-nums mt-0.5">
                      Reconciled
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                      Ledger verified
                    </div>
                  </div>
                </div>

                {/* Minimal Synchronized Workflow Line */}
                <div className="p-3 rounded-lg bg-[#f7f7f5] dark:bg-[#1b1c1f] border border-[#e5e5e1] dark:border-[#2b2c30] text-xs">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      Order #7740 confirmed · Inventory automatically reserved · Invoice posted to ledger.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-[#70706b] dark:text-[#9e9e98]">
                Illustrative preview of the Diamonds connected workspace.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
