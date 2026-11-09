import { philosophy } from '@/data/philosophy'
import { site } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

export function Philosophy() {
  return (
    <Section id="philosophy" eyebrow="Engineering philosophy" title={philosophy.title} className="bg-surface/40">
      <ol className="grid gap-x-16 md:grid-cols-2">
        {philosophy.principles.map((p, i) => (
          <Reveal as="li" key={p.title} delay={(i % 2) * 0.06} className="flex gap-5 border-t border-line py-8">
            <>
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </div>
            </>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-14">
        <blockquote className="max-w-3xl border-l-2 border-accent pl-6 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          “{site.tagline}”
        </blockquote>
      </Reveal>
    </Section>
  )
}
