import React from 'react';
import { ArrowRight, Layers, Split, RefreshCw, Eye, Check } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="py-20 sm:py-28 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-[#f7f7f5] dark:bg-[#151618]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#70706b] dark:text-[#9e9e98] mb-3">
            The Structural Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-5 text-balance">
            Why growing enterprises move beyond disconnected point tools.
          </h2>
          <p className="text-base sm:text-lg text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
            When sales, inventory, fulfillment, and finance operate in separate systems,
            teams waste hours reconciling discrepancies. Diamonds eliminates the seams
            between departments through a unified operational architecture.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Deep Narrative on Friction vs Flow (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Principle 01 */}
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
              <div className="flex items-center gap-3 text-xs font-semibold text-[#3478f6] tracking-wider uppercase mb-3">
                <span>01. Operational Cohesion</span>
                <span aria-hidden="true">·</span>
                <span>Unified State Machine</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                One event updates every dependent record instantly.
              </h3>
              <p className="text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed mb-5">
                In traditional software stacks, a closed deal in the CRM must be manually
                re-entered into the order desk, re-checked against warehouse spreadsheets,
                and re-keyed into accounting. With Diamonds, an authorized sales order
                immediately reserves specific inventory, triggers pick-pack logistics,
                and prepares the revenue ledger without human re-entry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Eliminates manual CSV exports and synchronizations
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Guarantees matching customer and billing details
                  </span>
                </div>
              </div>
            </div>

            {/* Principle 02 */}
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
              <div className="flex items-center gap-3 text-xs font-semibold text-[#3478f6] tracking-wider uppercase mb-3">
                <span>02. Single Source of Truth</span>
                <span aria-hidden="true">·</span>
                <span>Financial Integrity</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Real-time margin visibility instead of month-end surprises.
              </h3>
              <p className="text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed mb-5">
                Because inventory costs, supplier purchase orders, and sales commissions
                live in the same database, executive leadership sees genuine gross margins
                per order and per product line in real time, not three weeks after the close of the month.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Always-current accounts receivable and payable
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    Continuous double-entry balance validation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Architecture Breakdown (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">
                The Disconnected Stack vs Diamonds
              </h3>

              <div className="space-y-4 text-xs">
                {/* Disconnected Row */}
                <div className="p-3.5 rounded-lg bg-[#efefec] dark:bg-[#222327]">
                  <div className="font-semibold text-rose-700 dark:text-rose-400 mb-1 flex items-center justify-between">
                    <span>Fragmented Tools</span>
                    <span className="font-mono text-[10px]">High Latency</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-normal">
                    CRM + Standalone Inventory App + Standalone Accounting + Separate Spreadsheet Trackers.
                    Data must be manually exported, normalized, and resolved.
                  </p>
                </div>

                {/* Diamonds Unified Row */}
                <div className="p-3.5 rounded-lg bg-[#3478f6]/10 border border-[#3478f6]/30 dark:bg-[#3478f6]/15 dark:border-[#3478f6]/40">
                  <div className="font-semibold text-[#3478f6] dark:text-[#60a5fa] mb-1 flex items-center justify-between">
                    <span>Diamonds ERP Architecture</span>
                    <span className="font-mono text-[10px]">Continuous Sync</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 leading-normal">
                    Single relational operational model. When a status advances, all dependent
                    inventories, ledger accounts, and customer alerts update simultaneously.
                  </p>
                </div>
              </div>

              {/* Key Architectural Outcomes */}
              <div className="mt-6 pt-5 border-t border-[#e5e5e1] dark:border-[#2b2c30]">
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Measurable Operational Outcomes
                </div>
                <div className="space-y-2 text-xs text-[#70706b] dark:text-[#9e9e98]">
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span>Order-to-Fulfill Latency</span>
                    <span className="font-mono text-slate-900 dark:text-white font-medium">Reduced by 70%</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span>Double-Allocation Frequency</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">Zero occurrences</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/60">
                    <span>Reconciliation Time per Month</span>
                    <span className="font-mono text-slate-900 dark:text-white font-medium">Hours instead of days</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Audit Trail Completeness</span>
                    <span className="font-mono text-slate-900 dark:text-white font-medium">100% Immutable log</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="p-5 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30]">
              <blockquote className="text-xs text-[#70706b] dark:text-[#9e9e98] italic leading-relaxed">
                “Modern enterprise software should not require armies of consultants
                just to make two core departments talk to each other. Diamonds is built
                on the principle of intentional simplicity.”
              </blockquote>
              <div className="mt-2 text-[11px] font-semibold text-slate-900 dark:text-white not-italic">
                Diamonds Product Architecture Manifesto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
