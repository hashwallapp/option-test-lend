"use client"
 
import { ChevronDown, ArrowLeft } from "lucide-react"
import { FC } from "react"
import { useRouter } from "next/navigation"
import { Translations } from "@/constants/translations"

interface PoolCommissionsProps {
  translations: Translations,
   setCurrentView: (view: string) => void;
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
    <div className="px-6 py-6 lg:px-[275px] max-w-7xl mx-auto">
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 text-sm mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> {t.common.backToHome}
        </button>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
          {t.poolCommissions.title}
        </h1>
        <p className="text-slate-400 text-sm">{t.poolCommissions.subtitle}</p>
      </div>

      <div className="space-y-4">
        {/* Blockchain Commission */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{t.poolCommissions.blockchainCommission}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.poolCommissions.blockchainDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Pool Rewards */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{t.poolCommissions.poolRewards}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {t.poolCommissions.rewardsDescription}
              </p>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                <p className="text-xs text-slate-400">
                  <span className="text-cyan-400 font-medium">{t.poolCommissions.autoCredit}:</span> {t.poolCommissions.autoCreditDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pool Withdrawal Fee */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{t.poolCommissions.withdrawalFee}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {t.poolCommissions.withdrawalDescription}
              </p>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                <p className="text-xs text-slate-400 mb-2">
                  <span className="text-cyan-400 font-medium">{t.poolCommissions.feeDistribution}:</span> {t.poolCommissions.feeDistributionDescription}
                </p>
                <p className="text-xs text-slate-400">
                  <span className="text-cyan-400 font-medium">{t.poolCommissions.formula}:</span>{" "}
                  <span className="italic text-slate-500">
                    {t.poolCommissions.formulaDetail}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
            <div className="text-xs text-cyan-400 mb-1 font-medium">{t.poolCommissions.gasRequired}</div>
            <div className="text-2xl font-bold text-white">0.25 TON</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="text-xs text-green-400 mb-1 font-medium">{t.poolCommissions.rewardType}</div>
            <div className="text-lg font-bold text-white">{t.poolCommissions.autoCredited}</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-4">
            <div className="text-xs text-amber-400 mb-1 font-medium">{t.poolCommissions.withdrawal}</div>
            <div className="text-lg font-bold text-white">{t.poolCommissions.anytime}</div>
            <div className="text-xs text-slate-400 mt-1">{t.poolCommissions.feeIfTradesOpen}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="text-xs text-green-400 mb-1 font-medium">Reward Type</div>
            <div className="text-lg font-bold text-white">Auto-Credited</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-4">
            <div className="text-xs text-amber-400 mb-1 font-medium">Withdrawal</div>
            <div className="text-lg font-bold text-white">Anytime*</div>
            <div className="text-xs text-slate-400 mt-1">*Fee if trades are open</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoolCommissions