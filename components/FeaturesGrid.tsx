import React from 'react';
import {
  Users,
  Building2,
  Boxes,
  BookOpenCheck,
  CheckSquare,
  BarChart3,
} from 'lucide-react';

export function FeaturesGrid() {
  const features = [
    {
      title: 'CRM',
      description: 'Organize customers and business relationships.',
      icon: <Users className="w-4 h-4 text-[#3478f6]" />,
    },
    {
      title: 'Sales',
      description: 'Manage quotations, orders, and sales activities.',
      icon: <Building2 className="w-4 h-4 text-[#3478f6]" />,
    },
    {
      title: 'Inventory',
      description: 'Track stock, products, and movements.',
      icon: <Boxes className="w-4 h-4 text-[#3478f6]" />,
    },
    {
      title: 'Finance',
      description: 'Organize financial records and reporting.',
      icon: <BookOpenCheck className="w-4 h-4 text-[#3478f6]" />,
    },
    {
      title: 'Operations',
      description: 'Coordinate tasks, teams, and daily workflows.',
      icon: <CheckSquare className="w-4 h-4 text-[#3478f6]" />,
    },
    {
      title: 'Analytics',
      description: 'Understand business performance through reports.',
      icon: <BarChart3 className="w-4 h-4 text-[#3478f6]" />,
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-24 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#111110]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#70706b] dark:text-[#9e9e98] mb-2">
            Key Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Designed for the core areas of your business.
          </h2>
        </div>

        {/* Clean, Non-Oversized Grid with subtle separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 divide-[#e5e5e1] dark:divide-[#2b2c30]">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`pt-6 sm:pt-0 flex flex-col justify-between ${
                idx > 0 ? '' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 rounded-md bg-[#f7f7f5] dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30]">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#e5e5e1] dark:border-[#2b2c30] text-xs text-[#70706b] dark:text-[#9e9e98]">
          Proposed core modules. Individual configurations are customized to match your organization&apos;s specific processes.
        </div>
      </div>
    </section>
  );
}
