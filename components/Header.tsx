"use client"
import Link from "next/link"
import { useState, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import GlobeSvg from "@/components/icons/GlobeSvg"
import { usePathname, useRouter } from "next/navigation"
import { translations } from "@/constants/translations"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const segments = pathname.split('/')
  const language = (segments[1] === 'ru' ? 'ru' : 'en') as 'en' | 'ru'
  
  const t = translations[language] as any

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<number | null>(null)

  //  Функция для смены языка через роутер (SEO-friendly)
const switchLanguage = (newLang: 'en' | 'ru') => {
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

    const segments = pathname.split('/')
    segments[1] = newLang
    
    const newPath = segments.join('/')
    router.push(newPath)
  }
  // префикс языка ко всем внутренним ссылкам
  const l = (href: string) => `/${language}${href}`

  const navigationItems = [
    {
      label: t.nav.specifications,
      submenu: [
        { label: t.nav.tradingCommissions, href: l("/trading-commissions") },
        { label: t.nav.expirationPeriods, href: l("/expiration-periods") },
        { label: t.nav.referralCommissions, href: l("/referral-commissions") },
        { label: t.nav.poolCommissions, href: l("/pool-commissions") },
        { label: t.nav.tradingLimits, href: l("/trading-limits") },
      ],
    },
    {
      label: t.nav.instructions,
      submenu: [
        { label: t.nav.walletCreation, href: l("/wallet-creation") },
        { label: t.nav.purchaseTokens, href: l("/token-purchase") },
        { label: t.nav.loginToPlatform, href: l("/login-to-platform") },
        { label: t.nav.openTrade, href: l("/open-trade") },
        { label: t.nav.addToPool, href: l("/add-to-pool") },
      ],
    },
    {
      label: t.nav.trading,
      submenu: [
        { label: t.nav.tradingPairs, href: l("/trading-pairs") },
        { label: t.nav.contractExplorer, href: l("/contract-explorer") },
        { label: t.nav.onlineDexTrades, href: l("/dex-trades-online") },
        { label: t.nav.tournamentsLeaderboard, href: l("/tournaments-leaderboard") },
      ],
    },
    {
      label: t.nav.productFeedback,
      submenu: [
        { label: t.nav.aboutProject, href: l("/about-project") },
        { label: t.nav.feedbackSupport, href: l("/feedback-support") },
        { label: t.nav.projectRoadmap, href: l("/project-roadmap") },
      ],
    },
    {
      label: t.nav.referrals,
      submenu: [
        { label: t.nav.referralCodes, href: l("/referral-codes") },
        { label: t.nav.referralNfts, href: l("/referral-nfts") },
      ],
    },
  ]

  const handleDropdownMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) window.clearTimeout(dropdownTimeoutRef.current)
    setOpenDropdown(label)
  }

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null)
    }, 300)
  }

  const closeMenus = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 lg:px-12 h-[80px] flex items-center">
          <div className="flex-shrink-0">
            <Link href={l("/")} className="flex items-center gap-3 group -ml-1 md:-ml-14">
              <img src="/images/ton4u-logo.png" alt="TON4U" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
              <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                TON4U
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center ml-10 lg:ml-16">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative w-[175px] lg:w-[165px] flex justify-center items-start"
                onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <button className="flex items-center gap-2 px-2 py-2 text-[13px] lg:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-all rounded-lg hover:bg-slate-800/40">
                  <span className="whitespace-nowrap">{item.label}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 p-2">
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.label} href={subItem.href} className="block px-4 py-2.5 text-[13px] text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg" onClick={closeMenus}>
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center ml-auto">
            <div className="hidden md:flex bg-slate-800/30 border border-slate-700 rounded-lg p-1 mr-4">
              <button 
                onClick={() => switchLanguage("en")} 
                className={`px-3 py-1 text-xs rounded-md ${language === "en" ? "bg-slate-700 text-cyan-400" : "text-slate-400 hover:text-slate-200"}`}
              >
                EN
              </button>
              <button 
                onClick={() => switchLanguage("ru")} 
                className={`px-3 py-1 text-xs rounded-md ${language === "ru" ? "bg-slate-700 text-cyan-400" : "text-slate-400 hover:text-slate-200"}`}
              >
                RU
              </button>
            </div>

            <button className="md:hidden p-2 -mr-2" onClick={() => setMobileMenuOpen((s) => !s)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 fixed left-0 right-0 top-[80px] h-screen z-40 overflow-y-auto">
          <div className="flex flex-col p-6 gap-4">
            <div className="flex bg-slate-800/30 border border-slate-700 rounded-lg p-1 gap-2 mb-4">
              <button onClick={() => switchLanguage("en")} className={`flex-1 px-3 py-1 text-xs ${language === "en" ? "text-cyan-400" : "text-slate-400"}`}>EN</button>
              <button onClick={() => switchLanguage("ru")} className={`flex-1 px-3 py-1 text-xs ${language === "ru" ? "text-cyan-400" : "text-slate-400"}`}>RU</button>
            </div>

            {navigationItems.map((item) => (
              <div key={item.label} className="mb-2">
                <div className="font-medium text-slate-200 px-3 py-2">{item.label}</div>
                <div className="flex flex-col">
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.label} href={subItem.href} className="px-3 py-2 text-slate-400 hover:text-cyan-400" onClick={closeMenus}>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href={l("/wallet-creation")} className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 rounded-lg" onClick={closeMenus}>
              <GlobeSvg />
              {t.common.startTrading}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}