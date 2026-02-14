"use client"

import { useState, FC } from "react"
import { ArrowLeft, Percent, Bell, ShieldCheck, Zap, Info } from "lucide-react"
import { useRouter } from "next/navigation"
import { Translations } from "@/constants/translations"
import { Button } from "@/components/ui/button"

interface TradingCommissionsProps {
  translations: Translations,
    setCurrentView?: (view: string) => void;
}

const TradingCommissions: FC<TradingCommissionsProps> = ({ translations: t, setCurrentView }) => {
  const router = useRouter()
  const [nftUpgraded, setNftUpgraded] = useState(false)

  const t4uCommissions = [
    { period: "2.5 min", base: "x1.72", lvl1: "x1.69", lvl2: "x1.66", lvl3: "x1.63", lvl4: "x1.60" },
    { period: "5 min", base: "x1.72", lvl1: "x1.69", lvl2: "x1.66", lvl3: "x1.63", lvl4: "x1.60" },
    { period: "15 min", base: "x1.74", lvl1: "x1.71", lvl2: "x1.68", lvl3: "x1.65", lvl4: "x1.62" },
    { period: "30 min", base: "x1.77", lvl1: "x1.74", lvl2: "x1.71", lvl3: "x1.68", lvl4: "x1.65" },
    { period: "1 hour", base: "x1.79", lvl1: "x1.76", lvl2: "x1.73", lvl3: "x1.70", lvl4: "x1.67" },
    { period: "4 hours", base: "x1.82", lvl1: "x1.79", lvl2: "x1.76", lvl3: "x1.73", lvl4: "x1.70" },
    { period: "1 day", base: "x1.85", lvl1: "x1.82", lvl2: "x1.79", lvl3: "x1.76", lvl4: "x1.73" },
    { period: "1 month", base: "x1.93", lvl1: "x1.90", lvl2: "x1.87", lvl3: "x1.84", lvl4: "x1.81" },
  ]

  const otherCoinsCommissions = [
    { period: "2.5 min", rate: "1.88" },
    { period: "5 min", rate: "1.87" },
    { period: "15 min", rate: "1.82" },
    { period: "30 min", rate: "1.80" },
    { period: "1 hour", rate: "1.79" },
    { period: "4 hours", rate: "1.78" },
    { period: "1 day", rate: "1.72" },
    { period: "1 month", rate: "1.67" },
  ]

  return (
    <div className="px-6 lg:px-12 py-6 min-h-screen bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation */}
        <button
          onClick={() => setCurrentView ? setCurrentView("home") : router.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.common.backToHome}
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Percent className="w-6 h-6 text-cyan-400" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.tradingCommissions.title}
              </h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We use two types of commissions. Use native T4U token or upgrade your NFT to reduce costs and maximize your profits.
            </p>
          </div>

          {/* Integrated NFT Switcher */}
          <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl flex items-center gap-4 self-start md:self-auto">
            <span className={`text-xs font-medium ${!nftUpgraded ? "text-cyan-400" : "text-slate-500"}`}>Base</span>
            <button
              onClick={() => setNftUpgraded(!nftUpgraded)}
              className={`relative w-12 h-6 rounded-full transition-colors ${nftUpgraded ? "bg-magenta-500" : "bg-cyan-500"}`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${nftUpgraded ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-xs font-medium ${nftUpgraded ? "text-magenta-400" : "text-slate-500"}`}>NFT Boost</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left Column: T4U Commissions */}
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  T4U Token Collateral
                </h3>
                {nftUpgraded && <span className="text-[10px] bg-magenta-500/20 text-magenta-300 px-2 py-0.5 rounded-full border border-magenta-500/30 uppercase tracking-wider font-bold">NFT Levels Active</span>}
              </div>

              <div className="space-y-1">
                <div className="flex text-[11px] text-slate-500 font-bold uppercase tracking-wider pb-2 border-b border-slate-800 px-1">
                  <span className="w-20">{t.tradingCommissions.period}</span>
                  <div className="flex-1 flex justify-between text-right">
                    {!nftUpgraded ? (
                      <span className="flex-1">{t.tradingCommissions.rate}</span>
                    ) : (
                      <>
                        <span className="w-10">Base</span>
                        <span className="w-10">L1</span>
                        <span className="w-10">L2</span>
                        <span className="w-10">L3</span>
                        <span className="w-10 text-magenta-400">L4</span>
                      </>
                    )}
                  </div>
                </div>

                {t4uCommissions.map((item, i) => (
                  <div key={i} className="flex items-center py-2 px-1 hover:bg-slate-800/30 rounded-lg transition-colors border-b border-slate-800/30 last:border-0">
                    <span className="text-sm text-slate-300 w-20 font-medium">{item.period}</span>
                    <div className="flex-1 flex justify-between text-right">
                      {!nftUpgraded ? (
                        <span className="flex-1 text-sm font-bold text-cyan-400">{item.base}</span>
                      ) : (
                        <>
                          <span className="w-10 text-xs text-slate-500">{item.base}</span>
                          <span className="w-10 text-xs text-slate-300">{item.lvl1}</span>
                          <span className="w-10 text-xs text-slate-300">{item.lvl2}</span>
                          <span className="w-10 text-xs text-slate-300">{item.lvl3}</span>
                          <span className="w-10 text-xs font-bold text-magenta-400">{item.lvl4}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blockchain Gas Notice */}
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-4 flex items-start gap-3">
               <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
               <p className="text-xs text-cyan-100/70 leading-relaxed">
                 <strong>Gas Fee:</strong> {t.tradingCommissions.blockchainCommission}. {t.tradingCommissions.note}
               </p>
            </div>
          </div>

          {/* Right Column: Other Coins & Info */}
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-magenta-400" />
                USDT & Other Coins
              </h3>
              
              <div className="space-y-1">
                <div className="flex text-[11px] text-slate-500 font-bold uppercase tracking-wider pb-2 border-b border-slate-800 px-1">
                  <span className="flex-1">{t.tradingCommissions.expirationPeriod}</span>
                  <span className="w-20 text-right">{t.tradingCommissions.commissionRate}</span>
                </div>
                {otherCoinsCommissions.map((item, i) => (
                  <div key={i} className="flex items-center py-2 px-1 hover:bg-slate-800/30 rounded-lg transition-colors border-b border-slate-800/30 last:border-0">
                    <span className="flex-1 text-sm text-slate-300 font-medium">{item.period}</span>
                    <span className="w-20 text-right text-sm font-bold text-magenta-400">{item.rate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Banner */}
            <div className="bg-gradient-to-br from-magenta-500/10 to-purple-500/10 border border-magenta-500/30 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Bell className="w-5 h-5 text-magenta-400" />
                <h4 className="text-sm font-bold text-white">Efficiency Tip</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Trading with T4U tokens combined with an upgraded NFT can reduce your costs by up to 15% compared to base rates.
              </p>
              <Button className="w-full bg-magenta-500 hover:bg-magenta-600 text-white text-xs font-bold h-9 rounded-xl">
                Get T4U Tokens
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Footer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 flex flex-col justify-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Fee Type</div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              Dynamic Rates <Zap className="w-3 h-3 text-yellow-400" />
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 flex flex-col justify-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Max Discount</div>
            <div className="text-sm font-bold text-green-400">-15.5% with NFT L4</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 flex flex-col justify-center">
            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Collateral</div>
            <div className="text-sm font-bold text-white">T4U / USDT / TON</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TradingCommissions