import { motion } from 'framer-motion'

const DownloadCTA = () => {
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

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
            >
              <svg className="w-6 h-6 mr-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.96.95-2.06 1.92-3.72 1.92-1.61 0-2.14-1.01-4.07-1.01-1.93 0-2.52 1.01-4.04 1.01-1.58 0-2.83-1.12-3.8-2.55C.22 17.73-1.47 13.08 1.41 8.08c1.43-2.48 3.98-4.05 6.7-4.05 2.06 0 4 1.42 5.26 1.42 1.27 0 3.65-1.74 6.13-1.74 1.04 0 3.98.38 5.86 3.13-.15.1-3.5 2.04-3.5 6.1 0 4.88 4.3 6.51 4.3 6.51-.04.12-.67 2.32-2.21 4.56l-.1.1zM11.91 3.91c1.14-1.38 1.91-3.3 1.7-5.22-1.65.07-3.65 1.1-4.83 2.48-1.06 1.23-1.99 3.22-1.73 5.07 1.84.14 3.73-.95 4.86-2.33z"/>
              </svg>
              Get on the App Store
            </motion.a>

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
