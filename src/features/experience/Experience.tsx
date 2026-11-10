import { certifications, earlier, education, experience } from '@/data/experience'
import type { Credential } from '@/data/types'
import { JobEntry } from './JobEntry'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

function CredentialGroup({ title, items }: { title: string; items: Credential[] }) {
  return (
    <>
      <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">{title}</h3>
      <ul className="space-y-4">
        {items.map((c) => (
          <li key={c.name}>
            <p className="font-semibold leading-snug">{c.name}</p>
            {(c.by || c.period) && (
              <p className="mt-0.5 text-sm text-muted">
                {c.by}{c.by && c.period && ' · '}{c.period && <span className="font-mono text-xs">{c.period}</span>}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Professional experience" title="A Track Record of Shipping Production Systems">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.period}`} className="relative pb-8 pl-8 last:pb-0 sm:pl-10">
            <>
              <span aria-hidden className={`absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-accent shadow-[0_0_12px_var(--accent)]' : 'bg-line-strong'}`} />
              <JobEntry job={job} current={i < 2} />
            </>
          </Reveal>
        ))}
      </ol>

      <div className="mt-16 grid items-start gap-5 md:grid-cols-2">
        <Reveal>
          <Card className="p-6">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">Earlier experience</h3>
            <ul className="space-y-7">
              {earlier.map((e) => (
                <li key={e.company}>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                    <p className="font-semibold leading-snug">{e.role}</p>
                    {e.tag && <Badge tone="accent">{e.tag}</Badge>}
                  </div>
                  <p className="mt-0.5 text-sm text-muted">
                    {e.company}{e.type && ` · ${e.type}`} · <span className="font-mono text-xs">{e.period}</span>
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{e.tagsLabel}</span>
                    {e.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={0.06}>
          <Card className="p-6">
            <CredentialGroup title="Education" items={education} />
            <div className="mt-6 border-t border-line pt-6">
              <CredentialGroup title="Certifications" items={certifications} />
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
