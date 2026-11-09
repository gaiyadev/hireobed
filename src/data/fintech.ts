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
    'FracXn (Dubai): loans, payroll, invoice financing, instant settlements; Lean Technologies, Emirates NBD, Stripe.',
    'Juiceme: NestJS wallet for an earned-wage product with idempotent payouts.',
    'Open source: Fincra Checkout SDKs for React Native and Flutter.',
  ],
}

/** Nodes for the architecture diagram. x/y are in a 1000x420 viewBox. */
export const flowNodes = [
  { id: 'client', label: 'Client', sub: 'Web / Mobile', x: 20, y: 170 },
  { id: 'api', label: 'API Gateway', sub: 'Rate limit · validation', x: 190, y: 170 },
  { id: 'auth', label: 'Auth', sub: 'JWT · scopes · KYC tier', x: 190, y: 40 },
  { id: 'txn', label: 'Transaction Service', sub: 'Idempotency · state machine', x: 400, y: 170 },
  { id: 'ledger', label: 'Ledger', sub: 'Double-entry postings', x: 620, y: 80 },
  { id: 'db', label: 'PostgreSQL', sub: 'ACID · row locks', x: 810, y: 80 },
  { id: 'queue', label: 'Queue', sub: 'Events · retries', x: 620, y: 270 },
  { id: 'notify', label: 'Notifications', sub: 'Webhook · email · push', x: 810, y: 270 },
] as const

export const flowEdges: ReadonlyArray<readonly [string, string, string?]> = [
  ['client', 'api', '1'],
  ['api', 'auth', '2'],
  ['api', 'txn', '3'],
  ['txn', 'ledger', '4'],
  ['ledger', 'db', '5'],
  ['txn', 'queue', '6'],
  ['queue', 'notify', '7'],
]
