import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>AQ</span>
            <span className={styles.logoText}>ArticleIQ</span>
          </div>
          <p className={styles.tagline}>
            Turn any article into structured intelligence.<br />
            PDF reports and PowerPoint decks in seconds.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <p className={styles.colHead}>Product</p>
            <a href="#how-it-works" className={styles.link}>How it Works</a>
            <a href="#waitlist" className={styles.link}>Join Waitlist</a>
          </div>
          <div className={styles.col}>
            <p className={styles.colHead}>Tech Stack</p>
            <span className={styles.link}>trafilatura</span>
            <span className={styles.link}>newspaper3k</span>
            <span className={styles.link}>OpenRouter / GPT-4o</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} ArticleIQ. All rights reserved.</p>
        <p className={styles.right}>Built with obsession.</p>
      </div>
    </footer>
  )
}
