import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send me a message through the contact form, or find me on LinkedIn, GitHub, Medium, and SSRN.',
}

export default function Contact() {
  return (
    <section className="section" aria-label="Contact">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="h-display">Open a channel</h1>
          <p className="body-copy mt-4">
            Two ways to reach me. The form sends a message straight to my inbox and keeps
            my contact details off the page, and the public channels beside it are always
            open.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="contact-grid mt-8">
            <div className="contact-card">
              <p className="eyebrow">Private</p>
              <h2 className="panel-title">Send a message</h2>
              <p className="small mt-2">
                It arrives in my inbox directly. No address published, no spam exposure.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div>
              <p className="eyebrow">Public</p>
              <h2 className="panel-title">Find me in the open</h2>
              <ul className="link-list mt-4">
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
              <p className="small mt-6">
                A few project repositories live under teammate accounts (Sourish-07, jabnow),
                and some may be private. The project pages link to the canonical home either way.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
