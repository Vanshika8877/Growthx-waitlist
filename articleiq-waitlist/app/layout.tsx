import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ArticleIQ — Turn Any Article Into Intelligence',
  description: 'Paste a link. Get structured KPIs, semantic insights, PDF reports, and presentation decks — powered by GPT-4o and built for analysts who move fast.',
  openGraph: {
    title: 'ArticleIQ — Turn Any Article Into Intelligence',
    description: 'Paste a link. Get structured KPIs, semantic insights, PDF reports, and presentation decks — powered by GPT-4o.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArticleIQ — Turn Any Article Into Intelligence',
    description: 'Paste a link. Get structured KPIs, semantic insights, PDF reports, and presentation decks.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
