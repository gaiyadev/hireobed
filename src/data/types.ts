export interface NavItem { label: string; href: string }

export interface Expertise {
  id: string
  title: string
  icon: 'server' | 'wallet' | 'layers' | 'network' | 'container'
  summary: string
  points: string[]
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  role: string
  /** Set false until you have verified the details; shows a "details pending" note in the UI. */
  verified: boolean
  tech: string[]
  challenges: string[]
  solutions: string[]
  impact: string[]
  github?: string
  live?: string
  /** Optional image path in /public (e.g. /projects/digispray.webp). A generated placeholder is used otherwise. */
  image?: string
}

export interface TechCategory { name: string; items: Array<{ name: string; slug?: string }> }

export interface Principle { title: string; body: string }

export interface Job {
  role: string
  company: string
  url?: string
  location: string
  period: string
  type: string
  points: string[]
  tech: string[]
}
