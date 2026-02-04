"use client";

import React from "react";
import {
    ArrowLeft,
    BarChart3,
    Coins,
    TrendingUp,
    Users,
    ExternalLink,
    LayoutDashboard,
    Timer,
    ShieldCheck,
    Link as LinkIcon,
    MessageSquare,
    Zap,
    History,
    ChevronRight,
    Gift,
    Medal,
    Trophy,
    Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TournamentsLeaderboard: React.FC = () => {
    const router = useRouter();

    const categories = [
        { 
            title: "Time Frames", 
            desc: "Rankings filtered by Week, All Time, and specific Tournament durations.", 
            icon: <Timer className="w-4 h-4 text-cyan-400" />, 
        },
        { 
            title: "Token Specific", 
            desc: "Separate leaderboards for each support token with unique statistics.", 
            icon: <Target className="w-4 h-4 text-purple-400" />, 
        },
        { 
            title: "Real-time PnL", 
            desc: "User results are updated online instantly based on transaction performance.", 
            icon: <TrendingUp className="w-4 h-4 text-emerald-400" />, 
        },
    ];

    const socialLinks = [
        {
            label: "Support",
            handle: "@Ton4you_support",
            url: "https://t.me/ton4you_support",
            icon: <MessageSquare className="w-4 h-4" />,
        },
        {
            label: "Online Deals",
            handle: "@T4ulife",
            url: "https://t.me/T4ulife",
            icon: <Zap className="w-4 h-4" />,
        },
        {
            label: "DEX Chat",
            handle: "@T4u_obt",
            url: "https://t.me/T4u_obt",
            icon: <Users className="w-4 h-4" />,
        },
        {
            label: "Information",
            handle: "@T4rules",
            url: "https://t.me/T4rules",
            icon: <ShieldCheck className="w-4 h-4" />,
        },
        {
            label: "Volume Records",
            handle: "@Max_order_t4u",
            url: "https://t.me/Max_order_t4u",
            icon: <History className="w-4 h-4" />,
        },
    ];

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

                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-2">
                            <Trophy className="w-6 h-6 text-amber-400" />
                        </div>
                        <h1 className="text-2xl lg:text-3xl font-bold text-white">
                            Tournaments & Leaders
                        </h1>
                    </div>
                    <p className="text-slate-400 text-sm max-w-2xl">
                        Compete with the best traders in the TON ecosystem. Track your PnL, climb the ranks, and secure your place in history.
                    </p>
                </div>

                {/* Main Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {categories.map((cat, idx) => (
                        <div 
                            key={idx} 
                            className="group bg-slate-900/40 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300"
                        >
                            <div className="mb-3 bg-slate-800 rounded-lg p-2 w-fit group-hover:bg-cyan-500/10 transition-colors">
                                {cat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                                {cat.title}
                            </h3>
                            <p className="text-slate-500 text-xs">
                                {cat.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Prize Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    <div className="lg:col-span-2 group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-amber-500/40 hover:bg-slate-900/60 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-amber-500/10 rounded-lg p-2">
                                <Gift className="w-5 h-5 text-amber-400" />
                            </div>
                            <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                                Rewards & Drops
                            </h2>
                        </div>
                        <p className="text-slate-500 text-sm mb-6">
                            Achieving prize places in our tournaments unlocks exclusive rewards. From token airdrops to unique physical prizes, the stakes are always high.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-slate-800/40 border border-slate-700/50 rounded-lg">
                                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-xs font-bold text-amber-400">
                                    1
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Winner Drops</p>
                                    <p className="text-xs text-slate-500">Distributed automatically via smart contract</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-slate-800/40 border border-slate-700/50 rounded-lg">
                                <div className="w-8 h-8 rounded-full bg-slate-400/10 flex items-center justify-center text-xs font-bold text-slate-400">
                                    2
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Tournament Prizes</p>
                                    <p className="text-xs text-slate-500">Published in our official Telegram community</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300">
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Terminal Section</p>
                            <h4 className="text-lg font-bold text-white mb-3">"Leaders" Tab</h4>
                            <p className="text-slate-500 text-xs mb-4">Access the full rankings directly within the trading terminal interface.</p>
                            <button className="flex items-center justify-between w-full p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 font-bold text-xs hover:bg-cyan-500/20 transition-all">
                                Open Terminal
                                <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>

                        <a 
                            href="https://t.me/t4ulife" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group bg-slate-900/40 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <div className="bg-slate-800 rounded-lg p-2 group-hover:bg-cyan-500/10 transition-colors">
                                    <Users className="w-4 h-4 text-slate-600 group-hover:text-cyan-400" />
                                </div>
                                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                                @T4ulife
                            </h3>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                                Official Group
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentsLeaderboard;