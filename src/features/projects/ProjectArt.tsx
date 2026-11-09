import type { Project } from '@/data/types'

/** Placeholder artwork shown until `project.image` is provided. Deterministic per slug. */
export function ProjectArt({ project, className }: { project: Project; className?: string }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" className={className} />
  }
  const seed = [...project.slug].reduce((a, c) => a + c.charCodeAt(0), 0)
  const bars = Array.from({ length: 14 }, (_, i) => 20 + ((seed * (i + 3) * 7) % 70))
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className ?? ''}`} role="img" aria-label={`${project.name} artwork placeholder`}>
      <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <g fill="var(--accent)" opacity="0.22">
          {bars.map((h, i) => <rect key={i} x={20 + i * 27} y={200 - h * 1.8} width="14" height={h * 1.8} rx="3" />)}
        </g>
        <path d={`M0 ${120 + (seed % 40)} C 100 ${60 + (seed % 50)}, 200 ${170 - (seed % 40)}, 400 ${70 + (seed % 60)}`} stroke="var(--accent)" strokeWidth="1.5" fill="none" opacity="0.6" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="rounded-md border border-line-strong bg-glass px-3 py-1 font-mono text-xs tracking-wider text-fg backdrop-blur">{project.name}</span>
      </div>
    </div>
  )
}
