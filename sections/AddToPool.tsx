"use client"

import React from 'react'
import { ArrowLeft, PlusCircle, ShieldCheck, PieChart, Info, LayoutDashboard, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
// Импортируем тип ваших переводов
import { Button } from "@/components/ui/button"

import { Translations } from "@/constants/translations"

// 1. Описываем интерфейс входящих данных
interface AddToPoolProps {
  translations: Translations
}

 const handleTradeValuts = () => {
    window.open("https://trade.ton4u.app/vaults", "_blank")
  }
// 2. Принимаем translations как проп
const AddToPool: React.FC<AddToPoolProps> = ({ translations: t }) => {
  const router = useRouter()
  
  // Больше не используем хук useTranslations(), берем данные из пропсов
  // Это гарантирует, что контент будет в SSR (Server Side Rendering)
  const addToPool = t.addToPoolDetailed || t.addToPool

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
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
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-3">
            {addToPool.title}
          </h1>
          <p className="text-slate-400 text-base max-w-2xl">
            {addToPool.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column - Detailed Steps */}
          <div className="space-y-4">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{addToPool.vaultsSection}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {addToPool.vaultsSectionDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <PlusCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{addToPool.processTitle}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {addToPool.processDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <PieChart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{addToPool.earningsRisk}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {addToPool.earningsRiskDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Summary & CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-cyan-400" />
                {addToPool.providerQuickSummary}
              </h3>

              <div className="space-y-4 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 uppercase mb-1">{addToPool.rewards}</p>
                    <p className="text-white font-medium">{addToPool.feeSharing}</p>
                  </div>
                  <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-500 uppercase mb-1">{addToPool.commission}</p>
                    <p className="text-white font-medium">{addToPool.standardGas}</p>
                  </div>
                </div>

                <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                  <p className="text-sm text-cyan-200/80 leading-relaxed italic">
                    "{addToPool.recommendation}"
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button 
                onClick={handleTradeValuts}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {addToPool.goToVaults}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">{addToPool.role}</p>
            <p className="text-xl font-bold text-white">{addToPool.liquidityProvider}</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-1">{addToPool.security}</p>
            <p className="text-xl font-bold text-white">{addToPool.nonCustodial}</p>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-1">{addToPool.status}</p>
            <p className="text-xl font-bold text-white">{addToPool.openToAll}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToPool