import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Quote from '@/components/Quote'
import { profile } from '@/data/profile'
import { learningQuotes } from '@/data/publications'

export const metadata: Metadata = {
  title: 'About',
  description: `Who ${profile.name} is — engineer, researcher, builder — and the learning philosophy behind the work.`,
}

const SKILLS = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'ML & Statistics', items: ['XGBoost', 'LightGBM', 'SHAP', 'scikit-learn', 'YOLOv8', 'Transformers (DistilBART)', 'CPCV / PBO validation'] },
  { group: 'Web & Product', items: ['Next.js', 'React', 'Tailwind CSS', 'FastAPI', 'Express', 'Streamlit', 'JWT auth'] },
  { group: 'Systems & Tools', items: ['Git / GitHub', 'SQLite / SQLModel', 'Docker', 'GitHub Actions', 'Vercel / Netlify / Render', 'QuantConnect', 'MCP'] },
]

export default function About() {
  return (
    <>
      <section className="section" aria-label="Who I am">
        <div className="container">
          <Reveal>
            <p className="eyebrow">About — the person</p>
            <h1 className="h-display">Who S.M.V. is, in three registers</h1>
          </Reveal>
          <Reveal delay={100}>
            <div className="stack mt-8">
              {profile.bio.map((p, i) => (
                <p className="body-copy" key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="The three pillars">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Identity</p>
            <h2 className="h-display">Engineer, researcher, builder</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel-grid mt-8">
              {profile.pillars.map((p) => (
                <div key={p.n}>
                  <p className="panel-num">— {p.n} —</p>
                  <h3 className="panel-title">{p.title}</h3>
                  <p className="panel-body">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Learning">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Learning, in two voices</p>
            <h2 className="h-display">Two quotes that shaped how I learn</h2>
            <p className="body-copy mt-4">
              These are the two citations I return to. Each is paired with the specific lesson
              it produced — the “learning” part of the brief, made explicit.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="stack-lg mt-8">
              {learningQuotes.map((q) => (
                <Quote key={q.text} text={q.text} source={q.source} note={q.note} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Skills">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Working toolkit</p>
            <h2 className="h-display">Skills</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel-grid mt-8">
              {SKILLS.map((s) => (
                <div key={s.group}>
                  <h3 className="panel-title">{s.group}</h3>
                  <ul className="chip-row mt-4">
                    {s.items.map((i) => (
                      <li key={i} className="chip">{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="btn-row mt-8">
              <Link className="btn btn-primary" href="/projects">See the evidence</Link>
              <Link className="btn btn-ghost" href="/contact">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
