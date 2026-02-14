"use client"

import React, { FC } from 'react'
import { ArrowLeft, Users, CreditCard, TrendingUp, Copy, Shield, Check, ExternalLink, ShieldCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Translations } from "@/constants/translations"
import ReferralNFT from './ReferralNfts'

interface ReferralCodeProps {
  translations: Translations
}

const ReferralCode: FC<ReferralCodeProps> = ({ translations: t }) => {
const router = useRouter();

const referralCodeData = t.referralCodeDetailed ||  t.referralCode

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
        <Users className="w-8 h-8 text-cyan-400" />
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          {referralCodeData.title}
        </h1>
      </div>
      <p className="text-slate-400 text-base max-w-2xl">
        {referralCodeData.subtitle}
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid lg:grid-cols-2 gap-8">
      
      {/* Left Column - Core Rules */}
      <div className="space-y-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            {referralCodeData.accessingPlatform}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {referralCodeData.accessingPlatformDescription}
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-purple-400" />
            {referralCodeData.earningAsReferrer}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {referralCodeData.earningAsReferrerDescription}
          </p>
        </div>

        <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            {referralCodeData.nftUtilitiesTitle}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {referralCodeData.nftUtilitiesDescription}
          </p>
        </div>
      </div>

      {/* Right Column - Visual Guide Card */}
      <div className="space-y-6">
        <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-6">{referralCodeData.howItWorks}</h2>
            
            {/* Visual Step List */}
            <div className="space-y-6 relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-800"></div>
              
              <div className="flex items-center gap-4 relative">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-cyan-400 z-10">1</div>
                <div>
                  <p className="text-sm font-medium text-white">Enter Peer Code</p>
                  <p className="text-xs text-slate-500">Required to unlock trading features</p>
                </div>
              </div>

              <div className="flex items-center gap-4 relative">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-purple-400 z-10">2</div>
                <div>
                  <p className="text-sm font-medium text-white">Acquire NFT</p>
                  <p className="text-xs text-slate-500">Mints your unique on-chain ID</p>
                </div>
              </div>

              <div className="flex items-center gap-4 relative">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-cyan-400 z-10">3</div>
                <div>
                  <p className="text-sm font-medium text-white">Share & Earn</p>
                  <p className="text-xs text-slate-500">Copy code from Referrals section</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button 
              onClick={() => router.push('/referral-codes')}
              className="w-full bg-slate-950 border border-slate-700 hover:border-cyan-500/50 py-3 rounded-xl flex items-center justify-center gap-2 transition-all group"
            >
              <Copy className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              <span className="text-sm text-slate-300 group-hover:text-white">Visit Referrals Section</span>
            </button>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{referralCodeData.incomeSource}</p>
          <p className="text-lg font-bold text-white">{referralCodeData.referralTransactions}</p>
        </div>
        <TrendingUp className="w-8 h-8 text-cyan-500/20" />
      </div>
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{referralCodeData.requirement}</p>
          <p className="text-lg font-bold text-white">{referralCodeData.nftMembership}</p>
        </div>
        <CreditCard className="w-8 h-8 text-purple-500/20" />
      </div>
    </div>
  </div>
</div>


)
}

export default ReferralCode
