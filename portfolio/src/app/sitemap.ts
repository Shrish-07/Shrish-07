import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://shrish-07.vercel.app'
  const routes = ['', '/about', '/projects', '/research', '/experience', '/contact']
  const projectRoutes = projects.map((p) => `/projects/${p.slug}`)
  return [...routes, ...projectRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.7,
  }))
}
