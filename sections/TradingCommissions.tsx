"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useTranslations } from "@/hooks/useTranslations"

const TradingCommissions = () => {
  const t = useTranslations()
  const router = useRouter()
  const [nftUpgraded, setNftUpgraded] = useState(false)

  const t4uCommissions = [
    { period: "2.5 min", base: "x1.72", lvl1: "x1.69", lvl2: "x1.66", lvl3: "x1.63", lvl4: "x1.60" },
    { period: "5 min", base: "x1.72", lvl1: "x1.69", lvl2: "x1.66", lvl3: "x1.63", lvl4: "x1.60" },
    { period: "15 min", base: "x1.74", lvl1: "x1.71", lvl2: "x1.68", lvl3: "x1.65", lvl4: "x1.62" },
    { period: "30 min", base: "x1.77", lvl1: "x1.74", lvl2: "x1.71", lvl3: "x1.68", lvl4: "x1.65" },
    { period: "1 hour", base: "x1.79", lvl1: "x1.76", lvl2: "x1.73", lvl3: "x1.70", lvl4: "x1.67" },
    { period: "4 hours", base: "x1.82", lvl1: "x1.79", lvl2: "x1.76", lvl3: "x1.73", lvl4: "x1.70" },
    { period: "6 hours", base: "x1.83", lvl1: "x1.80", lvl2: "x1.77", lvl3: "x1.74", lvl4: "x1.71" },
    { period: "12 hours", base: "x1.84", lvl1: "x1.81", lvl2: "x1.78", lvl3: "x1.75", lvl4: "x1.72" },
    { period: "1 day", base: "x1.85", lvl1: "x1.82", lvl2: "x1.79", lvl3: "x1.76", lvl4: "x1.73" },
    { period: "3 days", base: "x1.88", lvl1: "x1.85", lvl2: "x1.82", lvl3: "x1.79", lvl4: "x1.76" },
    { period: "7 days", base: "x1.92", lvl1: "x1.89", lvl2: "x1.86", lvl3: "x1.83", lvl4: "x1.80" },
    { period: "1 month", base: "x1.93", lvl1: "x1.90", lvl2: "x1.87", lvl3: "x1.84", lvl4: "x1.81" },
  ]

  const otherCoinsCommissions = [
    { period: "2.5 min", rate: "1.88" },
    { period: "5 min", rate: "1.87" },
    { period: "15 min", rate: "1.82" },
    { period: "30 min", rate: "1.80" },
    { period: "1 hour", rate: "1.79" },
    { period: "4 hours", rate: "1.78" },
    { period: "6 hours", rate: "1.77" },
    { period: "12 hours", rate: "1.74" },
    { period: "1 day", rate: "1.72" },
    { period: "3 days", rate: "1.69" },
    { period: "7 days", rate: "1.67" },
    { period: "1 month", rate: "1.67" },
  ]

  return (
    <section className="relative px-6 lg:px-12 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
              {t.tradingCommissions.title}
            </span>
          </h1>

          <p className="text-base text-slate-400 mb-4 leading-relaxed max-w-3xl mx-auto">
            We use two types of commissions with our native platform token - T4U. Upgrade your NFT to reduce commission
            costs and maximize your profits.
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm font-medium transition-colors ${!nftUpgraded ? "text-cyan-400" : "text-slate-500"}`}>
              {t.tradingCommissions.withNftUpgrade}
            </span>
            <button
              onClick={() => setNftUpgraded(!nftUpgraded)}
              className={`relative w-16 h-8 rounded-full transition-colors ${nftUpgraded ? "bg-magenta-500" : "bg-cyan-500"}`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  nftUpgraded ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${nftUpgraded ? "text-magenta-400" : "text-slate-500"}`}>
              {t.tradingCommissions.withoutNftUpgrade}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm">
                1
              </span>
              {t.tradingCommissions.blockchainCommission}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.tradingCommissions.note}
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-magenta-500/20 border border-magenta-500/30 flex items-center justify-center text-magenta-400 text-sm">
                2
              </span>
              {t.tradingCommissions.transactionCommission}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {t.tradingCommissions.commissionNote}
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                <h3 className="text-base font-semibold mb-3 text-cyan-400 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  T4U Token Collateral
                  {nftUpgraded && (
                    <span className="text-xs bg-magenta-500/20 text-magenta-300 px-2 py-0.5 rounded-full">With NFT Levels</span>
                  )}
                </h3>
                <div className="space-y-1 overflow-x-auto">
                  <div className="flex text-xs text-slate-500 font-medium pb-1 border-b border-slate-700 min-w-max border-l-0 mx-1 justify-between gap-[31p] border-r-[91px]">
                    <span className="w-[60px]">{t.tradingCommissions.period}</span>
                    {!nftUpgraded ? (
                      <span className="w-16 text-right">{t.tradingCommissions.rate}</span>
                    ) : (
                      <>
                        <span className="text-right w-[66px]">{t.tradingCommissions.base}</span>
                        <span className="w-12 text-right">{t.tradingCommissions.lvl1}</span>
                        <span className="w-12 text-right">{t.tradingCommissions.lvl2}</span>
                        <span className="w-12 text-right">{t.tradingCommissions.lvl3}</span>
                        <span className="w-12 text-right">{t.tradingCommissions.lvl4}</span>
                      </>
                    )}
                  </div>
                  {t4uCommissions.map((item, index) => (
                    <div key={index} className="flex py-1 hover:bg-slate-800/30 rounded transition-colors min-w-max gap-[31px] items-end justify-between px-[7px]">
                      <span className="text-xs text-slate-300 w-20">{item.period}</span>
                      {!nftUpgraded ? (
                        <span className="text-sm font-semibold text-cyan-400 w-16 text-right">{item.base}</span>
                      ) : (
                        <>
                          <span className="text-xs text-slate-400 w-12 text-right">{item.base}</span>
                          <span className="text-xs text-magenta-400 font-semibold w-12 text-right">{item.lvl1}</span>
                          <span className="text-xs text-magenta-400 font-semibold w-12 text-right">{item.lvl2}</span>
                          <span className="text-xs text-magenta-400 font-semibold w-12 text-right">{item.lvl3}</span>
                          <span className="text-xs text-magenta-400 font-semibold w-12 text-right">{item.lvl4}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                {nftUpgraded && (
                  <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/30 mb-0 mt-14">
                    <p className="text-xs text-cyan-300">
                      <strong>{t.tradingCommissions.nftLevelsNote}</strong>
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                <h3 className="text-base font-semibold mb-3 text-magenta-400 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  USDT & Other Coins
                  <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full">No NFT Benefits</span>
                </h3>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-500 font-medium pb-1 border-b border-slate-700">
                    <span>{t.tradingCommissions.expirationPeriod}</span>
                    <span>{t.tradingCommissions.commissionRate}</span>
                  </div>
                  {otherCoinsCommissions.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1 hover:bg-slate-800/30 px-2 rounded transition-colors">
                      <span className="text-sm text-slate-300">{item.period}</span>
                      <span className="text-sm font-semibold text-magenta-400">{item.rate}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-2 rounded bg-red-500/10 border border-red-500/30">
                  <p className="text-xs text-red-300">
                    <strong>{t.tradingCommissions.noNftNote}</strong>
                  </p>
                </div>
              </div>
            </div>

            {!nftUpgraded && (
              <div className="mt-4 p-3 rounded-lg bg-magenta-500/10 border border-magenta-500/30">
                <p className="text-sm text-magenta-300 flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>
                    <strong>{t.tradingCommissions.upgradeTip}</strong>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button className="bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-semibold px-6 py-4 text-base">
            {t.common.startTrading}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TradingCommissions