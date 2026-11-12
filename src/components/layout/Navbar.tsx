import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { nav, site } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const ids = nav.map((n) => n.href.slice(1))

/** Scroll to a section ourselves: the browser's native anchor scroll gets cancelled while the mobile menu collapses. */
function goTo(e: React.MouseEvent<HTMLAnchorElement>, href: string, after?: () => void) {
  const target = document.querySelector(href)
  if (!target) return
  e.preventDefault()
  after?.()
  history.pushState(null, '', href)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    let frame = 0
    // Hysteresis (enter at 32px, leave at 12px) plus rAF throttling: without both, scrollY
    // hovering right at one threshold during trackpad bounce flips the class dozens of times a
    // second, and toggling backdrop-filter on/off that fast reads as a flicker in the header.
    const update = () => {
      frame = 0
      setScrolled((was) => (window.scrollY > (was ? 12 : 32)))
    }
    const on = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', on, { passive: true })
    return () => {
      window.removeEventListener('scroll', on)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/*
        Always-mounted blur layer that only crossfades opacity. Adding/removing the
        backdrop-blur-xl class itself (the old approach) makes the browser create and destroy a
        compositor layer every time, which is what caused the flicker on scroll.
      */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 border-b bg-glass backdrop-blur-xl transition-opacity duration-300',
          solid ? 'border-line opacity-100' : 'border-transparent opacity-0',
        )}
      />
      <nav aria-label="Primary" className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 whitespace-nowrap font-semibold tracking-tight" title="Back to top">
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-accent font-mono text-xs font-bold text-accent-ink">OG</span>
          <span className="sr-only sm:not-sr-only">{site.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                aria-current={active === n.href.slice(1) ? 'true' : undefined}
                className={cn('rounded-full px-3 py-1.5 text-sm transition hover:text-fg', active === n.href.slice(1) ? 'text-fg bg-surface-2' : 'text-muted')}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button href="#contact" className="hidden whitespace-nowrap !py-2 sm:inline-flex">Hire me</Button>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            // Opacity/offset only: animating height makes Framer snapshot and restore scrollY, which cancels anchor scrolling.
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="relative lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={(e) => goTo(e, n.href, () => setOpen(false))} className="block rounded-lg px-3 py-3 text-lg text-muted hover:bg-surface-2 hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2"><Button href="#contact" onClick={(e) => goTo(e, '#contact', () => setOpen(false))} className="w-full">Let's Build Something</Button></li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
