import type { NavItem } from './types'

export const site = {
  name: 'Obed Mathias Gaiya',
  shortName: 'Obed Gaiya',
  title: 'Senior Full-Stack Engineer | Backend & Fintech Systems Engineer',
  eyebrow: 'SOFTWARE ENGINEER · SYSTEMS ARCHITECTURE · FINTECH',
  headline: ['Engineering Scalable Systems.', 'Building Products That Matter.'],
  heroDescription:
    'I build reliable backend systems, fintech infrastructure, and modern digital products that help businesses scale.',
  intro:
    'I design and build scalable software systems that solve real business problems. From high-performance backend architectures and fintech infrastructure to modern web and mobile applications, I turn complex ideas into reliable, production-ready products.',
  tagline: "I don't just write code. I engineer systems that power businesses.",
  location: 'Abuja, Nigeria | Working Globally',
  availability: 'Available for opportunities',
  email: 'gaiyaobed94@gmail.com',
  whatsapp: 'https://wa.me/2349033440507',
  phone: '+234 903 344 0507',
  links: {
    github: 'https://github.com/gaiyadev',
    linkedin: 'https://www.linkedin.com/in/obed-m-gaiya-128467180',
    // TODO: replace with your real X handle.
    x: 'https://x.com/',
    blog: 'https://gaiyaobed.hashnode.dev',
  },
  cv: [
    { label: 'Full-Stack CV', href: '/cv/Obed-Gaiya-Full-Stack-CV.pdf' },
    { label: 'Fintech CV', href: '/cv/Obed-Gaiya-Fintech-CV.pdf' },
  ],
  /** Optional: path in /public, e.g. '/portrait.webp'. Placeholder shown when undefined. */
  portrait: '/portrait.jpg' as string | undefined,
  /** Optional: a form endpoint (Formspree, Getform...). Falls back to opening the visitor's mail client. */
  formEndpoint: undefined as string | undefined,
}

export const nav: NavItem[] = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Fintech', href: '#fintech' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

/** Facts taken directly from the CV. Do not add numbers that are not in your own records. */
export const credibility = [
  { value: '9+', label: 'Years building software' },
  { value: '100K+', label: 'Requests/sec scaled at WorkNation' },
  { value: '99.9%', label: 'Platform uptime' },
  { value: 'NG · UAE', label: 'Fintech delivered across two markets' },
]
