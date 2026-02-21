"use client"
 
import { FC } from "react"
import { ArrowLeft, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { Translations } from "@/constants/translations"

interface ExpirationPeriodsProps {
  translations: Translations
  setCurrentView?: (view: string) => void
}

export default function ExpirationPeriods({ translations: t, setCurrentView }: ExpirationPeriodsProps) {
  const router = useRouter()

  const handleBack = () => {
    if (setCurrentView) {
      setCurrentView("home")
    } else {
      router.back()
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
            {t.expirationPeriods.title}
          </h1>
          <p className="text-slate-400 text-sm">{t.expirationPeriods.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Table */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4 text-cyan-400">{t.expirationPeriods.periodsAndSpreads}</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-2 px-3 text-sm font-semibold text-slate-300">{t.expirationPeriods.period}</th>
                    <th className="text-right py-2 px-3 text-sm font-semibold text-slate-300">{t.expirationPeriods.spread}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: "2.5 min", spread: "0.01%" },
                    { period: "5 min", spread: "0%" },
                    { period: "15 min", spread: "0.03%" },
                    { period: "30 min", spread: "0.03%" },
                    { period: "1 hour", spread: "0.05%" },
                    { period: "4 hours", spread: "0.09%" },
                    { period: "6 hours", spread: "0.10%" },
                    { period: "12 hours", spread: "0.17%" },
                    { period: "1 day", spread: "0.23%" },
                    { period: "3 days", spread: "0.60%" },
                    { period: "7 days", spread: "1.2%" },
                    { period: "1 month", spread: "3.0%" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                      <td className="py-1.5 px-3 text-sm text-slate-300">{row.period}</td>
                      <td className="py-1.5 px-3 text-sm text-right font-mono text-cyan-400">{row.spread}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <p className="text-xs text-cyan-300">
                <span className="font-semibold">{t.expirationPeriods.note}:</span> {t.expirationPeriods.spreadNote}
              </p>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4 text-magenta-400">{t.expirationPeriods.tradingNftVisuals}</h2>

            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950/50 to-magenta-900/20 rounded-2xl blur-2xl"></div>
              <video src="/images/4nft-animation.mp4" autoPlay loop muted playsInline className="relative w-full h-full object-contain rounded-xl" />
            </div>

            <p className="text-xs text-slate-400 text-center mt-4">{t.expirationPeriods.experienceSeamless}</p>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="text-cyan-400 text-xl font-bold mb-1">12</div>
            <p className="text-xs text-slate-400">{t.expirationPeriods.availablePeriods}</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="text-magenta-400 text-xl font-bold mb-1">2.5min - 1mo</div>
            <p className="text-xs text-slate-400">{t.expirationPeriods.periodRange}</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="text-cyan-400 text-xl font-bold mb-1">0% - 3.0%</div>
            <p className="text-xs text-slate-400">{t.expirationPeriods.spreadRange}</p>
          </div>
        </div>
      </div>
    </div>
  )
}