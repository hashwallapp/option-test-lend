"use client"

import StonfiSvg from "@/components/icons/StonfiSvg"
import { useTranslations } from "@/hooks/useTranslations"

export default function Footer() {
  const t = useTranslations()
  return (
    <footer className="border-t border-slate-800/50 px-6 lg:px-12 py-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/ton4u-logo.png" alt="TON4U" className="w-6 h-6 rounded" />
            <span className="font-bold">TON4U</span>
          </div>
          <p className="text-sm text-slate-500 mb-4">{t.hero.footer.tagline}</p>
          <a
            href="https://app.ston.fi/swap?ft=TON&tt=T4U&chartVisible=true&chartInterval=6m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-slate-900/50 transition-all"
            title="Swap on ston.fi"
          >
            <StonfiSvg />
            <span className="text-sm font-medium">Ston.fi</span>
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-4">{t.hero.footer.product}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="/trading" className="hover:text-cyan-400 transition-colors">
                {t.hero.footer.tradingPlatform}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                {t.hero.footer.apiReference}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                {t.hero.footer.pricing}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">{t.hero.footer.resources}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="/open-trade" className="hover:text-magenta-400 transition-colors">
                {t.hero.footer.documentation}
              </a>
            </li>
            <li>
              <a href="https://t.me/ton4you_support" className="hover:text-magenta-400 transition-colors">
                {t.hero.footer.support}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-magenta-400 transition-colors">
                {t.hero.footer.blog}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">{t.hero.footer.community}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="https://x.com/ton4uofficial" className="hover:text-cyan-400 transition-colors">
                {t.hero.footer.twitter}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                {t.hero.footer.discord}
              </a>
            </li>
            <li>
              <a href="https://t.me/option4you" className="hover:text-cyan-400 transition-colors">
                {t.hero.footer.telegram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <p>{t.hero.footer.copyright}</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            {t.hero.footer.privacy}
          </a>
          <a href="#" className="hover:text-magenta-400 transition-colors">
            {t.hero.footer.terms}
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            {t.hero.footer.security}
          </a>
        </div>
      </div>
    </footer>
  )
}
