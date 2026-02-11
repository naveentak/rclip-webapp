import { motion } from 'framer-motion'

const heroItems = [
  { num: 1, text: 'https://developer.apple.com/documentation', time: '2m ago', app: 'Safari', isImage: false },
  { num: 2, text: 'func viewDidLoad() { super.viewDidLoad() }', time: '8m ago', app: 'Xcode', isImage: false },
  { num: 3, text: 'Meeting notes: Review design specs and finali...', time: '24m ago', app: 'Notes', isImage: false },
  { num: 4, text: 'Project-Roadmap-Q1.pdf', time: '35m ago', app: 'Finder', isImage: false, active: true },
  { num: 5, text: 'The quick brown fox jumps over the lazy dog', time: '1h ago', app: 'TextEdit', isImage: false },
  { num: 6, text: 'app-screenshot.png', time: '2h ago', app: 'Finder', isImage: false },
  { num: 7, text: '[image]', time: '3h ago', app: 'Preview', isImage: true },
]

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-6 bg-[#FBFBFD]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"
        >
          Now Available for macOS 13+
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
          <motion.a
            href="#download"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors flex items-center justify-center group shadow-xl hover:shadow-2xl"
          >
            Get r:clip for Mac
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
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

      {/* Floating App Panel Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 relative w-full max-w-lg mx-auto"
      >
        <div className="relative z-10 apple-shadow-lg rounded-2xl overflow-hidden bg-[#232323] border border-white/10">
          {/* Search bar */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center px-3 py-2.5 bg-white/[0.06] rounded-xl border border-white/10">
              <svg className="w-4 h-4 text-white/30 mr-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-white/30 text-sm">Search clipboard history...</span>
            </div>
          </div>

          {/* Category tabs */}
          <div className="px-4 pb-2">
            <div className="flex items-center">
              {['All', 'URLs', 'Email', 'Code', 'Colors', 'Phone'].map((tab, i) => (
                <div key={tab} className="flex items-center">
                  {i > 0 && <div className="w-px h-4 bg-white/10 mx-0.5" />}
                  <button
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      tab === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'text-white/40 hover:text-white/60'
                    }`}
                  >
                    {tab}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Clipboard items list */}
          <div className="divide-y divide-white/[0.03]">
            {heroItems.map((item) => (
              <div
                key={item.num}
                className={`flex items-start px-4 py-3 ${
                  item.active ? 'bg-white/[0.08]' : 'hover:bg-white/[0.03]'
                }`}
              >
                <span className="text-white/20 text-sm font-medium w-6 flex-shrink-0 pt-0.5">
                  {item.num}
                </span>
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  {item.isImage ? (
                    <div className="w-7 h-7 rounded bg-blue-900/40 border border-white/10" />
                  ) : (
                    <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-sm font-medium truncate">{item.text}</p>
                  <p className="text-white/25 text-xs mt-0.5">
                    {item.time}&nbsp;&nbsp;{item.app}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Preview pane */}
          <div className="border-t border-white/5">
            <div className="flex items-start justify-between px-4 py-3">
              <p className="text-white/50 text-sm font-mono truncate flex-1 mr-4">
                Project-Roadmap-Q1.pdf
              </p>
              <span className="text-white/20 text-xs flex-shrink-0 pt-0.5">22 chars</span>
            </div>
            <div className="h-20" />
          </div>
        </div>

        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 blur-[100px] rounded-full -z-10" />
      </motion.div>
    </div>
  )
}

export default Hero
