'use client'

import Cursor from '@/components/Cursor'
import Noise from '@/components/Noise'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import OutputShowcase from '@/components/OutputShowcase'
import WaitlistForm from '@/components/WaitlistForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Noise />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <Features />
        <OutputShowcase />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  )
}
