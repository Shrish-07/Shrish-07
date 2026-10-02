import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import DpsiDemo from '@/components/DpsiDemo'
import { publications, articles, references } from '@/data/publications'

export const metadata: Metadata = {
  title: 'Research & Publications',
  description: 'My published papers, working papers, articles, an interactive due-process calculator, and the full reference list.',
}

export default function Research() {
  return (
    <>
      <section className="section" aria-label="Publications">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Research</p>
            <h1 className="h-display">Publications & working papers</h1>
            <p className="body-copy mt-4">
              My public research record. Each entry links to its official page or to the
              repository carrying the work behind it.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="stack-lg mt-8">
              {publications.map((pub) => (
                <article key={pub.id} className="card">
                  <div className="card-body">
                    <p className="card-meta">{pub.statusLabel} · {pub.subtitle}</p>
                    <h3 className="card-title">{pub.title}</h3>
                    <p className="card-desc">{pub.abstract}</p>
                    {pub.links.length > 0 ? (
                      <div className="card-links">
                        {pub.links.map((l) => (
                          <a key={l.url} className="smv-link" href={l.url} target="_blank" rel="noopener noreferrer">
                            {l.label} <span aria-hidden="true">↗</span>
                            {l.note ? <span className="small" style={{ color: 'var(--text-faint)' }}>{l.note}</span> : null}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Articles">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Field notes</p>
            <h2 className="h-display">Articles & essays</h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="link-list mt-8">
              {articles.map((a) => (
                <li key={a.id}>
                  <a className="link-row" href={a.url} target="_blank" rel="noopener noreferrer">
                    <span className="link-title">{a.title}</span>
                    <span className="link-note">{a.kind} · {a.note}</span>
                    <span className="link-caret" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    
      <section className="section" aria-label="Interactive due-process calculator">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Participation</p>
            <h2 className="h-display">Try the due-process calculator</h2>
            <p className="body-copy mt-4">
              This is my Due Process Stress Index as an interactive demo. Each slider stands
              for one dimension of due process, and the composite index and the failure-mode
              flags respond as you move them. The full framework and its invariants live in
              the DPSI whitepaper.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8">
              <DpsiDemo />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="btn-row mt-8">
              <Link className="btn btn-primary" href="/projects/due-process-index">Open the DPSI project</Link>
              <Link className="btn btn-ghost" href="/projects/fairground-audit">See the benchmark audit</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Video">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Media</p>
            <h2 className="h-display">Context worth watching</h2>
          </Reveal>
          <Reveal delay={120}>
            <figure className="media-figure mt-8">
              <div className="video-frame">
                <iframe
                  src="https://embed.ted.com/talks/joy_buolamwini_how_i_m_fighting_bias_in_algorithms"
                  title="Joy Buolamwini, How I'm fighting bias in algorithms (TED Talk)"
                />
              </div>
              <figcaption>
                <span className="cap-title">Embedded video</span>
                My interest in algorithmic auditing sits in the context of work like Joy
                Buolamwini’s TEDx talk “How I’m fighting bias in algorithms” (TEDxBeaconStreet,
                November 2016). Her “coded gaze” framing is the same argument my FairGround audit
                and the Algorithmic Auditor build on. Talk from
                <a className="smv-link" href="https://www.ted.com/talks/joy_buolamwini_how_i_m_fighting_bias_in_algorithms" target="_blank" rel="noopener noreferrer">{' '}ted.com ↗</a>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="References">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Citations</p>
            <h2 className="h-display">References</h2>
            <p className="body-copy mt-4">
              Every externally sourced fact, dataset, and media asset used on this site,
              numbered and attributed.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ol className="citation-list mt-8">
              {references.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  )
}
