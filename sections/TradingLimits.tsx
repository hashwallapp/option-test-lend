"use client"

import { ArrowLeft, Shield, TrendingUp, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { FC } from "react"

const TradingLimits = () => {

    const router = useRouter()
  
  return (
    <div className="px-6 py-6 lg:px-[275px] max-w-7xl mx-auto">
      <button
        onClick={() => {
          router.back()
        }}
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
            Trading Limits
          </h1>
          <p className="text-slate-400 text-sm">Pool protection and maximum open interest limits</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/50 rounded-xl border border-slate-700/50 p-6">
          <div className="space-y-6">
            {/* Pool Protection System */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-cyan-500/10 rounded-lg p-2 border border-cyan-500/20">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Pool Protection System</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The platform has a pool protection system with a limit on the maximum possible open interest for all
                    timeframes and trading pairs.
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Amount Display */}
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/10 rounded-lg p-2 border border-purple-500/20">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1">Bank Amount & Open Interest</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    This information is shown in the top left block of the trading interface. It displays the current
                    bank amount and available open interest for all active positions.
                  </p>
                </div>
              </div>
            </div>

            {/* Maximum Load */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-white">Maximum Pool Load</h3>
                <div className="bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                  <span className="text-cyan-400 font-bold text-lg">20%</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The maximum load is limited to 20% of the total bank amount to ensure pool security and stability.
              </p>
            </div>

            {/* Automatic Returns */}
            <div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 rounded-lg p-2 border border-orange-500/20">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Automatic Trade Returns</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    All trades that exceed these limits will be automatically returned to your wallet after attempting
                    to open a trade with a volume that exceeds the allowable limit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-semibold text-white">Protection Type</h4>
            </div>
            <p className="text-slate-400 text-xs">Pool-wide open interest limit</p>
          </div>

          <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <h4 className="text-sm font-semibold text-white">Max Capacity</h4>
            </div>
            <p className="text-slate-400 text-xs">20% of total bank amount</p>
          </div>

          <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              <h4 className="text-sm font-semibold text-white">Exceeded Trades</h4>
            </div>
            <p className="text-slate-400 text-xs">Automatically returned to wallet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingLimits
