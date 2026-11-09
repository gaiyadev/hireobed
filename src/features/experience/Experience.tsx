import { earlier, education, experience } from '@/data/experience'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Professional experience" title="A Track Record of Shipping Production Systems">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} className="relative pb-12 pl-8 last:pb-0">
            <>
              <span className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-accent shadow-[0_0_12px_var(--accent)]' : 'bg-line-strong'}`} />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                <Badge tone={i === 0 ? 'accent' : 'neutral'}>{job.type}</Badge>
              </div>
              <p className="mt-1 text-muted">{job.url ? <a href={job.url} target="_blank" rel="noreferrer noopener" className="underline decoration-line-strong underline-offset-4 transition hover:text-accent">{job.company}</a> : job.company}{job.location && ` · ${job.location}`} · <span className="font-mono text-xs">{job.period}</span></p>
              <div className="mt-3 flex flex-wrap gap-1.5">{job.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}
                  </li>
                ))}
              </ul>
            </>
          </Reveal>
        ))}
      </ol>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        <Reveal><Card className="h-full p-6"><h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">Earlier experience</h3><ul className="space-y-4 text-sm text-muted">{earlier.map((e) => <li key={e.text}><span>{e.text}</span><span className="mt-1.5 flex flex-wrap gap-1.5">{e.tech.map((t) => <Badge key={t}>{t}</Badge>)}</span></li>)}</ul></Card></Reveal>
        <Reveal delay={0.06}><Card className="h-full p-6"><h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent">Education & certifications</h3><ul className="space-y-2 text-sm text-muted">{education.map((e) => <li key={e}>{e}</li>)}</ul></Card></Reveal>
      </div>
    </Section>
  )
}
