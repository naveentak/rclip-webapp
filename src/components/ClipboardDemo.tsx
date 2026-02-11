import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const categories = ['All', 'URLs', 'Code', 'Text', 'Files', 'Images'] as const
type Category = (typeof categories)[number]

interface ClipItem {
  id: number
  text: string
  time: string
  app: string
  isImage: boolean
  charCount: number
  category: Category
}

const mockItems: ClipItem[] = [
  { id: 1, text: 'claude — ~/Projects/rclip ❯ cargo build --release', time: '2m ago', app: 'Ghostty', isImage: false, charCount: 50, category: 'Code' },
  { id: 2, text: 'claude_desktop_config.json', time: '8m ago', app: 'Claude for Desktop', isImage: false, charCount: 26, category: 'Files' },
  { id: 3, text: 'https://developer.chrome.com/docs/extensions', time: '24m ago', app: 'Chrome', isImage: false, charCount: 46, category: 'URLs' },
  { id: 4, text: 'func applicationDidFinishLaunching(_ note...', time: '35m ago', app: 'Xcode', isImage: false, charCount: 46, category: 'Code' },
  { id: 5, text: 'Meeting notes: Review design specs and finali...', time: '1h ago', app: 'Notes', isImage: false, charCount: 128, category: 'Text' },
  { id: 6, text: 'https://webkit.org/blog/css-containment/', time: '2h ago', app: 'Safari', isImage: false, charCount: 41, category: 'URLs' },
  { id: 7, text: '[image]', time: '3h ago', app: 'Preview', isImage: true, charCount: 0, category: 'Images' },
  { id: 8, text: 'ssh-rsa AAAAB3NzaC1yc2EAAAA...', time: '4h ago', app: 'Terminal', isImage: false, charCount: 372, category: 'Code' },
]

const expoCurve = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Clipboard icon SVG path
const clipboardPath = 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
// Checkmark SVG path
const checkPath = 'M5 13l4 4L19 7'

const ClipboardDemo = () => {
  const prefersReduced = useReducedMotion()
  const [activeId, setActiveId] = useState(4)
  const [activeTab, setActiveTab] = useState<Category>('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeItem = mockItems.find(i => i.id === activeId)!

  const filteredItems = activeTab === 'All'
    ? mockItems
    : mockItems.filter(item => item.category === activeTab)

  const handleCopy = useCallback((e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    setCopiedId(id)
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    copyTimeoutRef.current = setTimeout(() => setCopiedId(null), 1800)
  }, [])

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
    }
  }, [])

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const ids = filteredItems.map(i => i.id)
    const currentIndex = ids.indexOf(activeId)
    if (e.key === 'ArrowDown' && currentIndex < ids.length - 1) {
      e.preventDefault()
      setActiveId(ids[currentIndex + 1])
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      e.preventDefault()
      setActiveId(ids[currentIndex - 1])
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCopy(e as unknown as React.MouseEvent, activeId)
    }
  }, [filteredItems, activeId, handleCopy])

  const dur = prefersReduced ? 0.01 : undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: dur ?? 0.7, ease: expoCurve }}
      className="max-w-lg mx-auto"
    >
      <div
        className="liquid-glass-dark rounded-2xl overflow-hidden border border-white/10"
        role="listbox"
        aria-label="Clipboard history"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {/* Search bar */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center px-3 py-2.5 liquid-glass-search">
            <svg className="w-4 h-4 text-white/30 mr-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-white/30 text-sm">Search clipboard history...</span>
            <span className="w-px h-4 bg-white/40 ml-0.5 animate-[cursor-blink_1.2s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Category tabs with sliding pill */}
        <div className="px-4 pb-2">
          <div className="flex items-center relative">
            {categories.map((tab, i) => (
              <div key={tab} className="flex items-center">
                {i > 0 && <div className="w-px h-4 bg-white/10 mx-0.5" />}
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-1.5 text-xs font-semibold transition-colors duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    activeTab === tab
                      ? 'text-white'
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 glass-tab-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 35,
                        duration: prefersReduced ? 0.01 : undefined,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Clipboard items list */}
        <div className="divide-y divide-white/[0.03]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isActive = activeId === item.id
              const isHovered = hoveredId === item.id
              const isCopied = copiedId === item.id

              return (
                <motion.button
                  key={item.id}
                  layout
                  role="option"
                  aria-selected={isActive}
                  initial={prefersReduced ? false : { opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={prefersReduced ? { opacity: 0 } : { opacity: 0, filter: 'blur(4px)', scale: 0.96 }}
                  transition={{
                    duration: dur ?? 0.4,
                    delay: prefersReduced ? 0 : index * 0.06,
                    ease: expoCurve,
                    layout: { type: 'spring', stiffness: 500, damping: 35 },
                  }}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileTap={prefersReduced ? undefined : { scale: 0.98 }}
                  className={`flex items-center px-4 min-h-[48px] w-full text-left glass-row-hover relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400 ${
                    isActive ? 'bg-white/[0.08]' : ''
                  }`}
                >
                  {/* Blue active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-blue-500"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}

                  {/* Row number */}
                  <span className="text-white/20 text-sm font-medium w-6 flex-shrink-0">
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
                  <div className="flex-1 min-w-0 py-3">
                    <p className="text-white/80 text-sm font-medium truncate">{item.text}</p>
                    <p className="text-white/25 text-xs mt-0.5">
                      {item.time}&nbsp;&nbsp;{item.app}
                    </p>
                  </div>

                  {/* Copy button — slides in on hover */}
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2 relative">
                    <AnimatePresence>
                      {(isHovered || isCopied) && (
                        <motion.button
                          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, x: 8 }}
                          transition={{ duration: dur ?? 0.18, ease: expoCurve }}
                          onClick={(e) => handleCopy(e, item.id)}
                          className="p-1.5 rounded-md hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                          aria-label={`Copy ${item.text}`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {isCopied ? (
                              <motion.path
                                d={checkPath}
                                className="text-green-400"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: dur ?? 0.35, ease: 'easeOut' }}
                              />
                            ) : (
                              <path d={clipboardPath} className="text-white/50" />
                            )}
                          </svg>
                        </motion.button>
                      )}
                    </AnimatePresence>

                    {/* "Copied!" floating badge */}
                    <AnimatePresence>
                      {isCopied && (
                        <motion.span
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: -8 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: dur ?? 0.4, ease: expoCurve }}
                          className="absolute -top-6 right-0 text-[10px] font-semibold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full whitespace-nowrap shadow-[0_0_8px_rgba(74,222,128,0.25)]"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Preview pane */}
        <div className="border-t border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: dur ?? 0.15 }}
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
