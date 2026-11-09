import { useState } from 'react'
import { flowEdges, flowNodes, flowSteps } from '@/data/fintech'
import { cn } from '@/lib/cn'

const COL_X = [10, 210, 410, 610, 810]
const ROW_Y = [30, 170, 310]
const W = 150
const H = 64

export function FlowDiagram() {
  const [active, setActive] = useState<number | null>(null)
  const step = active === null ? null : flowSteps[active]
  const nodeOn = (id: string) => !step || step.nodes.includes(id)
  const edgeOn = (id: string) => !step || step.edges.includes(id)

  return (
    <div>
      <figure className="hidden rounded-2xl border border-line bg-surface p-6 md:block">
        <svg viewBox="0 0 970 420" role="img" aria-labelledby="flow-title flow-desc" className="h-auto w-full">
          <title id="flow-title">Fintech transaction architecture</title>
          <desc id="flow-desc">
            A request flows from the client through an API gateway with authentication, to a transaction service that deduplicates with Redis,
            reserves funds in a wallet service, and posts to a ledger committed atomically in PostgreSQL. Events are published to a message queue
            that drives notifications. Provider webhooks are verified and queued. Reconciliation compares the ledger to provider records.
          </desc>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10z" fill="var(--accent)" />
            </marker>
          </defs>

          {flowEdges.map((e) => {
            const on = edgeOn(e.id)
            const nums = (e.d.match(/-?\d+/g) ?? []).map(Number)
            const lx = ((nums[0] ?? 0) + (nums[nums.length - 2] ?? 0)) / 2
            const ly = ((nums[1] ?? 0) + (nums[nums.length - 1] ?? 0)) / 2
            return (
              <g key={e.id} className={cn('transition-opacity', !on && 'opacity-15')}>
                <path d={e.d} fill="none" stroke={on && step ? 'var(--accent)' : 'var(--border-strong)'} strokeWidth="1.5" strokeDasharray={e.dashed ? '4 4' : undefined} markerEnd="url(#arrow)" />
                {e.label && (
                  <g transform={`translate(${lx} ${ly})`}>
                    <circle r="9" fill="var(--bg)" stroke="var(--accent)" strokeOpacity="0.6" />
                    <text textAnchor="middle" dy="3.5" fontSize="10" fontFamily="var(--font-mono)" fill="var(--accent)">{e.label}</text>
                  </g>
                )}
              </g>
            )
          })}

          {flowNodes.map((n) => {
            const on = nodeOn(n.id)
            return (
              <g key={n.id} transform={`translate(${COL_X[n.col]} ${ROW_Y[n.row]})`} className={cn('transition-opacity', !on && 'opacity-25')}>
                <rect width={W} height={H} rx="12" fill="var(--surface-2)" stroke={on && step ? 'var(--accent)' : 'var(--border-strong)'} strokeDasharray={n.external ? '4 3' : undefined} />
                <text x={W / 2} y="27" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--fg)" fontFamily="var(--font-sans)">{n.label}</text>
                <text x={W / 2} y="45" textAnchor="middle" fontSize="9.5" fill="var(--muted)" fontFamily="var(--font-mono)">{n.sub}</text>
              </g>
            )
          })}

          <text x="10" y="410" fontSize="11" fill="var(--subtle)" fontFamily="var(--font-mono)">
            Solid: request path · Dashed: supporting calls · Dashed boxes: external systems · A–C: asynchronous paths
          </text>
        </svg>
      </figure>

      <h3 className="mb-3 mt-8 font-mono text-xs uppercase tracking-[0.18em] text-accent md:mt-6">Request lifecycle</h3>
      <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3" onMouseLeave={() => setActive(null)}>
        {flowSteps.map((s, i) => (
          <li key={s.label}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={cn(
                'flex h-full w-full gap-3 rounded-xl border bg-surface p-4 text-left transition',
                active === i ? 'border-accent' : 'border-line hover:border-line-strong',
              )}
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-accent/50 font-mono text-[11px] text-accent">{s.label}</span>
              <span>
                <span className="block text-sm font-semibold">{s.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">{s.body}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
