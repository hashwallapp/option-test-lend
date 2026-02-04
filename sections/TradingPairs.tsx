"use client"

import React from 'react' 
import { ArrowLeft, TrendingUp, Bell, Search, Globe } from 'lucide-react'
 import { useRouter } from 'next/navigation'

const TradingPairs = () => { const router = useRouter()

const pairs = [ { symbol: "BTC / USD", name: "Bitcoin" }, { symbol: "ETH / USD", name: "Ethereum" }, { symbol: "TON / USD", name: "Toncoin" }, { symbol: "SOL / USD", name: "Solana" }, { symbol: "SUI / USD", name: "Sui" }, { symbol: "XRP / USD", name: "Ripple" }, { symbol: "BNB / USD", name: "Binance Coin" }, { symbol: "DOGE / USD", name: "Dogecoin" }, { symbol: "LTC / USD", name: "Litecoin" }, { symbol: "DASH / USD", name: "Dash" }, { symbol: "ASTER / USD", name: "Aster" }, ]

return ( <div className="min-h-screen bg-[#0a0a0f]"> <div className="max-w-6xl mx-auto px-4 py-8"> {/* Navigation */} <button onClick={() => router.back()} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6" > <ArrowLeft className="w-4 h-4" /> Back to Home </button>

    {/* Header */}
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <TrendingUp className="w-8 h-8 text-cyan-400" />
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Trading Pairs
        </h1>
      </div>
      <p className="text-slate-400 text-base max-w-2xl">
        The following trading pairs are available on the platform. The list of instruments is continuously expanding.
      </p>
    </div>

    {/* Info Banner */}
    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4 mb-8 flex items-center gap-4">
      <div className="bg-cyan-500/20 p-2 rounded-lg">
        <Bell className="w-5 h-5 text-cyan-400" />
      </div>
      <p className="text-sm text-cyan-100/80">
        Follow the latest updates and new instrument listings on our <a href="[https://t.me/t4ulife](https://t.me/t4ulife)" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-cyan-400 transition-colors">Telegram channel</a>.
      </p>
    </div>

    {/* Pairs Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {pairs.map((pair, index) => (
        <div 
          key={index}
          className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {pair.symbol}
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                {pair.name}
              </p>
            </div>
            <div className="bg-slate-800 rounded-full p-2 group-hover:bg-cyan-500/10 transition-colors">
              <Globe className="w-4 h-4 text-slate-600 group-hover:text-cyan-400" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Search Suggestion */}
    <div className="mt-12 p-8 border border-dashed border-slate-800 rounded-2xl text-center">
      <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
      <h3 className="text-white font-semibold mb-1">Looking for a specific pair?</h3>
      <p className="text-sm text-slate-500">
        Suggest a new asset for listing in our community chat.
      </p>
    </div>
  </div>
</div>
) }

export default TradingPairs