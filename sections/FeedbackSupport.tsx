"use client"

import React, { FC } from 'react' 
import { ArrowLeft, MessageSquare, Mail, Users, ExternalLink, ShieldCheck } from 'lucide-react'
 import { useRouter } from 'next/navigation' 
 import Image from 'next/image'
import { Translations } from "@/constants/translations"

interface FeedbackSupportProps {
  translations: Translations
}

const FeedbackSupport: FC<FeedbackSupportProps> = ({ translations: t }) => { const router = useRouter()

return ( <div className="min-h-screen bg-[#0a0a0f]"> <div className="max-w-6xl mx-auto px-4 py-8"> {/* Navigation */} <button onClick={() => router.back()} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6" > <ArrowLeft className="w-4 h-4" /> 
 {t.common.backToHome} </button>
{/* Header */}
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <MessageSquare className="w-8 h-8 text-cyan-400" />
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          {t.feedbackSupport.title}
        </h1>
      </div>
      <p className="text-slate-400 text-base max-w-2xl">
        {t.feedbackSupport.subtitle}
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      
      {/* Left Column - Team Info & Contact */}
      <div className="space-y-6">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            {t.feedbackSupport.expertiseVision}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {t.feedbackSupport.expertiseDescription}
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            {t.feedbackSupport.cooperation}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            {t.feedbackSupport.cooperationDescription}
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            Cooperation
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            For cooperation on the project, business inquiries, or technical issues, please reach out to our official support service.
          </p>
          
          <a 
            href="[https://t.me/ton4you_support](https://t.me/ton4you_support)" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          >
            <Mail className="w-4 h-4" />
            {t.feedbackSupport.contactSupportViaTelegram}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Column - Mascot Image */}
      <div className="flex justify-center items-center py-8">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-[#0a0a0f] rounded-2xl p-4 border border-slate-800">
            <Image 
              src="/images/sticker.webp" 
              alt="T4U Mascot" 
              width={350} 
              height={350} 
              className="rounded-lg object-contain"
              priority
            />
            <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg shadow-xl">
              <p className="text-xs font-mono text-cyan-400">{t.feedbackSupport.readyToHelp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="mt-12 text-center border-t border-slate-800/50 pt-8">
      <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
        {t.feedbackSupport.builtByProfessionals}
      </p>
    </div>
  </div>
</div>
) }

export default FeedbackSupport