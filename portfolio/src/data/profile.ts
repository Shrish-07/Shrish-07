/* == S.M.V. Profile, the single source of truth for who this site is about == */

export interface ProfileLink {
  id: string
  label: string
  url: string
  /** Why this link/media is included, shown to visitors */
  note: string
}

export interface Honor {
  title: string
  org: string
  date: string
  body: string
  link?: { label: string; url: string }
}

export const profile = {
  brand: 'S.M.V.',
  name: 'Shrish Mudumby Venugopal',
  role: 'Engineer · Researcher · Builder',
  tagline: 'Autonomous Agents · Quantitative Finance · Law & Fair Systems',

  /** Home, the detailed introduction */
  intro:
    'I am Shrish Mudumby Venugopal, an engineer and researcher working across three frontiers I treat as equals, autonomous AI agents, quantitative finance, and computational law. The record includes a first-place multi-agent medical-billing advocate from MHacks 2026, an MCP-native autonomous trading agent wired to a live brokerage, an SSRN paper showing that most backtested edges are overfitting artifacts, a 65× performance patch merged into the court-data archive used across the legal ecosystem, and fairness audits that hold lending models to legal standards.',

  /** Home, what I built the site to do */
  objectives: [
    {
      title: 'Lead with the systems I shipped',
      body: 'Fifteen projects with working links, accurate tech stacks, and the figures, audio, and code behind them. No placeholders and no padding.',
    },
    {
      title: 'Make the research legible',
      body: 'Agent architectures and quant methodology explained so a non-specialist can follow the argument, and rigorous enough that a specialist can re-run the method behind it.',
    },
    {
      title: 'Demonstrate craft',
      body: 'A fast, accessible, hand-built site. No template, minimal dependencies, one consistent design system from the first page to the last.',
    },
    {
      title: 'Invite participation',
      body: 'Try the interactive due-process calculator, read the papers and audits, and open a channel to discuss the work with me.',
    },
  ],

  /** About, the identity narrative in three registers */
  pillars: [
    {
      n: 'I',
      title: 'The Engineer',
      body: 'I ship production-shaped backends in Python and TypeScript, from the 300-test backend of a first-place multi-agent system to a 65× speedup merged into CourtListener and an MCP trading agent that treats risk controls as code.',
    },
    {
      n: 'II',
      title: 'The Researcher',
      body: 'I build quantitative instruments that survive scrutiny, from backtest-overfitting diagnostics published on SSRN to fairness audits of lending models and a five-dimension due-process index.',
    },
    {
      n: 'III',
      title: 'The Builder',
      body: 'I take systems end to end, from autonomous agents and voice pipelines to quant research platforms and full-stack products, and I have won hackathon tracks with them at MHacks and TartanHacks.',
    },
  ],

  /** About, longer bio paragraphs (facts drawn only from the work itself) */
  bio: [
    'I work across three fields with equal weight, autonomous agents, quantitative finance, and computational law. The thread through all of it is one question. Can an automated system act competently, safely, and verifiably when real money or real rights are on the line?',
    'On the agent side I built Amyna, the first-place Relay Interactive Agents track winner at MHacks 2026, where the backend was mine, an orchestrated multi-agent workflow on Fetch.ai uAgents and Agentverse with interactive Relay approvals and a voice pipeline for phone-based disputes. I also built an MCP-native autonomous equity trading agent that runs scheduled decision cycles against a live brokerage, drives judgment through Claude, and enforces hard risk rules deterministically in code.',
    'On the quant side I published an SSRN paper showing that most backtested cross-sectional equity edges are overfitting artifacts (PBO near 0.60), and I built the O.R.B.I.T. platform behind a pending paper on political ideology and NYC property prices. On the law side I carry the same engineering standard, through a merged 65× patch in the Free Law Project’s CourtListener, HMDA lending-bias audits, agent-based simulations of AI-mediated legal procedure, and a five-dimension procedural due-process index. Agents, markets, and rights are three settings for one habit, building systems that can be checked.',
  ],

  /** Overview stats, all sourced from the real record */
  stats: {
    repos: 17,
    mergedPRs: 1,
    publications: 2,
    hackathons: 5,
    firstPlaces: 2,
    honors: 3,
    speedup: '65×',
  },

  /** Honors & awards, from the official record */
  honors: [
    {
      title: '1st Place, Relay Interactive Agents Track, MHacks 2026',
      org: 'MHacks · University of Michigan',
      date: 'Oct 2026',
      body:
        'Awarded first place in the Relay Interactive Agents Track at MHacks 2026, a collegiate hackathon hosted by the University of Michigan. Built Amyna, a multi-agent AI system that cross-checks medical bills against clinical visit records, flags questionable charges, and helps patients dispute billing errors while keeping them in control. The backend was mine, an orchestrated agent workflow on Fetch.ai uAgents and Agentverse, integrated with Relay for interactive approvals and a voice pipeline for phone-based disputes.',
      link: { label: 'Winning repository', url: 'https://github.com/Shrish-07/Supreme-Waffles' },
    },
    {
      title: 'CRA Outstanding Undergraduate Researcher Award Nominee',
      org: 'Computing Research Association',
      date: 'Oct 2026',
      body:
        'Nominated for the Computing Research Association Outstanding Undergraduate Researcher Award, recognizing exceptional undergraduate research potential and contributions to computing. The nomination reflects research at the intersection of machine learning, autonomous agents, and quantitative method, applied to real problems in finance and law.',
    },
    {
      title: '1st Place, BNY Track, TartanHacks 2026',
      org: 'TartanHacks · ScottyLabs at Carnegie Mellon',
      date: 'Feb 2026',
      body:
        'Awarded first place in the BNY Track at TartanHacks, a 24-hour collegiate hackathon organized by ScottyLabs at Carnegie Mellon University. Built Politi-folio, an AI-powered platform for geopolitical intelligence, reconciliation, and risk monitoring on the XRP Ledger, addressing back-office operational challenges like compliance, risk assessment, and transaction reconciliation.',
      link: { label: 'Winning repository', url: 'https://github.com/jabnow/Politi-folio' },
    },
  ] as Honor[],

  /** Every project in the gallery, with verbatim-accurate links and real media */
  projectsSummary: 'A 15-project catalogue spanning AI & agents, quant & finance, law & fairness, full-stack product, and hackathons.',

  socials: [
    {
      id: 'github',
      label: 'GitHub · Shrish-07',
      url: 'https://github.com/Shrish-07',
      note: 'My main engineering record. Open an issue or a discussion on any repository, or follow the work where it happens.',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shrish-mudumby-venugopal-57884a358/',
      note: 'The most reliable channel for professional inquiries and opportunities.',
    },
    {
      id: 'medium',
      label: 'Medium · shrishvenugopal11',
      url: 'https://medium.com/@shrishvenugopal11',
      note: 'My essays and field notes, and responses to them are always welcome.',
    },
    {
      id: 'ssrn',
      label: 'SSRN · Published paper',
      url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6078546',
      note: 'The official record of “Empirical Evaluation of Cross-Sectional Equity Signals” (DOI 10.2139/ssrn.6078546).',
    },
  ],

  /** The contact form setup. The form on the Contact page posts here. */
  contactForm: {
    /**
     * PLACEHOLDER. Create a free access key at web3forms.com. You enter your email
     * there once, they email you a key, and you paste that key between the quotes
     * below. Messages from the form go straight to your inbox while your address
     * never appears anywhere in this code.
     */
    accessKey: 'abed3013-4135-4b21-9100-3f8c60dae2b6',
  },
} as const
