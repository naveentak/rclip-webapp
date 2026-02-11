import { useState } from 'react'
import { motion } from 'framer-motion'
import CompetitorParade from './CompetitorParade'

const Hero = () => {
  const [comingSoon, setComingSoon] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (comingSoon) return
    setComingSoon(true)
    setTimeout(() => setComingSoon(false), 2000)
  }

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-6 bg-[#FBFBFD]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"
        >
          Coming Soon for macOS 13+
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text mb-8 leading-[1.08]"
        >
          Your clipboard,
          <br />
          reimagined.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The most powerful, lightweight, and minimalist clipboard manager for macOS. Crafted for developers, writers, and designers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors flex items-center justify-center group shadow-xl hover:shadow-2xl"
          >
            {comingSoon ? 'Coming Soon' : 'Get r:clip for Mac'}
            {!comingSoon && (
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </motion.button>
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-900 border border-gray-200 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors"
          >
            See how it works
          </motion.a>
        </motion.div>
      </div>

      <CompetitorParade />
    </div>
  )
}

export default Hero
