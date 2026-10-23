import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateQuoteTotal,
  validateInventoryAllocation,
  computeLedgerEntry,
  transitionWorkflowStage,
  calculateWorkflowProgress,
  WORKFLOW_STAGES,
  LineItem,
} from './workflow-engine';

test('calculateQuoteTotal correctly computes subtotals, margins, and taxes', () => {
  const items: LineItem[] = [
    {
      id: '1',
      sku: 'SKU-FX7',
      name: 'Precision Optical Sensor',
      quantity: 450,
      unitPrice: 100, // $45,000 subtotal
      unitCost: 65,   // $29,250 cost
    },
  ];

  // 10% discount, 5% tax
  const result = calculateQuoteTotal(items, 10, 0.05);

  assert.equal(result.subtotal, 45000);
  assert.equal(result.discountAmount, 4500);
  assert.equal(result.taxableAmount, 40500);
  assert.equal(result.taxAmount, 2025);
  assert.equal(result.total, 42525);
  assert.equal(result.totalCost, 29250);
  assert.equal(result.grossMarginAmount, 11250);
  // (11250 / 40500) * 100 = 27.8%
  assert.equal(result.grossMarginPercentage, 27.8);
});

test('calculateQuoteTotal throws on invalid discount rates', () => {
  const items: LineItem[] = [
    { id: '1', sku: 'A', name: 'Item', quantity: 1, unitPrice: 10, unitCost: 5 },
  ];
  assert.throws(() => calculateQuoteTotal(items, -5, 0));
  assert.throws(() => calculateQuoteTotal(items, 105, 0));
});

test('validateInventoryAllocation handles full allocation, partial backorder, and out of stock', () => {
  const full = validateInventoryAllocation('SKU-FX7', 450, 1000);
  assert.equal(full.allocated, 450);
  assert.equal(full.remainingStock, 550);
  assert.equal(full.status, 'fully_allocated');

  const partial = validateInventoryAllocation('SKU-FX7', 450, 300);
  assert.equal(partial.allocated, 300);
  assert.equal(partial.remainingStock, 0);
  assert.equal(partial.status, 'partial_backorder');

  const empty = validateInventoryAllocation('SKU-FX7', 450, 0);
  assert.equal(empty.allocated, 0);
  assert.equal(empty.remainingStock, 0);
  assert.equal(empty.status, 'out_of_stock');
});

test('computeLedgerEntry ensures balanced double-entry equation', () => {
  const ledger = computeLedgerEntry('SO-7740', 42500, 27965, 0.08);

  assert.equal(ledger.orderId, 'SO-7740');
  assert.equal(ledger.revenueRecognized, 42500);
  assert.equal(ledger.taxPayable, 3400);
  assert.equal(ledger.accountsReceivable, 45900);
  assert.equal(ledger.grossProfit, 14535);
  assert.equal(ledger.isBalanced, true);
});

test('transitionWorkflowStage cycles through all 6 stages correctly', () => {
  assert.equal(WORKFLOW_STAGES.length, 6);

  let stage = transitionWorkflowStage('inquiry', 'next');
  assert.equal(stage, 'quote');

  stage = transitionWorkflowStage(stage, 'next');
  assert.equal(stage, 'order');

  stage = transitionWorkflowStage(stage, 'next');
  assert.equal(stage, 'inventory');

  stage = transitionWorkflowStage(stage, 'next');
  assert.equal(stage, 'finance');

  stage = transitionWorkflowStage(stage, 'next');
  assert.equal(stage, 'overview');

  // Boundary check: cannot go beyond overview
  const edge = transitionWorkflowStage('overview', 'next');
  assert.equal(edge, 'overview');

  // Rewind check
  const back = transitionWorkflowStage('overview', 'prev');
  assert.equal(back, 'finance');
});

test('calculateWorkflowProgress computes accurate percentages', () => {
  assert.equal(calculateWorkflowProgress('inquiry'), 17);
  assert.equal(calculateWorkflowProgress('order'), 50);
  assert.equal(calculateWorkflowProgress('overview'), 100);
});
