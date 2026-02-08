"use client"

import { Button } from "@/components/ui/button"
import GlobeSvg from "@/components/icons/GlobeSvg"
import { FC, useEffect, useRef, useState } from "react"
import { useTranslations } from "@/hooks/useTranslations"
import { useLanguage } from "@/context/LanguageContext"

const Home: FC = () => {
  const t = useTranslations()
  const { language } = useLanguage()
  
  const [active, setActive] = useState<number>(0)
  const autoplayRef = useRef<number | null>(null)

  const slides = [
    { title: t.hero.carousel.optionsTitle, text: t.hero.carousel.optionsText, accent: "from-cyan-400 to-magenta-400" },
    { title: t.hero.carousel.liquidityTitle, text: t.hero.carousel.liquidityText, accent: "from-purple-500 to-cyan-400" },
    { title: t.hero.carousel.integrationsTitle, text: t.hero.carousel.integrationsText, accent: "from-magenta-400 to-yellow-400" },
  ]

  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      setActive((s) => (s + 1) % slides.length)
    }, 5000)
    return () => { if (autoplayRef.current) window.clearInterval(autoplayRef.current) }
  }, [slides.length])

  const prev = () => setActive((s) => (s - 1 + slides.length) % slides.length)
  const next = () => setActive((s) => (s + 1) % slides.length)

  const renderTitle = () => {
    if (language === 'en') {
      return (
        <>
          {/* На мобилках: The first DEX (ряд 1), options (ряд 2) */}
          The first DEX <br className="sm:hidden" />
          options
          {/* На десктопе перенос перед "on" для двух строк */}
          <br className="hidden xl:block" />
          <span className="text-white">
            <span className="xl:hidden">&nbsp;</span>
            on{' '}
            <span className="whitespace-nowrap bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
              {t.hero.blockchain}
            </span>
          </span>
        </>
      )
    }
    return (
      <>
        {t.hero.title}{' '}
        <span className="whitespace-nowrap bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
          {t.hero.blockchain}
        </span>
      </>
    )
  }

  return (
    <>
      <section className="relative px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-10">
          
          <div className="flex-[2.5] z-10 w-full">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-magenta-500/30 bg-magenta-500/10">
              <span className="text-sm text-magenta-300">{t.hero.liveBadge}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight min-h-[auto] xl:min-h-[2.2em] flex flex-col justify-end">
              <span key={language} className="animate-in fade-in slide-in-from-left-2 duration-500 block">
                {renderTitle()}
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-full lg:max-w-4xl">
              <span key={language} className="animate-in fade-in duration-500 block lg:whitespace-nowrap">
                {t.hero.subtitle}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-6 text-base flex items-center justify-center gap-2 group w-full sm:w-60">
                <GlobeSvg />
                <span className="whitespace-nowrap">{t.common.startTrading}</span>
              </Button>
              <Button
                className="border border-cyan-500/50 px-8 py-6 text-base flex items-center justify-center gap-2 hover:bg-blue-600/20 transition-colors w-full sm:w-64"
                style={{ backgroundColor: "#30A3E6", color: "white" }}
              >
                <img src="/images/telegram-logo.png" alt="Telegram" className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">{t.common.tradeOnTelegram}</span>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {[
                { val: "$50M+", label: t.hero.stats.tradingVolume, col: "text-cyan-400" },
                { val: "24/7", label: t.hero.stats.trading, col: "text-magenta-400" },
                { val: "<0.1s", label: t.hero.stats.executionTime, col: "text-cyan-400" },
                { val: "99.9%", label: t.hero.stats.uptime, col: "text-magenta-400" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className={`text-2xl font-bold ${stat.col} mb-1`}>{stat.val}</div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full h-80 lg:h-96 flex items-center justify-center xl:justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-950 to-magenta-900/40 rounded-full blur-3xl"></div>
            <div className="relative">
              <video src="/images/t4u-20purple-20nft.mp4" autoPlay loop muted playsInline className="w-72 h-72 lg:w-96 lg:h-96 object-contain drop-shadow-2xl rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${active * 100}%)` }}>
              {slides.map((s, i) => (
                <div key={i} className="min-w-full flex flex-col md:flex-row items-center gap-6 p-8">
                  <div className={`flex-1 p-8 rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-lg`}>
                    <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                    <p className="text-base opacity-90 leading-relaxed">{s.text}</p>
                  </div>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-800/80 rounded-full flex items-center justify-center text-lg font-bold text-slate-500 border border-slate-700">
                    {i + 1}/{slides.length}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/50 hover:bg-cyan-500/20 text-white p-3 rounded-full border border-white/10 transition-all">‹</button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/50 hover:bg-cyan-500/20 text-white p-3 rounded-full border border-white/10 transition-all">›</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home