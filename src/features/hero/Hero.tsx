import { m } from 'framer-motion'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import { credibility, site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { HeroVisual } from './HeroVisual'

const fade = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] as const },
})

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {site.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted"><MapPin size={13} aria-hidden />{site.location}</span>
            </div>

            <p className="mb-4 font-mono text-[11px] tracking-[0.16em] text-accent sm:text-xs">{site.eyebrow}</p>
            <h1 id="hero-title" className="text-[2.5rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {site.headline[0]} <span className="text-muted">{site.headline[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.heroDescription}</p>

            <ul className="mt-6 max-w-xl space-y-2.5">
              {site.proofPoints.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-snug text-fg/90">
                  <Check size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />{p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#contact" className="px-6 py-3">Let's Build Something <ArrowRight size={16} aria-hidden /></Button>
              <Button href="#work" variant="secondary" className="px-6 py-3">Explore My Work</Button>
            </div>
            <div className="mt-8"><SocialLinks /></div>
          </div>

          <m.div {...fade(3)}><HeroVisual /></m.div>
        </div>

        <m.dl {...fade(7)} className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:mt-20 lg:grid-cols-4">
          {credibility.map((c) => (
            <div key={c.label} className="flex flex-col bg-surface p-5 sm:p-6">
              <dt className="order-2 mt-1 text-xs text-muted sm:text-sm">{c.label}</dt>
              <dd className="order-1 font-mono text-2xl font-medium text-fg sm:text-3xl">{c.value}</dd>
            </div>
          ))}
        </m.dl>
      </div>
    </section>
  )
}
