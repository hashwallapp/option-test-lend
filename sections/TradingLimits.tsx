"use client"

import { ArrowLeft, Shield, TrendingUp, AlertCircle, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { Translations } from "@/constants/translations"

interface TradingLimitsProps {
  translations: Translations
  setCurrentView?: (view: string) => void
}

const TradingLimits: FC<TradingLimitsProps> = ({ translations: t, setCurrentView }) => {
  const router = useRouter()
  const tradingLimits = t.tradingLimitsDetailed || t.tradingLimits

  const handleBack = () => {
    if (setCurrentView) {
      setCurrentView("home")
    } else {
      router.back()
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
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">
            {tradingLimits.title}
          </h1>
          <p className="text-slate-400 text-base max-w-2xl">{tradingLimits.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Column: Основные системы защиты */}
          <div className="space-y-4">
            <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{tradingLimits.poolProtectionSystem}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    {tradingLimits.poolProtectionDescription}
                  </p>
                </div>
              </div>
            </section>

            <article className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{tradingLimits.bankAmountTitle}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    {tradingLimits.bankAmountDescription}
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column: Лимиты и Возвраты */}
          <div className="space-y-4 flex flex-col">
            <section className="bg-gradient-to-br from-slate-900/60 to-cyan-950/20 border border-cyan-500/20 rounded-2xl p-8 flex-1">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-xl font-bold text-white">{tradingLimits.maximumPoolLoad}</h3>
                 <div className="bg-cyan-500/20 px-4 py-1 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                   <span className="text-cyan-400 font-black text-2xl">20%</span>
                 </div>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                {tradingLimits.maximumPoolLoadDescription}
              </p>
            </section>

            <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white mb-2">{tradingLimits.automaticTradeReturns}</h3>
                   <p className="text-base text-slate-300 leading-relaxed">
                     {tradingLimits.automaticTradeReturnsDescription}
                   </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-widest">{tradingLimits.protectionType}</span>
            </div>
            <div className="text-xl font-bold text-white leading-tight">{tradingLimits.protectionTypeValue}</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-400 font-bold uppercase tracking-widest">{tradingLimits.maxCapacity}</span>
            </div>
            <div className="text-xl font-bold text-white leading-tight">{tradingLimits.maxCapacityValue}</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">{tradingLimits.exceededTrades}</span>
            </div>
            <div className="text-xl font-bold text-white leading-tight">{tradingLimits.exceededTradesValue}</div>
          </div>
        </div>

        {/* Footer Navigation */}
        <nav className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-sm">
            Learn more about our <button onClick={() => setCurrentView?.('commissions')} className="text-cyan-400 font-bold hover:underline underline-offset-4">Pool Commissions</button> or explore <button onClick={() => setCurrentView?.('expiration')} className="text-cyan-400 font-bold hover:underline underline-offset-4">Expiration Periods</button>.
          </p>
        </nav>
      </div>
    </div>
  )
}

export default TradingLimits