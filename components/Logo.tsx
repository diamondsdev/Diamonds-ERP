import React from 'react';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className = 'h-7 w-auto', showWordmark = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Subtle Geometric Faceted Brand Motif */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#20201e] to-[#121211] dark:from-[#3478f6] dark:to-[#1e40af] text-white shadow-xs">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          aria-hidden="true"
        >
          {/* Subtle geometric faceted polygon - represents connected nodes & clarity */}
          <polygon
            points="16,3 27,10 27,22 16,29 5,22 5,10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="opacity-90"
          />
          <line
            x1="16"
            y1="3"
            x2="16"
            y2="29"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 1"
            className="opacity-70"
          />
          <line
            x1="5"
            y1="10"
            x2="27"
            y2="10"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-60"
          />
          <line
            x1="5"
            y1="22"
            x2="27"
            y2="22"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-60"
          />
          <circle cx="16" cy="16" r="2.2" fill="currentColor" className="opacity-95" />
        </svg>
      </div>

      {showWordmark && (
        <span className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900 dark:text-white text-lg">
          Diamonds
          <span className="text-xs font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#3478f6] dark:text-[#60a5fa] border border-slate-200 dark:border-slate-700/60">
            ERP
          </span>
        </span>
      )}
    </div>
  );
}
