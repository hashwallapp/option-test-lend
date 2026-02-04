"use client";

import React from "react";
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

const DexTrades: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-2">
              <Activity className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              DEX Traders Online
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-2xl">
            Real-time transparency for every move. Monitor the pulse of the exchange with full on-chain visibility and instant notifications.
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Left: DEX Terminal Info */}
          <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-500/10 rounded-lg p-2">
                <History className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                DEX History Tab
              </h2>
            </div>
            <p className="text-slate-500 text-sm mb-4">
              The dedicated DEX section in the trading terminal provides a comprehensive ledger of market activity. 
              It displays <span className="text-white font-medium">all closed transactions</span> from every user on the platform.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                Full transaction data (entry/exit prices)
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                Asset performance and PnL metrics
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                Timestamped records for every trade
              </div>
            </div>
          </div>

          {/* Right: Notifications Ecosystem */}
          <div className="flex flex-col gap-4">
            {/* TG Notifications */}
            <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500/10 rounded-lg p-2 group-hover:bg-blue-500/20">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Telegram Broadcasts
                </h3>
              </div>
              <p className="text-slate-500 text-sm mb-3">
                Receive instant alerts for both <span className="text-white font-medium">opening and closing</span> transactions. 
                Each alert includes a detailed price chart for visual asset analysis.
              </p>
              <a 
                href="https://t.me/T4ulife" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                JOIN THE LIVE CHANNEL <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* App Bot */}
            <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-500/10 rounded-lg p-2 group-hover:bg-purple-500/20">
                  <Smartphone className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                  Wagem App Bot
                </h3>
              </div>
              <p className="text-slate-500 text-sm">
                All transaction notifications are mirrored in the <span className="text-purple-400 font-medium font-mono">Wagem App Bot</span>, 
                ensuring you never miss a market move, regardless of where you are.
              </p>
            </div>
          </div>
        </div>

        {/* Live Visual Indicator */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </div>
            <p className="text-sm font-bold text-white uppercase tracking-widest">
              Live DEX Sync Active
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <BarChart3 className="w-3 h-3" />
            Charts powered by TradingView API
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexTrades;