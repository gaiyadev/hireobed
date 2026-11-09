import { Check } from 'lucide-react'
import { fintech } from '@/data/fintech'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Card } from '@/components/ui/Card'
import { FlowDiagram } from './FlowDiagram'

export function Fintech() {
  return (
    <Section id="fintech" eyebrow="Fintech & backend engineering" title={fintech.title} description={fintech.intro} className="bg-surface/40">
      <Reveal><FlowDiagram /></Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {fintech.topics.map((t, i) => (
          <Reveal key={t.title} delay={(i % 5) * 0.04}>
            <Card className="h-full p-5">
              <h3 className="text-sm font-semibold">{t.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{t.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <Card className="p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Where I've applied it</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {fintech.evidence.map((e) => (
              <li key={e} className="flex gap-3 text-sm leading-relaxed text-muted">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />{e}
              </li>
            ))}
          </ul>
        </Card>
      </Reveal>
    </Section>
  )
}
