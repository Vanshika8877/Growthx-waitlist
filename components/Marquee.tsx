import styles from './Marquee.module.css'

const items = [
  'SEMANTIC KPI EXTRACTION',
  'GPT-4o POWERED',
  'PDF REPORTS',
  'POWERPOINT DECKS',
  'TRAFILATURA PARSING',
  'STRUCTURED JSON OUTPUT',
  'NUMERIC INTELLIGENCE',
  'SENTIMENT ANALYSIS',
  'INSTANT EXPORT',
]

export default function Marquee() {
  const repeated = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.star}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
