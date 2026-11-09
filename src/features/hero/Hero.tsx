import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { credibility, site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { HeroVisual } from './HeroVisual'

const fade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
})

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div {...fade(0)} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted"><MapPin size={13} />{site.location}</span>
          </motion.div>

          <motion.p {...fade(1)} className="mb-5 font-mono text-xs tracking-[0.18em] text-accent sm:text-[13px]">{site.eyebrow}</motion.p>
          <motion.h1 id="hero-title" {...fade(2)} className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            {site.headline[0]}{' '}
            <span className="text-muted">{site.headline[1]}</span>
          </motion.h1>
          <motion.p {...fade(3)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{site.heroDescription}</motion.p>

          <motion.div {...fade(4)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contact">Let's Build Something <ArrowRight size={16} /></Button>
            <Button href="#work" variant="secondary">Explore My Work</Button>
          </motion.div>
          <motion.div {...fade(5)} className="mt-9"><SocialLinks /></motion.div>
        </div>

        <motion.div {...fade(3)}><HeroVisual /></motion.div>
      </div>

      <motion.dl {...fade(6)} className="relative mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line px-0 sm:mt-24 lg:grid-cols-4" style={{ width: 'min(100% - 2.5rem, 72rem)' }}>
        {credibility.map((c) => (
          <div key={c.label} className="flex flex-col bg-surface p-5 sm:p-6">
            <dt className="order-2 mt-1 text-xs text-muted sm:text-sm">{c.label}</dt>
            <dd className="order-1 font-mono text-2xl font-medium text-fg sm:text-3xl">{c.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
