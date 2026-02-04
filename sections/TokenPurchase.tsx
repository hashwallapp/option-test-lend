"use client"

import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react"
import { FC } from "react"

const TokenPurchase: FC<{ setCurrentView?: (v: string) => void }> = ({ setCurrentView }) => {
  return (
    <div className="px-6 lg:px-12 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <button
          onClick={() => {
            setCurrentView?.("home")
          }}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1">
            Token Purchase
          </h1>
          <p className="text-slate-400 text-sm">How to acquire T4U tokens for trading on the platform</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Instructions */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">Prerequisites</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    After creating a wallet and replenishing its balance with TON, you can purchase T4U tokens.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">Swap via STON.fi</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The swap can be performed via DEX ston.fi. Connect your wallet to the platform and perform the
                    exchange.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">Quick Access</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    For convenience, the link to purchase the token is available directly on the website and in the
                    trading terminal — at the top of the interface under the ston.fi icon.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Token Notice */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 rounded-full p-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Verified Token</h3>
                  <p className="text-green-300/80 text-sm">
                    The T4U token is verified and marked with a "Verified" check mark on STON.fi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="flex flex-col justify-center items-center bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                  <path
                    d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                    fill="#0098EA"
                  />
                  <path
                    d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5765 22.4861C43.3045 19.4202 41.0761 15.6277 37.5611 15.6277H37.5603ZM26.2937 36.8068L23.6096 31.6507L17.4234 20.7056C17.0261 20.0091 17.5277 19.1366 18.4394 19.1366H26.2929V36.8076L26.2937 36.8068ZM38.5765 20.7048L32.3903 31.6515L29.7062 36.8068V19.1358H37.5597C38.4706 19.1358 38.9738 20.0083 38.5765 20.704V20.7048Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Buy T4U on STON.fi</h2>
              <p className="text-slate-400 text-sm mb-6">
                Exchange TON for T4U tokens directly on the decentralized exchange
              </p>
            </div>

            <a
              href="https://app.ston.fi/swap?ft=TON&tt=T4U&chartVisible=true&chartInterval=1m&fa=%2219%22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <span>Open STON.fi</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400 mb-1">Pair</div>
                <div className="text-sm font-semibold text-white">TON → T4U</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400 mb-1">Network</div>
                <div className="text-sm font-semibold text-white">TON</div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
            <div className="text-xs text-cyan-400 mb-1 font-medium">Exchange</div>
            <div className="text-lg font-bold text-white">STON.fi DEX</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="text-xs text-green-400 mb-1 font-medium">Token Status</div>
            <div className="text-lg font-bold text-white flex items-center gap-2">
              Verified <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-lg p-4">
            <div className="text-xs text-purple-400 mb-1 font-medium">Access</div>
            <div className="text-lg font-bold text-white">In-App Link</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenPurchase