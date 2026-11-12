import { useEffect, useRef } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import type { Project } from '@/data/types'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { ProjectArt } from './ProjectArt'

function List({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null
  return (
    <div>
      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{i}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!project) return
    const prevFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !dialogRef.current) return
      const f = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      const first = f[0]
      const last = f[f.length - 1]
      if (!first || !last) return
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      prevFocus?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <m.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <m.div
            ref={dialogRef}
            role="dialog" aria-modal="true" aria-labelledby="project-modal-title"
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-line-strong bg-surface sm:rounded-3xl"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-glass backdrop-blur hover:border-accent hover:text-accent">
              <X size={16} />
            </button>
            <ProjectArt project={project} className="max-h-64 w-full sm:max-h-72" />
            <div className="space-y-8 p-6 sm:p-9">
              <header>
                <h3 id="project-modal-title" className="text-3xl font-semibold tracking-tight">{project.name}</h3>
                <p className="mt-1 text-accent">{project.tagline}</p>
                <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
                {project.role && (
                  <dl className="mt-5 text-sm"><dt className="inline font-mono text-xs uppercase tracking-wider text-subtle">Role · </dt><dd className="inline text-fg">{project.role}</dd></dl>
                )}
                {!project.verified && (
                  <p className="mt-4 rounded-lg border border-line bg-surface-2 px-4 py-3 text-xs text-muted">
                    Detailed case study in progress. Only information confirmed so far is shown.
                  </p>
                )}
              </header>
              <div className="flex flex-wrap gap-1.5">{project.tech.map((t) => <Badge key={t} tone="accent">{t}</Badge>)}</div>
              <div>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">The problem</h4>
                <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
              </div>
              <List title="Architecture" items={project.architecture} />
              <div className="grid gap-8 sm:grid-cols-2">
                <List title="Engineering challenges" items={project.challenges} />
                <List title="Solutions implemented" items={project.solutions} />
              </div>
              <List title="Results" items={project.impact} />
              {(project.github || project.live) && (
                <div className="flex flex-wrap gap-3 border-t border-line pt-6">
                  {project.live && <Button href={project.live}>Live project <ExternalLink size={15} /></Button>}
                  {project.github && <Button href={project.github} variant="secondary"><GithubIcon width={16} height={16} /> Source</Button>}
                </div>
              )}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
