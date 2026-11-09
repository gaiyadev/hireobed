import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/types'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { ProjectArt } from './ProjectArt'

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden hover:border-accent/40">
      <ProjectArt project={project} className="w-full border-b border-line" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
          {!project.verified && <Badge>Details pending</Badge>}
        </div>
        <p className="mt-1 text-sm text-accent">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
        <button
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-fg transition after:absolute after:inset-0 after:content-[''] hover:text-accent"
        >
          View case study<span className="sr-only">: {project.name}</span> <ArrowUpRight size={16} aria-hidden className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </Card>
  )
}
