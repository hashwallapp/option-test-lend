"use client"

import { ArrowLeft, MessageSquare, PlayCircle, HelpCircle, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { Translations } from "@/constants/translations"

interface OpenTradeViewProps {
  translations: Translations
}

const OpenTradeView: FC<OpenTradeViewProps> = ({ translations: t }) => {
  const router = useRouter()
  
  const openTradeData = t.openTradeViewDetailed || t.openTradeView
  const shared = t.loginToPlatformDetailed || t.loginToPlatform

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.common.backToHome}
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {openTradeData.title}
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-2xl">
            {openTradeData.subtitle}
          </p>
        </div>

        {/* Main Content Grid - Steps in 2 columns to fill space */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          
          {/* Left Side: Steps 1-4 */}
          <div className="space-y-4">
            {[
               { step: 1, title: openTradeData.prerequisitesTitle, desc: openTradeData.prerequisitesDescription, color: "text-cyan-400" },
               { step: 2, title: openTradeData.selectTradingPair, desc: openTradeData.selectTradingPairDescription, color: "text-cyan-400" },
               { step: 3, title: openTradeData.setTransactionParameters, desc: openTradeData.setTransactionParametersDescription, color: "text-cyan-400" },
               { step: 4, title: openTradeData.configureSlippage, desc: openTradeData.configureSlippageDescription, color: "text-purple-400" },
            ].map((item) => (
              <div key={item.step} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
                <div className="flex gap-4">
                  <span className={`text-sm font-bold ${item.color} mt-1`}>0{item.step}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Steps 5-7 + Action Cards */}
          <div className="space-y-6">
            <div className="space-y-4">
               {[
                  { step: 5, title: openTradeData.chooseDirection, desc: openTradeData.chooseDirectionDescription, color: "text-purple-400" },
                  { step: 6, title: openTradeData.sendTransaction, desc: openTradeData.sendTransactionDescription, color: "text-amber-400" },
                  { step: 7, title: openTradeData.trackYourTrade, desc: openTradeData.trackYourTradeDescription, color: "text-emerald-400" },
               ].map((item) => (
                <div key={item.step} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5">
                  <div className="flex gap-4">
                    <span className={`text-sm font-bold ${item.color} mt-1`}>0{item.step}</span>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Instruction - Compact Style */}
            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-red-500" />
                {openTradeData.videoInstructionTitle}
              </h3>
              <p className="text-xs text-slate-400 mb-4">{openTradeData.videoInstructionDesc}</p>
              <a
                href="https://youtu.be/GIaP_s0rF98"
                target="_blank"
                className="w-full bg-[#b91c1c] hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                {shared.watchOnYoutube}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Feed & Coins */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
           <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  {openTradeData.liveTradeFeed}
                </h3>
                <p className="text-sm text-slate-400">{openTradeData.liveTradeFeedDescription}</p>
              </div>
              <a href="https://t.me/t4ulife" target="_blank" className="whitespace-nowrap bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-xl transition-all text-sm">
                {shared.joinT4ulife}
              </a>
           </div>

           <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm">{openTradeData.supportedTradingCoinsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">{shared.t4uToken}</span>
                <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">USDT</span>
                <span className="bg-slate-800 border border-slate-700 text-slate-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">{shared.partnerCoins}</span>
              </div>
           </div>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs text-cyan-400 font-semibold uppercase mb-1">{shared.syncTime}</p>
            <p className="text-lg font-bold text-white">5-10 min</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs text-purple-400 font-semibold uppercase mb-1">{shared.defaultReferral}</p>
            <p className="text-lg font-bold text-white font-mono">{shared.defaultCodeValue}</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex items-center justify-center text-cyan-400 font-bold">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            {shared.bestTrading}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenTradeView