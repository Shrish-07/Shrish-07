import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Open a channel. GitHub, LinkedIn, Medium, and SSRN, each with its reason for being here.',
}

export default function Contact() {
  return (
    <>
      <section className="section" aria-label="Contact">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="h-display">Open a channel</h1>
            <p className="body-copy mt-4">
              I am open to research, engineering, or collaboration at the boundary of law
              and computation. Every link below is here for a reason, not decoration.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="link-list mt-8">
              {profile.socials.map((s) => (
                <li key={s.id}>
                  <a className="link-row" href={s.url} target="_blank" rel="noopener noreferrer">
                    <span className="link-title">{s.label}</span>
                    <span className="link-note">{s.note}</span>
                    <span className="link-caret" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Participate">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Participate</p>
            <h2 className="h-display">Three ways to engage with the work</h2>
            <p className="body-copy mt-4">
              If you want to do more than scroll past, these are my suggestions.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel-grid mt-8">
              <div>
                <p className="panel-num">01</p>
                <h3 className="panel-title">Try the DPSI</h3>
                <p className="panel-body">
                  Move the five sliders on the Research page and watch how the composite
                  index and the failure flags respond.
                </p>
                <div className="mt-4">
                  <Link className="smv-link" href="/research">Open the calculator <span aria-hidden="true">→</span></Link>
                </div>
              </div>
              <div>
                <p className="panel-num">02</p>
                <h3 className="panel-title">Question the audits</h3>
                <p className="panel-body">
                  The FairGround audit and the HMDA pipeline are documented so they can be
                  checked. Open an issue on any project repository if a claim, a method,
                  or a replication step needs a sharper answer.
                </p>
                <div className="mt-4">
                  <a className="smv-link" href="https://github.com/Shrish-07" target="_blank" rel="noopener noreferrer">Browse the repositories <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <div>
                <p className="panel-num">03</p>
                <h3 className="panel-title">Read and respond</h3>
                <p className="panel-body">
                  The SSRN paper is public, and the Medium essays are open. Replies and
                  disagreements are welcome.
                </p>
                <div className="mt-4">
                  <a className="smv-link" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6078546" target="_blank" rel="noopener noreferrer">Read the paper <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="small mt-8">
              A few project repositories live under teammate accounts (Sourish-07, jabnow),
              and some may be private. The links point to the canonical project home either way.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
