import StonfiSvg from "@/components/icons/StonfiSvg"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 px-6 lg:px-12 py-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/ton4u-logo.png" alt="TON4U" className="w-6 h-6 rounded" />
            <span className="font-bold">TON4U</span>
          </div>
          <p className="text-sm text-slate-500 mb-4">Professional options trading on TON blockchain</p>
          <a
            href="https://ston.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-slate-900/50 transition-all"
            title="Swap on ston.fi"
          >
            <StonfiSvg />
            <span className="text-sm font-medium">Ston.fi</span>
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="/trading" className="hover:text-cyan-400 transition-colors">
                Trading Platform
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="/about" className="hover:text-magenta-400 transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-magenta-400 transition-colors">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-magenta-400 transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Community</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <p>&copy; 2025 TON4U. All rights reserved.</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-magenta-400 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Security
          </a>
        </div>
      </div>
    </footer>
  )
}
