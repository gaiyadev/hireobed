import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/cn'

interface Props {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('relative py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {title}
          </h2>
          {description && <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
