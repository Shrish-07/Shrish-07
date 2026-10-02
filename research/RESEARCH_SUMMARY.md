# RESEARCH SUMMARY
## Complete Portfolio & Identity Research
### For: Shrish Venugopal (Shrish-07 / Sourish-07)

---

# PART 1: COMPLETE PROJECT CATALOG

## 1. COURT LISTENER (freelawproject/courtlistener)
- **Type:** Forked open-source contribution → merged PR
- **PR:** #6703 — "Speed up parenthetical clustering via tokenization caching"
- **Status:** Merged (closed 2026-01-08)
- **Language:** Python
- **Summary:** Contributed performance optimization to Free Law Project's massive court data archive. Added @lru_cache to parenthetical tokenization, achieving ~65x speedup on tokenization-heavy workloads (0.22s → 0.003s) with >99.9% cache hit rates. Cache size of 4096 designed to prevent memory bloat.
- **Significance:** Shows ability to contribute to large, production legal software used by thousands of legal professionals. Performance engineering expertise. Was assigned to and reviewed by a core maintainer (Luis-manzur). Demonstrates understanding of caching strategies, decorators, benchmark methodology, and writing clean performance PRs.
- **Tech Stack:** Python, caching, NLP tokenization, clustering algorithms, benchmarking
- **Career Relevance:** Quantitative + law intersection. Real-world open-source. Shows ownership and initiative.

## 2. AI LEGAL SIMULATION
- **Type:** Original research framework
- **Description:** "Reproducible framework stress-tests legal procedures under AI-mediated decisions. Deterministic rules enforce law; bounded-rational agents probe failure modes, fairness risks, robustness."
- **Language:** Python
- **Significance:** Research methodology — uses agent-based simulation to test legal systems when AI replaces human decision-makers. This is direct AI + law intersection research. Critically examines whether automated systems can uphold due process.
- **Tech:** Simulation framework, agent-based modeling, deterministic rule engines
- **Career:** Shows deep understanding of both legal procedure and simulation methodology. AI safety / algorithmic fairness research.

## 3. PROCEDURAL DUE PROCESS STRESS INDEX (DPSI)
- **Project:** Original research framework — "novel Python framework quantifying due process degradation in automated decision systems across 5 legal dimensions"
- **Dimensions:** Notice Clarity, Contest Opportunity, Timing, Override, Correction
- **Language:** Python
- **Significance:** Creates a quantitative metric for measuring how well AI/automated systems uphold constitutional due process guarantees. Extremely original. Bridges constitutional law with ML metrics directly.
- **Career:** Quantitative legal research. Demonstrates ability to operationalize legal concepts into measurable metrics. This is the golden intersection.

## 3. FAIRGROUND FAIRNESS BENCHMARK AUDIT
- **Project:** Independent academic audit
- **Description:** "Critically examines reproducibility, robustness under realistic data perturbations, and alignment with legal/regulatory standards (EU AI Act, U.S. anti-discrimination law)."
- **Language:** Jupyter Notebook
- **Significance:** Peer-audit quality work. Shows capacity to critically evaluate existing ML fairness benchmarks against real legal standards. Not just using benchmarks — auditing their validity.
- **Career:** AI fairness researcher. Shows ability to evaluate rather than just consume.

## 4. ALGIORITHMIC AUDITOR
- **Project:** ML bias audit pipeline
- **Description:** "Auditing bias in loan-approval models using HMDA data. Analyzes fairness metrics, explainability via SHAP, and counterfactuals to reveal structural inequities."
- **Language:** Python
- **Significance:** Applied ethics meets quantitative science. Uses SHAP and counterfactuals — the tool itself is legally salient for fair lending compliance.
- **Tech Stack:** ML (sklearn, XGBoost), SHAP, counterfactuals, HMDA data
- **Career:** Bridges CS (ML) with political science (policy, equity in governance).

## 6. O.R.B.I.T. — NYC Real Estate Price Prediction (107MB, major project)
- **Project:** "Optimized Real-Estate Benchmarking & Intelligence Tool"
- **Description:** Streamlit web app for NYC property price prediction using stacked ensemble (XGBoost + LightGBM + Bayesian Ridge) with SHAP & PDP explainability. Supports batch & single predictions.
- **Language:** Python, Streamlit
- **Significance:**
  - Stacked ensemble architecture (multiple models combined)
  - SHAP visualization — making model decisions explainable
  - PDP (Partial Dependence Plots) for PMO/executive audiences
  - Batch and real-time prediction modes
  - NYC real estate — spatially rich, economically significant
- **Tech:** XGBoost, LightGBM, Bayesian Ridge, SHAP, PDP, Streamlit
- **Visualization Opportunity:** Extremely high — maps, property data, SHAP force plots, ensemble diagrams, price predictions flowing over 3D cityscape
- **Career:** Shows full-stack ML engineering + business intelligence + explainability

## 7. LAWLENS (TypeScript / FastAPI / DistilBART)
- **Project:** "AI-driven web app for legal document summarization"
- **Description:** Secure PDF uploads yield concise NLP-generated overviews via DistilBART. FastAPI backend + Next.js frontend + SQLite + JWT auth.
- **Language:** TypeScript, Python
- **Significance:**
  - Full-stack web application with authentication
  - NLP model serving via ONXX (DistilBART — extreme compression)
  - Legal document processing pipeline
  - Real-world security considerations (PDF processing)
- **Tech:** FastAPI, Next.js, TypeScript, SQLite, JWT, DistilBERT, PDF processing
- **Career:** Full-stack developer demonstrated. Legal + NLP + security + deployment.

## B. RenexHacks — Attune (AI Health Monitoring)
- **Project:** "AI-powered real-time patient monitoring system"
- **Description:** Analyzes hospital camera feeds to detect** discomfort, falls, unsafe activity. Built with YOLOv8, Overshoot.ai, LiveKit. Reduces alarm fatigue. Smart second set sided.*
- **Language:** Python
- **Significance:**
  - Real-time computer vision (YOLOv8)
  - LiveKit for real-time video streaming
  - Health / medical application — high ethical stakes
  - 2 stars, 1 fork — some external interest
  - Deployed on the web
- **Career:** Real-time systems, ethical AI, healthcare. High-impact domain.

## 9. VitaTrack
- **Project:** Full-stack wellness & environmental safety dashboard
- **Description:** React frontend + Python backend, ZIP-based real-time data for hydration tracking, UV/air quality alerts, weather, disasters, motivational quotes, chatbot, TTS accessibility
- **Language:** JavaScript, Python
- **Significance:** Multiple API integrations, accessibility (TTS), multiple data streams, real-time dashboard. Demonstrates ability to build complex user-facing applications.
- **Career:** Full-stack with a purpose — environmental awareness + accessibility. Practical and user-focused.

## 10. Politi-Folio
- **Folder:** research/Politi-folio
- **Significance:** Political portfolio concept — another intersection of political science + technology.

## 11. MCP Server**
- **Folder:** research/MCP
- **Significance:** Built custom MCP (Model Context Protocol) server. Demonstrates understanding of LLM tool ecosystems, agent tooling, and the emerging paradigm of AI-native development tools.
- **Career:** Forward-looking. Shows understanding of how AI systems will integrate tools.

## 12. Cross-Sectional Equity Validation (Sourish-07)
- **Project:** Empirical finance research pipeline
- **Description:** Evaluates cross-sectional equity signals under rigorous backtesting diagnostics (CPCV, PBO, transaction cost sensitivity).
- **Language:** Python
- **Significance:**
  - Quantitative finance rigor
  - Combines ML & statistical validation
  - CPCV (Combinatorial Purged Cross-Validation)
  - PBO (Probability of Backtest Overfitting)
  - Finance + research methodology + ML
- **Career:** Quant researcher, finance. Shows discipline.

## 13. Hackathacks (x3)
- **HackDartmouth:** Team hackathon project (TypeScript)
- **HackBrown:** Team hackathon project (Python)
- **NexHacks:** Shown above
- **Significance:** Shows collaborative rapid prototyping. Deploy feature to win.

## 14. Additional Sourish-0707 Repos
- **Sourish-07/Sourrsh-07:** Personal website (HTML, type)
- **qlib fork (Microsofts's quantitative investment platform):** Studied quant python
- **ml-asset-pricing-study:** Jupyter notebook study of ML for asset pricing
- **Algorithmic-engineering-log:** Personal log of system design & algorithmic problems
- **mathematical-modeling-portfolio:** TypeScript implementations of mathematical modeling projects
- **Async-job-queue:** Lightweight Python job queue for background tasks
- **AI-Impact-on-Education:** Web-based exploration of AI's effects on education

## 15. Medium Blog**
- **URL:** @shrssishvenugopal11
- **Blocked:** View via Cloudflare but existing as presence

---

# PART 2: PERSONA MAP

## WHO ARE YOU (Shrish Venugopal)?

### The `engineer`
- Python-flies (XGBoost, LightGBM, SHAP, SHAPELY, all sklearn)
- 3D/web (Three.js, React, TypeScript)
- Performance-aware (65x speedup on CourtListener)
- Systems-capable (MCP server, job queues, secure auth)
- Polyglot (TypeScript, JavaScript, Python, HTML/CSS, FastAPI, Next.js)

### The Researcher
- Legal + AI intersection (5-legal-dimension DPSI, simulation, bias experiments)
- Promote publishable academic quality (HMDA data, fairness benchmarks, reproducible, all rigorous)
- Quantitative (can mathematically define abstract legal concepts)
- Empirical validation (CPCV, PBO in finance research)
- Algorithmic auditing / computational political science

### The Builder
- Has delivered working tangible apps (Attune, VitaTrack, LawLens, O.R.B.I.T.)
- Can build end-to-end (frontend to backend to model to deployment)
- Participated in multiple hackathons
- Thinks in full-stack systems

### The Future Law School Candidate
- Signature: Quantitative legal researcher
- Already working on procedurally and well machine learning
- Building the toolkit for algorithmic government
- Uniquely positioned: bridges three domains (law, quantification, engineering)

---

## PUBLIC GITHUB INFORMATION
- **GitHub Profile:** ShriSh-07
- **Alternative Account:** Sourish-07
- **Primary Website (Current Portfolio):** https://Shrish-07.vercel.app
- **Alternative Website:** https://Sourish-seven.vercel.app
- **Medium:** @shrshVenugopal11

---

## TECH STACK SUMMARY
- **Primary Languages on Portfolio:** Python (appears most often), TypeScript, JavaScript, Jupyter
- **Frameworks/Libraries:** XGBoost, LightGBM, SHAP, SHAP, DistilBERT, YOLOv8, FastAPI, Express.js, Next.js, React, Streamlit, LiveKit, Three.js, Shaders (GLSL loading), including custom shaders
- **Databases:** SQLite
- **ML:** Gradient Boosting, Ensemble, Neural Language understanding, Computer Vision (YOLO), SHAP interpretability
- **Infrastructure:** Streamlit, LiveKit, Cloudflare, Vercel, GitHub

---

## EXISTING PORTFOLIO STATE (Researched)
- React Three Fiber + Three.js
- 7 chapters along Z-axis with dynamic content loading
- Custom R3F scenes: Genesis, Law (3D text room), Research, Publications, Identity, Systems, Contact
- Custom GLSL shaders (haze, particles, etc.) for atmosphere
- Camera fly-through with lerp along Z with parallax wave
- Environment (custom Three.js environment)
- ScrollManager (orchestrating CSS overlay text)
- Zustand state management
- Adaptive quality (DR adaptive to performance)
- Motion Library support

---

## Current Chapter Map (from source code):

| ID | Label | Z | Purpose |
|----|-------|---|---------|
| 0  | Genesis | 0 | Entry / introduction — ambient, dark |
| 1  | Law - Legal Practice | 8 | Legal work (Law, instruction?) — spatial text |
| 2  | Research  | 16 | ML and fairness research |
| 3  | Publications | 24 | Academic publications / papers |
| 4  | Identity | 32 | Personal background, education, "Identity" |
| 5  | Systems | 40 | Field notes, notes on systems they've built |
| 6  | Contact | 48 | Get-in-touch / footer |

Each chapter is a scene component. Each scene determines what's rendered.

---

## END RESEARCH SUMMARY