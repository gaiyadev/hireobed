import { Box, Layers, Network, Server, Wallet, type LucideIcon } from 'lucide-react'
import { expertise } from '@/data/expertise'
import type { Expertise as E } from '@/data/types'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/cn'

const icons: Record<E['icon'], LucideIcon> = { server: Server, wallet: Wallet, layers: Layers, network: Network, container: Box }

export function Expertise() {
  return (
    <Section id="expertise" eyebrow="Engineering expertise" title="Where I Create Value">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {expertise.map((e, i) => {
          const Icon = icons[e.icon]
          return (
            <Reveal key={e.id} delay={i * 0.05} className={cn('lg:col-span-2', i === 0 && 'lg:col-span-3', i === 1 && 'lg:col-span-3')}>
              <Card className="group h-full p-7">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition group-hover:border-accent/50">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.summary}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
