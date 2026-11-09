import { stack } from '@/data/stack'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Card } from '@/components/ui/Card'
import { TechIcon } from '@/components/ui/TechIcon'

export function Stack() {
  return (
    <Section id="stack" eyebrow="Technology" title="The Tools I Build With">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((cat, i) => (
          <Reveal key={cat.name} delay={(i % 3) * 0.06}>
            <Card className="h-full p-6">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">{cat.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <li key={it.name} className="flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm">
                    <TechIcon slug={it.slug} name={it.name} />
                    {it.name}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
