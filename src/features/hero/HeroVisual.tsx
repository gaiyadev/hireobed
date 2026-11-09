import { m } from 'framer-motion'
import { site } from '@/data/site'

const nodes = [
  { x: 48, y: 96 }, { x: 330, y: 64 }, { x: 362, y: 250 }, { x: 64, y: 322 }, { x: 200, y: 24 },
]

/** Portrait inside a quiet network of nodes. Animation is transform/opacity only. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] lg:max-w-md">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <g stroke="var(--accent)" fill="none">
          <m.circle cx="200" cy="200" r="150" strokeOpacity="0.3" strokeDasharray="2 8" animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 200px' }} />
          <circle cx="200" cy="200" r="184" strokeOpacity="0.12" />
          {nodes.map((n, i) => <line key={i} x1="200" y1="200" x2={n.x} y2={n.y} strokeOpacity="0.14" />)}
        </g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="4" fill="var(--accent)" />
            <m.circle cx={n.x} cy={n.y} r="4" fill="none" stroke="var(--accent)" initial={{ opacity: 0 }}
              animate={{ scale: [1, 4], opacity: [0.6, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: 'easeOut' }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }} />
          </g>
        ))}
      </svg>
      <div className="absolute inset-[17%] overflow-hidden rounded-3xl border border-line-strong bg-surface">
        <img src={site.portrait} alt={`Portrait of ${site.name}`} width={460} height={460} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
      </div>
    </div>
  )
}
