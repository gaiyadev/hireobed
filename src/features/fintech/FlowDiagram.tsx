import { motion } from 'framer-motion'
import { flowEdges, flowNodes } from '@/data/fintech'

const W = 170
const H = 64
const byId = Object.fromEntries(flowNodes.map((n) => [n.id, n]))

function anchor(id: string, side: 'l' | 'r' | 't' | 'b') {
  const n = byId[id]!
  if (side === 'l') return { x: n.x, y: n.y + H / 2 }
  if (side === 'r') return { x: n.x + W, y: n.y + H / 2 }
  if (side === 't') return { x: n.x + W / 2, y: n.y }
  return { x: n.x + W / 2, y: n.y + H }
}

function edgePath(from: string, to: string) {
  const a = byId[from]!
  const b = byId[to]!
  let p1; let p2
  if (Math.abs(a.x - b.x) < 10) { // vertical
    const down = b.y > a.y
    p1 = anchor(from, down ? 'b' : 't'); p2 = anchor(to, down ? 't' : 'b')
    return { d: `M${p1.x} ${p1.y} L${p2.x} ${p2.y}`, mid: { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 } }
  }
  p1 = anchor(from, 'r'); p2 = anchor(to, 'l')
  const mx = (p1.x + p2.x) / 2
  return { d: `M${p1.x} ${p1.y} C${mx} ${p1.y} ${mx} ${p2.y} ${p2.x} ${p2.y}`, mid: { x: mx, y: (p1.y + p2.y) / 2 } }
}

export function FlowDiagram() {
  return (
    <figure className="overflow-x-auto rounded-2xl border border-line bg-surface p-4 sm:p-6">
      <svg viewBox="0 0 1000 380" role="img" aria-labelledby="flow-title flow-desc" className="mx-auto min-w-[760px]">
        <title id="flow-title">Fintech transaction flow architecture</title>
        <desc id="flow-desc">A request moves from the client to an API gateway, which authenticates it and passes it to the transaction service. The transaction service posts entries to the ledger, stored in PostgreSQL, and emits events to a queue that drives the notification service.</desc>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10z" fill="var(--accent)" />
          </marker>
        </defs>

        {flowEdges.map(([from, to, step], i) => {
          const { d, mid } = edgePath(from, to)
          return (
            <g key={`${from}-${to}`}>
              <path d={d} fill="none" stroke="var(--border-strong)" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <motion.circle r="3.5" fill="var(--accent)"
                initial={{ offsetDistance: '0%' }} animate={{ offsetDistance: '100%' }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
                style={{ offsetPath: `path("${d}")` } as React.CSSProperties} />
              {step && (
                <g transform={`translate(${mid.x} ${mid.y})`}>
                  <circle r="9" fill="var(--bg)" stroke="var(--accent)" strokeOpacity="0.6" />
                  <text textAnchor="middle" dy="3.5" fontSize="10" fontFamily="Geist Mono, monospace" fill="var(--accent)">{step}</text>
                </g>
              )}
            </g>
          )
        })}

        {flowNodes.map((n) => (
          <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
            <rect width={W} height={H} rx="12" fill="var(--surface-2)" stroke="var(--border-strong)" />
            <text x={W / 2} y="27" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--fg)" fontFamily="Geist, sans-serif">{n.label}</text>
            <text x={W / 2} y="46" textAnchor="middle" fontSize="10.5" fill="var(--muted)" fontFamily="Geist Mono, monospace">{n.sub}</text>
          </g>
        ))}

        <text x="20" y="350" fontSize="11" fill="var(--subtle)" fontFamily="Geist Mono, monospace">
          Idempotency key checked at step 3 · ledger + state change committed in a single DB transaction · events published after commit
        </text>
      </svg>
    </figure>
  )
}
