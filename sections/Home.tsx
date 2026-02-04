"use client"

import { Button } from "@/components/ui/button"
import GlobeSvg from "@/components/icons/GlobeSvg"
import { FC, useEffect, useRef, useState } from "react"

const Home: FC = () => {
  // Simple carousel state (added)
  const slides = [
    {
      title: "Options Trading — Fast & Reliable",
      text: "Trade options on smart contracts with sub-second execution.",
      accent: "from-cyan-400 to-magenta-400",
    },
    {
      title: "Deep Liquidity Pools",
      text: "Competitive spreads and pool rewards for liquidity providers.",
      accent: "from-purple-500 to-cyan-400",
    },
    {
      title: "Seamless Integrations",
      text: "Native TON integration and Telegram trading bots.",
      accent: "from-magenta-400 to-yellow-400",
    },
  ]
  const [active, setActive] = useState<number>(0)
  const autoplayRef = useRef<number | null>(null)
  useEffect(() => {
    // Autoplay every 5s
    autoplayRef.current = window.setInterval(() => {
      setActive((s) => (s + 1) % slides.length)
    }, 5000)
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
    }
  }, [])

  const goTo = (idx: number) => setActive(idx)
  const prev = () => setActive((s) => (s - 1 + slides.length) % slides.length)
  const next = () => setActive((s) => (s + 1) % slides.length)

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-magenta-500/30 bg-magenta-500/10">
              <span className="text-sm text-magenta-300">💎 Live on TON Blockchain</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              The first DEX options on{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">TON blockchain</span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Trade options on smart contracts. Fast. Reliable. No intermediaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-6 text-base flex items-center gap-2 group">
                <GlobeSvg />
                Start trading
              </Button>
              <Button
                className="border border-cyan-500/50 px-8 py-6 text-base flex items-center gap-2 hover:bg-blue-600/20 transition-colors"
                style={{ backgroundColor: "#30A3E6", color: "white" }}
              >
                <img src="/images/telegram-logo.png" alt="Telegram" className="w-5 h-5" />
                Trade on Telegram
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">$50M+</div>
                <p className="text-xs text-slate-400">Trading Volume</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-magenta-400 mb-1">24/7</div>
                <p className="text-xs text-slate-400">Trading</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">{'<0.1s'}</div>
                <p className="text-xs text-slate-400">Execution Time</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-magenta-400 mb-1">99.9%</div>
                <p className="text-xs text-slate-400">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Video */}
          <div className="flex-1 relative h-80 lg:h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-950 to-magenta-900/40 rounded-full blur-3xl"></div>
            <div className="relative w-full h-full flex flex-col justify-center mx-[] items-end">
              <video
                src="/images/t4u-20purple-20nft.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-64 h-64 lg:w-96 lg:h-96 object-contain drop-shadow-2xl rounded-2xl"
              />
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-xs text-slate-500 animate-pulse">Live Market Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section (added) */}
      <section className="px-6 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl border border-slate-800"
            onMouseEnter={() => {
              if (autoplayRef.current) {
                window.clearInterval(autoplayRef.current)
                autoplayRef.current = null
              }
            }}
            onMouseLeave={() => {
              if (!autoplayRef.current) {
                autoplayRef.current = window.setInterval(() => {
                  setActive((s) => (s + 1) % slides.length)
                }, 5000)
              }
            }}
          >
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${active * 100}%)` }}>
              {slides.map((s, i) => (
                <div key={i} className="min-w-full flex items-center gap-6 p-8" aria-hidden={active !== i}>
                  <div className={`flex-1 p-6 rounded-lg bg-gradient-to-r ${s.accent} text-white shadow-lg`}>
                    <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                    <p className="text-sm opacity-90">{s.text}</p>
                  </div>
                  <div className="w-36 h-36 bg-slate-800 rounded-lg flex items-center justify-center text-sm text-slate-400">
                    {i + 1}/{slides.length}
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/80 text-white p-2 rounded-full"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/60 hover:bg-slate-900/80 text-white p-2 rounded-full"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${i === active ? "bg-cyan-400" : "bg-slate-700"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home