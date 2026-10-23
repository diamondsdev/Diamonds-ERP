'use client';

import React, { useState, useEffect } from 'react';
import {
  WORKFLOW_STAGES,
  StageId,
  transitionWorkflowStage,
  calculateWorkflowProgress,
} from '@/lib/workflow-engine';
import {
  ArrowRight,
  ArrowLeft,
  Play,
  RotateCcw,
  CheckCircle2,
  Building2,
  Boxes,
  BookOpenCheck,
  TrendingUp,
  FileCheck,
  UserCheck,
} from 'lucide-react';

export function InteractiveWorkflow() {
  const [currentStageId, setCurrentStageId] = useState<StageId>('inquiry');
  const [isSimulating, setIsSimulating] = useState(false);

  const currentStage =
    WORKFLOW_STAGES.find((s) => s.id === currentStageId) || WORKFLOW_STAGES[0];
  const progressPercent = calculateWorkflowProgress(currentStageId);

  // Auto-play simulation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setTimeout(() => {
        if (currentStageId === 'overview') {
          setIsSimulating(false);
        } else {
          setCurrentStageId((prev) => transitionWorkflowStage(prev, 'next'));
        }
      }, 2400);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, currentStageId]);

  const handleStep = (direction: 'next' | 'prev') => {
    setIsSimulating(false);
    setCurrentStageId((prev) => transitionWorkflowStage(prev, direction));
  };

  const handleReset = () => {
    setIsSimulating(false);
    setCurrentStageId('inquiry');
  };

  const getDepartmentIcon = (id: StageId) => {
    switch (id) {
      case 'inquiry':
        return <UserCheck className="w-4 h-4 text-[#3478f6]" />;
      case 'quote':
        return <Building2 className="w-4 h-4 text-[#3478f6]" />;
      case 'order':
        return <FileCheck className="w-4 h-4 text-[#3478f6]" />;
      case 'inventory':
        return <Boxes className="w-4 h-4 text-[#3478f6]" />;
      case 'finance':
        return <BookOpenCheck className="w-4 h-4 text-[#3478f6]" />;
      case 'overview':
        return <TrendingUp className="w-4 h-4 text-[#3478f6]" />;
    }
  };

  return (
    <section id="workflow" className="py-20 sm:py-28 border-t border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#111110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#70706b] dark:text-[#9e9e98] mb-3">
            Signature Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-balance">
            How business data cascades without manual handoffs.
          </h2>
          <p className="text-base sm:text-lg text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
            Follow an order lifecycle from the initial commercial inquiry to the final
            financial recognition. See how Diamonds maintains transactional consistency
            across every department.
          </p>
        </div>

        {/* Workflow Stage Horizontal Rail (Desktop) / Vertical Stepper (Mobile) */}
        <div className="mb-10">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs text-[#70706b] dark:text-[#9e9e98] mb-3 font-medium">
            <span>
              Stage {currentStage.stepNumber} of 6 ·{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                {currentStage.name}
              </strong>
            </span>
            <span className="font-mono">{progressPercent}% Completed</span>
          </div>

          {/* Progress bar track */}
          <div className="w-full bg-[#efefec] dark:bg-[#222327] h-1.5 rounded-full overflow-hidden mb-6">
            <div
              className="bg-[#3478f6] h-full transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Clickable Stage Rail */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {WORKFLOW_STAGES.map((stage) => {
              const isCurrent = stage.id === currentStageId;
              const isPast = stage.stepNumber < currentStage.stepNumber;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    setIsSimulating(false);
                    setCurrentStageId(stage.id);
                  }}
                  className={`p-3 text-left rounded-lg border transition-all text-xs flex flex-col justify-between min-h-[96px] ${
                    isCurrent
                      ? 'bg-slate-900 text-white dark:bg-[#3478f6] dark:text-white border-slate-900 dark:border-[#3478f6] shadow-sm'
                      : isPast
                      ? 'bg-[#f7f7f5] dark:bg-[#18191c] text-slate-800 dark:text-slate-200 border-[#e5e5e1] dark:border-[#2b2c30] hover:border-slate-400'
                      : 'bg-white dark:bg-[#141517] text-[#70706b] dark:text-[#9e9e98] border-[#e5e5e1] dark:border-[#2b2c30] hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-[11px] ${
                        isCurrent
                          ? 'text-slate-300 dark:text-blue-100'
                          : 'text-[#70706b] dark:text-[#9e9e98]'
                      }`}
                    >
                      0{stage.stepNumber}
                    </span>
                    {isPast && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold leading-tight line-clamp-1">
                      {stage.shortLabel}
                    </div>
                    <div
                      className={`text-[10px] mt-0.5 line-clamp-1 ${
                        isCurrent
                          ? 'text-slate-300 dark:text-blue-100'
                          : 'text-[#70706b] dark:text-[#9e9e98]'
                      }`}
                    >
                      {stage.department}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <div className="rounded-xl bg-[#f7f7f5] dark:bg-[#16171a] border border-[#e5e5e1] dark:border-[#2b2c30] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Block (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-[#202125] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-xs">
                  {getDepartmentIcon(currentStage.id)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#3478f6] uppercase tracking-wider">
                    {currentStage.department}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {currentStage.name}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentStage.summary}
              </p>

              {/* Action Taken & System Impact */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-white dark:bg-[#1e1f23] border border-[#e5e5e1] dark:border-[#2b2c30]">
                  <div className="text-xs font-semibold text-slate-900 dark:text-white mb-1">
                    Operational Action Triggered:
                  </div>
                  <p className="text-xs text-[#70706b] dark:text-[#9e9e98] leading-relaxed">
                    {currentStage.actionTaken}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#3478f6]/5 dark:bg-[#3478f6]/10 border border-[#3478f6]/20">
                  <div className="text-xs font-semibold text-[#3478f6] dark:text-[#60a5fa] mb-1">
                    Cross-Department Ledger Impact:
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentStage.systemImpact}
                  </p>
                </div>
              </div>

              {/* Interactive Controller Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#e5e5e1] dark:border-[#2b2c30]">
                <button
                  type="button"
                  onClick={() => handleStep('prev')}
                  disabled={currentStage.stepNumber === 1}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#1a1b1e] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#222327] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Previous Stage
                </button>

                <button
                  type="button"
                  onClick={() => handleStep('next')}
                  disabled={currentStage.stepNumber === 6}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#20201e] hover:bg-[#121211] dark:bg-[#3478f6] dark:hover:bg-[#2365e4] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
                >
                  Advance Stage
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                    isSimulating
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800'
                      : 'border border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#1a1b1e] text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-pulse' : ''}`} />
                  {isSimulating ? 'Pause Flow' : 'Simulate Lifecycle'}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Reset simulation to stage 1"
                  className="p-2 text-xs rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-auto"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Synchronized Record Inspector (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#1b1c20] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e1] dark:border-[#2b2c30] mb-4">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#70706b] dark:text-[#9e9e98]">
                    Live System Record Inspector
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                    Synchronized
                  </span>
                </div>

                <div className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                  {currentStage.sampleRecord.title}
                </div>

                <div className="space-y-3">
                  {currentStage.sampleRecord.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-2.5 rounded-lg bg-[#f7f7f5] dark:bg-[#222328] flex items-center justify-between text-xs"
                    >
                      <span className="text-[#70706b] dark:text-[#9e9e98]">
                        {metric.label}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white font-mono">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#e5e5e1] dark:border-[#2b2c30] text-[11px] text-[#70706b] dark:text-[#9e9e98] leading-normal flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    Deterministic audit event generated for this stage with cryptographic proof hash.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
