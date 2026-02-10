import { motion } from 'framer-motion'

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
          A lightweight, powerful clipboard history manager for macOS. Instant search, rich previews, smart categories, and a keyboard-first workflow.
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
            Get ClipStash for Mac
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

      {/* Floating App Window Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 relative w-full max-w-5xl mx-auto"
      >
        <div className="relative z-10 apple-shadow-lg rounded-[2rem] overflow-hidden bg-white p-2 border border-gray-100">
          {/* Mock macOS window */}
          <div className="bg-[#1E1E1E] rounded-[1.5rem] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center px-4 py-3 bg-[#2D2D2D]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-white/40 text-xs ml-4 font-medium">ClipStash</span>
            </div>
            {/* Content */}
            <div className="flex h-[340px] md:h-[420px]">
              {/* Sidebar list */}
              <div className="w-72 border-r border-white/10 p-3 space-y-1.5 overflow-hidden">
                <div className="flex items-center px-3 py-2 bg-white/5 rounded-lg border border-white/10 mb-3">
                  <svg className="w-3.5 h-3.5 text-white/40 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-white/30 text-xs">Search clipboard...</span>
                </div>
                {[
                  { type: 'link', text: 'https://github.com/naveentak/clipstash', time: '2m ago', active: true },
                  { type: 'code', text: 'git commit -m "feat: add pinning"', time: '15m ago', active: false },
                  { type: 'text', text: 'Meeting notes: Q1 roadmap review...', time: '1h ago', active: false },
                  { type: 'image', text: 'Screenshot 2024-01-15.png', time: '2h ago', active: false },
                  { type: 'text', text: 'API key: sk-***masked***', time: '3h ago', active: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl transition-all ${
                      item.active
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'text-white/60 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                        item.active ? 'bg-white/20 text-white' : 'bg-white/10 text-white/40'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-[10px] opacity-50">{item.time}</span>
                    </div>
                    <p className="text-sm truncate font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
              {/* Preview pane */}
              <div className="flex-1 p-8 flex flex-col justify-center items-center text-center">
                <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h4 className="text-white text-lg font-bold mb-1">Link Preview</h4>
                <p className="text-white/40 text-sm mb-6 max-w-sm font-mono">
                  https://github.com/naveentak/clipstash
                </p>
                <div className="flex space-x-3">
                  <button className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold">
                    Paste
                  </button>
                  <button className="px-5 py-2 bg-white/10 text-white rounded-full text-xs font-bold border border-white/10">
                    Pin Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 blur-[100px] rounded-full -z-10" />
      </motion.div>
    </div>
  )
}

export default Hero
