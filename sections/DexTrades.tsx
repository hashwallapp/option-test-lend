"use client";

import React, { FC } from "react";
import { 
  ArrowLeft, 
  Activity, 
  History, 
  Send, 
  BarChart3, 
  ExternalLink, 
  MessageSquare, 
  Smartphone, 
  CheckCircle2 
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Translations } from "@/constants/translations";

interface DexTradesProps {
  translations: Translations
  setCurrentView?: (view: string) => void
}

const DexTrades: FC<DexTradesProps> = ({ translations: t, setCurrentView }) => {
  const router = useRouter();

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
        
        {/* Navigation - точно как в referralNfts */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.common.backToHome}
        </button>

        {/* Header - как в referralNfts */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {t.dexTrades.title}
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-2xl">
            {t.dexTrades.subtitle}
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          
          {/* Left Column: DEX Terminal Info */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <History className="w-5 h-5 text-cyan-400" />
              {t.dexTrades.dexHistoryTab}
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {t.dexTrades.dexHistoryDescription}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                {t.dexTrades.fullTransactionData}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                {t.dexTrades.assetPerformance}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                {t.dexTrades.timestampedRecords}
              </div>
            </div>
          </div>

          {/* Right Column: Notifications */}
          <div className="space-y-4">
            {/* Telegram Card */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-semibold text-white">{t.dexTrades.telegramBroadcasts}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {t.dexTrades.telegramBroadcastsDescription}
              </p>
              <a 
                href="https://t.me/T4ulife" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors bg-blue-400/5 px-3 py-2 rounded-lg border border-blue-400/10"
              >
                {t.dexTrades.joinLiveChannel} <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* App Bot Card */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-semibold text-white">{t.dexTrades.wagemAppBot}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.dexTrades.wagemAppBotDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Live Visual Indicator & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </div>
            <p className="text-xs text-slate-400 uppercase">{t.dexTrades.liveDexSyncActive}</p>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 flex items-center justify-center gap-2 text-slate-500 text-xs uppercase">
            <BarChart3 className="w-3 h-3" />
            {t.dexTrades.chartsPoweredBy}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DexTrades;