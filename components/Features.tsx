import styles from './Features.module.css'

const features = [
  {
    icon: '⬡',
    title: 'Semantic Theme Detection',
    desc: 'Automatically surfaces recurring themes, narratives, and conceptual clusters across any article.',
  },
  {
    icon: '◈',
    title: 'Numeric KPI Extraction',
    desc: 'Every percentage, figure, date, and quantified claim is tagged, labeled, and structured into your JSON output.',
  },
  {
    icon: '◎',
    title: 'Sentiment Scoring',
    desc: 'Each article receives a calibrated sentiment vector — bullish, bearish, neutral — with confidence scores.',
  },
  {
    icon: '⬗',
    title: 'Entity Recognition',
    desc: 'People, companies, geographies, and events are extracted and cross-referenced automatically.',
  },
  {
    icon: '▨',
    title: 'PDF Report Generation',
    desc: 'Structured data rendered into a beautifully typeset PDF with charts, callouts, and executive summaries.',
  },
  {
    icon: '⬙',
    title: 'PowerPoint Export',
    desc: 'One-click PPT decks that convert your extracted KPIs into slide-ready charts and bullet summaries.',
  },
]

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>CAPABILITIES</p>
          <h2 className={styles.title}>
            Everything a{'\n'}
            <em>research analyst</em>{'\n'}
            needs. Automated.
          </h2>
          <p className={styles.desc}>
            ArticleIQ does in three seconds what a junior analyst takes three hours to produce. No templates. No copy-pasting. Just clean, structured intelligence.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card} data-hover="true">
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
