/* ─── Project catalogue — every entry is accurate to the repository ─── */

export type ProjectCategory = 'law-fairness' | 'quant-data' | 'fullstack' | 'ai-systems' | 'hackathon'

export const categoryLabels: Record<ProjectCategory, string> = {
  'law-fairness': 'Law & Fairness',
  'quant-data': 'Quant & Data',
  'fullstack': 'Full-Stack',
  'ai-systems': 'AI Systems',
  hackathon: 'Hackathons',
}

export interface ProjectLink {
  label: string
  url: string
  note: string
}

export interface ProjectImage {
  src: string
  alt: string
  title: string
  caption: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  domain: string
  category: ProjectCategory
  year: string
  short: string
  long: string[]
  tech: string[]
  highlight?: string
  featured?: boolean
  links: ProjectLink[]
  images?: ProjectImage[]
  audio?: { src: string; title: string; caption: string }
  citations?: string[]
}

export const projects: Project[] = [
  /* ── Signature: law × computation ── */
  {
    slug: 'due-process-index',
    name: 'Due Process Stress Index',
    tagline: 'Procedural Fairness Metric',
    domain: 'AI & Due Process',
    category: 'law-fairness',
    year: '2026',
    short: 'A novel Python framework that quantifies due-process degradation in automated decision systems across five constitutional dimensions.',
    long: [
      'The Procedural Due Process Stress Index (DPSI) is a formal measurement framework that operationalizes procedural due process as a system property. It decomposes due process into five measurable dimensions, that is Notice Clarity, Opportunity to Contest, Timing Adequacy, Human Override Availability, and Error Correction Pathways, and aggregates them into a single auditable composite index.',
      'Beyond scoring, the engine enforces logical dependencies between dimensions through invariants (a “principle of procedural dominance”), and it detects qualitative failure modes such as symbolic due process, temporal compression, and responsibility diffusion. It is explicitly a research instrument for the early detection of procedural degradation before formal legal violations occur.',
    ],
    tech: ['Python', 'Fairness', 'Metrics', 'Simulation', 'Legal'],
    highlight: '5 dimensions → 1 index',
    featured: true,
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/procedural-due-process-index', note: 'Full source, including the indicator engine, invariants, the failure-mode registry, and the whitepaper.' },
      { label: 'Whitepaper (repo)', url: 'https://github.com/Shrish-07/procedural-due-process-index/blob/main/papers/dpsi_whitepaper.md', note: 'The formal write-up covering the dimensions, invariants, failure modes, and validity limits.' },
    ],
    citations: [
      'S.M.V., “The Procedural Due Process Stress Index: Measuring Procedural Degradation in Automated Decision Systems,” project whitepaper (2026).',
      'Grannis v. Orban, 234 U.S. 385, 394 (1916). “The fundamental requisite of due process of law is the opportunity to be heard.”',
    ],
  },
  {
    slug: 'ai-legal-sim',
    name: 'AI Legal Simulation',
    tagline: 'Agent-Based Legal Reasoning',
    domain: 'AI & Law',
    category: 'law-fairness',
    year: '2026',
    short: 'Reproducible simulation framework that stress-tests legal procedures under AI-mediated decisions. Deterministic rules enforce law while bounded-rational agents probe failure modes.',
    long: [
      'This framework treats law as an engineered procedural system. Deterministic rules enforce procedure, while AI agents acting as adjudicators, claimants, and oversight bodies generate bounded strategic behavior within those constraints. The objective is to identify procedural failure modes, fairness degradation, and robustness limits under scale and adversarial pressure.',
      'Baseline simulations run without procedural violations. Under a deliberately adversarial deadline-exploit attack, violation frequency reaches 100%. The lesson is structural. Automation amplifies rigid procedural rules until minor loopholes become systemic failures. Experiments are reproducible, and the project is diagnostic rather than predictive or advisory.',
    ],
    tech: ['Python', 'Agent Modeling', 'Rule Systems', 'Simulation'],
    highlight: 'Adversarial violation rate of 100%',
    featured: true,
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/ai-legal-simulation', note: 'The runnable simulation framework, experiment configs, and full results sets.' },
    ],
  },
  {
    slug: 'courtlistener-pr',
    name: 'CourtListener · 65× Speedup',
    tagline: 'Merged PR · Open Source',
    domain: 'Legal Infrastructure',
    category: 'law-fairness',
    year: '2026',
    short: 'PR #6703 merged into the Free Law Project’s production court-data archive. An @lru_cache on parenthetical tokenization gives about a 65× speedup with a cache hit rate above 99.9%.',
    long: [
      'CourtListener is the Free Law Project’s production archive of millions of U.S. court opinions, relied on by legal professionals, researchers, and the entire legal-tech ecosystem. I contributed PR #6703, which adds bounded caching (@lru_cache) to the parenthetical tokenization hot path used in opinion clustering.',
      'The change delivers a ~65× speedup on tokenization-heavy workloads (0.22s → 0.003s per batch) with a >99.9% cache hit rate, while a deliberately bounded cache (4096 entries) prevents memory bloat. The PR was assigned to, reviewed, and merged by a core maintainer.',
    ],
    tech: ['Python', 'Caching', 'NLP', 'Performance', 'Open Source'],
    highlight: '65× speedup',
    featured: true,
    links: [
      { label: 'Merged PR #6703', url: 'https://github.com/freelawproject/courtlistener/pull/6703', note: 'The actual diff, review conversation, and merge record on the production repository.' },
      { label: 'CourtListener repo', url: 'https://github.com/freelawproject/courtlistener', note: 'The upstream project, the Free Law Project’s court-data archive.' },
    ],
    citations: [
      'Free Law Project, CourtListener, an open-source archive of U.S. court opinions (github.com/freelawproject/courtlistener).',
    ],
  },
  {
    slug: 'fairground-audit',
    name: 'FairGround Audit',
    tagline: 'Fairness Benchmark Audit',
    domain: 'AI Fairness',
    category: 'law-fairness',
    year: '2026',
    short: 'Independent academic audit of the 2025 FairGround fairness benchmark, covering reproducibility, robustness under realistic data perturbations, and alignment with the EU AI Act.',
    long: [
      'This project independently reproduces and audits the FairGround corpus (Simson et al., 2025), a benchmark suite for algorithmic fairness. I replicated the reported results, tested robustness under realistic perturbations such as missing data and distribution shift, and evaluated whether the fairness claims hold under legally realistic deployment conditions.',
      'The key finding is that fairness pipelines depend on undocumented preprocessing assumptions and can fail under realistic conditions. Statistical-parity metrics do not map directly onto legal standards such as disparate impact or procedural due process. My read is that the benchmark suits exploratory research but is insufficient as a standalone certification of legal fairness.',
    ],
    tech: ['Jupyter', 'Fairness', 'ML', 'Regulation', 'Reproducibility'],
    highlight: 'Peer-audit quality',
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/fairground-fairness-benchmark', note: 'Replication notebooks, the legal audit memo, the robustness matrix, and systemic findings.' },
    ],
    citations: [
      'Simson, Fabris, Fröhner, Kreuter & Kern, “Bias Begins with Data: The FairGround Corpus for Robust and Reproducible Research on Algorithmic Fairness,” arXiv:2510.22363 (2025).',
      'COMPAS recidivism dataset as distributed with FairGround, originally compiled and analyzed by ProPublica (2016).',
      'Regulation (EU) 2024/1689 (the AI Act), high-risk system requirements.',
    ],
  },
  {
    slug: 'algorithmic-auditor',
    name: 'Algorithmic Auditor',
    tagline: 'Fair Lending Inspection',
    domain: 'Algorithmic Auditing',
    category: 'law-fairness',
    year: '2025',
    short: 'Full-stack bias audit of a loan-approval model on HMDA data, with fairness metrics, SHAP explainability, and race-swapped counterfactuals.',
    long: [
      'An end-to-end algorithmic audit of a binary loan-approval classifier trained on U.S. Home Mortgage Disclosure Act (HMDA) records. Deterministic preprocessing with controlled downsampling, a frozen baseline model (AUC ≈ 0.79, tagged baseline-hmda-2024), base-rate analysis by protected class, demographic parity and equal-opportunity diagnostics, and SHAP-based global and group-wise explanations.',
      'The central result is that the model satisfies counterfactual fairness tests under controlled attribute substitution, and yet approval rates still vary significantly across racial groups. Disparities emerge through correlated financial variables rather than protected attributes, which shows how a “neutral” model can reproduce structural inequality.',
    ],
    tech: ['Python', 'SHAP', 'XGBoost', 'Counterfactuals', 'HMDA'],
    highlight: 'AUC ≈ 0.79 · SHAP',
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/algorithmic-auditor', note: 'The audit pipeline covering preprocessing, diagnostics, model training, fairness tests, and governance notes.' },
    ],
    images: [
      {
        src: '/images/auditor/system_overview.png',
        alt: 'End-to-end algorithmic audit pipeline diagram, from data ingestion through the baseline model, fairness diagnostics, explainability, and governance.',
        title: 'Audit pipeline overview',
        caption: 'Shows the full data-to-governance path at a glance. Preprocessing flows into the baseline model, fairness diagnostics, SHAP explainability, and governance review.',
      },
    ],
    citations: [
      'Home Mortgage Disclosure Act (HMDA) data from the U.S. Consumer Financial Protection Bureau / FFIEC.',
      'Lundberg & Lee, “A Unified Approach to Interpreting Model Predictions” (SHAP), NeurIPS 30 (2017).',
    ],
  },
  {
    slug: 'equity-signals',
    name: 'Cross-Sectional Equity Validation',
    tagline: 'Quant Finance Validation',
    domain: 'Quantitative Finance',
    category: 'quant-data',
    year: '2026',
    short: 'Published SSRN paper + reproducible pipeline evaluating nine cross-sectional equity signals under Combinatorial Purged Cross-Validation and Probability of Backtest Overfitting.',
    long: [
      'Published on SSRN (DOI 10.2139/ssrn.6078546), this pipeline evaluates nine cross-sectional equity signals, covering momentum, reversal, and volume features, under Combinatorially Purged Cross-Validation (20 folds, 105-day embargo) and the Probability of Backtest Overfitting framework.',
      'The central finding is a PBO of about 0.60, meaning most model configurations that look predictive in-sample fail out-of-sample. A public QuantConnect replication (Jan 2020 to Aug 2024) turns an in-sample Sharpe of 0.22 into an out-of-sample −0.57 with a Probabilistic Sharpe of 0.006%, matching what CPCV predicted.',
    ],
    tech: ['Python', 'CPCV', 'PBO', 'Statistical Validation', 'Quant Finance'],
    highlight: 'SSRN · PBO ≈ 0.60',
    links: [
      { label: 'GitHub repository (Sourish-07)', url: 'https://github.com/Sourish-07/cross-sectional-equity-validation', note: 'The reproducible research pipeline covering the dataset builder, CPCV run, backtest, PBO computation, and cost sweep.' },
      { label: 'SSRN paper (published)', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6078546', note: 'The formal published paper, DOI 10.2139/ssrn.6078546.' },
      { label: 'QuantConnect live replication', url: 'https://www.quantconnect.cloud/backtest/c3b036b3c9c13a2161a484db6037baac/?theme=chrome', note: 'A public out-of-sample backtest that mirrors the PBO finding.' },
    ],
    citations: [
      'Bailey, Borwein, López de Prado & Zhu, “The Probability of Backtest Overfitting,” Journal of Computational Finance 20(4) (2017).',
      'López de Prado, Advances in Financial Machine Learning, Wiley (2018).',
      'Data from “Price and Volume Data for All US Stocks & ETFs” (Marjanović, Kaggle).',
    ],
  },

  /* ── Full-stack applications ── */
  {
    slug: 'lawlens',
    name: 'LawLens',
    tagline: 'Regulatory Document Intelligence',
    domain: 'Legal Tech',
    category: 'fullstack',
    year: '2025',
    short: 'Full-stack legal-document summarizer. Secure PDF uploads produce chunked DistilBART NLP summaries over a FastAPI back end and a Next.js front end.',
    long: [
      'LawLens lets users upload legal PDFs and receive AI-driven summaries, making dense statutes and case law more accessible for policy research and civic engagement. The back end is FastAPI with SQLAlchemy/SQLModel over SQLite. Text is extracted with PyPDF and summarized in chunks with Hugging Face’s DistilBART, which handles lengthy documents efficiently.',
      'Security is first class. JWT tokens, bcrypt hashing, document ownership tied to user accounts, and utilities to purge expired files. The front end is Next.js and TypeScript, developed over five weeks as an end-to-end personal project and configured for deployment on Render.',
    ],
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'DistilBART', 'JWT'],
    highlight: 'DistilBART · JWT',
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/Lawlens', note: 'The monorepo with the FastAPI API, Next.js web app, Supabase schema, and deployment config.' },
    ],
    citations: [
      'Hugging Face Transformers, DistilBART summarization pipeline.',
    ],
  },
  {
    slug: 'vitatrack',
    name: 'VitaTrack',
    tagline: 'Environmental Safety Dashboard',
    domain: 'Health & Environment',
    category: 'fullstack',
    year: '2025',
    short: 'Full-stack wellness & environmental safety dashboard. ZIP-based hydration tracking, UV and air-quality alerts, weather, disaster notifications, a chatbot, and text-to-speech live in one app.',
    long: [
      'VitaTrack unifies hydration tracking, UV and air-quality monitoring, weather, disaster alerts, and mental-health prompts into one accessible platform. Users enter a ZIP code to receive localized metrics with clear health-grade labels, hydration progress bars, and recent disaster alerts such as floods, wildfires, and power outages.',
      'Accessibility is a design pillar, not an afterthought. It has text-to-speech for spoken updates, a simplified-UI mode, and a built-in chatbot for guidance. The front end is React, the back end is Python, and several public APIs are wired into one experience.',
    ],
    tech: ['React', 'Python', 'Multi-API', 'TTS', 'Accessibility'],
    highlight: 'TTS · Multi-API',
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/VitaTrack', note: 'The full-stack code with the React front end, Python back end, and all API integrations.' },
    ],
    citations: [
      'External APIs including OpenWeather, AirNow (US EPA), GeoApify, disaster-alert feeds, and Google Gemini for the chatbot.',
    ],
  },

  /* ── Quant & data ── */
  {
    slug: 'orbit',
    name: 'O.R.B.I.T.',
    tagline: 'NYC Property Price Prediction',
    domain: 'Real Estate ML',
    category: 'quant-data',
    year: '2025',
    short: 'NYC property-price forecasting platform. LightGBM champion model (MAE ≈ 0.429 log-price), SHAP interpretability, political-scenario simulation, and a seven-page Streamlit app.',
    long: [
      'O.R.B.I.T. (Observational Real-estate Behavior & Intelligence Toolkit) is a reproducible research platform for property-level price forecasting in New York City. It canonicalizes public datasets (PLUTO, PAD, DOF/ACRIS sales, council-district election returns), trains gradient-boosting models, and exposes a seven-page Streamlit application for single-property exploration, batch scoring, and political-scenario simulation.',
      'Leakage control is engineered in. Known leaky variables are explicitly blacklisted before training. Political-ideology signals are computed by aggregating election results across multiple years, and three scenario families (liberal, conservative, mixed-governance) translate governance shifts into price effects. This project is the empirical basis for my pending paper on political ideology and residential property prices.',
    ],
    tech: ['Python', 'LightGBM', 'XGBoost', 'SHAP', 'Streamlit'],
    highlight: 'MAE ≈ 0.429 log-price',
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/O.R.B.I.T.', note: 'The full pipeline, model registry, architecture docs, feature blacklists, and the Streamlit app.' },
    ],
    images: [
      { src: '/images/orbit/model_comparison.png', alt: 'Model comparison chart for O.R.B.I.T. showing the LightGBM champion against baseline models.', title: 'Model comparison', caption: 'Why the LightGBM champion won, shown as an empirical evaluation rather than just the final score.' },
      { src: '/images/orbit/model_comparison_mae.png', alt: 'Mean absolute error comparison across O.R.B.I.T. model candidates.', title: 'Model comparison, MAE view', caption: 'The error view of the same comparison. MAE is the metric that drove the model choice.' },
      { src: '/images/orbit/political_ideology_vs_price.png', alt: 'Relationship chart of political ideology versus residential property price in NYC.', title: 'Political ideology vs. price', caption: 'The signal at the heart of my pending paper, with the political-science lens on the data.' },
      { src: '/images/orbit/scenario_impact_all_three.png', alt: 'Scenario impact chart showing the effect of three political-scenario families on property prices.', title: 'Scenario impact, all three', caption: 'How the three governance scenarios shift modeled prices across the simulation surface.' },
      { src: '/images/orbit/scenario_impact_by_district.png', alt: 'District-level breakdown of political-scenario price impact across NYC council districts.', title: 'Scenario impact by district', caption: 'The granularity of the political simulation, with effects broken down by district.' },
      { src: '/images/orbit/shap_top10.png', alt: 'SHAP top-10 feature importance chart for the O.R.B.I.T. champion model.', title: 'SHAP, top 10 features', caption: 'Interpretability is part of the research method, not just the core engineering.' },
      { src: '/images/orbit/shap_top15.png', alt: 'SHAP top-15 feature importance chart for the O.R.B.I.T. champion model.', title: 'SHAP, top 15 features', caption: 'A deeper feature view for the same reason, with transparent and checkable model logic.' },
      { src: '/images/orbit/temporal_ideology_shift.png', alt: 'Temporal chart of how NYC political-ideology signals shift across election years.', title: 'Temporal ideology shift', caption: 'Shows the time dimension. Ideology signals are aggregated across election years to reduce noise.' },
    ],
    citations: [
      'PLUTO and PAD tax-lot data from the NYC Department of City Planning.',
      'Sales records from the NYC Department of Finance / ACRIS.',
      'Election returns from the NYC Board of Elections (council and precinct results).',
    ],
  },

  /* ── AI systems ── */
  {
    slug: 'attune',
    name: 'Attune',
    tagline: 'Built at NexHacks',
    domain: 'Hackathon',
    category: 'hackathon',
    year: '2026',
    short: 'Real-time patient-monitoring system built at NexHacks. Hospital camera feeds analyzed with YOLOv8 to detect discomfort, falls, and unsafe activity, with a LiveKit voice interface.',
    long: [
      'Attune is an AI-powered patient-safety system that analyzes hospital camera feeds in real time to detect discomfort, falls, and unsafe activity, then alerts staff through a hands-free voice interface powered by LiveKit. Computer vision runs on YOLOv8 with an emphasis on low-latency inference for clinical environments.',
      'The repository at Shrish-07/NexHacks carries the project’s public record (2 stars, 1 fork). The repo name predates the product name. Its hackathon sibling IntelliCare AI, also on this page, reuses the same core insight of compression-first, explainable event triage that reduces human cognitive overload.',
    ],
    tech: ['Python', 'YOLOv8', 'LiveKit', 'Computer Vision', 'Healthcare'],
    highlight: 'Real-time CV',
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Shrish-07/NexHacks', note: 'The Attune / NexHacks public record. The repo name predates the product name.' },
    ],
  },
  {
    slug: 'mcp-agent',
    name: 'MCP Trading Agent',
    tagline: 'LLM Tooling Server',
    domain: 'AI Tooling',
    category: 'ai-systems',
    year: '2026',
    short: 'A Model Context Protocol toolchain paired with an Anthropic-powered equities research agent. Safety-hardened, dry-run-locked in code, and fully journaled.',
    long: [
      'An experiment in LLM-native systems. A custom Model Context Protocol (MCP) toolchain around the Robinhood trading endpoint, paired with an Anthropic-powered agent that ingests market data and headlines, journals decisions per ticker, tracks positions and P&L, and routes every action through a hardened execution layer.',
      'Safety is engineered in, not configured on. DRY_RUN is enforced at the logic layer rather than in configuration, with explicit pricing, retry handling, and cost tracking. The project demonstrates the emerging pattern of auditable, tool-using agents acting on live external systems with real guardrails.',
    ],
    tech: ['Python', 'MCP', 'LLM Tooling', 'Anthropic API', 'Risk Engineering'],
    highlight: 'DRY_RUN enforced in logic',
    links: [
      { label: 'GitHub repository (Sourish-07)', url: 'https://github.com/Sourish-07/MCP', note: 'The MCP server, agent core (ingest, metrics, decision, execution), and run documentation.' },
    ],
    citations: ['Robinhood MCP trading endpoint, used as the external system under audit.'],
  },

  /* ── Hackathons ── */
  {
    slug: 'trust-me-bro',
    name: 'Trust Me Bro',
    tagline: 'Hackathon · Wearable AI',
    domain: 'Hackathon',
    category: 'hackathon',
    year: '2026',
    short: 'A lie-detection hat built at Hack@Brown 2026. It fuses biometric signals with Gemini linguistic analysis into a live, voice-calling betting game.',
    long: [
      '“Trust Me Bro” is a wearable lie-detection hat built at Hack@Brown 2026. A Raspberry Pi fuses physiological signals (heart rate, stress, facial emotion) with linguistic cues. Audio is transcribed via speech-to-text and analyzed by Google Gemini for deception scoring, weighted into a single lie-probability number.',
      'A Node.js/Express backend drives game logic and WebSocket broadcasts to a React dashboard where players bet truth or lie against the risk score. The hat talks back. ElevenLabs text-to-speech plays randomized callouts through its speakers, and the audio clip below is a real capture from the demo. A team project with Rayhan Mohamed, Lauren Bell, and Sourish Venugopal.',
    ],
    tech: ['Python', 'OpenCV', 'Google Gemini', 'Raspberry Pi', 'WebSockets'],
    highlight: 'Hack@Brown 2026',
    links: [
      { label: 'GitHub repository', url: 'https://github.com/Sourish-07/HackBrown', note: 'Hardware, backend, frontend, and test suite for the finished hackathon build.' },
    ],
    audio: {
      src: '/audio/trust-me-bro-truth.mp3',
      title: '“TRUTH” · the hat’s TTS callout',
      caption: 'A real audio asset from the demo. The hat announcing a “truth” verdict at the end of the interaction loop.',
    },
    citations: [
      'Google Gemini API (linguistic deception scoring), Presage SDK (biometrics, mocked in simulation), ElevenLabs (speech-to-text and voice callouts).',
    ],
  },
  {
    slug: 'intellicare',
    name: 'IntelliCare AI',
    tagline: 'HackDartmouth XI · Healthcare',
    domain: 'Hackathon',
    category: 'hackathon',
    year: '2026',
    short: 'A nursing-monitoring dashboard built at HackDartmouth XI. All event reasoning passes through bear-1 compression before LLM calls, with a LiveKit voice interface.',
    long: [
      'IntelliCare AI reduces nurse cognitive overload. It monitors multiple rooms simultaneously, auto-promotes critical events, and generates human-readable explanations. All event reasoning is compressed through bear-1 before LLM calls, cutting tokens by roughly 50–60%. Compression is core to the architecture, not cosmetic.',
      'LiveKit powers a voice-first interface designed for hands-free clinical environments. Nurses ask “What’s happening in Room 2?” and get a spoken answer while the Streamlit dashboard surfaces the prioritized feed.',
    ],
    tech: ['Python', 'LiveKit', 'Streamlit', 'Token compression', 'Healthcare'],
    highlight: '50–60% token reduction',
    links: [
      { label: 'GitHub repository (Sourish-07)', url: 'https://github.com/Sourish-07/HackDartmouth', note: 'The HackDartmouth XI build with nursing triage, the compression pipeline, and the LiveKit voice agent.' },
    ],
    citations: ['LiveKit (real-time voice infrastructure), bear-1 compression (The Token Company).'],
  },
  {
    slug: 'politifolio',
    name: 'Politi-folio',
    tagline: 'Civic Tech Portfolio',
    domain: 'Civic Tech',
    category: 'hackathon',
    year: '2025',
    short: 'Geopolitical-intelligence platform for XRP Ledger reconciliation and risk monitoring. Dashboards, AI decision panels, a compliance monitor, and live map views.',
    long: [
      'Politi-folio is a geopolitical-intelligence platform for XRP Ledger reconciliation and risk monitoring. Transaction dashboards, AI decision panels, compliance monitoring, risk analytics, and live map views, with shared types across a Node.js/Express back end and a React + TypeScript (Vite) front end.',
      'A team project, and the repository lives under a teammate’s account. There is a live deployment on Netlify so the product can be used immediately.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'XRPL', 'Netlify'],
    highlight: 'Live demo',
    links: [
      { label: 'GitHub repository (jabnow)', url: 'https://github.com/jabnow/Politi-folio', note: 'The canonical project home, under a teammate’s account as built.' },
      { label: 'Live demo', url: 'https://politifolio.netlify.app/', note: 'The deployed front end, clickable and current.' },
    ],
  },
]
