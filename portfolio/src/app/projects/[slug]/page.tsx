import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import MediaFigure from '@/components/MediaFigure'
import { projects, categoryLabels } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project not found' }
  return { title: project.name, description: project.short }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3)

  return (
    <section className="section" aria-label={`Project — ${project.name}`}>
      <div className="container">
        <Reveal>
          <p className="mono-tag">
            <Link href="/projects" className="smv-link">← All projects</Link>
          </p>
          <div className="mt-6">
            <p className="eyebrow">
              {categoryLabels[project.category]} · {project.domain} · {project.year}
            </p>
            <h1 className="h-display mt-2">{project.name}</h1>
            <p className="card-tagline mt-2">{project.tagline}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="stack mt-10">
            {project.long.map((para, i) => (
              <p key={i} className="body-copy">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8">
            <p className="eyebrow">Tech stack</p>
            <ul className="chip-row mt-4" aria-label="Tech stack">
              {project.tech.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        {project.highlight ? (
          <Reveal delay={140}>
            <div className="card mt-8" style={{ padding: '1rem 1.35rem' }}>
              <p className="small">
                <strong style={{ color: 'var(--accent-dim)' }}>Highlight —</strong>{' '}
                <span style={{ color: 'var(--text-primary)' }}>{project.highlight}</span>
              </p>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={160}>
          <div className="mt-8">
            <p className="eyebrow">Where it lives</p>
            <ul className="link-list mt-4">
              {project.links.map((l) => (
                <li key={l.url}>
                  <a className="link-row" href={l.url} target="_blank" rel="noopener noreferrer">
                    <span className="link-title">{l.label}</span>
                    <span className="link-note">{l.note}</span>
                    <span className="link-caret" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {project.images && project.images.length > 0 ? (
          <Reveal delay={100}>
            <div className="mt-10">
              <p className="eyebrow">Media — every figure with a reason</p>
              <div className="stack-lg mt-6">
                {project.images.map((img) => (
                  <MediaFigure
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    title={img.title}
                    caption={img.caption}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        {project.audio ? (
          <Reveal delay={120}>
            <div className="mt-10">
              <p className="eyebrow">Audio — a real artifact from the demo</p>
              <div className="audio-wrap mt-6">
                <p className="mono-tag">{project.audio.title}</p>
                <audio controls preload="none" src={project.audio.src} className="mt-4">
                  Your browser does not support embedded audio.
                </audio>
                <p className="small mt-4">{project.audio.caption}</p>
              </div>
            </div>
          </Reveal>
        ) : null}

        {project.citations && project.citations.length > 0 ? (
          <Reveal delay={140}>
            <div className="mt-10">
              <p className="eyebrow">Cited sources</p>
              <ol className="citation-list mt-6">
                {project.citations.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ol>
            </div>
          </Reveal>
        ) : null}

        {related.length > 0 ? (
          <Reveal delay={100}>
            <div className="mt-10">
              <p className="eyebrow">Related</p>
              <ul className="link-list mt-6">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link className="link-row" href={`/projects/${r.slug}`}>
                      <span className="link-title">{r.name}</span>
                      <span className="link-note">{r.tagline}</span>
                      <span className="link-caret" aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}