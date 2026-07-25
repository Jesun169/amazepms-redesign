import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <About />
      <CTA />
      <Contact />
    </>
  )
}