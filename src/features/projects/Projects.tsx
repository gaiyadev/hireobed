import { useCallback, useState } from 'react'
import { projects as allProjects } from '@/data/projects'
import type { Project } from '@/data/types'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from './ProjectCard'
import { OpenSource } from './OpenSource'
import { ProjectModal } from './ProjectModal'

// Lead with projects whose details are verified; stable sort keeps your order otherwise.
const projects = [...allProjects].sort((a, b) => Number(b.verified) - Number(a.verified))

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const close = useCallback(() => setActive(null), [])
  return (
    <Section id="work" eyebrow="Featured projects" title="Selected Engineering Work" description="Systems I've designed, built, or led. Open any project for the engineering challenges, solutions, and outcomes.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <ProjectCard project={p} onOpen={setActive} />
          </Reveal>
        ))}
      </div>
      <OpenSource />
      <Reveal className="mt-16 flex justify-center">
        <Button href="#contact" variant="secondary">Discuss a Project</Button>
      </Reveal>
      <ProjectModal project={active} onClose={close} />
    </Section>
  )
}
