import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const heroItems = [
  { num: 1, text: 'claude — ~/Projects/rclip ❯ cargo build --release', time: '2m ago', app: 'Ghostty', isImage: false, hasThumb: true },
  { num: 2, text: 'claude_desktop_config.json', time: '8m ago', app: 'Claude for Desktop', isImage: false },
  { num: 3, text: 'https://developer.chrome.com/docs/extensions', time: '24m ago', app: 'Chrome', isImage: false },
  { num: 4, text: 'func applicationDidFinishLaunching(_ note...', time: '35m ago', app: 'Xcode', isImage: false, active: true },
  { num: 5, text: 'Meeting notes: Review design specs and finali...', time: '1h ago', app: 'Notes', isImage: false },
  { num: 6, text: 'https://webkit.org/blog/css-containment/', time: '2h ago', app: 'Safari', isImage: false },
  { num: 7, text: '[image]', time: '3h ago', app: 'Preview', isImage: true },
]

// Phase timings in ms: [delay, clipmax, quickpaste, copyall, pasteit, implode+reveal]
const PHASE_TIMINGS = [700, 2800, 2800, 2800, 2800, 600]

const cardEnter = {
  initial: { x: 300, opacity: 0, rotateY: -15 },
  animate: { x: 0, opacity: 1, rotateY: 0 },
  exit: { x: -100, opacity: 0, scale: 0.92 },
}

const cardTransition = {
  enter: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  exit: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
}

// Starting positions for implode — thumbnails converge TO center
const implodeStartPositions = [
  { x: -180, y: -120, rotate: -12 },
  { x: 160, y: -100, rotate: 8 },
  { x: -150, y: 100, rotate: 15 },
  { x: 170, y: 110, rotate: -10 },
]

/* ── Competitor Card Renderers ── */

function ClipMaxPro() {
  return (
    <div className="rounded-xl overflow-hidden bg-[#f0f0f0] border border-gray-300 text-gray-700 w-full shadow-lg">
      {/* Upgrade nag */}
      <div className="bg-amber-400 text-amber-900 text-[10px] font-bold text-center py-1.5 tracking-wide uppercase">
        Upgrade to Premium — Unlock 200+ Features
      </div>
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 border-b border-gray-300">
        <span className="text-xs font-semibold text-gray-600">ClipMax Pro</span>
        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">$49.99/yr</span>
      </div>
      {/* Dense toolbar */}
      <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 border-b border-gray-200">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-5 h-5 rounded bg-gray-300" />
        ))}
      </div>
      {/* Cramped clipboard rows */}
      <div className="divide-y divide-gray-200">
        {['Meeting notes from Q3 planning sess...', 'https://jira.internal.corp/browse/CLIP-...', 'SELECT * FROM users WHERE role = "adm...', '⌘⇧V — Advanced paste format optio...', 'Error: License validation failed. Conta...'].map((text, i) => (
          <div key={i} className="px-3 p-1 flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-gray-300 flex-shrink-0" />
            <span className="text-[11px] text-gray-500 truncate">{text}</span>
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div className="flex items-center justify-around px-2 py-2 bg-gray-200 border-t border-gray-300 text-[9px] text-gray-500 font-medium">
        <span>Settings</span>
        <span className="text-gray-300">|</span>
        <span>Sync</span>
        <span className="text-gray-300">|</span>
        <span>Teams</span>
        <span className="text-gray-300">|</span>
        <span>Analytics</span>
      </div>
    </div>
  )
}

function QuickPaste() {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-gray-200 text-gray-700 w-full shadow-lg">
      {/* Title bar — not responding */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-gray-400 font-medium">QuickPaste <span className="text-gray-300">(Not Responding)</span></span>
        <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">$4.99</span>
      </div>
      {/* Broken content area */}
      <div className="relative p-4 min-h-[180px]">
        {/* Overlapping misaligned blocks */}
        <div className="absolute top-3 left-3 w-[70%] h-8 bg-gray-100 rounded border border-gray-200 -rotate-1" />
        <div className="absolute top-6 left-6 w-[65%] h-8 bg-gray-50 rounded border border-gray-200 rotate-[0.5deg]" />
        <div className="absolute top-10 left-2 w-[75%] h-8 bg-gray-100 rounded border border-gray-200 -rotate-[0.8deg]" />

        {/* Beachball spinner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-10 h-10 rounded-full"
            style={{
              background: 'conic-gradient(#FF6B6B, #FFE66D, #4ECDC4, #45B7D1, #96C93D, #FF6B6B)',
              animation: 'beachball-spin 1.2s linear infinite',
            }}
          />
        </div>

        {/* Error box */}
        <div className="absolute bottom-3 left-3 right-3 border-2 border-dashed border-red-300 rounded-lg p-2 bg-red-50/80">
          <p className="text-[11px] text-red-500 font-medium text-center">Failed to load clipboard</p>
        </div>
      </div>
    </div>
  )
}

function CopyAllSuite() {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1e1e2e] border border-purple-500/30 text-white w-full shadow-lg">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#181825] border-b border-white/10">
        <span className="text-xs font-semibold text-white/70">CopyAll Suite</span>
        <div className="flex items-center gap-2">
          {/* Notification bell */}
          <div className="relative">
            <svg className="w-3.5 h-3.5 text-white/40" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
            </svg>
            <span className="absolute -top-1.5 -right-2 text-[7px] font-bold bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">23</span>
          </div>
          <span className="text-[8px] font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full">v12.4.3 · 847 features!</span>
        </div>
      </div>
      {/* Tab bar */}
      <div className="flex items-center gap-0 px-1 py-1 bg-[#181825] border-b border-white/5 overflow-hidden">
        {['Clipboard', 'Notes', 'Tasks', 'Cal', 'Files', 'Sync', 'AI', '+'].map((tab, i) => (
          <div
            key={tab}
            className={`px-1.5 py-1 text-[7px] flex-shrink-0 ${
              i === 0 ? 'bg-purple-500/30 text-purple-200 rounded' : 'text-white/30'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Body with sidebar + 3-column content */}
      <div className="flex min-h-[160px]">
        {/* Sidebar */}
        <div className="w-8 bg-[#11111b] border-r border-white/5 flex flex-col items-center gap-1.5 py-2">
          {['bg-blue-500/40', 'bg-green-500/40', 'bg-amber-500/40', 'bg-red-500/40', 'bg-purple-500/40', 'bg-cyan-500/40', 'bg-pink-500/40', 'bg-white/10'].map((c, i) => (
            <div key={i} className={`w-4 h-4 rounded-sm ${c}`} />
          ))}
        </div>
        {/* 3-column content */}
        <div className="flex-1 grid grid-cols-3 gap-1 p-2">
          {Array.from({ length: 3 }).map((_, col) => (
            <div key={col} className="flex flex-col gap-1">
              {Array.from({ length: 6 }).map((_, row) => (
                <div key={row} className="h-3 rounded-sm bg-white/[0.06]" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PasteItFree() {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-100 border border-gray-300 text-gray-600 w-full shadow-lg brightness-75 saturate-50">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 border-b border-gray-300">
        <span className="text-xs font-medium text-gray-500">PasteIt Free</span>
        <span className="text-[10px] font-bold text-gray-500 bg-gray-300 px-2 py-0.5 rounded-full">FREE</span>
      </div>
      {/* Last updated */}
      <div className="px-3 py-1.5">
        <span className="text-[10px] text-gray-400">Last updated: 2019</span>
      </div>
      {/* Warning */}
      <div className="mx-3 mb-2 px-2 py-1.5 bg-yellow-100 border border-yellow-300 rounded text-[10px] text-yellow-700 font-medium">
        ⚠ No macOS 14 support
      </div>
      {/* Empty skeleton placeholders */}
      <div className="px-3 pb-2 flex flex-col gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-8 rounded bg-gray-200 border border-gray-300" />
        ))}
      </div>
      {/* Community support */}
      <div className="px-3 py-2 border-t border-gray-300 bg-gray-200">
        <p className="text-[9px] text-gray-400 text-center">Community support only (avg response: 47 days)</p>
      </div>
    </div>
  )
}

/* ── r:clip Panel (static — interactive demo lives in ClipboardDemo) ── */

function RClipPanel() {
  return (
    <div className="relative z-10 rounded-2xl overflow-hidden liquid-glass-dark border border-white/10">
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

      {/* Category tabs */}
      <div className="px-4 pb-2">
        <div className="flex items-center">
          {['All', 'URLs', 'Email', 'Code', 'Colors', 'Phone'].map((tab, i) => (
            <div key={tab} className="flex items-center">
              {i > 0 && <div className="w-px h-4 bg-white/10 mx-0.5" />}
              <button
                className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                  tab === 'All'
                    ? 'glass-tab-pill text-white'
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

      {/* Clipboard items list — static (no staggered animations) */}
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
              ) : item.hasThumb ? (
                <div className="w-7 h-7 rounded bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/10" />
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
            func applicationDidFinishLaunching(_ note...
          </p>
          <span className="text-white/20 text-xs flex-shrink-0 pt-0.5">46 chars</span>
        </div>
      </div>
    </div>
  )
}

/* ── Competitor Thumbnails for Implode Phase ── */

const competitorNames = ['ClipMax Pro', 'QuickPaste', 'CopyAll Suite', 'PasteIt Free']
const competitorColors = ['bg-amber-100 border-amber-300', 'bg-white border-gray-200', 'bg-[#1e1e2e] border-purple-500/30', 'bg-gray-200 border-gray-300']
const competitorTextColors = ['text-amber-700', 'text-gray-500', 'text-purple-300', 'text-gray-500']

/* ── Main Component ── */

const CompetitorParade = () => {
  const shouldReduceMotion = useReducedMotion()
  const [phase, setPhase] = useState(shouldReduceMotion ? 6 : 0)

  useEffect(() => {
    if (shouldReduceMotion) return

    let timeout: ReturnType<typeof setTimeout>
    let currentPhase = 0

    const advance = () => {
      if (currentPhase >= PHASE_TIMINGS.length) return
      timeout = setTimeout(() => {
        currentPhase++
        setPhase(currentPhase)
        if (currentPhase < PHASE_TIMINGS.length) {
          advance()
        }
      }, PHASE_TIMINGS[currentPhase])
    }

    advance()
    return () => clearTimeout(timeout)
  }, [shouldReduceMotion])

  const competitorCards = [ClipMaxPro, QuickPaste, CopyAllSuite, PasteItFree]

  return (
    <div className="mt-20 relative w-full max-w-lg mx-auto h-[520px]" style={{ perspective: '1200px' }}>
      {/* Wrapper 1: Competitor cards (phases 1–4) — sequential parade needs mode="wait" */}
      <AnimatePresence mode="wait">
        {phase >= 1 && phase <= 4 && (() => {
          const Card = competitorCards[phase - 1]
          return (
            <motion.div
              key={`competitor-${phase}`}
              initial={cardEnter.initial}
              animate={cardEnter.animate}
              exit={cardEnter.exit}
              transition={cardTransition.enter}
              className="absolute inset-x-0 top-0 z-10 p-4"
            >
              <Card />
            </motion.div>
          )
        })()}
      </AnimatePresence>

      {/* Wrapper 2: Implode phase (5) — independent lifecycle */}
      <AnimatePresence>
        {phase === 5 && (
          <motion.div
            key="implode"
            className="absolute inset-0 z-10 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {competitorNames.map((name, i) => (
              <motion.div
                key={name}
                initial={{
                  x: implodeStartPositions[i].x,
                  y: implodeStartPositions[i].y,
                  scale: 0.5,
                  opacity: 0.8,
                  rotate: implodeStartPositions[i].rotate,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0,
                  rotate: 0,
                }}
                transition={{ duration: 0.55, ease: [0.55, 0, 1, 0.45] }}
                className={`absolute w-32 h-20 rounded-lg border ${competitorColors[i]} flex items-center justify-center`}
              >
                <span className={`text-[8px] font-bold ${competitorTextColors[i]}`}>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wrapper 3: r:clip reveal (phase 6) — delayed entrance, no wait on implode */}
      <AnimatePresence>
        {phase >= 6 && (
          <motion.div
            key="rclip"
            initial={shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0 }
            }
            animate={{ opacity: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.1 }}
            className="absolute inset-x-0 top-0 z-10"
          >
            {/* Bloom light pulse */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full -z-5 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.5) 0%, rgba(96, 165, 250, 0) 70%)' }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1.5, 2.0],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  times: [0, 0.3, 1],
                  ease: 'easeOut',
                }}
              />
            )}

            {/* r:clip panel with two-stage reveal */}
            <motion.div
              initial={shouldReduceMotion
                ? { scale: 1, filter: 'blur(0px)', y: 0 }
                : { scale: 0.85, filter: 'blur(12px)', y: 10 }
              }
              animate={{
                scale: shouldReduceMotion ? 1 : [0.85, 1.04, 1.0],
                filter: shouldReduceMotion ? 'blur(0px)' : ['blur(12px)', 'blur(1px)', 'blur(0px)'],
                y: shouldReduceMotion ? 0 : [10, -2, 0],
              }}
              transition={shouldReduceMotion ? { duration: 0 } : {
                duration: 0.9,
                delay: 0.15,
                times: [0, 0.6, 1],
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <RClipPanel />
            </motion.div>

            {/* Background glow — fades in separately, slower */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 blur-[100px] rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={shouldReduceMotion ? { duration: 0 } : {
                duration: 1.2,
                delay: 0.3,
                ease: 'easeOut',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CompetitorParade
