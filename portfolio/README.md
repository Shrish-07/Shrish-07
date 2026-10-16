# S.M.V. · Portfolio

A clean, fast, multi-page portfolio and project gallery for my work across
autonomous agents, quantitative finance, and computational law, three frontiers
carried with equal weight.

## Architecture

- **Framework.** Next.js 16 (App Router, TypeScript, strict)
- **Styling.** Tailwind CSS 4 + a hand-rolled design-token layer (`src/app/globals.css`)
- **Theme.** Midnight Terminal, a deep ink field with an electric periwinkle accent
- **Type.** Space Grotesk (display) + JetBrains Mono (instrument), via `next/font`
- **Motion.** CSS transitions + a small `IntersectionObserver` reveal, GPU-cheap and honors
  `prefers-reduced-motion`
- **State.** none server-side; the gallery filter and the DPSI demo are plain client hooks

## Pages

| Route | Purpose |
|---|---|
| `/` | Introduction, website goals, stats, one featured project per pillar, design-history media |
| `/about` | Bio, the three pillars, two cited learning quotes, skills |
| `/projects` | The gallery with 15 projects, live search, and a category filter |
| `/projects/[slug]` | Full write-up per project with links, media, audio, citations, and related projects |
| `/research` | Publications, articles, interactive DPSI calculator, embedded video, references |
| `/experience` | Honors & awards (MHacks 1st place, CRA nomination, TartanHacks 1st place), five hackathon builds (with an audio artifact), and the CourtListener PR |
| `/contact` | A private contact form that emails me directly, plus the public channels (LinkedIn, GitHub, Medium, SSRN) |

## Develop

```bash
cd portfolio
npm install
npm run dev   # http://localhost:3000
```

## Ship

```bash
npm run build
npm start
```

Images in `public/images/` are real artifacts from the projects; audio in `public/audio/`
is the “TRUTH” callout from the Hack@Brown 2026 build.
