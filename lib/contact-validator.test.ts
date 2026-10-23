import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactInquiry } from './contact-validator';

test('validateContactInquiry returns valid for complete inquiry', () => {
  const result = validateContactInquiry({
    fullName: 'Elena Rostova',
    workEmail: 'elena@novaworks.com',
    companyName: 'NovaWorks Ltd',
    helpTopic: 'Connecting sales to inventory',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactInquiry rejects missing or invalid fields', () => {
  const empty = validateContactInquiry({
    fullName: '',
    workEmail: 'not-an-email',
    companyName: '',
  });

  assert.equal(empty.isValid, false);
  assert.ok(empty.errors.fullName);
  assert.ok(empty.errors.workEmail);
  assert.ok(empty.errors.companyName);
});
