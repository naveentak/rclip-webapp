import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'URLs', 'Email', 'Code', 'Colors', 'Phone'] as const

const mockItems = [
  { id: 1, text: 'https://developer.apple.com/documentation', time: '2m ago', app: 'Safari', isImage: false, charCount: 42 },
  { id: 2, text: 'func viewDidLoad() { super.viewDidLoad() }', time: '8m ago', app: 'Xcode', isImage: false, charCount: 44 },
  { id: 3, text: 'Design review notes: update navigation bar co...', time: '24m ago', app: 'Notes', isImage: false, charCount: 128 },
  { id: 4, text: 'Project-Roadmap-Q1.pdf', time: '35m ago', app: 'Finder', isImage: false, charCount: 22 },
  { id: 5, text: 'The quick brown fox jumps over the lazy dog', time: '1h ago', app: 'TextEdit', isImage: false, charCount: 43 },
  { id: 6, text: 'app-screenshot.png', time: '2h ago', app: 'Finder', isImage: false, charCount: 18 },
  { id: 7, text: '[image]', time: '3h ago', app: 'Preview', isImage: true, charCount: 0 },
  { id: 8, text: 'ssh-rsa AAAAB3NzaC1yc2EAAAA...', time: '4h ago', app: 'Terminal', isImage: false, charCount: 372 },
]

const ClipboardDemo = () => {
  const [activeId, setActiveId] = useState(4)
  const [activeTab, setActiveTab] = useState<string>('All')
  const activeItem = mockItems.find(i => i.id === activeId)!

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-lg mx-auto"
    >
      <div className="bg-[#232323] rounded-2xl overflow-hidden shadow-2xl apple-shadow-lg border border-white/10">
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
            {categories.map((tab, i) => (
              <div key={tab} className="flex items-center">
                {i > 0 && <div className="w-px h-4 bg-white/10 mx-0.5" />}
                <motion.button
                  onClick={() => setActiveTab(tab)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {tab}
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Clipboard items list */}
        <div className="divide-y divide-white/[0.03]">
          {mockItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              whileTap={{ scale: 0.99 }}
              className={`flex items-start px-4 py-3 w-full text-left transition-colors ${
                activeId === item.id
                  ? 'bg-white/[0.08]'
                  : 'hover:bg-white/[0.03]'
              }`}
            >
              {/* Row number */}
              <span className="text-white/20 text-sm font-medium w-6 flex-shrink-0 pt-0.5">
                {item.id}
              </span>

              {/* Icon */}
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                {item.isImage ? (
                  <div className="w-7 h-7 rounded bg-blue-900/40 border border-white/10" />
                ) : (
                  <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-white/80 text-sm font-medium truncate">{item.text}</p>
                <p className="text-white/25 text-xs mt-0.5">
                  {item.time}&nbsp;&nbsp;{item.app}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Preview pane */}
        <div className="border-t border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-start justify-between px-4 pt-3 pb-1">
                <p className="text-white/50 text-sm font-mono truncate flex-1 mr-4">
                  {activeItem.text}
                </p>
                {activeItem.charCount > 0 && (
                  <span className="text-white/20 text-xs flex-shrink-0 pt-0.5">
                    {activeItem.charCount} chars
                  </span>
                )}
              </div>
              {/* Preview area */}
              <div className="h-24 px-4 pb-4">
                {activeItem.isImage ? (
                  <div className="w-full h-full rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    <span className="text-white/15 text-xs">Image Preview</span>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default ClipboardDemo
