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
            <p className="eyebrow">Portfolio — MMXXVI</p>
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
            <h2 className="h-display">What this site is for</h2>
            <p className="body-copy mt-4">
              This is a personal portfolio and project gallery for {profile.name}.{' '}
              It exists to do four things — each one is a promise you can check this site against.
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
              <Link className="btn btn-ghost" href="/projects">View the full gallery — {projects.length} projects</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Design history">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Media — with a reason for every inclusion</p>
            <h2 className="h-display">Design history, kept on record</h2>
            <p className="body-copy mt-4">
              These are actual renders from the earlier WebGL version of this portfolio.
              They are included on purpose: they document the design history this clean
              rebuild replaces, and give the gallery its 3D-era context.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid-2 mt-8">
              <MediaFigure
                src="/images/site/webgl-genesis.png"
                alt="The Genesis chapter of the previous WebGL portfolio: a glowing starfield around the S.M.V. brand."
                title="Previous portfolio — Genesis"
                caption="Included as design-history evidence: the opening chapter of the seven-chapter, scroll-driven WebGL narrative that preceded this site."
              />
              <MediaFigure
                src="/images/site/webgl-contact.png"
                alt="The Contact chapter of the previous WebGL portfolio: a beacon-like scene at the end of the corridor."
                title="Previous portfolio — Contact"
                caption="Included for the same reason — the closing scene of the earlier architecture, so the trajectory of the two builds is visible side by side."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Participate">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Participate</p>
            <h2 className="h-display">Don’t just read it — stress-test it</h2>
            <p className="body-copy mt-4">
              The Research page carries an interactive version of the Due Process Stress Index:
              move the sliders and watch the failure modes trigger. If a claim on this site
              doesn’t hold up to your own poking, that is a bug worth reporting.
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
