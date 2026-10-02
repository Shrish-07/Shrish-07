import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { profile } from '@/data/profile'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shrish-07.vercel.app'),
  title: {
    default: `${profile.name} · ${profile.brand}`,
    template: `%s · ${profile.brand}`,
  },
  description: `${profile.tagline}. My portfolio, built around due-process metrics, algorithmic audits, fairness benchmarks, and full-stack systems.`,
  keywords: [
    'Shrish Mudumby Venugopal',
    'computational law',
    'algorithmic auditing',
    'AI fairness',
    'due process',
    'systems engineering',
  ],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    title: `${profile.name} · ${profile.brand}`,
    description: profile.tagline,
    siteName: profile.brand,
  },
  twitter: { card: 'summary', title: `${profile.name} · ${profile.brand}`, description: profile.tagline },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#f4f3ee',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
