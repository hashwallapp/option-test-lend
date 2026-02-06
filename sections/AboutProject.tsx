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
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";

const AboutProject: React.FC = () => {
  const t = useTranslations();
  const router = useRouter();

  const earningDirections = [
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: t.aboutProject.earning.trading.title,
      description: t.aboutProject.earning.trading.description,
    },
    {
      icon: <Coins className="w-6 h-6 text-purple-400" />,
      title: t.aboutProject.earning.liquidity.title,
      description: t.aboutProject.earning.liquidity.description,
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: t.aboutProject.earning.growth.title,
      description: t.aboutProject.earning.growth.description,
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: t.aboutProject.earning.referral.title,
      description: t.aboutProject.earning.referral.description,
    },
  ];

  const socialLinks = [
    {
      label: t.aboutProject.social.support,
      handle: "@Ton4you_support",
      url: "https://t.me/ton4you_support",
      icon: <MessageSquare className="w-4 h-4" />,
    },
    {
      label: t.aboutProject.social.onlineDeals,
      handle: "@T4ulife",
      url: "https://t.me/T4ulife",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      label: t.aboutProject.social.dexChat,
      handle: "@T4u_obt",
      url: "https://t.me/T4u_obt",
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: t.aboutProject.social.information,
      handle: "@T4rules",
      url: "https://t.me/T4rules",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
      label: t.aboutProject.social.volumeRecords,
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
          <span className="text-sm">{t.common.backToHome}</span>
        </button>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-2">
              <LayoutDashboard className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {t.aboutProject.productOverview}
            </h1>
          </div>
          <p className="text-slate-400 text-base max-w-3xl">
            {t.aboutProject.subtitle}
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/10 p-2 rounded-lg">
                <Timer className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {t.aboutProject.features.flexibility.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {t.aboutProject.features.flexibility.description}
                </p>
              </div>
            </div>
          </div>
          <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-purple-500/40 hover:bg-slate-900/60 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                  {t.aboutProject.features.transparency.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {t.aboutProject.features.transparency.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Earning Directions */}
        <div className="mb-8">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-cyan-500" />
              <h2 className="text-2xl font-bold text-white">
                {t.aboutProject.earning.title}
              </h2>
            </div>
            <p className="text-slate-400 text-sm">
              {t.aboutProject.earning.earningDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {earningDirections.map((item, idx) => (
              <div 
                key={idx}
                className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300"
              >
                <div className="mb-4 bg-slate-800 rounded-lg p-2 w-fit group-hover:bg-cyan-500/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <LinkIcon className="w-6 h-6 text-cyan-400" />
                 <h2 className="text-2xl font-bold text-white">
                   {t.aboutProject.usefulLinks}
                 </h2>
               </div>
               <p className="text-slate-400 text-sm">
                 {t.aboutProject.communityConnect}
               </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {link.handle}
                      </h3>
                      <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                        {link.label}
                      </p>
                    </div>
                    <div className="bg-slate-800 rounded-full p-2 group-hover:bg-cyan-500/10 transition-colors">
                      {link.icon}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Tip / Badge */}
          <div className="border border-dashed border-slate-800 rounded-2xl p-6 text-center bg-slate-900/20">
            <div className="bg-cyan-500/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">{t.aboutProject.platformLeaderboard}</h3>
            <p className="text-sm text-slate-500">
              {t.aboutProject.leaderboardDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;