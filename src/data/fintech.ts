export const fintech = {
  title: 'Building the Financial Infrastructure Behind Digital Products.',
  intro:
    'Moving money is different from moving data. Balances must reconcile, retries must not double-charge, and providers will send the same webhook twice. This is the part of the stack I specialize in.',
  topics: [
    { title: 'Digital wallet architecture', body: 'Wallets as ledger-backed accounts, not a balance column that gets overwritten.' },
    { title: 'Double-entry bookkeeping', body: 'Every movement recorded as balanced debits and credits so totals can always be proven.' },
    { title: 'Payment integrations', body: 'Gateways, banks, and open banking APIs behind clean internal interfaces.' },
    { title: 'Transaction lifecycle', body: 'Explicit states (pending, processing, settled, failed, reversed) with safe transitions.' },
    { title: 'Idempotency', body: 'Idempotency keys so client retries and network failures never produce duplicate transfers.' },
    { title: 'Concurrency control', body: 'Database transactions and locking so simultaneous requests cannot overdraw a balance.' },
    { title: 'Webhook processing', body: 'Verified signatures, deduplication, and replay-safe handlers.' },
    { title: 'Payment reconciliation', body: 'Matching internal records against provider data to catch and resolve drift.' },
    { title: 'Secure API design', body: 'Strong authentication, scoped authorization, and validation at every boundary.' },
    { title: 'Distributed transactions', body: 'Queues and compensating actions where a single database transaction cannot span the work.' },
  ],
  /** Real systems built, from the CV. */
  evidence: [
    'DigiSpray: wallet engine with ledger balances, idempotency keys, verified webhooks, reconciliation, KYC.',
    'Zuka: WhatsApp money assistant with review-and-approve transfers, duplicate-send prevention, and identity verification outside the chat.',
    'FracXn (Dubai): loans, payroll, invoice financing, instant settlements; Lean Technologies, Emirates NBD, Stripe.',
    'Juiceme: NestJS wallet for an earned-wage product with idempotent payouts.',
    'Open source: Fincra Checkout SDKs for React Native and Flutter.',
  ],
}

export interface FlowNode { id: string; label: string; sub: string; col: number; row: number; external?: boolean }
export interface FlowEdge { id: string; d: string; dashed?: boolean; label?: string; both?: boolean }
export interface FlowStep { label: string; title: string; body: string; nodes: string[]; edges: string[] }

/** Diagram grid: 5 columns x 3 rows. See FlowDiagram for the geometry. */
export const flowNodes: FlowNode[] = [
  { id: 'client', label: 'Client', sub: 'Web · mobile', col: 0, row: 0, external: true },
  { id: 'gateway', label: 'API Gateway', sub: 'Limits · validation', col: 1, row: 0 },
  { id: 'txn', label: 'Transaction Service', sub: 'Idempotent · states', col: 2, row: 0 },
  { id: 'wallet', label: 'Wallet Service', sub: 'Balances · holds', col: 3, row: 0 },
  { id: 'ledger', label: 'Ledger Service', sub: 'Double-entry', col: 4, row: 0 },
  { id: 'auth', label: 'Auth', sub: 'AuthN · AuthZ', col: 1, row: 1 },
  { id: 'redis', label: 'Redis', sub: 'Keys · locks · cache', col: 3, row: 1 },
  { id: 'pg', label: 'PostgreSQL', sub: 'ACID · row locks', col: 4, row: 1 },
  { id: 'provider', label: 'Payment Provider', sub: 'Gateway · bank', col: 0, row: 2, external: true },
  { id: 'webhooks', label: 'Webhook Processing', sub: 'Verify · dedupe', col: 1, row: 2 },
  { id: 'queue', label: 'Message Queue', sub: 'Events · retries', col: 2, row: 2 },
  { id: 'notify', label: 'Notifications', sub: 'Webhook · email', col: 3, row: 2 },
  { id: 'recon', label: 'Reconciliation', sub: 'Ledger vs provider', col: 4, row: 2 },
]

export const flowEdges: FlowEdge[] = [
  { id: 'e1', d: 'M160 62 L210 62', label: '1' },
  { id: 'e2', d: 'M285 94 L285 170', label: '2' },
  { id: 'e3', d: 'M360 62 L410 62', label: '3' },
  { id: 'e4', d: 'M530 94 C530 140 640 120 640 170', dashed: true, label: '4' },
  { id: 'e5', d: 'M560 62 L610 62', label: '5' },
  { id: 'e6', d: 'M760 62 L810 62', label: '6' },
  { id: 'e7', d: 'M885 94 L885 170', label: '7' },
  { id: 'e8', d: 'M485 94 L485 310', label: '8' },
  { id: 'e9', d: 'M560 342 L610 342', label: '9' },
  { id: 'w1', d: 'M160 342 L210 342', label: 'A' },
  { id: 'w2', d: 'M360 342 L410 342', label: 'B' },
  { id: 'r1', d: 'M885 234 L885 310', label: 'C' },
  { id: 'c1', d: 'M685 94 L685 170', dashed: true },
]

export const flowSteps: FlowStep[] = [
  { label: '1', title: 'Request in', body: 'The client sends the request with an idempotency key. The gateway applies rate limits and validates the payload.', nodes: ['client', 'gateway'], edges: ['e1'] },
  { label: '2', title: 'Authenticate and authorize', body: 'Identity is verified and the caller’s scopes are checked before any money logic runs.', nodes: ['gateway', 'auth'], edges: ['e2'] },
  { label: '3', title: 'Open the transaction', body: 'The transaction service records the request in a pending state and enforces a strict state machine.', nodes: ['gateway', 'txn'], edges: ['e3'] },
  { label: '4', title: 'Deduplicate', body: 'The idempotency key is checked in Redis, so a retried request returns the original result instead of moving money twice.', nodes: ['txn', 'redis'], edges: ['e4'] },
  { label: '5', title: 'Reserve funds', body: 'The wallet service checks the balance and limits and places a hold, using locks so concurrent requests cannot overdraw.', nodes: ['txn', 'wallet', 'redis'], edges: ['e5', 'c1'] },
  { label: '6', title: 'Post to the ledger', body: 'The ledger records balanced debit and credit entries. Balances are derived from entries, never overwritten.', nodes: ['wallet', 'ledger'], edges: ['e6'] },
  { label: '7', title: 'Commit atomically', body: 'Ledger entries and the transaction state change commit in a single PostgreSQL transaction.', nodes: ['ledger', 'pg'], edges: ['e7'] },
  { label: '8', title: 'Publish events after commit', body: 'Only committed changes are published to the queue, with retries and a dead-letter queue for failures.', nodes: ['txn', 'queue'], edges: ['e8'] },
  { label: '9', title: 'Notify', body: 'Consumers send webhooks, emails, and push notifications without blocking the request.', nodes: ['queue', 'notify'], edges: ['e9'] },
  { label: 'A', title: 'Provider webhooks', body: 'Payment providers call back asynchronously. Signatures are verified, duplicates dropped, and events enqueued so handlers are safe to replay.', nodes: ['provider', 'webhooks', 'queue'], edges: ['w1', 'w2'] },
  { label: 'C', title: 'Reconcile', body: 'A scheduled job compares ledger records with provider data so any drift is found and resolved, not discovered by customers.', nodes: ['pg', 'recon'], edges: ['r1'] },
]
