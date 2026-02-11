import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CompetitorParade from './CompetitorParade'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ''

const Hero = () => {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || state === 'submitting') return
    setState('submitting')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'r:clip Waitlist Signup' }),
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
          I tried 15+ clipboard managers and paid for 5. None worked the way a clipboard should. So I built one that never fails — native, instant, keyboard-first.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-green-50 text-green-700 rounded-full font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You're on the list. We'll email you on launch day.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  ref={inputRef}
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-full border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-base"
                />
                <motion.button
                  type="submit"
                  disabled={state === 'submitting'}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-black text-white rounded-full font-medium text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl disabled:opacity-60"
                >
                  {state === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : state === 'error' ? (
                    'Try again'
                  ) : (
                    <>
                      Get Early Access
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xs text-gray-400 mt-4"
          >
            Free to join. No spam. Just a launch day email.
          </motion.p>
        </motion.div>
      </div>

      <CompetitorParade />
    </div>
  )
}

export default Hero
