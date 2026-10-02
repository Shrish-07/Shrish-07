/* ─── S.M.V. Profile — the single source of truth for who this site is about ─── */

export interface ProfileLink {
  id: string
  label: string
  url: string
  /** Why this link/media is included — shown to visitors */
  note: string
}

export const profile = {
  brand: 'S.M.V.',
  name: 'Shrish Mudumby Venugopal',
  role: 'Engineer · Researcher · Builder',
  tagline: 'Computational Law · Systems Engineering · Institutional Design',

  /** Home — the detailed introduction */
  intro:
    'I am Shrish Mudumby Venugopal — an engineer and researcher working where law, quantification, and systems engineering converge. I build the instruments — metrics, audits, simulations — that measure whether automated systems treat people fairly, and I ship the engineering that proves it: a performance patch merged into the court-data archive used across the legal ecosystem, a published SSRN paper on backtest overfitting, and full-stack applications from legal document intelligence to environmental safety dashboards.',

  /** Home — explicit website objectives */
  objectives: [
    {
      title: 'Catalogue the real work',
      body: 'Fourteen shipped projects with verifiable links, accurate tech stacks, and the figures, audio, and code that document them — no placeholders, no padding.',
    },
    {
      title: 'Make the research legible',
      body: 'Law × AI work explained so a non-specialist can follow the argument, and rigorous enough that a specialist can check the method.',
    },
    {
      title: 'Demonstrate craft',
      body: 'A fast, accessible, hand-built site: no template, minimal dependencies, one consistent design system from the first page to the last.',
    },
    {
      title: 'Invite participation',
      body: 'Try the interactive due-process calculator, read the papers and audits, stress-test the claims, and open a channel to discuss the work.',
    },
  ],

  /** About — the identity narrative, in three registers (from the original brief) */
  pillars: [
    {
      n: 'I',
      title: 'The Engineer',
      body: 'Python to TypeScript, models to merged PRs. Performance-aware systems work — including a 65× speedup merged into CourtListener, the court-data archive used across the legal ecosystem.',
    },
    {
      n: 'II',
      title: 'The Researcher',
      body: 'Operationalizes legal concepts into measurable metrics — five dimensions of procedural due process, fairness-benchmark audits, and validation methods that survive scrutiny.',
    },
    {
      n: 'III',
      title: 'The Builder',
      body: 'End-to-end products: computer-vision patient monitoring, legal document intelligence, quant pipelines, and environmental dashboards — designed, built, shipped.',
    },
  ],

  /** About — longer bio paragraphs (facts drawn only from the work itself) */
  bio: [
    'I work at the intersection of computational law, systems engineering, and institutional design. The central question of my work is simple to state and hard to answer: *can an automated system preserve the procedural rights that a human institution would owe you?*',
    'On the research side, I build quantitative instruments that answer it — a five-dimension stress index for procedural due process, agent-based simulations that red-team legal procedure under AI mediation, independent audits of published fairness benchmarks against the EU AI Act and U.S. anti-discrimination law, and empirical finance research that proves most backtested "edges" are overfitting artifacts.',
    'On the engineering side, I prove the point in production-shaped code: a 65× tokenizer speedup merged into the Free Law Project’s CourtListener, a FastAPI legal-document summarizer, a computer-vision patient-monitoring system, an NYC property forecasting platform, and an MCP trading agent that enforces dry-run safety at the logic layer, not just in config.',
  ],

  /** Overview stats (all sourced from the real record) */
  stats: {
    repos: 16,
    mergedPRs: 1,
    publications: 2,
    hackathons: 3,
    legalDimensions: 5,
    speedup: '65×',
  },

  /** Every project in the gallery, with verbatim-accurate links and real media */
  projectsSummary: 'A 14-project catalogue spanning law & fairness, quant & data, full-stack product, AI systems, and hackathons.',

  socials: [
    {
      id: 'github',
      label: 'GitHub — Shrish-07',
      url: 'https://github.com/Shrish-07',
      note: 'The main engineering record — source code for nearly every project on this site lives here.',
    },
    {
      id: 'github-alt',
      label: 'GitHub — Sourish-07 (teammate account)',
      url: 'https://github.com/Sourish-07',
      note: 'The second account where collaborative/hackathon work is hosted — some repositories below link here.',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shrish-mudumby-venugopal-57884a358/',
      note: 'Professional profile — work history, education, and endorsements in one place.',
    },
    {
      id: 'medium',
      label: 'Medium — shrishvenugopal11',
      url: 'https://medium.com/@shrishvenugopal11',
      note: 'Essays and field notes on law, automation, and algorithmic fairness.',
    },
    {
      id: 'ssrn',
      label: 'SSRN — Published paper',
      url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6078546',
      note: 'The official record of “Empirical Evaluation of Cross-Sectional Equity Signals” (DOI 10.2139/ssrn.6078546).',
    },
    {
      id: 'site',
      label: 'Live previous portfolio',
      url: 'https://shrish-07.vercel.app',
      note: 'The earlier WebGL version of this portfolio, still live — the design history this site builds on.',
    },
  ],
} as const
