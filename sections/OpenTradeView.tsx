"use client"

import { ArrowLeft, MessageSquare, PlayCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const OpenTradeView =() => {
  const router = useRouter()  
  
  return (
    <div className="px-6 lg:px-12 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <button
          onClick={() => {
            router.back()
          }}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Opening a Trade
            </span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Follow these steps to start trading on the T4U platform
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Trading Steps */}
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Prerequisites",
                desc: "Ensure your wallet is authorized, synced with the server, and you've entered a referral code or purchased an NFT.",
                color: "cyan",
              },
              {
                step: 2,
                title: "Select Trading Pair & Token",
                desc: "Choose your desired trading pair and select the token you'll use to open your position.",
                color: "cyan",
              },
              {
                step: 3,
                title: "Set Transaction Parameters",
                desc: "Specify your transaction amount and select an expiration timeframe (from 2.5 minutes to 1 month).",
                color: "cyan",
              },
              {
                step: 4,
                title: "Configure Slippage",
                desc: "Set acceptable slippage (price deviation). If the price changes significantly, the transaction will be automatically returned to your wallet.",
                color: "magenta",
              },
              {
                step: 5,
                title: "Choose Direction",
                desc: "Select your position direction: Long (price goes up) or Short (price goes down).",
                color: "magenta",
              },
              {
                step: 6,
                title: "Send Transaction",
                desc: "Send and sign the transaction in your wallet. You must have 0.25 TON for blockchain commission.",
                color: "amber",
              },
              {
                step: 7,
                title: "Track Your Trade",
                desc: "After sending, view trade parameters in the interface and receive notifications in the group and trading bot.",
                color: "green",
              },
            ].map((item) => (
              <div key={item.step} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <div className="flex items-start gap-4">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border ${
                      item.color === "cyan"
                        ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
                        : item.color === "magenta"
                        ? "bg-purple-500/20 border-purple-500/30 text-purple-400"
                        : item.color === "amber"
                        ? "bg-amber-500/20 border-amber-500/30 text-amber-400"
                        : "bg-green-500/20 border-green-500/30 text-green-400"
                    }`}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-200 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Video & Resources */}
          <div className="space-y-4">
            {/* YouTube Video */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-base font-semibold text-purple-400 mb-3 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Video Instruction
              </h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Watch our comprehensive video guide on opening your first trade
              </p>
              <a
                href="https://youtu.be/GIaP_s0rF98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm w-full justify-center"
              >
                Watch on YouTube
              </a>
            </div>

            {/* Trade Notifications */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-base font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Live Trade Feed
              </h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                All open trades are broadcast in real-time on our Telegram channel
              </p>
              <a
                href="https://t.me/t4ulife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm w-full justify-center"
              >
                Join @t4ulife
              </a>
            </div>

            {/* Supported Coins */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-base font-semibold text-slate-300 mb-4">Supported Trading Coins</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                  T4U (Best rates)
                </span>
                <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                  USDT
                </span>
                <span className="bg-slate-700 border border-slate-600 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                  Partner Coins
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
            <div className="text-xs text-cyan-400 mb-1 font-medium">Sync Time</div>
            <div className="text-lg font-bold text-white">5-10 min</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
            <div className="text-xs text-purple-400 mb-1 font-medium">Default Referral</div>
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

export default OpenTradeView