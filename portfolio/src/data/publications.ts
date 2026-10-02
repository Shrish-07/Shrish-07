/* ─── Publications, articles, quotes, and references ─── */

export interface Publication {
  id: string
  title: string
  subtitle: string
  abstract: string
  status: 'published' | 'pending' | 'working-paper'
  statusLabel: string
  links: { label: string; url: string; note?: string }[]
}

export const publications: Publication[] = [
  {
    id: 'equity-signals',
    title: 'An Empirical Evaluation of Cross-Sectional Equity Signals Under Backtest Overfitting Diagnostics',
    subtitle: 'SSRN Preprint — January 2026',
    abstract:
      'A comprehensive empirical evaluation of nine cross-sectional equity signals, testing factor performance and selection bias under Combinatorial Purged Cross-Validation and Probability of Backtest Overfitting diagnostics. Central result: PBO ≈ 0.60 — most in-sample winners fail out-of-sample, confirmed by a public QuantConnect live replication.',
    status: 'published',
    statusLabel: 'Published · SSRN',
    links: [
      { label: 'SSRN — official record', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6078546', note: 'DOI 10.2139/ssrn.6078546' },
      { label: 'QuantConnect live replication', url: 'https://www.quantconnect.cloud/backtest/c3b036b3c9c13a2161a484db6037baac/?theme=chrome', note: 'Out-of-sample executable backtest' },
    ],
  },
  {
    id: 'property-prices',
    title: 'Political Ideology and Residential Property Prices',
    subtitle: 'Empirical study — 2026',
    abstract:
      'An empirical investigation into the relationship between political ideology metrics and residential property valuation, examining market-preference transmission mechanisms across electoral geographies in New York City. The empirical backbone is the O.R.B.I.T. forecasting platform.',
    status: 'pending',
    statusLabel: 'Pending publication',
    links: [
      { label: 'Underlying research platform', url: 'https://github.com/Shrish-07/O.R.B.I.T.', note: 'The O.R.B.I.T. repository carrying the data and models' },
    ],
  },
  {
    id: 'dpsi-whitepaper',
    title: 'The Procedural Due Process Stress Index (DPSI): Measuring Procedural Degradation in Automated Decision Systems',
    subtitle: 'Framework write-up — 2026',
    abstract:
      'Introduces DPSI: procedural due process operationalized as a measurable system property across five dimensions (Notice Clarity, Opportunity to Contest, Timing Adequacy, Human Override Availability, Error Correction Pathways), with invariant enforcement and qualitative failure modes — symbolic due process, temporal compression, responsibility diffusion.',
    status: 'working-paper',
    statusLabel: 'Working paper',
    links: [
      { label: 'Read in the repository', url: 'https://github.com/Shrish-07/procedural-due-process-index/blob/main/papers/dpsi_whitepaper.md', note: 'The full whitepaper alongside the engine it describes' },
    ],
  },
]

export interface Article {
  id: string
  title: string
  kind: string
  url: string
  note: string
}

export const articles: Article[] = [
  {
    id: 'black-box-courtroom',
    title: 'The Black Box in the Courtroom: Can AI Risk Assessments Preserve Due Process?',
    kind: 'Essay',
    url: 'https://medium.com/@shrishvenugopal11',
    note: 'An essay on whether opaque risk-assessment tools can satisfy the procedural guarantees courts require.',
  },
  {
    id: 'law-speed',
    title: 'The Law Is Moving at Human Speed in a Machine-Speed World',
    kind: 'Analysis',
    url: 'https://medium.com/@shrishvenugopal11',
    note: 'An analysis of the widening tempo gap between automated decisions and legal oversight.',
  },
  {
    id: 'fairground-audit-article',
    title: 'Auditing the FairGround Fairness Benchmark Against EU AI Act Standards',
    kind: 'Audit',
    url: 'https://github.com/Shrish-07/fairground-fairness-benchmark',
    note: 'The accompanying written audit — reproducibility, robustness, and legal alignment findings.',
  },
]

/** The two required learning quotes, each paired with what it taught the author. */
export const learningQuotes = [
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    source: 'Harold Abelson & Gerald Jay Sussman, Structure and Interpretation of Computer Programs (MIT Press, 1985)',
    note: 'What it taught me: an audit is only as strong as the next reader’s ability to question and re-run it. That is why every research project here ships with reproducible pipelines, versioned baselines, and documented data lineage — the code is written for people first, machines second.',
  },
  {
    text: 'The fundamental requisite of due process of law is the opportunity to be heard.',
    source: 'Grannis v. Orban, 234 U.S. 385, 394 (1916)',
    note: 'What it taught me: if being heard is the fundamental requisite, then any automated system that quietly erodes the opportunity to contest is a due-process problem — measurable before it becomes a constitutional one. This line is the doctrinal seed of the Due Process Stress Index.',
  },
]

/** The thesis quote from my own DPSI whitepaper, shown on the home page. */
export const thesisQuote = {
  text: 'Procedural due process must be treated as a measurable system property rather than a binary legal threshold.',
  source: 'S.M.V., “The Procedural Due Process Stress Index” whitepaper (2026)',
}

/** Numbered reference list for externally sourced content across the site. */
export const references: string[] = [
  'Simson, Fabris, Fröhner, Kreuter & Kern, “Bias Begins with Data: The FairGround Corpus for Robust and Reproducible Research on Algorithmic Fairness,” arXiv:2510.22363 (2025).',
  'Bailey, Borwein, López de Prado & Zhu, “The Probability of Backtest Overfitting,” Journal of Computational Finance 20(4), 39–72 (2017).',
  'López de Prado, Advances in Financial Machine Learning, Wiley (2018).',
  'Jegadeesh & Titman, “Returns to Buying Winners and Selling Losers,” Journal of Finance 48(1) (1993).',
  'Grannis v. Orban, 234 U.S. 385 (1916).',
  'Lundberg & Lee, “A Unified Approach to Interpreting Model Predictions” (SHAP), NeurIPS 30 (2017).',
  'U.S. Consumer Financial Protection Bureau / FFIEC — Home Mortgage Disclosure Act (HMDA) data.',
  'ProPublica — COMPAS recidivism data and the “Machine Bias” analysis (2016), as redistributed with FairGround.',
  'NYC Department of City Planning (PLUTO/PAD), NYC Department of Finance (ACRIS sales), NYC Board of Elections (council and precinct returns).',
  '“Price and Volume Data for All US Stocks & ETFs” — Marjanović, Kaggle (as used by the equity-signals pipeline).',
  'Regulation (EU) 2024/1689 — the European AI Act, high-risk system requirements.',
  'Embedded video on the Research page: Joy Buolamwini, “How I’m fighting bias in algorithms,” TEDxBeaconStreet (November 2016), embedded from ted.com.',
  'Embedded audio on the Experience and project pages: “TRUTH” voice callout generated with ElevenLabs, a real asset from the Trust Me Bro project (Hack@Brown 2026).',
  'Abelson & Sussman, Structure and Interpretation of Computer Programs, MIT Press (1985) — learning quote on the About page.',
]
