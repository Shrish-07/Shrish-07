import Link from 'next/link'
import { profile } from '@/data/profile'

const FOOTER_NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/research', label: 'Research' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">{profile.brand} · {profile.name}</p>
          <p className="footer-tag">{profile.tagline}</p>
          <ul className="footer-links mt-6" aria-label="External profiles">
            {profile.socials.slice(0, 3).map((s) => (
              <li key={s.id}>
                <a className="smv-link" href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link className="smv-link" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="footer-legal">
        © MMXXVI {profile.name} · Designed & built from scratch with Next.js, React, and Tailwind CSS
      </p>
    </footer>
  )
}
