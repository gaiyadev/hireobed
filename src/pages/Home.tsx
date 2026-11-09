import { lazy, Suspense, useEffect } from 'react'
import { BackToTop } from '@/components/ui/BackToTop'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/features/hero/Hero'
import { Expertise } from '@/features/expertise/Expertise'
import { Projects } from '@/features/projects/Projects'
import { Fintech } from '@/features/fintech/Fintech'
import { Philosophy } from '@/features/philosophy/Philosophy'
import { Experience } from '@/features/experience/Experience'
import { Contact } from '@/features/contact/Contact'

// Stack pulls in the brand icon set, so it is split out and prefetched once the browser is idle.
const loadStack = () => import('@/features/stack/Stack').then((m) => ({ default: m.Stack }))
const Stack = lazy(loadStack)

export function Home() {
  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500))
    idle(() => void loadStack())
  }, [])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Expertise />
        <Projects />
        <Fintech />
        <Suspense fallback={<section id="stack" aria-hidden className="min-h-[720px]" />}>
          <Stack />
        </Suspense>
        <Philosophy />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
