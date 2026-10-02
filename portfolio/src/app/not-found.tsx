import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: '70dvh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <p className="eyebrow">404 — Off the path</p>
        <h1 className="h-display mt-6">This page doesn’t exist.</h1>
        <p className="body-copy mt-4">
          The site is six chapters deep — Home, About, Projects, Research, Experience, Contact.
          One of them has what you were looking for.
        </p>
        <div className="btn-row mt-8">
          <Link className="btn btn-primary" href="/">Return home</Link>
          <Link className="btn btn-ghost" href="/projects">Open the gallery</Link>
        </div>
      </div>
    </main>
  )
}
