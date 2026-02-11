import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''

const DownloadCTA = () => {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || state === 'submitting') return
    setState('submitting')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'r:clip Waitlist Signup (Pricing)' }),
      })
      if (!res.ok) throw new Error()
      setState('success')
      setEmail('')
    } catch {
      setState('error')
      setTimeout(() => setState('idle'), 3000)
    }
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

            {/* Waitlist CTA */}
            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-green-500/10 text-green-400 rounded-full font-medium border border-green-500/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You're on the list!
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                  />
                  <motion.button
                    type="submit"
                    disabled={state === 'submitting'}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 disabled:opacity-60"
                  >
                    {state === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : state === 'error' ? (
                      'Try again'
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2.5" viewBox="0 0 384 512" fill="currentColor">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                        Join the Waitlist
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

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
