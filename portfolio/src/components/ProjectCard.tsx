import Link from 'next/link'
import type { Project } from '@/data/projects'

/**
 * ProjectCard — the gallery building block.
 * Cover image when one exists; links are labelled with plain, honest names.
 */
export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0]

  return (
    <article className="card">
      {cover ? (
        <Link href={`/projects/${project.slug}`} className="card-cover" tabIndex={-1} aria-hidden="true">
          <img src={cover.src} alt="" loading="lazy" />
        </Link>
      ) : null}
      <div className="card-body">
        <p className="card-meta">
          {project.domain} · {project.year}
        </p>
        <h3 className="card-title">
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="card-tagline">{project.tagline}</p>
        <p className="card-desc">{project.short}</p>
        <ul className="chip-row" aria-label="Tech stack">
          {project.tech.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
          {project.highlight ? <li className="chip chip-accent">{project.highlight}</li> : null}
        </ul>
        <div className="card-links">
          <Link className="smv-link" href={`/projects/${project.slug}`}>
            Details <span aria-hidden="true">→</span>
          </Link>
          {project.links.map((l) => (
            <a key={l.url} className="smv-link" href={l.url} target="_blank" rel="noopener noreferrer">
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
