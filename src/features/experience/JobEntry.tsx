import type { Job } from '@/data/types'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'

export function JobEntry({ job, current }: { job: Job; current?: boolean }) {
  const domain = job.domain ?? (job.fintech ? 'Fintech' : undefined)
  return (
    <div className={cn('rounded-2xl border bg-surface p-6 sm:p-7', job.fintech ? 'border-accent/30' : 'border-line')}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
        <Badge tone={current ? 'accent' : 'neutral'}>{job.type}</Badge>
        {domain && <Badge tone="accent">{domain}</Badge>}
      </div>
      <p className="mt-1 text-muted">
        {job.url ? (
          <a href={job.url} target="_blank" rel="noreferrer noopener" className="underline decoration-line-strong underline-offset-4 transition hover:text-accent">{job.company}</a>
        ) : job.company}
        {job.location && ` · ${job.location}`} · <span className="font-mono text-xs">{job.period}</span>
      </p>

      {job.summary && <p className="mt-4 leading-relaxed text-fg/90">{job.summary}</p>}

      {job.highlights && (
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {job.highlights.map((h) => (
            <div key={h.label} className="flex flex-col bg-surface-2 px-4 py-3">
              <dd className="order-1 font-mono text-xl font-medium text-accent">{h.value}</dd>
              <dt className="order-2 text-xs text-muted">{h.label}</dt>
            </div>
          ))}
        </dl>
      )}

      <ul className="mt-5 space-y-3.5">
        {job.points.map((p) => (
          <li key={p.lead} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span><strong className="font-semibold text-fg">{p.lead}.</strong> {p.text}</span>
          </li>
        ))}
      </ul>

      {job.capabilities && (
        <div className="mt-5 border-t border-line pt-4">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Money-safety built</p>
          <div className="flex flex-wrap gap-1.5">{job.capabilities.map((c) => <Badge key={c} tone="accent">{c}</Badge>)}</div>
        </div>
      )}

      <div className={cn('flex flex-wrap items-center gap-1.5', job.capabilities ? 'mt-4' : 'mt-5 border-t border-line pt-4')}>
        <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Stack</span>
        {job.tech.map((t) => <Badge key={t}>{t}</Badge>)}
      </div>
    </div>
  )
}
