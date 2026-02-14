"use client"

import React, { FC } from 'react' 
import { ArrowLeft, Search, Eye, Share2, History, Trophy, ExternalLink, Zap } from 'lucide-react' 
import { useRouter } from 'next/navigation'
import { Translations } from "@/constants/translations"

interface ContractExplorerProps {
  translations: Translations
}

const ContractExplorer: FC<ContractExplorerProps> = ({ translations: t }) => {

  const contractExplorer =  t.contractExplorerDetailed ||  t.contractExplorer


return ( <div className="min-h-screen bg-[#0a0a0f]"> <div className="max-w-6xl mx-auto px-4 py-8"> {/* Navigation */} <button onClick={() => router.back()} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6" > <ArrowLeft className="w-4 h-4" /> 
 { t.common.backToHome} </button>

    {/* Header */}
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <Search className="w-8 h-8 text-cyan-400" />
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          { contractExplorer.title}
        </h1>
      </div>
      <p className="text-slate-400 text-base max-w-2xl">
        { contractExplorer.subtitle}
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid lg:grid-cols-2 gap-6">
      
      {/* Left Column - Transparency Details */}
      <div className="space-y-4">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-cyan-400" />
            { contractExplorer.fullVisibility}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            { contractExplorer.fullVisibilityDescription}
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" />
            { contractExplorer.nftUtilities}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            { contractExplorer.nftUtilitiesDescription}
          </p>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3">
            <p className="text-xs text-purple-300">
              <span className="font-bold">{ contractExplorer.proTip}</span> { contractExplorer.proTipDescription}
            </p>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <History className="w-5 h-5 text-amber-400" />
            { contractExplorer.broadcastHistory}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            { contractExplorer.broadcastHistoryDescription}
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" />
            NFT Utilities
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            View any user&apos;s NFT details: number of referrals, transactions, upgrade levels, and commissions received.
          </p>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3">
            <p className="text-xs text-purple-300">
              <span className="font-bold">Pro Tip:</span> Any user can also upgrade another user&apos;s NFT to support the community.
            </p>
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <History className="w-5 h-5 text-amber-400" />
            Broadcast & History
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            All transactions are broadcast to the Telegram channel. Closed transactions are permanently archived in the DEX History section.
          </p>
        </div>
      </div>

      {/* Right Column - Interaction Card */}
      <div className="space-y-6">
        <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">{ contractExplorer.smartContractExplorer}</h2>
            <p className="text-sm text-slate-400 mb-6">
              { contractExplorer.verifyEveryAction}
            </p>
            
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-slate-950 border border-slate-700 hover:border-cyan-500/50 p-4 rounded-xl flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-mono text-slate-300 group-hover:text-white">{ contractExplorer.viewOnTonviewer}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
              <Trophy className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-white">{ contractExplorer.leaderboardViewer}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  { contractExplorer.leaderboardViewerDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl text-center">
        <p className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-1">{ contractExplorer.contract}</p>
        <p className="text-lg font-bold text-white">{ contractExplorer.verifiedOpen}</p>
      </div>
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl text-center">
        <p className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-1">{ contractExplorer.network}</p>
        <p className="text-lg font-bold text-white">{ contractExplorer.tonBlockchain}</p>
      </div>
      <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl text-center">
        <p className="text-xs text-green-400 font-semibold uppercase tracking-widest mb-1">{ contractExplorer.status}</p>
        <p className="text-lg font-bold text-white">{ contractExplorer.completelyTransparent}</p>
      </div>
    </div>
  </div>
</div>
) }

export default ContractExplorer