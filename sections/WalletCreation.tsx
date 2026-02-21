"use client"

import { FC } from "react"
import { ArrowLeft, ChevronRight, Zap, Shield, Wallet, Download, CheckCircle, ExternalLink, Smartphone, Key, Coins } from "lucide-react"
import { Translations } from "@/constants/translations"

interface WalletCreationProps {
  translations: Translations, 
  setCurrentView?: (view: string) => void;
}

const WalletCreation: FC<WalletCreationProps> = ({ translations: t, setCurrentView }) => {
  
  const wallets = [
    {
      name: t.walletCreation.tonkeeper,
      url: "https://tonkeeper.com",
      description: t.walletCreation.tonkeeperDescription,
      icon: "💎",
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: t.walletCreation.wallet,
      url: "https://wallet.tg/ton",
      description: t.walletCreation.tgWalletDescription,
      icon: "📱",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: t.walletCreation.mytonwallet,
      url: "https://mytonwallet.io",
      description: t.walletCreation.mytonwalletDescription,
      icon: "🔷",
      color: "from-cyan-500 to-blue-500"
    },
  ]

  const steps = [
    {
      icon: Download,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      title: t.walletCreation.downloadWallet,
      description: t.walletCreation.walletOptions
    },
    {
      icon: Key,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      title: t.walletCreation.createSecure,
      description: t.walletCreation.saveSeed
    },
    {
      icon: Coins,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      title: t.walletCreation.fundWallet,
      description: t.walletCreation.addTon
    },
    {
      icon: Zap,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      title: t.walletCreation.startTrading,
      description: t.walletCreation.connectAndTrade
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Navigation */}
        <button
          onClick={() => setCurrentView?.("home")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.common.backToHome}
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Wallet className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {t.walletCreation.title}
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-2xl">
            {t.walletCreation.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column - Step by Step Guide */}
          <div className="space-y-6">
            
            {/* Step 1: Choose Wallet */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-1">{t.walletCreation.chooseWallet}</h2>
                  <p className="text-sm text-slate-400">
                    {t.walletCreation.walletDescription}
                  </p>
                </div>
              </div>

              {/* Wallet Options Grid */}
              <div className="grid gap-3 mt-2">
                {wallets.map((wallet, index) => (
                  <a
                    key={index}
                    href={wallet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-slate-950/50 border border-slate-700 rounded-xl p-4 hover:border-cyan-500/50 hover:bg-slate-800/30 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity"></div>
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${wallet.color} bg-opacity-10 flex items-center justify-center text-xl`}>
                          {wallet.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {wallet.name}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">{wallet.description }</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Step 2: Setup & Security */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">{t.walletCreation.recommendedSetup}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t.walletCreation.recommendedDescription}
                  </p>
                  
                  {/* Security Badge */}
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-amber-400 font-medium">{t.walletCreation.securityTip}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Best Choice Highlight */}
            <div className="bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-cyan-400 mb-2">{t.walletCreation.bestChoice}</h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t.walletCreation.walletDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Guide & Quick Stats */}
          <div className="space-y-6">
            
            {/* Quick Setup Guide */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                {t.walletCreation.quickSetupGuide}
              </h2>

              {/* Visual Steps Timeline */}
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {index < steps.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-slate-700 to-transparent" />
                    )}
                    <div className="flex items-start gap-4">
                      <div className={`relative z-10 w-10 h-10 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center flex-shrink-0`}>
                        <step.icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="font-semibold text-white mb-1">{step.title}</p>
                        <p className="text-xs text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors">
                <div className="text-2xl font-bold text-cyan-400 mb-1">3+</div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Wallets</p>
                <p className="text-[10px] text-slate-600 mt-1">Supported</p>
              </div>
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors">
                <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Self-Custody</p>
                <p className="text-[10px] text-slate-600 mt-1">Your Keys</p>
              </div>
              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-colors">
                <div className="text-2xl font-bold text-emerald-400 mb-1">0.1</div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Min TON</p>
                <p className="text-[10px] text-slate-600 mt-1">For Gas</p>
              </div>
            </div>

            {/* Security Note */}
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-400 mb-1">Security First</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.walletCreation.securityAdvice || "Never share your seed phrase. Store it offline and securely. Your wallet = your assets."}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://t.me/ton4u_io_bot?startapp"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 px-6 rounded-xl transition-all text-center"
            >
              {t.walletCreation.startTrading}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletCreation