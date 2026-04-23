'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!orbRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 60
      const y = (e.clientY / window.innerHeight - 0.5) * 60
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Orb background */}
      <div className={styles.orbWrap} ref={orbRef} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      {/* Grid lines */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>GPT-4o POWERED INTELLIGENCE ENGINE</span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.line1}>PASTE A LINK.</span>
          <span className={styles.line2}>
            GET <em>INTELLIGENCE.</em>
          </span>
        </h1>

        <p className={styles.sub}>
          ArticleIQ extracts any article, strips it to its core — semantic themes,
          numeric KPIs, hidden insights — and exports them as polished PDF reports
          or presentation decks. Instantly.
        </p>

        <div className={styles.actions}>
          <a href="#waitlist" className={styles.primary} data-hover="true">
            Request Early Access
          </a>
          <a href="#how-it-works" className={styles.secondary} data-hover="true">
            See how it works ↓
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>3s</span>
            <span className={styles.statLabel}>Avg. extraction time</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>40+</span>
            <span className={styles.statLabel}>KPI dimensions</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>2</span>
            <span className={styles.statLabel}>Export formats</span>
          </div>
        </div>
      </div>

      {/* Floating terminal mock */}
      <div className={styles.terminal} aria-hidden="true">
        <div className={styles.terminalBar}>
          <span className={styles.dot1} />
          <span className={styles.dot2} />
          <span className={styles.dot3} />
          <span className={styles.termTitle}>articleiq — extraction</span>
        </div>
        <div className={styles.termBody}>
          <p><span className={styles.prompt}>$</span> articleiq extract https://reuters.com/...</p>
          <p className={styles.dim}>↳ Fetching article content via trafilatura...</p>
          <p className={styles.dim}>↳ Sending to GPT-4o for analysis...</p>
          <p className={styles.success}>✓ Extracted 14 numeric KPIs</p>
          <p className={styles.success}>✓ Identified 6 semantic themes</p>
          <p className={styles.success}>✓ Sentiment: BEARISH (0.73)</p>
          <p className={styles.dim}>↳ Rendering PDF report...</p>
          <p className={styles.gold}>✦ Done. report_20240523.pdf ready.</p>
          <span className={styles.caret}>▊</span>
        </div>
      </div>
    </section>
  )
}
