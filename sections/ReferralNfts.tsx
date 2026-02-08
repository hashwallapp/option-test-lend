"use client"

import React from 'react'
import { ArrowLeft, Rocket, Layers, Gem, ShoppingBag, Zap, RefreshCw, Database } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTranslations } from "@/hooks/useTranslations"

const ReferralNFT = () => {
const router = useRouter()
const t = useTranslations()

const referralNfts = t.referralNftsDetailed ||  t.referralNfts

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
      <div className="flex items-center gap-3 mb-2">
        <Gem className="w-8 h-8 text-cyan-400" />
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            { referralNfts.title}
          </h1>
        </div>
        <p className="text-slate-400 text-base max-w-2xl">
          { referralNfts.subtitle}
        </p>
    </div>

    {/* NFT Levels & Pumping Section */}
    <div className="grid lg:grid-cols-2 gap-8 mb-8">
      <div className="space-y-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            { referralNfts.fourLevelsOfProgression}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            { referralNfts.fourLevelsDescription}
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-purple-400" />
            { referralNfts.cashbackAdvantage}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            { referralNfts.cashbackAdvantageDescription}
          </p>
        </div>

        <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            { referralNfts.withdrawalIncome}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            { referralNfts.withdrawalIncomeDescription}
          </p>
        </div>
      </div>

      {/* Minting & Transparency Card */}
      <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-white mb-6">{ referralNfts.mintYourNft}</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-slate-950/50 border border-slate-800 rounded-xl">
              <span className="text-slate-400">{ referralNfts.mintCost}</span>
              <span className="text-white font-bold">1 USDT Eq.</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-slate-950/50 border border-slate-800 rounded-xl">
              <span className="text-slate-400">{ referralNfts.gasFee}</span>
              <span className="text-white font-bold">0.1 TON</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-slate-500 mt-1" />
              <p className="text-xs text-slate-400 leading-relaxed">
                { referralNfts.nftBlockchainDescription}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShoppingBag className="w-5 h-5 text-slate-500 mt-1" />
              <p className="text-xs text-slate-400 leading-relaxed">
                { referralNfts.tradeYourProgress}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
            <Rocket className="w-4 h-4" />
            { referralNfts.mintNftNow}
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Feature Highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
        <p className="text-xs text-cyan-400 font-semibold uppercase mb-1">{ referralNfts.secondaryMarket}</p>
        <p className="text-lg font-bold text-white">{ referralNfts.getgemsCompatible}</p>
      </div>
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
        <p className="text-xs text-purple-400 font-semibold uppercase mb-1">{ referralNfts.ownership}</p>
        <p className="text-lg font-bold text-white">{ referralNfts.unlimitedNfts}</p>
      </div>
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl text-cyan-400 font-bold flex items-center justify-center">
        { referralNfts.onChainLogic}
      </div>
    </div>
  </div>
</div>


)
}

export default ReferralNFT