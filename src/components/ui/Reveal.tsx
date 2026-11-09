import { useEffect, useRef, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

// One shared observer for every Reveal on the page (far cheaper than one per element).
let observer: IntersectionObserver | null = null
function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('reveal-in')
        observer?.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

interface Props { children: ReactNode; delay?: number; className?: string; as?: ElementType }

/** Fades and lifts content in once as it scrolls into view. Pure CSS transition; disabled under reduced motion. */
export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    getObserver().observe(el)
    return () => observer?.unobserve(el)
  }, [])
  return (
    <Tag ref={ref} className={cn('reveal', className)} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  )
}
