'use client'

import { useState } from 'react'
import styles from './WaitlistForm.module.css'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate API call — replace with your actual endpoint
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="waitlist">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgOrb} />
      </div>

      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.eyebrow}>JOIN THE WAITLIST</p>
          <h2 className={styles.title}>
            Be first to turn<br />
            <em>articles into assets.</em>
          </h2>
          <p className={styles.sub}>
            We're opening ArticleIQ to a limited private beta. Join the waitlist and get early access, priority onboarding, and a founding member discount.
          </p>
        </div>

        {!submitted ? (
          <div className={styles.form}>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Work Email</label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  placeholder="you@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="role">Your Role</label>
                <select
                  id="role"
                  className={styles.input}
                  value={role}
                  onChange={e => setRole(e.target.value)}
                >
                  <option value="" disabled>Select your role</option>
                  <option value="analyst">Analyst / Researcher</option>
                  <option value="journalist">Journalist / Writer</option>
                  <option value="investor">Investor / Fund Manager</option>
                  <option value="consultant">Consultant / Advisor</option>
                  <option value="engineer">Engineer / Developer</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <button
              className={`${styles.btn} ${loading ? styles.loading : ''}`}
              onClick={handleSubmit}
              disabled={loading || !email}
              data-hover="true"
            >
              {loading ? (
                <span className={styles.spinner} />
              ) : (
                <>
                  <span>Request Early Access</span>
                  <span className={styles.arrow}>→</span>
                </>
              )}
            </button>

            <p className={styles.note}>
              No spam. No noise. Just your access link when we open the doors.
            </p>
          </div>
        ) : (
          <div className={styles.success}>
            <div className={styles.successIcon}>✦</div>
            <h3 className={styles.successTitle}>You're on the list.</h3>
            <p className={styles.successSub}>
              We'll reach out personally when your spot opens up. Keep an eye on your inbox.
            </p>
            <div className={styles.successDetails}>
              <span>{email}</span>
              <span className={styles.pill}>WAITLISTED</span>
            </div>
          </div>
        )}

        <div className={styles.perks}>
          {['Priority access', 'Founding member pricing', 'Direct feedback channel', 'White-glove onboarding'].map((p, i) => (
            <div key={i} className={styles.perk}>
              <span className={styles.check}>✓</span>
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
