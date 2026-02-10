import { motion } from 'framer-motion'

interface NavbarProps {
  scrolled: boolean
}

const Navbar = ({ scrolled }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 apple-shadow' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M16 6a2 2 0 0 0-2 2v1h-3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-3V8a2 2 0 0 0-2-2z" stroke="white" strokeWidth="1.5" fill="none"/>
              <circle cx="16" cy="8" r="1.5" fill="white"/>
              <path d="M13 16h6M13 19h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">ClipStash</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#hero" className="text-gray-600 hover:text-black transition-colors">Overview</a>
          <a href="#demo" className="text-gray-600 hover:text-black transition-colors">Product</a>
          <a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-black transition-colors">How It Works</a>
        </div>

        <div>
          <a
            href="#download"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
          >
            Download
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
