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
  /** The business problem the product solves. */
  problem: string
  role: string
  /** Set false until you have verified the details; shows a "details pending" note in the UI. */
  verified: boolean
  tech: string[]
  /** High-level architecture notes: only what you can stand behind. */
  architecture: string[]
  challenges: string[]
  solutions: string[]
  impact: string[]
  github?: string
  live?: string
  /** Image in /public (e.g. /projects/digispray.jpg), 16:10. A generated placeholder is used otherwise. */
  image?: string
}

export interface TechCategory { name: string; items: Array<{ name: string; slug?: string }> }

export interface Principle { title: string; body: string }

export interface JobPoint {
  /** Short bold lead-in, e.g. "Duplicate-proof payments". */
  lead: string
  text: string
}

export interface Job {
  role: string
  company: string
  url?: string
  location: string
  period: string
  type: string
  /** One line on what the product is and why it mattered. */
  summary?: string
  /** Marks a fintech role: shown with an accent treatment and capability chips. */
  fintech?: boolean
  /** Money-safety capabilities you actually built in this role. */
  capabilities?: string[]
  /** Verified, measurable results only. Never add a number you cannot defend. */
  highlights?: Array<{ value: string; label: string }>
  points: JobPoint[]
  tech: string[]
}

export interface EarlierRole {
  role: string
  company: string
  type?: string
  period: string
  /** Label above the tags: "Stack" for engineering roles, "Taught" for instructor roles. */
  tagsLabel: 'Stack' | 'Taught'
  tech: string[]
}

export interface OpenSourceProject {
  name: string
  description: string
  tech: string[]
  links: Array<{ label: string; href: string; kind: 'github' | 'registry' }>
}
