"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const LoginToPlatform = () => {

    const router = useRouter()
  
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
            Log In to the Platform
          </h1>
          <p className="text-slate-400 text-sm">Steps to connect your wallet and begin trading</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Steps */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-5 text-cyan-400">Steps to Begin Trading</h2>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xs">
                  1
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  Connect your previously created TON wallet
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xs">
                  2
                </div>
                <div className="text-sm text-slate-300 leading-relaxed pt-1">
                  You can trade for <span className="text-cyan-400 font-medium">USDT</span>,{" "}
                  <span className="text-cyan-400 font-medium">T4U coins</span>, and other partner coins.
                  <span className="text-magenta-400 font-medium"> T4U offers the best trading conditions.</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xs">
                  3
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  Exchange TON for T4U coins via{" "}
                  <a
                    href="https://app.ston.fi/swap?ft=TON&tt=T4U&chartVisible=true&chartInterval=1m&fa=%2219%22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    ston.fi
                  </a>
                </p>
              </div>

              {/* Step 4 - Referral */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 border rounded-lg flex items-center justify-center text-magenta-400 font-bold text-xs bg-cyan-950 border-cyan-800">
                  4
                </div>
                <div className="text-sm text-slate-300 leading-relaxed pt-1">
                  If you did not access via a referral link, you can create your own NFT or enter a referral code when
                  opening a trade.
                  <div className="mt-2 bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 inline-block">
                    <span className="text-xs text-slate-400">Default code: </span>
                    <span className="text-cyan-400 font-mono font-semibold">DIRTYTRADER</span>
                  </div>
                </div>
              </div>

              {/* Step 5 - Sync Warning */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xs">
                  5
                </div>
                <div className="text-sm text-slate-300 leading-relaxed pt-1">
                  <span className="text-amber-400 font-medium">Important:</span> After entering the code, servers need{" "}
                  <span className="text-amber-400 font-medium">5-10 minutes</span> to synchronize. You cannot mint NFTs
                  or open trades during this time.
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center text-green-400 font-bold text-xs">
                  6
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  <span className="text-green-400 font-medium">After synchronization, you can start trading!</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Links & Video */}
          <div className="space-y-5">
            {/* Live Trades */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-base font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Live Trades Broadcast
              </h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                All open trades are broadcast in real-time on our Telegram channel
              </p>
              <a
                href="https://t.me/t4ulife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Join @t4ulife
              </a>
            </div>

            {/* YouTube Video */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-base font-semibold text-magenta-400 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Video Instruction
              </h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Watch our step-by-step video guide on how to start trading
              </p>
              <a
                href="https://youtu.be/GIaP_s0rF98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch on YouTube
              </a>
            </div>

            {/* Supported Coins */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-base font-semibold text-slate-300 mb-4">Supported Trading Coins</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-medium">
                  T4U (Best rates)
                </span>
                <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-xs font-medium">
                  USDT
                </span>
                <span className="bg-slate-700 border border-slate-600 text-slate-300 px-4 py-1.5 rounded-full text-xs font-medium">
                  Partner Coins
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
            <div className="text-xs text-cyan-400 mb-1 font-medium">Sync Time</div>
            <div className="text-lg font-bold text-white">5-10 min</div>
          </div>
          <div className="bg-gradient-to-br from-magenta-500/10 to-pink-500/10 border border-magenta-500/30 rounded-lg p-4">
            <div className="text-xs text-magenta-400 mb-1 font-medium">Default Referral</div>
            <div className="text-lg font-bold text-white font-mono">DIRTYTRADER</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="text-xs text-green-400 mb-1 font-medium">Best Trading</div>
            <div className="text-lg font-bold text-white">T4U Token</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginToPlatform