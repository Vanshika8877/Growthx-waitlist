import styles from './OutputShowcase.module.css'

const mockJson = `{
  "article": {
    "title": "Fed Raises Rates by 25bps...",
    "source": "reuters.com",
    "published": "2024-05-23"
  },
  "kpis": {
    "numeric": [
      { "label": "Rate Hike",      "value": 0.25,  "unit": "%" },
      { "label": "Inflation",      "value": 3.4,   "unit": "%" },
      { "label": "GDP Growth",     "value": 2.1,   "unit": "%" },
      { "label": "Unemployment",   "value": 3.9,   "unit": "%" }
    ],
    "semantic": [
      "monetary tightening",
      "inflation persistence",
      "labor market resilience",
      "rate pause signaling"
    ]
  },
  "sentiment": {
    "score": -0.42,
    "label": "BEARISH",
    "confidence": 0.87
  },
  "entities": {
    "people":  ["Jerome Powell", "Janet Yellen"],
    "orgs":    ["Federal Reserve", "US Treasury"],
    "topics":  ["interest rates", "CPI", "FOMC"]
  }
}`

export default function OutputShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>STRUCTURED OUTPUT</p>
          <h2 className={styles.title}>
            Clean JSON.<br />
            <em>Every time.</em>
          </h2>
          <p className={styles.desc}>
            ArticleIQ enforces strict JSON schema compliance on every extraction. Your pipeline gets reliable, typed, structured data — ready to feed directly into your reports, dashboards, or databases.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>NUMERIC KPIS</span>
            <span className={styles.badge}>SEMANTIC TAGS</span>
            <span className={styles.badge}>SENTIMENT</span>
            <span className={styles.badge}>ENTITIES</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.codeWrap}>
            <div className={styles.codeBar}>
              <span>output.json</span>
              <span className={styles.lang}>JSON</span>
            </div>
            <pre className={styles.code}>
              <code dangerouslySetInnerHTML={{ __html: colorize(mockJson) }} />
            </pre>
          </div>

          <div className={styles.exports}>
            <div className={styles.exportCard}>
              <div className={styles.exportIcon}>📄</div>
              <div>
                <p className={styles.exportTitle}>PDF Report</p>
                <p className={styles.exportSub}>Charts · Summaries · Executive brief</p>
              </div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.exportCard}>
              <div className={styles.exportIcon}>📊</div>
              <div>
                <p className={styles.exportTitle}>PowerPoint</p>
                <p className={styles.exportSub}>Slides · KPI cards · Visuals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function colorize(json: string): string {
  return json
    .replace(/(".*?")\s*:/g, '<span style="color:#c8a96e">$1</span>:')
    .replace(/:\s*(".*?")/g, ': <span style="color:#a8d5a2">$1</span>')
    .replace(/:\s*(-?\d+\.?\d*)/g, ': <span style="color:#88c0ff">$2</span>')
    .replace(/:\s*(true|false|null)/g, ': <span style="color:#ff9e7a">$1</span>')
}
