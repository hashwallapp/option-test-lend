"use client";

import React, { FC } from "react";
import {
  ArrowLeft,
  Flame,
  Lock,
  Globe,
  Milestone,
  LineChart,
  ShieldCheck,
  Zap,
  Layers,
  Building2,
  Trophy
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Translations } from "@/constants/translations";
import { useTranslations } from "@/hooks/useTranslations";

interface RoadmapTokenomicsProps {
  translations: Translations
}

const RoadmapTokenomics: FC<RoadmapTokenomicsProps> = ({ translations: t }) => {
  const router = useRouter();

   const roadmapTokenomics = t.roadmapTokenomicsDetailed ||  t.roadmapTokenomics


  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="">{t.common.backToHome}</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-2">
              <Milestone className="w-6 h-6 text-cyan-400" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              { roadmapTokenomics.title}
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-2xl">
            { roadmapTokenomics.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Section: DEX Upgrades & Roadmap */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">
                  { roadmapTokenomics.upcomingDexUpgrades}
                </h2>
              </div>
              <p className="text-slate-400 text-sm">
                { roadmapTokenomics.developmentRoadmap}
              </p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="relative pl-6 border-l border-slate-800 pb-6 last:pb-0">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <h4 className="text-white font-bold mb-1 text-lg">{ roadmapTokenomics.q1NearTerm}</h4>
                <p className="text-slate-500 text-sm">
                  { roadmapTokenomics.q1NearTermDescription}
                </p>
                </div>

                <div className="relative pl-6 border-l border-slate-800 pb-6 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <h4 className="text-white font-bold mb-1 text-lg">{ roadmapTokenomics.transparencyIntegration}</h4>
                  <p className="text-slate-500 text-sm">
                    { roadmapTokenomics.transparencyIntegrationDescription}
                  </p>
                </div>

                <div className="relative pl-6 border-l border-slate-800 pb-6 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <h4 className="text-white font-bold mb-1 text-lg">{ roadmapTokenomics.globalScaleExpansion}</h4>
                  <p className="text-slate-500 text-sm">
                    { roadmapTokenomics.globalScaleExpansionDescription}
                  </p>
              </div>
            </div>

            {/* CEX Section */}
            <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-500/10 rounded-lg p-2">
                  <Building2 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg">CEX Listing Pipeline</h3>
              </div>
              <p className="text-slate-500 text-sm mb-3">
                Strategic negotiations are underway for listings on major Centralized Exchanges.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Bybit', 'Gate.io', 'MEXC', 'LBank'].map((cex) => (
                  <span key={cex} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                    {cex}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Tokenomics */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <LineChart className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">
                  Token Development
                </h2>
              </div>
              <p className="text-slate-400 text-sm">
                Sustainable token economics and development strategy.
              </p>
            </div>

            <div className="grid gap-4 mb-6">
              {/* Token Burn */}
              <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-orange-500/40 hover:bg-slate-900/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-500/10 rounded-lg p-2 group-hover:bg-orange-500/20">
                    <Flame className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Deflationary Model</h4>
                </div>
                <p className="text-slate-500 text-sm">
                  <span className="text-white font-semibold">300M tokens burned</span> already. Burning will continue proportionally with trading volume increases.
                </p>
              </div>

              {/* Staking/Locked */}
              <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-cyan-500/10 rounded-lg p-2 group-hover:bg-cyan-500/20">
                    <Lock className="w-5 h-5 text-cyan-500" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Supply Lock</h4>
                </div>
                <p className="text-slate-500 text-sm">
                  <span className="text-white font-semibold">400M tokens</span> are currently blocked for 6 months and will be re-locked to prevent inflation.
                </p>
              </div>

              {/* Liquidity */}
              <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-500/10 rounded-lg p-2 group-hover:bg-blue-500/20">
                    <Layers className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Ecosystem Liquidity</h4>
                </div>
                <p className="text-slate-500 text-sm">
                  Remaining supply is held in <span className="text-white">ston.fi liquidity</span> and securing contract payment pools.
                </p>
              </div>
            </div>

            {/* Buyback Alert */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-start gap-3">
              <div className="bg-emerald-500/20 p-2 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-emerald-400 text-sm font-semibold mb-1">Buyback Mechanism</p>
                <p className="text-slate-300 text-sm">
                  All commissions from side pools are dedicated to <span className="text-white font-bold underline">redeeming the T4U token</span> from the marke 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Vision Footer */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <div className="flex justify-center gap-8 items-center mb-4">
            <Globe className="w-6 h-6 text-slate-600" />
            <Trophy className="w-6 h-6 text-slate-600" />
            <Zap className="w-6 h-6 text-slate-600" />
          </div>
          <p className="text-slate-500 text-xs uppercase tracking-widest">
            TON Blockchain & Multi-Chain Ecosystem
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapTokenomics;