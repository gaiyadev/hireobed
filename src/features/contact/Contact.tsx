import { Download, Mail } from 'lucide-react'
import { site } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/ui/BrandIcons'
import { ContactForm } from './ContactForm'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: 'LinkedIn', value: 'obed-m-gaiya', href: site.links.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', value: 'gaiyadev', href: site.links.github, Icon: GithubIcon },
  { label: 'WhatsApp', value: site.phone, href: site.whatsapp, Icon: WhatsappIcon },
]

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Have a Complex Problem? Let's Engineer the Solution." description="Whether you're building a fintech product, scaling an existing platform, or looking for an experienced engineer to join your team, let's talk." className="bg-surface/40">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-5">
          <ul className="space-y-3">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer noopener" className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-accent/60">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-accent"><Icon size={18} /></span>
                  <span><span className="block text-xs text-muted">{label}</span><span className="text-sm">{value}</span></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={`mailto:${site.email}?subject=Project%20discussion`}>Discuss a Project</Button>
            <Button href={site.whatsapp} variant="secondary">Let's Talk Engineering</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {site.cv.map((c) => (
              <Button key={c.href} href={c.href} download variant="ghost" className="border border-line !py-2"><Download size={15} /> {c.label}</Button>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}><Card className="p-6 sm:p-8"><ContactForm /></Card></Reveal>
      </div>
    </Section>
  )
}
