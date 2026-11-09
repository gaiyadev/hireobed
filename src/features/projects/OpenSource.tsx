import { ExternalLink, Package } from 'lucide-react'
import { openSource } from '@/data/openSource'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { GithubIcon } from '@/components/ui/BrandIcons'

export function OpenSource() {
  return (
    <div className="mt-20">
      <Reveal>
        <h3 className="text-2xl font-semibold tracking-tight">{openSource.title}</h3>
        <p className="mt-2 text-sm text-muted">{openSource.note}</p>
      </Reveal>
      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {openSource.projects.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.06}>
            <Card className="flex h-full flex-col p-6">
              <p className="font-mono text-sm font-medium text-fg break-all">{p.name}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent">
                    {l.kind === 'github' ? <GithubIcon width={15} height={15} /> : <Package size={15} aria-hidden />}
                    {l.label}
                    <ExternalLink size={12} aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
