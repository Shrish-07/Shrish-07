import Link from 'next/link'
import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import Quote from '@/components/Quote'
import MediaFigure from '@/components/MediaFigure'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { thesisQuote } from '@/data/publications'

const featured = projects.filter((p) => p.featured)

const stats = [
  { value: String(profile.stats.repos), label: 'Repositories' },
  { value: profile.stats.speedup, label: 'CourtListener speedup', accent: true },
  { value: String(profile.stats.publications), label: 'Publications' },
  { value: String(profile.stats.legalDimensions), label: 'Due-process dimensions' },
  { value: String(profile.stats.mergedPRs), label: 'Merged upstream PR' },
  { value: String(profile.stats.hackathons), label: 'Hackathons' },
]

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Portfolio · MMXXVI</p>
            <h1 className="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.tagline}</p>
            <p className="lead">{profile.intro}</p>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/projects">Explore the project gallery</Link>
              <Link className="btn btn-ghost" href="/research">Read the research</Link>
              <Link className="btn btn-ghost" href="/contact">Open a channel</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="About this website">
        <div className="container">
          <Reveal>
            <p className="eyebrow">This website</p>
            <h2 className="h-display">What I built this site for</h2>
            <p className="body-copy mt-4">
              This site is my portfolio and project gallery. I put it together around
              four simple goals.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel-grid mt-8">
              {profile.objectives.map((o, i) => (
                <div key={o.title}>
                  <p className="panel-num">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="panel-title">{o.title}</h3>
                  <p className="panel-body">{o.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Key statistics">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The record</p>
            <h2 className="h-display">Numbers, not adjectives</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="stat-grid">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stat-value">
                    {s.accent ? <span className="accent">{s.value}</span> : s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Thesis">
        <div className="container">
          <Reveal>
            <Quote text={thesisQuote.text} source={thesisQuote.source} />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Featured projects">
        <div className="container">
          <Reveal>
            <p className="eyebrow">At a glance</p>
            <h2 className="h-display">Signature projects</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid-3 mt-8">
              {featured.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div className="btn-row mt-8">
              <Link className="btn btn-ghost" href="/projects">View all {projects.length} projects</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Design history">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Media from the archive</p>
            <h2 className="h-display">Design history, kept on record</h2>
            <p className="body-copy mt-4">
              These are actual renders from the earlier WebGL version of this portfolio.
              I keep them here because they document the design history that led to
              this rebuild and give the gallery its 3D-era context.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid-2 mt-8">
              <MediaFigure
                src="/images/site/webgl-genesis.png"
                alt="The Genesis chapter of my previous WebGL portfolio, a glowing starfield around the S.M.V. brand."
                title="Previous portfolio · Genesis"
                caption="The opening chapter of the seven-chapter, scroll-driven WebGL narrative that preceded this site."
              />
              <MediaFigure
                src="/images/site/webgl-contact.png"
                alt="The Contact chapter of my previous WebGL portfolio, a beacon-like scene at the end of the corridor."
                title="Previous portfolio · Contact"
                caption="The closing scene of that earlier architecture, kept so the trajectory of both builds stays visible side by side."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Participate">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Participate</p>
            <h2 className="h-display">Try the calculator yourself</h2>
            <p className="body-copy mt-4">
              The Research page carries an interactive version of my Due Process Stress
              Index. Move the sliders and watch the composite score and the failure
              flags respond.
            </p>
            <div className="btn-row mt-6">
              <Link className="btn btn-primary" href="/research">Try the DPSI calculator</Link>
              <Link className="btn btn-ghost" href="/projects">Browse the gallery</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
