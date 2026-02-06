"use client"

import { ArrowLeft, Shield, TrendingUp, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { useTranslations } from "@/hooks/useTranslations"

const TradingLimits = () => {

    const router = useRouter()
    const t = useTranslations()

    const tradingLimits = t.tradingLimitsDetailed || t.tradingLimits



  return (
    <div className="px-6 py-6 lg:px-[275px] max-w-7xl mx-auto">
      <button
        onClick={() => {
          router.back()
        }}
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        {t.common.backToHome}
      </button>

      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
            {tradingLimits.title}
          </h1>
          <p className="text-slate-400 text-sm">{tradingLimits.subtitle}</p>
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
                  <h3 className="text-lg font-semibold text-white mb-1">{tradingLimits.poolProtectionSystem}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {tradingLimits.poolProtectionDescription}
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
                   <h3 className="text-base font-semibold text-white mb-1">{tradingLimits.bankAmountTitle}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                     { tradingLimits.bankAmountDescription}
                   </p>
                </div>
              </div>
            </div>

            {/* Maximum Load */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-4 border border-cyan-500/20">
              <div className="flex items-center justify-between mb-2">
                 <h3 className="text-base font-semibold text-white">{ tradingLimits.maximumPoolLoad}</h3>
                 <div className="bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                   <span className="text-cyan-400 font-bold text-lg">20%</span>
                 </div>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                 { tradingLimits.maximumPoolLoadDescription}
               </p>
            </div>

            {/* Automatic Returns */}
            <div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 rounded-lg p-2 border border-orange-500/20">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                   <h3 className="text-base font-semibold text-white mb-1">{ tradingLimits.automaticTradeReturns}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                     { tradingLimits.automaticTradeReturnsDescription}
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
              <h4 className="text-sm font-semibold text-white">{ tradingLimits.protectionType}</h4>
            </div>
              <p className="text-slate-400 text-xs">{ tradingLimits.protectionTypeValue}</p>
          </div>

          <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <h4 className="text-sm font-semibold text-white">{ tradingLimits.maxCapacity}</h4>
            </div>
              <p className="text-slate-400 text-xs">{ tradingLimits.maxCapacityValue}</p>
          </div>

          <div className="bg-slate-900/50 rounded-lg border border-slate-700/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-orange-400" />
              <h4 className="text-sm font-semibold text-white">{ tradingLimits.exceededTrades}</h4>
            </div>
              <p className="text-slate-400 text-xs">{ tradingLimits.exceededTradesValue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingLimits
