'use client'

import { useMemo, useState } from 'react'
import { projects, categoryLabels } from '@/data/projects'
import ProjectCard from './ProjectCard'

const CATEGORIES = [
  ['all', 'All'] as const,
  ...(Object.entries(categoryLabels) as [string, string][]),
]

/**
 * ProjectExplorer — live search + category filter for the gallery.
 * Purely local state; no network calls.
 */
export default function ProjectExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (!q) return true
      const haystack = [p.name, p.tagline, p.short, p.domain, ...p.tech].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [query, category])

  return (
    <section className="section" aria-label="Project gallery">
      <div className="container">
        <div className="explorer-bar">
          <div className="explorer-search">
            <label className="visually-hidden" htmlFor="project-search">
              Search projects
            </label>
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, tech, or domain…"
            />
            <span className="mono-tag" aria-hidden="true">Search</span>
          </div>
          <div className="filter-row" role="group" aria-label="Filter by category">
            {CATEGORIES.map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={category === id ? 'filter-btn active' : 'filter-btn'}
                aria-pressed={category === id}
                onClick={() => setCategory(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <p className="result-count mt-4" aria-live="polite">
          {filtered.length === 1
            ? '1 project found'
            : `${filtered.length} projects found`}
        </p>
        <div className="grid-3 mt-6">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="body-copy">
            Nothing matches that filter. Try clearing the search, or pick a different category.
          </p>
        ) : null}
      </div>
    </section>
  )
}
