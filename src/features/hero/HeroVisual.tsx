import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { site } from '@/data/site'

/** Portrait frame (placeholder until site.portrait is set) with a quiet animated network of nodes behind it. */
export function HeroVisual() {
  const nodes = [
    { x: 40, y: 90 }, { x: 330, y: 60 }, { x: 370, y: 250 }, { x: 60, y: 330 }, { x: 200, y: 20 },
  ]
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <g stroke="var(--accent)" strokeOpacity="0.35" fill="none">
          <motion.circle cx="200" cy="200" r="150" strokeDasharray="2 8" animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 200px' }} />
          <motion.circle cx="200" cy="200" r="185" strokeDasharray="1 12" animate={{ rotate: -360 }} transition={{ duration: 140, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 200px' }} />
          {nodes.map((n, i) => (
            <line key={i} x1="200" y1="200" x2={n.x} y2={n.y} strokeOpacity="0.15" />
          ))}
        </g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="4" fill="var(--accent)" />
            <motion.circle
              cx={n.x} cy={n.y} r="4" fill="none" stroke="var(--accent)"
              animate={{ r: [4, 16], opacity: [0.7, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.55, ease: 'easeOut' }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-[17%] overflow-hidden rounded-3xl border border-line-strong bg-surface shadow-[0_0_80px_-20px_var(--accent)]">
        {site.portrait ? (
          <img src={site.portrait} alt={`Portrait of ${site.name}`} className="h-full w-full object-cover" width={400} height={400} />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface-2 to-surface text-subtle">
            <div className="text-center">
              <User size={56} strokeWidth={1.2} className="mx-auto" />
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest">Portrait placeholder</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
