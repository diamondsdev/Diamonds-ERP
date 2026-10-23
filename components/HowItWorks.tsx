import React from 'react';
import { Search, Sliders, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Workflow Discovery & Diagnostic',
      subtitle: 'Mapping operational touchpoints and data dependencies',
      description:
        'We review your existing order pipelines, inventory locations, supplier dependencies, and chart of accounts to determine the optimal unified structure.',
      deliverables: ['Cross-department process map', 'Data entity schema plan', 'Legacy tool retirement checklist'],
    },
    {
      step: '02',
      title: 'Workspace Configuration & Schema Design',
      subtitle: 'Configuring custom fields, approval chains, and ledger rules',
      description:
        'Diamonds is tailored to your business rules. We establish role permissions, price books, multi-warehouse locations, and automated ledger postings.',
      deliverables: ['Role-based access matrix', 'Automated trigger rules', 'Double-entry posting invariants'],
    },
    {
      step: '03',
      title: 'Connected Migration & Parallel Run',
      subtitle: 'Staged data import with continuous reconciliation validation',
      description:
        'Historical client records, active stock balances, and opening financial positions are imported and verified against baseline audit figures before cutover.',
      deliverables: ['Zero-loss balance audit', 'Warehouse stock reconciliation', 'Supplier catalogue verification'],
    },
    {
      step: '04',
      title: 'Team Activation & Workflow Refinement',
      subtitle: 'Guided operational onboarding and continuous feedback',
      description:
        'Commercial, warehouse, and finance teams begin executing real operations within Diamonds, supported by role-specific workspaces and real-time validation.',
      deliverables: ['Departmental runbooks', 'Executive dashboard calibration', 'Quarterly workflow audits'],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#111110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#70706b] dark:text-[#9e9e98] mb-3">
            Implementation Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
            A structured path from fragmented tools to operational clarity.
          </h2>
          <p className="text-base sm:text-lg text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
            Enterprise transition succeeds through deliberate sequencing, rigorous data verification,
            and respect for how your teams work today.
          </p>
        </div>

        {/* Process Stepper Timeline */}
        <div className="relative">
          {/* Vertical central guide line (Desktop) */}
          <div
            className="hidden lg:block absolute left-8 top-8 bottom-8 w-px bg-[#e5e5e1] dark:bg-[#2b2c30]"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative lg:pl-24 group"
              >
                {/* Step Marker Badge */}
                <div className="hidden lg:flex absolute left-0 top-1 w-16 h-16 rounded-xl bg-[#f7f7f5] dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] items-center justify-center font-mono font-bold text-slate-900 dark:text-white text-lg shadow-xs group-hover:border-[#3478f6] group-hover:text-[#3478f6] transition-colors">
                  {item.step}
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#f7f7f5] dark:bg-[#16171a] border border-[#e5e5e1] dark:border-[#2b2c30] hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="lg:hidden font-mono font-bold text-sm text-[#3478f6] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs text-[#70706b] dark:text-[#9e9e98] font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Planned Deliverables */}
                  <div className="pt-4 border-t border-[#e5e5e1] dark:border-[#2b2c30]">
                    <div className="text-[11px] font-semibold text-[#70706b] dark:text-[#9e9e98] uppercase tracking-wider mb-2">
                      Key Implementation Artifacts:
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {item.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="px-3 py-1 rounded bg-white dark:bg-[#202126] border border-[#e5e5e1] dark:border-[#2b2c30] text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Provisional Notice */}
        <div className="mt-12 p-4 rounded-lg bg-[#f7f7f5] dark:bg-[#16171a] border border-[#e5e5e1] dark:border-[#2b2c30] text-xs text-[#70706b] dark:text-[#9e9e98]">
          Note: Implementation cadence, custom migration tooling, and integration scope are formally scoped during preliminary technical consultation.
        </div>
      </div>
    </section>
  );
}
