import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">r:</span>
            </div>
            <span className="text-lg font-bold tracking-tight">clip</span>
          </a>
          <a href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
            &larr; Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: February 12, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-600">
              r:clip is a clipboard manager for macOS developed by r:labs studio (Refactory Consulting Services Pty Ltd).
              We are committed to protecting your privacy. This policy explains how r:clip handles your data.
            </p>
            <p className="text-gray-600 mt-3 font-medium">
              The short version: r:clip stores everything locally on your Mac. We collect no data, track nothing,
              and send nothing to any server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Storage</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>All clipboard history is stored <strong>locally</strong> in an SQLite database within the app's sandboxed container on your Mac.</li>
              <li>Data location: <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">~/Library/Application Support/rclip/</code></li>
              <li>No clipboard data is ever transmitted off your device.</li>
              <li>No cloud sync, no remote servers, no external databases.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
            <p className="text-gray-600">
              r:clip collects <strong>no personal data</strong>. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-3">
              <li>No analytics or telemetry</li>
              <li>No crash reporting to external services</li>
              <li>No advertising identifiers (IDFA)</li>
              <li>No user accounts or registration</li>
              <li>No network requests of any kind (the app has no backend)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Sensitive Content</h2>
            <p className="text-gray-600">
              r:clip includes built-in protection for sensitive content:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-3">
              <li>Items marked as "concealed" by the system (e.g. password fields) are automatically detected.</li>
              <li>You can enable <strong>"Skip sensitive/concealed items"</strong> in Preferences to prevent passwords and other sensitive data from being recorded.</li>
              <li>Clipboard items from specific apps (e.g. password managers) can be excluded by bundle ID.</li>
              <li>Sensitive items that are captured are masked in the UI with <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">••••••••</code>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">User Controls</h2>
            <p className="text-gray-600">
              You have full control over your data at all times:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-3">
              <li><strong>Clear History</strong> — delete all clipboard history instantly from Preferences.</li>
              <li><strong>Delete Individual Items</strong> — remove specific items via right-click or the Delete key.</li>
              <li><strong>Export as JSON</strong> — export your clipboard history for your own records.</li>
              <li><strong>History Limit</strong> — configure how many items are retained (25 to 500).</li>
              <li><strong>Pause Monitoring</strong> — disable clipboard capture at any time.</li>
              <li><strong>Excluded Apps</strong> — prevent capture from specific applications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">App Sandbox</h2>
            <p className="text-gray-600">
              r:clip runs in the macOS App Sandbox with minimal entitlements:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-3">
              <li><strong>Network (outgoing)</strong> — entitled but unused; included for future update checks only.</li>
              <li><strong>User-selected files (read/write)</strong> — used solely for the JSON export feature when you choose a save location.</li>
            </ul>
            <p className="text-gray-600 mt-3">
              No access to contacts, calendars, camera, microphone, location, or any other system resources.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-gray-600">
              r:clip uses <strong>no third-party SDKs, frameworks, or services</strong>. The app is built entirely
              with Apple's native frameworks (AppKit, CryptoKit, SQLite). There are no analytics providers,
              ad networks, or external dependencies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
            <p className="text-gray-600">
              r:clip does not collect any data from any users, including children. The app is suitable for all ages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
            <p className="text-gray-600">
              If we make changes to this privacy policy, we will update this page and the "Last updated" date above.
              Since r:clip collects no data, we do not anticipate material changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-gray-600">
              If you have questions about this privacy policy, contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              <a href="mailto:rclip@refactory.co.za" className="text-black underline underline-offset-2 hover:text-blue-600 transition-colors">rclip@refactory.co.za</a>
            </p>
          </section>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} r:factory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
