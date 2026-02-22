import { Component as KineticNav } from './components/ui/sterling-gate-kinetic-navigation'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'
import Marquee from './components/Marquee'
import Solutions from './components/Solutions'
import Expertise from './components/Expertise'
import Features from './components/Features'
import Stats from './components/Stats'
import Clients from './components/Clients'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-surface-900 relative">
      {/* Grain texture overlay */}
      <div className="grain-overlay" />
      <CustomCursor />
      <KineticNav />
      <Hero />
      <Marquee />
      <Solutions />
      <Expertise />
      <Features />
      <Stats />
      <Clients />
      <Team />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
