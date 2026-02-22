"use client"

import { ArrowLeft, CheckCircle2, ExternalLink, ShoppingCart, ShieldCheck } from "lucide-react"
import { FC } from "react"
import { Translations } from "@/constants/translations"

interface TokenPurchaseProps {
  translations: Translations,
  setCurrentView?: (view: string) => void;
}

const TokenPurchase: FC<TokenPurchaseProps> = ({ translations: t, setCurrentView }) => {
  const tokenPurchase = t.tokenPurchaseDetailed || t.tokenPurchase 

  const handleBack = () => {
    if (setCurrentView) {
      setCurrentView("home")
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <button
                 onClick={handleBack}
                 className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
               >
                 <ArrowLeft className="w-4 h-4" />
                 {t.common.backToHome}
               </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {tokenPurchase.title}
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-2xl">
            {tokenPurchase.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Column - Instructions */}
          <div className="space-y-4">
            {[
              { step: 1, title: tokenPurchase.prerequisites, desc: tokenPurchase.prerequisitesDescription },
              { step: 2, title: tokenPurchase.swapViaStonfi, desc: tokenPurchase.swapViaStonfiDescription },
              { step: 3, title: tokenPurchase.quickAccess, desc: tokenPurchase.quickAccessDescription },
            ].map((item) => (
              <div key={item.step} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Verified Token Notice */}
            <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 rounded-full p-2 border border-emerald-500/20">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{tokenPurchase.verifiedToken}</h3>
                  <p className="text-emerald-400/80 text-xs">
                    {tokenPurchase.verifiedTokenDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 drop-shadow-[0_0_8px_rgba(0,152,234,0.5)]">
                  <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="#0098EA"/>
                  <path d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5765 22.4861C43.3045 19.4202 41.0761 15.6277 37.5611 15.6277H37.5603ZM26.2937 36.8068L23.6096 31.6507L17.4234 20.7056C17.0261 20.0091 17.5277 19.1366 18.4394 19.1366H26.2929V36.8076L26.2937 36.8068ZM38.5765 20.7048L32.3903 31.6515L29.7062 36.8068V19.1358H37.5597C38.4706 19.1358 38.9738 20.0083 38.5765 20.704V20.7048Z" fill="white"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">{tokenPurchase.buyT4UOnStonfi}</h2>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed max-w-sm mx-auto">
                {tokenPurchase.exchangeDescription}
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://app.ston.fi/swap?ft=TON&tt=T4U"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              >
                <span>{tokenPurchase.openStonfi}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{tokenPurchase.pair}</div>
                  <div className="text-sm font-bold text-white">TON → T4U</div>
                </div>
                <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-3 text-center">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{tokenPurchase.network}</div>
                  <div className="text-sm font-bold text-white">TON Mainnet</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs text-cyan-400 font-semibold uppercase mb-1">{tokenPurchase.exchange}</p>
            <p className="text-lg font-bold text-white">STON.fi DEX</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs text-emerald-400 font-semibold uppercase mb-1">{tokenPurchase.tokenStatus}</p>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold text-white">{tokenPurchase.verified}</p>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex items-center justify-center text-cyan-400 font-bold text-sm">
            {tokenPurchase.inAppLink}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenPurchase