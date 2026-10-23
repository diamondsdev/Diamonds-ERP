'use client';

import React, { useState } from 'react';
import {
  Users,
  FileSpreadsheet,
  Boxes,
  Truck,
  BookOpenCheck,
  CheckSquare,
  Briefcase,
  BarChart3,
  GitFork,
  ArrowRight,
} from 'lucide-react';

interface CapabilityItem {
  id: string;
  category: 'commerce' | 'operations' | 'finance';
  categoryLabel: string;
  title: string;
  headline: string;
  description: string;
  keyOutputs: string[];
  icon: React.ReactNode;
}

export function CapabilitiesGrid() {
  const [filter, setFilter] = useState<'all' | 'commerce' | 'operations' | 'finance'>('all');

  const capabilities: CapabilityItem[] = [
    {
      id: 'crm',
      category: 'commerce',
      categoryLabel: 'Commerce',
      title: 'CRM & Client Accounts',
      headline: 'Unified customer profiles with linked contract history.',
      description:
        'Maintain complete visibility into customer communication, credit terms, active orders, and historical delivery performance.',
      keyOutputs: ['Entity relationship mapping', 'Credit limit governance', 'Communication history'],
      icon: <Users className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'sales',
      category: 'commerce',
      categoryLabel: 'Commerce',
      title: 'Sales & Quotations',
      headline: 'Margin-aware quotes that convert to orders with zero re-entry.',
      description:
        'Draft accurate price quotes with instant cost calculations, tiered volume pricing, customer discounts, and automatic approval workflows.',
      keyOutputs: ['Multi-currency price books', 'Real-time margin alerts', 'One-click quote conversion'],
      icon: <FileSpreadsheet className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'inventory',
      category: 'operations',
      categoryLabel: 'Operations',
      title: 'Inventory & Stock Control',
      headline: 'Multi-facility stock visibility with automated allocation.',
      description:
        'Track stock across central warehouses, regional depots, and transit hubs. Manage batch numbers, serial tracking, and automated reorder points.',
      keyOutputs: ['Multi-depot availability', 'Automated pick/pack lists', 'Low-stock reorder triggers'],
      icon: <Boxes className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'purchasing',
      category: 'operations',
      categoryLabel: 'Operations',
      title: 'Purchasing & Suppliers',
      headline: 'Disciplined vendor management and purchase order tracking.',
      description:
        'Streamline procurement with automated purchase requisitions, supplier pricing matrices, goods receipt matching, and vendor performance scoring.',
      keyOutputs: ['3-way invoice matching', 'Lead time analytics', 'Supplier contract terms'],
      icon: <Truck className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'accounting',
      category: 'finance',
      categoryLabel: 'Finance',
      title: 'Accounting & Financial Ledger',
      headline: 'Continuous double-entry bookkeeping with real-time audit trails.',
      description:
        'Automate accounts receivable, accounts payable, revenue recognition, and multi-tax compliance. Eliminate end-of-month manual reconciliation.',
      keyOutputs: ['Automated journal posting', 'Accounts receivable/payable', 'Tax liability compute'],
      icon: <BookOpenCheck className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'projects',
      category: 'operations',
      categoryLabel: 'Operations',
      title: 'Projects & Resource Tracking',
      headline: 'Deliver complex client deliverables on time and on budget.',
      description:
        'Connect project milestones with inventory drawdowns, billable staff hours, and subcontractor costs for accurate project profitability.',
      keyOutputs: ['Milestone burn-down', 'Resource allocation matrix', 'Project P&L calculation'],
      icon: <CheckSquare className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'team',
      category: 'finance',
      categoryLabel: 'Finance & Workforce',
      title: 'Team & Role Governance',
      headline: 'Granular role-based access and organizational hierarchy.',
      description:
        'Enforce strict security with field-level permissions, approval thresholds, departmental segregation, and operator activity logging.',
      keyOutputs: ['Role-based access (RBAC)', 'Segregation of duties', 'Approval hierarchies'],
      icon: <Briefcase className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'reports',
      category: 'finance',
      categoryLabel: 'Finance & Workforce',
      title: 'Reports & Business Analytics',
      headline: 'Auditable operational insights without manual export spreadsheets.',
      description:
        'Access standardized executive dashboards for cash runway, inventory velocity, customer acquisition economics, and operational efficiency.',
      keyOutputs: ['Consolidated balance sheet', 'Cohort margin analysis', 'Cash forecast models'],
      icon: <BarChart3 className="w-5 h-5 text-[#3478f6]" />,
    },
    {
      id: 'automation',
      category: 'operations',
      categoryLabel: 'Operations',
      title: 'Workflow Automation',
      headline: 'Rule-based triggers connecting disparate operational steps.',
      description:
        'Design deterministic event triggers that advance orders, notify warehouse managers, flag delayed shipments, or alert finance to overdue invoices.',
      keyOutputs: ['Event-driven triggers', 'Exception escalations', 'Custom business rules'],
      icon: <GitFork className="w-5 h-5 text-[#3478f6]" />,
    },
  ];

  const filteredCapabilities =
    filter === 'all'
      ? capabilities
      : capabilities.filter((c) => c.category === filter);

  return (
    <section id="capabilities" className="py-20 sm:py-28 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-[#f7f7f5] dark:bg-[#151618]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#70706b] dark:text-[#9e9e98] mb-3">
              Planned Platform Scope
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
              Modular capabilities designed to grow with your business.
            </h2>
            <p className="text-base text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
              Diamonds provides an integrated foundation where each capability area shares
              a single data model. Activate modules as your operational requirements expand.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with handlers) */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-[#1f2024] border border-[#e5e5e1] dark:border-[#2b2c30] rounded-lg shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-slate-900 text-white dark:bg-[#3478f6] dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Modules ({capabilities.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('commerce')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'commerce'
                  ? 'bg-slate-900 text-white dark:bg-[#3478f6] dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Commerce & Sales
            </button>
            <button
              type="button"
              onClick={() => setFilter('operations')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'operations'
                  ? 'bg-slate-900 text-white dark:bg-[#3478f6] dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Operations & Supply
            </button>
            <button
              type="button"
              onClick={() => setFilter('finance')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'finance'
                  ? 'bg-slate-900 text-white dark:bg-[#3478f6] dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Finance & Governance
            </button>
          </div>
        </div>

        {/* 9 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapabilities.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs flex flex-col justify-between hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
            >
              <div>
                {/* Header with clean unboxed metadata (Anti-Pill Rule) */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#f7f7f5] dark:bg-[#232429] border border-[#e5e5e1] dark:border-[#2b2c30]">
                    {item.icon}
                  </div>
                  <div className="text-[11px] font-semibold text-[#70706b] dark:text-[#9e9e98] tracking-wider uppercase">
                    {item.categoryLabel}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-3">
                  {item.headline}
                </p>

                <p className="text-xs text-[#70706b] dark:text-[#9e9e98] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Key Architectural Outputs */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                <div className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  System Outputs:
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-600 dark:text-slate-400">
                  {item.keyOutputs.map((output, idx) => (
                    <span key={output} className="inline-flex items-center gap-1.5">
                      {idx > 0 && <span aria-hidden="true" className="text-slate-400">·</span>}
                      <span>{output}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Provisional Note */}
        <div className="mt-10 p-4 rounded-lg bg-white dark:bg-[#18191c] border border-[#e5e5e1] dark:border-[#2b2c30] text-xs text-[#70706b] dark:text-[#9e9e98] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            * Provisional module architecture presented for system scoping. Custom modules and integrations are deployed according to specific enterprise agreements.
          </span>
          <span className="font-mono text-slate-500 whitespace-nowrap">
            Architecture Version 2026.4
          </span>
        </div>
      </div>
    </section>
  );
}
