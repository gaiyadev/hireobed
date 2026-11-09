import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Badge({ children, tone = 'neutral', className }: { children: ReactNode; tone?: 'neutral' | 'accent'; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide',
        tone === 'accent' ? 'border-accent/40 bg-accent/10 text-accent' : 'border-line text-muted bg-surface-2',
        className,
      )}
    >
      {children}
    </span>
  )
}
