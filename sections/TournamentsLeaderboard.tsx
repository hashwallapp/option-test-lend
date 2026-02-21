"use client";

import React, { FC } from "react";
import {
    ArrowLeft,
    Timer,
    TrendingUp,
    Target,
    Trophy,
    Medal,
    Gift,
    ChevronRight,
    Users,
    ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Translations } from "@/constants/translations";

interface TournamentsLeaderboardProps {
  translations: Translations
  setCurrentView?: (view: string) => void
}

const TournamentsLeaderboard: FC<TournamentsLeaderboardProps> = ({ translations: t, setCurrentView }) => {
    const router = useRouter();
    const tournamentsLeaderboard = t.tournamentsLeaderboardDetailed || t.tournamentsLeaderboard

    const handleBack = () => {
      if (setCurrentView) {
        setCurrentView("home")
      } else {
        router.back()
      }
    }

    const handlOpenLeaderboard = () => {
      window.open("https://trade.ton4u.app/leaders", "_blank")
    }

    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <div className="max-w-6xl mx-auto px-4 py-8">
                
                {/* Кнопка Назад - унифицирована с referralNfts */}
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {t.common.backToHome}
                </button>

                {/* Заголовок */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Trophy className="w-8 h-8 text-amber-400" />
                        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            {tournamentsLeaderboard.title}
                        </h1>
                    </div>
                    <p className="text-slate-400 text-base max-w-2xl">
                        {tournamentsLeaderboard.subtitle}
                    </p>
                </div>

                {/* Блок категорий в ряд (Grid 3 колонки) */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Категория 1 */}
                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                        <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center mb-4 border border-slate-800">
                            <Timer className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="text-white font-semibold text-base mb-2">{tournamentsLeaderboard.timeFrames}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{tournamentsLeaderboard.timeFramesDescription}</p>
                    </div>

                    {/* Категория 2 */}
                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                        <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center mb-4 border border-slate-800">
                            <Target className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-white font-semibold text-base mb-2">{tournamentsLeaderboard.tokenSpecific}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{tournamentsLeaderboard.tokenSpecificDescription}</p>
                    </div>

                    {/* Категория 3 */}
                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                        <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center mb-4 border border-slate-800">
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h3 className="text-white font-semibold text-base mb-2">{tournamentsLeaderboard.realTimePnl}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{tournamentsLeaderboard.realTimePnlDescription}</p>
                    </div>
                </div>

                {/* Секция наград и ссылок (Grid 3+2 колонки) */}
                <div className="grid lg:grid-cols-5 gap-6">
                    {/* Основной блок наград */}
                    <section className="lg:col-span-3 bg-slate-900/40 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Gift className="w-5 h-5 text-amber-400" /> 
                            Rewards & Drops
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-950/50 border border-slate-800 rounded-xl">
                                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center font-bold text-amber-400 text-sm border border-slate-800">1</div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Winner Drops</p>
                                    <p className="text-sm text-slate-400">Distributed automatically via smart contract</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-950/50 border border-slate-800 rounded-xl">
                                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center font-bold text-slate-400 text-sm border border-slate-800">2</div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Tournament Prizes</p>
                                    <p className="text-sm text-slate-400">Published in our official Telegram community</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Боковая панель: Терминал и Соцсети */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                            <h4 className="text-base font-semibold text-white mb-2">{tournamentsLeaderboard.leadersTab}</h4>
                            <p className="text-sm text-slate-400 mb-6">{tournamentsLeaderboard.accessFullRankings}</p>
                            <button 
                                onClick={handlOpenLeaderboard}
                                className="flex items-center justify-between w-full p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 font-semibold text-sm hover:bg-cyan-500/20 transition-all"
                            >
                                {tournamentsLeaderboard.openTerminal}
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                        
                        <a 
                            href="https://t.me/t4ulife" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 bg-slate-900/40 border border-slate-800 rounded-2xl group hover:border-cyan-500/50 transition-all"
                        >
                           <div>
                                <p className="text-sm font-semibold text-white">Official Group</p>
                                <p className="text-sm text-slate-400">Tournament announcements</p>
                           </div>
                           <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentsLeaderboard;