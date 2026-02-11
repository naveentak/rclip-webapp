import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-[#FBFBFD] py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-0 max-w-sm"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">r:</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">clip</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-4">
              The most powerful, lightweight clipboard manager for macOS. Part of the r:labs suite by r:factory.
            </p>
            <p className="text-gray-400 text-xs mb-6">
              An <a href="https://refactory.co.za" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors underline underline-offset-2">r:factory</a> product
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/naveentak/clipstash-macos-app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-12"
          >
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-gray-400">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#hero" className="text-gray-600 hover:text-black transition-colors">Overview</a></li>
                <li><a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
                <li><a href="https://github.com/naveentak/clipstash-macos-app/releases" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">Release Notes</a></li>
                <li><a href="#download" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-gray-400">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="https://github.com/naveentak/clipstash-macos-app#readme" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
                <li><a href="https://github.com/naveentak/clipstash-macos-app/issues" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">Report a Bug</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-gray-400">Shortcuts</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between"><span>Open Panel</span> <kbd className="text-xs bg-gray-100 px-2 py-0.5 rounded font-mono">{'\u2318\u21E7V'}</kbd></li>
                <li className="flex justify-between"><span>Quick Paste</span> <kbd className="text-xs bg-gray-100 px-2 py-0.5 rounded font-mono">{'\u23181-9'}</kbd></li>
                <li className="flex justify-between"><span>Preview</span> <kbd className="text-xs bg-gray-100 px-2 py-0.5 rounded font-mono">Space</kbd></li>
                <li className="flex justify-between"><span>Delete</span> <kbd className="text-xs bg-gray-100 px-2 py-0.5 rounded font-mono">{'\u232B'}</kbd></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} r:factory. All rights reserved. macOS is a trademark of Apple Inc.</p>
          <p className="mt-4 md:mt-0">Designed in South Africa. Built for the world.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
