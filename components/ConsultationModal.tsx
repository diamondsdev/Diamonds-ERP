'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Mail, Building, User } from 'lucide-react';
import { validateContactInquiry } from '@/lib/contact-validator';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    helpTopic: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactInquiry(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      helpTopic: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#16171a] border border-[#e5e5e1] dark:border-[#2b2c30] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <h2 id="consultation-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Talk to Our Team
            </h2>
            <p className="text-xs text-[#70706b] dark:text-[#9e9e98] leading-relaxed mb-6">
              Tell us about your business and what you need. Let&apos;s explore whether Diamonds ERP is the right fit.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Sarah Jenkins"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border bg-white dark:bg-[#1c1d22] text-slate-900 dark:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6] ${
                      errors.fullName
                        ? 'border-rose-400 dark:border-rose-500'
                        : 'border-[#e5e5e1] dark:border-[#2b2c30]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Work Email <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="sarah@company.com"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border bg-white dark:bg-[#1c1d22] text-slate-900 dark:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6] ${
                      errors.workEmail
                        ? 'border-rose-400 dark:border-rose-500'
                        : 'border-[#e5e5e1] dark:border-[#2b2c30]'
                    }`}
                  />
                </div>
                {errors.workEmail && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.workEmail}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  Company Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Acme Operations"
                    className={`w-full pl-9 pr-3 py-2 text-xs rounded-lg border bg-white dark:bg-[#1c1d22] text-slate-900 dark:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6] ${
                      errors.companyName
                        ? 'border-rose-400 dark:border-rose-500'
                        : 'border-[#e5e5e1] dark:border-[#2b2c30]'
                    }`}
                  />
                </div>
                {errors.companyName && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* What do you need help with? (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                  What do you need help with? <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.helpTopic}
                  onChange={(e) => setFormData({ ...formData, helpTopic: e.target.value })}
                  placeholder="e.g. Managing inventory across multiple locations or reducing manual spreadsheets..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#e5e5e1] dark:border-[#2b2c30] bg-white dark:bg-[#1c1d22] text-slate-900 dark:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3478f6]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#20201e] hover:bg-[#121211] dark:bg-[#3478f6] dark:hover:bg-[#2365e4] rounded-lg transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  Send Consultation Inquiry
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-[#70706b] dark:text-[#9e9e98] text-center pt-1">
                Consultation inquiry · Frontend preview demonstration
              </div>
            </form>
          </div>
        ) : (
          /* Honest Confirmation State */
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Inquiry Recorded (Preview Mode)
              </h3>
              <p className="text-xs text-[#70706b] dark:text-[#9e9e98] mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800 dark:text-slate-200">{formData.fullName}</strong>.
                Your inquiry for <strong className="text-slate-800 dark:text-slate-200">{formData.companyName}</strong> has been logged in this demonstration preview.
              </p>
              <p className="text-[11px] text-[#70706b] dark:text-[#9e9e98] mt-2 italic max-w-xs mx-auto">
                Note: Backend email delivery is not connected in this marketing preview. In the production deployment, our team will contact {formData.workEmail}.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-[#3478f6]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
