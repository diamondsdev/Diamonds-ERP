/**
 * Validation logic for the streamlined Diamonds ERP consultation inquiry.
 */

export interface ContactInquiry {
  fullName: string;
  workEmail: string;
  companyName: string;
  helpTopic?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactInquiry(inquiry: ContactInquiry): ValidationResult {
  const errors: Record<string, string> = {};

  if (!inquiry.fullName || inquiry.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!inquiry.workEmail || !emailRegex.test(inquiry.workEmail.trim())) {
    errors.workEmail = 'Please enter a valid work email address.';
  }

  if (!inquiry.companyName || inquiry.companyName.trim().length < 2) {
    errors.companyName = 'Please enter your company name.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
