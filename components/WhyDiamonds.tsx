import React from 'react';
import { Check } from 'lucide-react';

export function WhyDiamonds() {
  const benefits = [
    {
      title: 'One connected workspace',
      description: 'Keep business information organized in one place.',
    },
    {
      title: 'Better visibility',
      description: "Understand what's happening across your operations.",
    },
    {
      title: 'More efficient workflows',
      description: 'Help your team reduce fragmented processes.',
    },
  ];

  return (
    <section id="why-diamonds" className="py-20 sm:py-24 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-[#f7f7f5] dark:bg-[#151618]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#70706b] dark:text-[#9e9e98] mb-2">
            Why Diamonds
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Less complexity. More control.
          </h2>
        </div>

        {/* 3 Concise Benefits - Clean, Notion-like Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-xl bg-white dark:bg-[#1a1b1e] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
