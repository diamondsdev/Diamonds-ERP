/**
 * Pure workflow and calculations engine for Diamonds ERP interactive demonstration.
 * Powers the signature connected cross-functional process simulation.
 */

export interface LineItem {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  unitPrice: number;
  unitCost: number;
}

export interface QuoteCalculationResult {
  subtotal: number;
  discountAmount: number;
  taxableAmount: number;
  taxAmount: number;
  total: number;
  totalCost: number;
  grossMarginAmount: number;
  grossMarginPercentage: number;
}

export interface InventoryCheckResult {
  sku: string;
  requested: number;
  available: number;
  allocated: number;
  remainingStock: number;
  status: 'fully_allocated' | 'partial_backorder' | 'out_of_stock';
}

export interface LedgerEntryResult {
  orderId: string;
  revenueRecognized: number;
  cogsRecognized: number;
  grossProfit: number;
  taxPayable: number;
  accountsReceivable: number;
  isBalanced: boolean;
}

export type StageId =
  | 'inquiry'
  | 'quote'
  | 'order'
  | 'inventory'
  | 'finance'
  | 'overview';

export interface WorkflowStageInfo {
  id: StageId;
  stepNumber: number;
  name: string;
  shortLabel: string;
  department: string;
  summary: string;
  actionTaken: string;
  systemImpact: string;
  sampleRecord: {
    title: string;
    metrics: Array<{ label: string; value: string }>;
  };
}

export const WORKFLOW_STAGES: WorkflowStageInfo[] = [
  {
    id: 'inquiry',
    stepNumber: 1,
    name: 'Customer Inquiry & Intake',
    shortLabel: 'Customer Inquiry',
    department: 'CRM & Accounts',
    summary: 'Prospective client inquiry registered and enriched with company profile data and service requirements.',
    actionTaken: 'Inquiry received via portal, assigned account lead, requirements structured into commercial scope.',
    systemImpact: 'Creates linked client record, establishes qualification profile, sets SLA timer for quote delivery.',
    sampleRecord: {
      title: 'Inquiry #INQ-8842 · Lumina Optics Corp',
      metrics: [
        { label: 'Client Tier', value: 'Commercial Enterprise' },
        { label: 'Scope', value: '450 Precision Sensors' },
        { label: 'Response SLA', value: '1.4 hrs remaining' },
        { label: 'Lead Owner', value: 'S. Vance (West Coast)' },
      ],
    },
  },
  {
    id: 'quote',
    stepNumber: 2,
    name: 'Sales Opportunity & Quotation',
    shortLabel: 'Sales Opportunity',
    department: 'Commercial Sales',
    summary: 'Commercial quote generated with real-time margin visibility, multi-tier pricing, and customer terms.',
    actionTaken: 'Standard price book applied with verified tier discount. Real-time margin check confirms 34.2% profitability.',
    systemImpact: 'Reserves price locked for 14 days, initiates automatic credit verification, alerts warehouse of potential draw.',
    sampleRecord: {
      title: 'Quote #QT-2026-904 · 450 Units SKU-FX7',
      metrics: [
        { label: 'Contract Value', value: '$42,500.00' },
        { label: 'Calculated Margin', value: '34.2% ($14,535)' },
        { label: 'Credit Check', value: 'Approved (Tier 1)' },
        { label: 'Approval Status', value: 'Authorized' },
      ],
    },
  },
  {
    id: 'order',
    stepNumber: 3,
    name: 'Order Authorization & Confirmation',
    shortLabel: 'Order Confirmation',
    department: 'Operations & Order Desk',
    summary: 'Customer signs contract; quote converts directly into active production and fulfillment order.',
    actionTaken: 'Customer countersign verified, order confirmation sent to customer, dispatch priority scheduled.',
    systemImpact: 'Zero re-entry error: line items, shipping addresses, and tax exemption codes transfer directly from quote.',
    sampleRecord: {
      title: 'Sales Order #SO-7740 · Lumina Optics Corp',
      metrics: [
        { label: 'Status', value: 'Confirmed & Committed' },
        { label: 'Scheduled Ship Date', value: 'Oct 28, 2026' },
        { label: 'Payment Terms', value: 'Net 30 · Wire' },
        { label: 'Routing Center', value: 'Central Logistics Hub' },
      ],
    },
  },
  {
    id: 'inventory',
    stepNumber: 4,
    name: 'Automated Inventory Allocation',
    shortLabel: 'Inventory Allocation',
    department: 'Supply & Warehousing',
    summary: 'System checks multi-facility warehouse stock, reserves serialized lots, and issues automated pick lists.',
    actionTaken: 'Facility #2 allocates 450 serialized units from lot LT-9812; automated pick-pack list dispatched to floor.',
    systemImpact: 'Available-to-promise inventory decrements across all channels instantly. Zero risk of double-selling stock.',
    sampleRecord: {
      title: 'Fulfillment Slip #PK-4019 · Warehouse Alpha',
      metrics: [
        { label: 'Allocated SKU', value: 'SKU-FX7 (450 units)' },
        { label: 'Warehouse Zone', value: 'Bay 14-C · Pallet 09' },
        { label: 'Remaining Stock', value: '1,280 units (Healthy)' },
        { label: 'Reorder Signal', value: 'Not required' },
      ],
    },
  },
  {
    id: 'finance',
    stepNumber: 5,
    name: 'Financial Ledger & AR Recognition',
    shortLabel: 'Financial Ledger',
    department: 'Finance & Accounting',
    summary: 'Goods dispatched triggers automatic journal entry, revenue recognition, tax calculation, and AR invoice.',
    actionTaken: 'System posts balanced debits and credits across Revenue, Cost of Goods Sold, and Accounts Receivable.',
    systemImpact: 'Zero end-of-month reconciliation backlog. Both cash flow forecasts and tax liabilities update instantly.',
    sampleRecord: {
      title: 'Invoice #INV-2026-118 · Ledger Batch #4492',
      metrics: [
        { label: 'Debit (AR)', value: '$42,500.00' },
        { label: 'Credit (Revenue)', value: '$42,500.00' },
        { label: 'COGS Journal', value: '$27,965.00' },
        { label: 'Ledger State', value: 'Reconciled & Balanced' },
      ],
    },
  },
  {
    id: 'overview',
    stepNumber: 6,
    name: 'Executive Management Visibility',
    shortLabel: 'Management Overview',
    department: 'Executive Leadership',
    summary: 'Executive dashboard reflects margin realization, inventory velocity, and projected cash collection.',
    actionTaken: 'Executive KPI cards update with contribution margin, customer lifetime value, and regional fulfillment metrics.',
    systemImpact: 'Leadership views unified reality without waiting for departmental reports, spreadsheets, or manual audits.',
    sampleRecord: {
      title: 'Executive Impact · Q4 Operational Review',
      metrics: [
        { label: 'Cycle Time', value: '4.2 hrs (Target: <6h)' },
        { label: 'Gross Margin Added', value: '+$14,535.00' },
        { label: 'Inventory Turnover', value: '8.4x annualized' },
        { label: 'Audit Trail', value: '100% Immutable log' },
      ],
    },
  },
];

/**
 * Calculates financial totals for an ERP quotation with line items and discounts.
 */
export function calculateQuoteTotal(
  items: LineItem[],
  discountPercentage: number = 0,
  taxRate: number = 0
): QuoteCalculationResult {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Discount percentage must be between 0 and 100');
  }
  if (taxRate < 0) {
    throw new Error('Tax rate must be non-negative');
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
  const totalCost = items.reduce(
    (sum, item) => sum + item.quantity * item.unitCost,
    0
  );

  const discountAmount = Math.round(subtotal * (discountPercentage / 100) * 100) / 100;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxAmount = Math.round(taxableAmount * taxRate * 100) / 100;
  const total = Math.round((taxableAmount + taxAmount) * 100) / 100;

  const grossMarginAmount = Math.round((taxableAmount - totalCost) * 100) / 100;
  const grossMarginPercentage =
    taxableAmount > 0
      ? Math.round((grossMarginAmount / taxableAmount) * 1000) / 10
      : 0;

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    discountAmount,
    taxableAmount,
    taxAmount,
    total,
    totalCost: Math.round(totalCost * 100) / 100,
    grossMarginAmount,
    grossMarginPercentage,
  };
}

/**
 * Validates inventory availability and calculates allocations.
 */
export function validateInventoryAllocation(
  sku: string,
  requestedQuantity: number,
  availableQuantity: number
): InventoryCheckResult {
  if (requestedQuantity <= 0) {
    throw new Error('Requested quantity must be greater than zero');
  }

  const available = Math.max(0, availableQuantity);
  const allocated = Math.min(requestedQuantity, available);
  const remainingStock = Math.max(0, available - allocated);

  let status: InventoryCheckResult['status'] = 'fully_allocated';
  if (allocated === 0) {
    status = 'out_of_stock';
  } else if (allocated < requestedQuantity) {
    status = 'partial_backorder';
  }

  return {
    sku,
    requested: requestedQuantity,
    available,
    allocated,
    remainingStock,
    status,
  };
}

/**
 * Posts and verifies balanced double-entry ledger bookkeeping.
 */
export function computeLedgerEntry(
  orderId: string,
  invoiceAmount: number,
  cogsAmount: number,
  taxRate: number = 0
): LedgerEntryResult {
  const taxPayable = Math.round(invoiceAmount * taxRate * 100) / 100;
  const accountsReceivable = Math.round((invoiceAmount + taxPayable) * 100) / 100;
  const grossProfit = Math.round((invoiceAmount - cogsAmount) * 100) / 100;

  // Debit AR == Credit Revenue + Credit Tax
  const isBalanced =
    Math.abs(accountsReceivable - (invoiceAmount + taxPayable)) < 0.001;

  return {
    orderId,
    revenueRecognized: invoiceAmount,
    cogsRecognized: cogsAmount,
    grossProfit,
    taxPayable,
    accountsReceivable,
    isBalanced,
  };
}

/**
 * State transition for stepping through workflow simulation.
 */
export function transitionWorkflowStage(
  currentStageId: StageId,
  direction: 'next' | 'prev'
): StageId {
  const currentIndex = WORKFLOW_STAGES.findIndex(
    (stage) => stage.id === currentStageId
  );
  if (currentIndex === -1) return WORKFLOW_STAGES[0].id;

  if (direction === 'next') {
    const nextIndex = Math.min(WORKFLOW_STAGES.length - 1, currentIndex + 1);
    return WORKFLOW_STAGES[nextIndex].id;
  } else {
    const prevIndex = Math.max(0, currentIndex - 1);
    return WORKFLOW_STAGES[prevIndex].id;
  }
}

/**
 * Calculates workflow completion percentage.
 */
export function calculateWorkflowProgress(stageId: StageId): number {
  const index = WORKFLOW_STAGES.findIndex((s) => s.id === stageId);
  if (index === -1) return 0;
  return Math.round(((index + 1) / WORKFLOW_STAGES.length) * 100);
}
