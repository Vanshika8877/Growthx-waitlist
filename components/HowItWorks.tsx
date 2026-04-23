import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Paste Any Article URL',
    desc: 'Drop in any public article link — Reuters, Bloomberg, TechCrunch, academic papers, newsletters. ArticleIQ fetches and cleans the content using trafilatura or newspaper3k.',
    tag: 'EXTRACTION',
  },
  {
    number: '02',
    title: 'GPT-4o Analyzes & Structures',
    desc: 'Your article hits our OpenRouter pipeline. GPT-4o extracts numeric KPIs (percentages, figures, dates), semantic themes, sentiment scores, and key entities — all in strict JSON.',
    tag: 'AI ANALYSIS',
  },
  {
    number: '03',
    title: 'Export as PDF or PPT',
    desc: 'The structured JSON is rendered into a beautiful PDF report with charts and annotations, or a presentation deck ready to share. Professional layouts. Zero effort.',
    tag: 'EXPORT',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.header}>
        <p className={styles.eyebrow}>THE PROCESS</p>
        <h2 className={styles.title}>
          Three steps from<br />
          <em>link to insight</em>
        </h2>
      </div>

      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.stepTop}>
              <span className={styles.num}>{step.number}</span>
              <span className={styles.tag}>{step.tag}</span>
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
            <div className={styles.line} />
          </div>
        ))}
      </div>
    </section>
  )
}
