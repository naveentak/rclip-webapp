import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const mockItems = [
  { id: 1, content: 'https://github.com/naveentak/clipstash', type: 'link', time: '2m ago', category: 'Links' },
  { id: 2, content: 'git commit -m "feat: add smart categories"', type: 'code', time: '15m ago', category: 'Code' },
  { id: 3, content: 'Meeting notes from standup: deploy v2 by Friday, review PR #47, update docs...', type: 'text', time: '1h ago', category: 'Text' },
  { id: 4, content: 'Bearer eyJhbGci***masked***', type: 'sensitive', time: '2h ago', category: 'Sensitive' },
  { id: 5, content: 'Screenshot 2024-01-15 at 10.32.png', type: 'image', time: '3h ago', category: 'Images' },
]

const typeColors: Record<string, string> = {
  link: 'bg-blue-500/20 text-blue-400',
  code: 'bg-purple-500/20 text-purple-400',
  text: 'bg-gray-500/20 text-gray-400',
  sensitive: 'bg-red-500/20 text-red-400',
  image: 'bg-green-500/20 text-green-400',
}

const ClipboardDemo = () => {
  const [activeId, setActiveId] = useState(1)
  const activeItem = mockItems.find(i => i.id === activeId)!

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-[#2D2D2D] rounded-[2.5rem] p-1.5 shadow-2xl apple-shadow-lg border-[6px] border-[#1A1A1A]">
        {/* Tab bar */}
        <div className="flex items-center px-5 py-2.5 border-b border-white/5">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-1 bg-white/5 rounded-lg p-1">
              {['All', 'Pinned', 'Code', 'Links'].map(tab => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                    tab === 'All' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <kbd className="text-white/20 text-[10px] font-mono">
            <span className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10">⌘⇧V</span>
          </kbd>
        </div>

        <div className="flex flex-col md:flex-row" style={{ minHeight: 400 }}>
          {/* Sidebar */}
          <div className="w-full md:w-64 border-r border-white/5 p-3 space-y-1 overflow-y-auto">
            <div className="flex items-center px-3 py-2 bg-white/5 rounded-lg border border-white/10 mb-3">
              <svg className="w-3.5 h-3.5 text-white/30 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-white/25 text-xs">Search clipboard history...</span>
            </div>

            {mockItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-3 rounded-xl transition-all ${
                  activeId === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-white/60 hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                    activeId === item.id ? 'bg-white/20 text-white' : typeColors[item.type]
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-[10px] opacity-50">{item.time}</span>
                </div>
                <p className="text-sm truncate font-medium">{item.content}</p>
              </motion.button>
            ))}
          </div>

          {/* Preview pane */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center items-center text-center bg-[#1A1A1A]/40 rounded-br-[2rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                  activeItem.type === 'sensitive' ? 'bg-red-500/15' : 'bg-blue-600/15'
                }`}>
                  {activeItem.type === 'sensitive' ? (
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )}
                </div>

                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md mb-3 ${typeColors[activeItem.type]}`}>
                  {activeItem.category}
                </span>

                <p className="text-white/60 text-sm mb-6 max-w-sm font-mono break-all leading-relaxed">
                  {activeItem.content}
                </p>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold"
                  >
                    Paste
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 bg-white/10 text-white rounded-full text-xs font-bold border border-white/10"
                  >
                    Pin Item
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 bg-white/10 text-white rounded-full text-xs font-bold border border-white/10"
                  >
                    Plain Text
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ClipboardDemo
