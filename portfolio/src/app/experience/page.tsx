import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import MediaFigure from '@/components/MediaFigure'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Honors and awards, hackathon wins, a national research nomination, merged open-source contributions, and the field notes behind them.',
}

export default function Experience() {
  return (
    <>
      <section className="section" aria-label="Honors and awards">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Experience</p>
            <h1 className="h-display">Honors, awards, and the open record</h1>
            <p className="body-copy mt-4">
              The formal recognition first, then the work that earned it. A first-place
              multi-agent build at MHacks, a first-place fintech track at TartanHacks,
              a national research nomination, and a merged pull request on production
              open source.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid-3 mt-8">
              {profile.honors.map((h) => (
                <article key={h.title} className="card">
                  <div className="card-body">
                    <p className="card-meta">{h.org} · {h.date}</p>
                    <h3 className="card-title">{h.title}</h3>
                    <p className="card-desc">{h.body}</p>
                    {h.link ? (
                      <div className="card-links">
                        <a className="smv-link" href={h.link.url} target="_blank" rel="noopener noreferrer">
                          {h.link.label} <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Hackathons">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Hackathons</p>
            <h2 className="h-display">Five hackathon builds, two first places</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="stack-lg mt-8">
              <article className="card">
                <div className="card-body">
                  <p className="card-meta">Hack@Brown 2026 · Python + WebSockets</p>
                  <h3 className="card-title">
                    <a href="https://github.com/Sourish-07/HackBrown" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Trust Me Bro</a>
                  </h3>
                  <p className="card-desc">A wearable lie-detection hat fusing biometrics with Gemini reasoning into a live betting game, complete with real text-to-speech callouts.</p>
                  <div className="audio-wrap">
                    <p className="mono-tag">“TRUTH” · audio callout from the demo</p>
                    <audio controls preload="none" src="/audio/trust-me-bro-truth.mp3" className="mt-4">
                      Your browser does not support embedded audio.
                    </audio>
                    <p className="small mt-4">
                      A real audio capture from the demo. Hardware sensors feed into AI scoring,
                      a real-time dashboard, and an audible verdict. The team was me, Sourish
                      Venugopal, Rayhan Mohamed, and Lauren Bell.
                    </p>
                  </div>
                </div>
              </article>

              <article className="card">
                <div className="card-body">
                  <p className="card-meta">HackDartmouth XI · Python + Streamlit + LiveKit</p>
                  <h3 className="card-title">
                    <a href="https://github.com/Sourish-07/HackDartmouth" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>IntelliCare AI</a>
                  </h3>
                  <p className="card-desc">A nursing-monitoring dashboard that compresses event reasoning 50–60% before LLM calls. It is the HackDartmouth sibling of my Attune patient-safety system.</p>
                </div>
              </article>

              <article className="card">
                <div className="card-body">
                  <p className="card-meta">NexHacks · Computer vision</p>
                  <h3 className="card-title">
                    <a href="https://github.com/Shrish-07/NexHacks" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Attune</a>
                  </h3>
                  <p className="card-desc">Real-time YOLOv8 video analysis of patient discomfort, falls, and unsafe activity with a LiveKit voice interface for hands-free clinical use.</p>
                </div>
              </article>

              <article className="card">
                <div className="card-body">
                  <p className="card-meta">MHacks 2026 · 1st Place · Relay Interactive Agents Track</p>
                  <h3 className="card-title">
                    <Link href="/projects/amyna" style={{ color: 'inherit', textDecoration: 'none' }}>Amyna</Link>
                  </h3>
                  <p className="card-desc">The multi-agent medical-billing advocate that won the Relay track at MHacks 2026. The backend, the Fetch.ai uAgents orchestration, and the 300-test suite were mine.</p>
                </div>
              </article>

              <article className="card">
                <div className="card-body">
                  <p className="card-meta">TartanHacks 2026 · 1st Place · BNY Track</p>
                  <h3 className="card-title">
                    <a href="https://github.com/jabnow/Politi-folio" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Politi-folio</a>
                  </h3>
                  <p className="card-desc">First place in the BNY back-office fintech track. Geopolitical intelligence, XRP Ledger reconciliation, sanctions screening, and risk scoring behind one dashboard.</p>
                </div>
              </article>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="stack-lg mt-8">
              <MediaFigure
                src="/images/site/webgl-index.png"
                alt="The Work index chapter of the previous WebGL portfolio version."
                title="Field record, the previous WebGL index"
                caption="A render from my earlier portfolio build, kept to show where the current design came from."
              />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="btn-row mt-8">
              <Link className="btn btn-ghost" href="/projects">Back to the gallery</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Open source contribution">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Open source</p>
            <h2 className="h-display">CourtListener · PR #6703</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="stack mt-8">
              <p className="body-copy">
                On 8 January 2026 my PR merged upstream into the Free Law Project’s
                production archive. It adds an @lru_cache to the parenthetical tokenizer
                and cut its cost from 0.22s to 0.003s, about a 65× speedup with a hit
                rate above 99.9%. The review record, the diff, and the merge log sit on
                the pull request itself.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="btn-row mt-6">
              <a className="btn btn-primary" href="https://github.com/freelawproject/courtlistener/pull/6703" target="_blank" rel="noopener noreferrer">View the merged PR ↗</a>
              <Link className="btn btn-ghost" href="/projects/courtlistener-pr">Project detail</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
