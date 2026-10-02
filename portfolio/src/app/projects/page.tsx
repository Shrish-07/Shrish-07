import type { Metadata } from 'next'
import ProjectExplorer from '@/components/ProjectExplorer'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: `My full project gallery. ${projects.length} real projects with links, tech stacks, and media.`,
}

export default function Projects() {
  return (
    <>
      <section className="section" aria-label="Projects introduction">
        <div className="container">
          <p className="eyebrow">Projects · the gallery</p>
          <h1 className="h-display">Every project, searchable</h1>
          <p className="body-copy mt-4">
            My complete catalogue of {projects.length} shipped projects, each with a plain
            description, an accurate tech stack, and the links and media that go with it.
            Some repositories live under a teammate’s account (Sourish-07 or jabnow), and a
            few may be private. The links below point to the canonical project home either way.
          </p>
        </div>
      </section>
      <ProjectExplorer />
    </>
  )
}
