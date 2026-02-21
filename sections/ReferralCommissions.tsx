"use client"
 
import { useRouter } from "next/navigation"
import { FC } from "react"
import { ArrowLeft, Percent } from "lucide-react" // Добавил иконку для стиля
import { Translations } from "@/constants/translations"

interface ReferralCommissionsProps {
  translations: Translations
  setCurrentView?: (view: string) => void
}

const ReferralCommissions: FC<ReferralCommissionsProps> = ({ translations: t, setCurrentView }) => {
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
        
        <button
                 onClick={handleBack}
                 className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
               >
                 <ArrowLeft className="w-4 h-4" />
                 {t.common.backToHome}
               </button>

        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">
            {t.referralCommissions.title}
          </h1>
          {/* Увеличили до text-base */}
          <p className="text-slate-400 text-base max-w-2xl">{t.referralCommissions.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col h-full">
            <h2 className="text-lg font-bold mb-4 text-cyan-400">{t.referralCommissions.howItWorks}</h2>

            {/* Увеличили основной текст до text-base для читаемости */}
            <div className="space-y-4 mb-8">
              <p className="text-base text-slate-300 leading-relaxed">
                {t.referralCommissions.description1}
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                {t.referralCommissions.description2}
              </p>
            </div>

            <h3 className="text-base font-bold mb-3 text-purple-400">{t.referralCommissions.commissionByTier}</h3>

            <div className="overflow-x-auto mb-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-3 px-3 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.referralCommissions.tier}</th>
                    <th className="text-right py-3 px-3 text-xs font-bold text-slate-500 uppercase tracking-wider">{t.referralCommissions.commission}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[
                    { tier: "Tier 1", rate: "0.4%" },
                    { tier: "Tier 2", rate: "0.4%" },
                    { tier: "Tier 3", rate: "0.4%" },
                    { tier: "Tier 4", rate: "0.4%" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 text-sm text-slate-300 font-medium">{row.tier}</td>
                      <td className="py-3 px-3 text-sm text-right font-mono text-cyan-400 font-bold">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-xl mt-8">
              <p className="text-sm text-cyan-300/90 leading-relaxed">
                <span className="font-bold text-cyan-400">{t.referralCommissions.maximumReward}:</span> {t.referralCommissions.maxRewardDetails}
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <h2 className="text-lg font-bold mb-6 text-purple-400">{t.referralCommissions.nftSystem}</h2>

            <div className="w-full aspect-video bg-slate-950/50 border border-slate-800 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-50"></div>
               <div className="text-slate-500 text-sm font-medium">NFT Tier Visualization</div>
            </div>

            <p className="text-base text-slate-400 leading-relaxed max-w-md">
              {t.referralCommissions.nftDescription}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-1">4 Tiers</p>
            <p className="text-xl font-bold text-white">{t.referralCommissions.referralLevels}</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-1">0.4% Each</p>
            <p className="text-xl font-bold text-white">{t.referralCommissions.commissionRate}</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex items-center justify-center border-cyan-500/20 bg-cyan-500/5">
            <p className="text-base font-bold text-cyan-400">1.6% Total Reward</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralCommissions