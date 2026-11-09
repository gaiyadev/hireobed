import { Mail } from 'lucide-react'
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
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="h-full">
          <Card className="flex h-full flex-col p-6 sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight">Reach me directly</h3>
            <p className="mt-1 text-sm text-muted">Prefer a direct line? Use any of these.</p>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})} className="group flex items-center gap-4 py-4 transition">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent transition group-hover:bg-accent group-hover:text-accent-ink"><Icon size={18} /></span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{label}</span>
                      <span className="block truncate text-sm transition group-hover:text-accent">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <Button href={`mailto:${site.email}?subject=Project%20discussion`}>Discuss a Project</Button>
              <Button href={site.whatsapp} variant="secondary">Let's Talk Engineering</Button>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <Card className="h-full p-6 sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight">Send a message</h3>
            <p className="mb-5 mt-1 text-sm text-muted">Tell me what you're building and what you need.</p>
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
