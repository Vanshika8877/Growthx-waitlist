'use client'

import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>AQ</span>
        <span className={styles.logoText}>ArticleIQ</span>
      </div>
      <div className={styles.right}>
        <span className={styles.badge}>PRIVATE BETA</span>
        <a href="#waitlist" className={styles.cta} data-hover="true">
          Join Waitlist
        </a>
      </div>
    </nav>
  )
}
