"use client"

import React, { FC } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Translations } from "@/constants/translations"

interface LoginToPlatformProps {
  translations: Translations
  setCurrentView?: (view: string) => void
}

const LoginToPlatform: FC<LoginToPlatformProps> = ({ translations: t, setCurrentView }) => {
    const router = useRouter()
    const loginData = t.loginToPlatformDetailed

    const handleBack = () => {
        if (setCurrentView) {
            setCurrentView("home")
        } else {
            router.back()
        }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-slate-300">
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
                    <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">
                        {loginData.title}
                    </h1>
                    <p className="text-slate-400 text-base max-w-2xl">{loginData.subtitle}</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Left Column - Steps */}
                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                        <h2 className="text-lg font-bold mb-6 text-cyan-400">
                            {loginData.stepsToBeginTrading}
                        </h2>

                        <div className="space-y-5">
                            {/* Step 1 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xs">
                                    1
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed pt-0.5">
                                    {loginData.step1Description}
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xs">
                                    2
                                </div>
                                <div className="text-sm text-slate-300 leading-relaxed pt-0.5">
                                    {loginData.step2Description}
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xs">
                                    3
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed pt-0.5">
                                    {loginData.step3Description}{" "}
                                    <a
                                        href="https://app.ston.fi/swap?ft=TON&tt=T4U"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                                    >
                                        ston.fi
                                    </a>
                                </p>
                            </div>

                            {/* Step 4 - Referral */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 font-bold text-xs">
                                    4
                                </div>
                                <div className="text-sm text-slate-300 leading-relaxed pt-0.5">
                                    {loginData.step4Description}
                                    <div className="mt-2 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 inline-flex items-center gap-2">
                                        <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">{loginData.defaultCode}:</span>
                                        <span className="text-cyan-400 font-mono font-semibold text-xs">{loginData.defaultCodeValue}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 - Sync Warning */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 font-bold text-xs">
                                    5
                                </div>
                                <div className="text-sm text-slate-300 leading-relaxed pt-0.5">
                                    <span className="text-amber-400 font-bold">{loginData.step5DescriptionImportant}</span> {loginData.step5Description}
                                </div>
                            </div>

                            {/* Step 6 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-7 h-7 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 font-bold text-xs">
                                    6
                                </div>
                                <p className="text-sm font-bold text-emerald-400 pt-0.5">
                                    {loginData.step6Description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Links & Video */}
                    <div className="space-y-6">
                        {/* Live Trades */}
                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                {loginData.liveTradesBroadcast}
                            </h3>
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                {loginData.liveTradesDescription}
                            </p>
                            <a
                                href="https://t.me/t4ulife"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[#0088cc] hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                            >
                                {loginData.joinT4ulife}
                            </a>
                        </div>

                        {/* YouTube Video */}
                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                {loginData.videoInstruction}
                            </h3>
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                {loginData.videoDescription}
                            </p>
                            <a
                                href="https://youtu.be/GIaP_s0rF98"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-red-600/10 border border-red-600/20 hover:bg-red-600/20 text-red-500 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                            >
                                {loginData.watchOnYoutube}
                            </a>
                        </div>

                        {/* Supported Coins */}
                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                            <h3 className="text-white font-bold text-sm mb-4">{loginData.supportedTradingCoins}</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
                                    T4U ({loginData.bestRates})
                                </span>
                                <span className="bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
                                    USDT
                                </span>
                                <span className="bg-slate-800 border border-slate-700 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-bold uppercase">
                                    {loginData.partnerCoins}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
                        <p className="text-xs text-cyan-400 font-semibold uppercase mb-1">{loginData.syncTime}</p>
                        <p className="text-lg font-bold text-white">5-10 min</p>
                    </div>
                    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
                        <p className="text-xs text-purple-400 font-semibold uppercase mb-1">{loginData.defaultReferral}</p>
                        <p className="text-lg font-bold text-white font-mono">{loginData.defaultCodeValue}</p>
                    </div>
                    <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl flex items-center justify-center text-cyan-400 font-bold text-sm">
                        {loginData.bestTrading}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginToPlatform