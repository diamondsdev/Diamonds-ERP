import React from 'react';
import { ShieldCheck, Lock, Database, Terminal, FileCode, CheckCircle2 } from 'lucide-react';

export function TrustAndArchitecture() {
  const pillars = [
    {
      title: 'Deterministic Double-Entry Invariants',
      description:
        'Every financial transaction requires balanced debits and credits before committing to the ledger. Out-of-balance entries cannot be forced or bypassed.',
      icon: <Database className="w-5 h-5 text-[#3478f6]" />,
      spec: 'Debits ≡ Credits constraint strictly enforced at database tier',
    },
    {
      title: 'Granular Role-Based Permissions (RBAC)',
      description:
        'Separate duties precisely between commercial sales, warehouse operators, and financial controllers with field-level read/write permissions.',
      icon: <Lock className="w-5 h-5 text-[#3478f6]" />,
      spec: 'Explicit least-privilege access model per team member',
    },
    {
      title: 'Immutable Audit Trail',
      description:
        'Every inventory adjustment, price discount, and status change records the authenticated operator ID, prior state, timestamp, and machine context.',
      icon: <ShieldCheck className="w-5 h-5 text-[#3478f6]" />,
      spec: 'Append-only event store with full revision history',
    },
    {
      title: 'API-First Extensibility',
      description:
        'Connect custom warehouse barcode readers, logistics dispatch carriers, and custom enterprise databases via standard REST and webhook triggers.',
      icon: <Terminal className="w-5 h-5 text-[#3478f6]" />,
      spec: 'Standardized JSON payloads with bidirectional webhooks',
    },
  ];

  return (
    <section id="architecture" className="py-20 sm:py-28 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-[#f7f7f5] dark:bg-[#151618]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#70706b] dark:text-[#9e9e98] mb-3">
            System Reliability & Control
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
            Engineered around data integrity, auditability, and governance.
          </h2>
          <p className="text-base sm:text-lg text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
            Enterprise software cannot rely on optimistic assumptions. Diamonds is built from
            the database tier up to ensure numbers never drift, records are never quietly altered,
            and critical business processes remain predictable.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-[#f7f7f5] dark:bg-[#232429] border border-[#e5e5e1] dark:border-[#2b2c30] w-fit mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="font-mono text-[11px]">{pillar.spec}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Principles Callout */}
        <div className="mt-8 p-6 sm:p-8 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Zero Black-Box Assumptions
              </h3>
              <p className="text-xs text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
                Diamonds avoids unverified AI automations that silently change operational data.
                Every decision, status advance, and price adjustment is triggered by explicit human authorization
                or deterministic business rules configured by your administrators.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-md bg-[#f7f7f5] dark:bg-[#222327] border border-[#e5e5e1] dark:border-[#2b2c30] text-xs font-mono text-slate-700 dark:text-slate-300">
                Deterministic Execution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
