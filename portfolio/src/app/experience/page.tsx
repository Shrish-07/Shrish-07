import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import MediaFigure from '@/components/MediaFigure'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Hackathons, merged open-source contributions, and the field notes behind them.',
}

export default function Experience() {
  return (
    <>
      <section className="section" aria-label="Open source">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Experience — the record</p>
            <h1 className="h-display">Shipped in the open, proven in production</h1>
            <p className="body-copy mt-4">
              The evidence of the working record: a merged performance PR on the Free Law
              Project’s production archive, three hackathon builds, and the essays and
              field notes that sit alongside the code.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="stack-lg mt-8">
              <MediaFigure
                src="/images/site/webgl-index.png"
                alt="The Work index chapter of the previous WebGL portfolio version."
                title="Field record — the previous WebGL index"
                caption="Included because it is the visual record of the earlier portfolio architecture this site replaces; the design lineage matters to the story."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Hackathons">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Hackathons</p>
            <h2 className="h-display">Three builds, three proof-points</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="stack-lg mt-8">
              <article className="card">
                <div className="card-body">
                  <p className="card-meta">Hack@Brown 2026 · Python + WebSockets</p>
                  <h3 className="card-title">
                    <a href="https://github.com/Sourish-07/HackBrown" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Trust Me Bro</a>
                  </h3>
                  <p className="card-desc">A wearable lie-detection hat fusing biometrics with Gemini reasoning into a live betting game — including real text-to-speech callouts.</p>
                  <div className="audio-wrap">
                    <p className="mono-tag">“TRUTH” — audio callout from the demo</p>
                    <audio controls preload="none" src="/audio/trust-me-bro-truth.mp3" className="mt-4">
                      Your browser does not support embedded audio.
                    </audio>
                    <p className="small mt-4">
                      Included as evidence of a working end-to-end product: hardware sensors → AI scoring →
                      real-time dashboard → audible verdict. Team: Shrish & Sourish Venugopal, Rayhan Mohamed,
                      Lauren Bell.
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
                  <p className="card-desc">A nursing-monitoring dashboard that compresses event reasoning 50–60% before LLM calls — the HackDartmouth sibling of the Attune patient-safety system.</p>
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
                Merged upstream on 8 January 2026 into the Free Law Project’s production
                archive: an @lru_cache on the parenthetical tokenizer that cut its cost from
                0.22s to 0.003s — a ~65× speedup with a &gt;99.9% hit rate. The review record,
                the diff, and the merge log are the documentation.
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
