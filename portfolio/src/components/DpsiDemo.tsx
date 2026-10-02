'use client'

import { useMemo, useState } from 'react'

/**
 * DpsiDemo — an interactive, simplified rendering of the DPSI framework.
 * Five sliders → weighted composite index → likely procedural state.
 * This is the site's invitation for viewers to participate.
 */

const DIMENSIONS = [
  { key: 'notice', label: 'Notice Clarity', weight: 0.2, hint: 'Does the person get a clear, understandable notice?' },
  { key: 'contest', label: 'Opportunity to Contest', weight: 0.25, hint: 'Is there a real, usable channel to challenge the decision?' },
  { key: 'timing', label: 'Timing Adequacy', weight: 0.2, hint: 'Are response windows realistic for a human being?' },
  { key: 'override', label: 'Human Override Availability', weight: 0.15, hint: 'Can a human with authority actually change the outcome?' },
  { key: 'correction', label: 'Error Correction Pathways', weight: 0.2, hint: 'Can mistakes be found and fixed after the fact?' },
] as const

type Key = (typeof DIMENSIONS)[number]['key']

const DEFAULT_SCORES: Record<Key, number> = {
  notice: 80,
  contest: 80,
  timing: 80,
  override: 75,
  correction: 80,
}

function verdict(score: number): string {
  if (score >= 80) return 'Robust. Procedural affordances are largely intact'
  if (score >= 60) return 'Adequate. Watch the weakest dimension'
  if (score >= 40) return 'Stressed. Procedural failure modes are likely'
  return 'Degraded. Due-process failure modes are probable'
}

export default function DpsiDemo() {
  const [scores, setScores] = useState<Record<Key, number>>(DEFAULT_SCORES)

  const { index, flags } = useMemo(() => {
    const index = Math.round(DIMENSIONS.reduce((sum, d) => sum + scores[d.key] * d.weight, 0))
    const flags: string[] = []
    if (scores.contest < 40)
      flags.push('Symbolic due process risk. A contest channel exists on paper, but the score suggests it cannot affect outcomes.')
    if (scores.timing < 40)
      flags.push('Temporal compression risk. Rights exist, but the response windows are unusable in practice.')
    if (scores.override < 40)
      flags.push('Responsibility diffusion risk. Humans are present, but may lack authority or accountability.')
    return { index, flags }
  }, [scores])

  return (
    <div className="dpsi-panel">
      <p className="eyebrow">Interactive · try it yourself</p>
      <h3 className="card-title">Due Process Stress Index (simplified demo)</h3>
      <p className="small mt-2">
        Move the sliders to see how a hypothetical automated decision system scores. The
        composite index updates live, and the flags below call out the failure modes the full
        DPSI engine is built to detect.
      </p>
      {DIMENSIONS.map((d) => (
        <div className="dpsi-dim" key={d.key}>
          <div>
            <label className="dpsi-label" htmlFor={`dpsi-${d.key}`}>{d.label}</label>
            <span className="dpsi-hint">{d.hint}</span>
          </div>
          <input
            id={`dpsi-${d.key}`}
            type="range"
            min={0}
            max={100}
            step={1}
            value={scores[d.key]}
            onChange={(e) =>
              setScores((s) => ({ ...s, [d.key]: Number(e.target.value) }))
            }
          />
          <span className="dpsi-value" aria-hidden="true">{scores[d.key]}</span>
        </div>
      ))}
      <div className="dpsi-score-row">
        <span className="dpsi-score" aria-live="polite">{index}<small style={{ fontSize: '0.4em', color: 'var(--text-tertiary)' }}>/100</small></span>
        <span className="dpsi-verdict">{verdict(index)}</span>
      </div>
      <div className="gauge" aria-hidden="true">
        <div className="gauge-fill" style={{ width: `${index}%` }} />
      </div>
      {flags.length > 0 ? (
        <ul className="flag-list" aria-live="polite" aria-label="Detected failure modes">
          {flags.map((f) => (
            <li key={f} className="flag-item">{f}</li>
          ))}
        </ul>
      ) : null}
      <p className="small mt-6">
        This is a simplified, illustrative rendering of my five-dimension framework. The full
        DPSI engine additionally enforces logical invariants between dimensions and is documented
        in the project whitepaper. Values are illustrative, not calibrated.
      </p>
    </div>
  )
}
