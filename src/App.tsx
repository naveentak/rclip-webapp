import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClipboardDemo from './components/ClipboardDemo'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative">
      <Navbar scrolled={scrollY > 20} />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="demo" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold tracking-tight uppercase text-sm mb-4 block">
                Experience Fluidity
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Designed for your workflow.
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                r:clip stays out of your way until you need it. Access your entire history with a simple keystroke.
              </p>
            </div>
            <ClipboardDemo />
          </div>
        </section>

        <section id="features" className="py-24 bg-[#F5F5F7]">
          <Features />
        </section>

        <section id="how-it-works" className="py-24 bg-white">
          <HowItWorks />
        </section>

        <section id="download" className="py-24 bg-black text-white">
          <DownloadCTA />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
