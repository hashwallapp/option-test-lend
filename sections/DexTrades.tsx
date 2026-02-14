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
}

const DexTrades: FC<DexTradesProps> = ({ translations: t }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Navigation */}
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all mb-10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">{t.common.backToHome}</span>
        </button>

        {/* Header */}
        <div className="relative mb-16">
          <div className="absolute -top-10 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
              <Activity className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent tracking-tight">
              {t.dexTrades.title}
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            {t.dexTrades.subtitle}
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left: DEX Terminal Info */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/20 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <History className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">{t.dexTrades.dexHistoryTab}</h2>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t.dexTrades.dexHistoryDescription}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                {t.dexTrades.fullTransactionData}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                {t.dexTrades.assetPerformance}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                {t.dexTrades.timestampedRecords}
              </div>
            </div>
          </div>

          {/* Right: Notifications Ecosystem */}
          <div className="flex flex-col gap-6">
            {/* TG Notifications */}
            <div className="bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden group">
              <Send className="absolute -bottom-2 -right-2 w-24 h-24 text-blue-500/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">{t.dexTrades.telegramBroadcasts}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 relative z-10">
                {t.dexTrades.telegramBroadcastsDescription}
              </p>
              <a 
                href="https://t.me/T4ulife" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                {t.dexTrades.joinLiveChannel} <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* App Bot */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 group">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white">{t.dexTrades.wagemAppBot}</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.dexTrades.wagemAppBotDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Live Visual Indicator */}
        <div className="bg-slate-900/20 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </div>
            <p className="text-sm font-bold text-white tracking-widest uppercase">{t.dexTrades.liveDexSyncActive}</p>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs italic">
            <BarChart3 className="w-4 h-4" />
            {t.dexTrades.chartsPoweredBy}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexTrades;