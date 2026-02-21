"use client"

import { ArrowLeft, Zap, Table, Wallet } from "lucide-react"
import { FC } from "react"
import { useRouter } from "next/navigation"
import { Translations } from "@/constants/translations"

interface PoolCommissionsProps {
  translations: Translations,
  setCurrentView?: (view: string) => void;
}

const PoolCommissions: FC<PoolCommissionsProps> = ({ translations: t, setCurrentView }) => {
  const router = useRouter()

  const handleBack = () => {
    if (setCurrentView) {
      setCurrentView("home")
    } else {
      router.push("/")
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
            {t.poolCommissions.title}
          </h1>
          {/* Увеличили до text-base, как в ReferralNfts */}
          <p className="text-slate-400 text-base max-w-2xl">{t.poolCommissions.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Column: Основные правила */}
          <div className="space-y-4">
            <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{t.poolCommissions.blockchainCommission}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    {t.poolCommissions.blockchainDescription}
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400">
                  <Table className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{t.poolCommissions.poolRewards}</h3>
                  <p className="text-base text-slate-300 leading-relaxed mb-4">
                    {t.poolCommissions.rewardsDescription}
                  </p>
                  <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4">
                    <p className="text-sm text-slate-400 leading-relaxed">
                      <strong className="text-cyan-400 font-bold">{t.poolCommissions.autoCredit}:</strong> {t.poolCommissions.autoCreditDescription}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Вывод и Формулы */}
          <div className="flex flex-col">
            <section className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-8 h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center justify-center text-amber-400">
                  <Wallet className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-bold text-white mb-4">{t.poolCommissions.withdrawalFee}</h3>
                  <p className="text-base text-slate-300 leading-relaxed mb-6">
                    {t.poolCommissions.withdrawalDescription}
                  </p>
                  
                  <div className="space-y-4 bg-slate-950/50 border border-slate-800 rounded-xl p-5">
                    <div>
                      <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{t.poolCommissions.feeDistribution}</span>
                      <p className="text-sm text-slate-400 leading-relaxed">{t.poolCommissions.feeDistributionDescription}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-800">
                      <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{t.poolCommissions.formula}</span>
                      <code className="text-xs text-slate-200 font-mono bg-slate-900 px-2 py-1 rounded">
                        {t.poolCommissions.formulaDetail}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest mb-1">{t.poolCommissions.gasRequired}</p>
            <p className="text-2xl font-bold text-white">0.25 TON</p>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-1">{t.poolCommissions.rewardType}</p>
            <p className="text-2xl font-bold text-white">{t.poolCommissions.autoCredited}</p>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <p className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-1">{t.poolCommissions.withdrawal}</p>
            <div className="text-2xl font-bold text-white">{t.poolCommissions.anytime}</div>
            <p className="text-[10px] text-slate-500 mt-2 uppercase font-medium">{t.poolCommissions.feeIfTradesOpen}</p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="text-center pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm">
            Want to know more about trading? Check out our{" "}
            <button 
              onClick={() => setCurrentView?.('expiration')} 
              className="text-cyan-400 font-bold hover:underline underline-offset-4"
            >
              Expiration Periods and Spreads
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PoolCommissions