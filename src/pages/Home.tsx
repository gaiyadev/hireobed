import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/features/hero/Hero'
import { Expertise } from '@/features/expertise/Expertise'
import { Projects } from '@/features/projects/Projects'
import { Fintech } from '@/features/fintech/Fintech'
import { Stack } from '@/features/stack/Stack'
import { Philosophy } from '@/features/philosophy/Philosophy'
import { Experience } from '@/features/experience/Experience'
import { Contact } from '@/features/contact/Contact'

export function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Expertise />
        <Projects />
        <Fintech />
        <Stack />
        <Philosophy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
