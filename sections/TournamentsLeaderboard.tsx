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
            icon: <Timer className="w-5 h-5 text-cyan-400" />, 
        },
        { 
            title: "Token Specific", 
            desc: "Separate leaderboards for each support token with unique statistics.", 
            icon: <Target className="w-5 h-5 text-purple-400" />, 
        },
        { 
            title: "Real-time PnL", 
            desc: "User results are updated online instantly based on transaction performance.", 
            icon: <TrendingUp className="w-5 h-5 text-emerald-400" />, 
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
        <div className="min-h-screen bg-[#0a0a0f] text-slate-300">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Navigation */}
                <button
                    onClick={() => router.back()}
                    className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all mb-10"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </button>

                {/* Header Section */}
                <div className="relative mb-16">
                    <div className="absolute -top-10 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]" />
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                            <Trophy className="w-10 h-10 text-amber-400" />
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-500 bg-clip-text text-transparent tracking-tight">
                            Tournaments & Leadeboard
                        </h1>
                    </div>
                    <p className="text-slate-400 text-base max-w-2xl">
                        Compete with the best traders in the TON ecosystem. Track your PnL, climb the ranks, and secure your place in history.
                    </p>
                </div>

                {/* Main Info Grid */}
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/60 transition-all">
                            <div className="mb-4">{cat.icon}</div>
                            <h3 className="text-white font-bold text-lg mb-2">{cat.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Prize Section */}
                <div className="grid lg:grid-cols-5 gap-8 items-stretch">
                    <div className="lg:col-span-3 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Medal className="w-32 h-32 text-amber-400" />
                        </div>
                        
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Gift className="w-6 h-6 text-amber-400" />
                            Rewards & Drops
                        </h2>
                        <p className="text-slate-400 text-sm mb-8">
                            Achieving prize places in our tournaments unlocks exclusive rewards. From token airdrops to unique physical prizes, the stakes are always high.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center font-bold text-amber-400 text-sm">1</div>
                                <div>
                                    <p className="text-sm font-bold text-white">Winner Drops</p>
                                    <p className="text-xs text-slate-500">Distributed automatically via smart contract</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-slate-400/10 flex items-center justify-center font-bold text-slate-400 text-sm">2</div>
                                <div>
                                    <p className="text-sm font-bold text-white">Tournament Prizes</p>
                                    <p className="text-xs text-slate-500">Published in our official Telegram community</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex-1 flex flex-col justify-center">
                            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">Terminal Section</p>
                            <h4 className="text-lg font-bold text-white mb-4">"Leaders" Tab</h4>
                            <p className="text-sm text-slate-400 mb-6">Access the full rankings directly within the trading terminal interface.</p>
                            <button className="flex items-center justify-between w-full p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyan-400 font-bold text-sm hover:bg-cyan-500/20 transition-all">
                                Open Terminal
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        <a 
                            href="https://t.me/t4ulife" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 group hover:border-cyan-500/40 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <Users className="w-5 h-5 text-cyan-400" />
                                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400" />
                            </div>
                            <p className="text-sm font-bold text-white">Official Group</p>
                            <p className="text-xs text-slate-500">Stay tuned for tournament announcements</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentsLeaderboard;