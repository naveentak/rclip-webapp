import { useState } from 'react'
import { motion } from 'framer-motion'

const DownloadCTA = () => {
  const [appStoreComingSoon, setAppStoreComingSoon] = useState(false)
  const [directComingSoon, setDirectComingSoon] = useState(false)

  const handleAppStore = (e: React.MouseEvent) => {
    e.preventDefault()
    if (appStoreComingSoon) return
    setAppStoreComingSoon(true)
    setTimeout(() => setAppStoreComingSoon(false), 2000)
  }

  const handleDirect = (e: React.MouseEvent) => {
    e.preventDefault()
    if (directComingSoon) return
    setDirectComingSoon(true)
    setTimeout(() => setDirectComingSoon(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, rotate: -8 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-8 bg-white/10 rounded-[1.5rem] flex items-center justify-center border border-white/10"
        >
          <span className="text-white font-bold text-3xl">r:</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Pay once.
          <br />
          <span className="text-blue-400">Own it forever.</span>
        </h2>

        <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          No subscriptions. No hidden fees. One purchase, lifetime of updates, and a direct line to shape the product you use every day.
        </p>
      </motion.div>

      {/* Pricing card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md mx-auto relative"
      >
        {/* Glow ring */}
        <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 via-transparent to-blue-500/10 rounded-[2.5rem] blur-sm" />

        <div className="relative bg-[#1C1C1E] rounded-[2rem] border border-white/10 p-10 text-center overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/8 blur-[80px] rounded-full" />

          <div className="relative">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6">One-Time Purchase</p>

            <div className="flex items-baseline justify-center mb-2">
              <span className="text-white/40 text-2xl font-medium mr-1">$</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 300 }}
                className="text-7xl font-black text-white tracking-tight"
              >
                29
              </motion.span>
              <span className="text-white/40 text-2xl font-medium">.99</span>
            </div>

            <p className="text-white/30 text-sm mb-8">USD &middot; Lifetime license</p>

            {/* Perks */}
            <div className="space-y-3 mb-10 text-left max-w-xs mx-auto">
              {[
                'All current and future features',
                'Lifetime updates at no extra cost',
                'Priority support & bug fixes',
                'Vote on the roadmap & request features',
                '100% local — your data never leaves your Mac',
              ].map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.06 }}
                  className="flex items-start space-x-3"
                >
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/60 text-sm">{perk}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <motion.button
                onClick={handleAppStore}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
              >
                {!appStoreComingSoon && (
                  <svg className="w-5 h-5 mr-2.5" viewBox="0 0 814 1000" fill="currentColor">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4C44.1 780.2 0 577.2 0 384c0-186.8 121.3-285.7 240.6-285.7 63.4 0 116.2 41.6 155.9 41.6 37.6 0 96.2-44.2 170.6-44.2 27.5 0 126.3 2.5 191.7 95.2zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.4 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 103.5-30.4 135.5-71.2z" />
                  </svg>
                )}
                {appStoreComingSoon ? 'Coming Soon' : 'Download for macOS'}
              </motion.button>

              <motion.button
                onClick={handleDirect}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-colors"
              >
                {directComingSoon ? 'Coming Soon' : 'Buy Direct — $29.99'}
              </motion.button>
            </div>

            <p className="text-white/20 text-xs mt-4">Requires macOS 13 Ventura or later</p>
          </div>
        </div>
      </motion.div>

      {/* Trust signals */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-16 text-sm text-gray-500"
      >
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Apple Silicon Native</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>No Account Required</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>Lifetime Support</span>
        </div>
      </motion.div>
    </div>
  )
}

export default DownloadCTA
