"use client"
import Link from "next/link"
import { useState, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import GlobeSvg from "@/components/icons/GlobeSvg"
import { useLanguage } from "@/context/LanguageContext"

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<number | null>(null)

  const navigationItems = [
    {
      label: "Specifications",
      submenu: [
        { label: "Trading Commissions", href: "/trading-commissions" },
        { label: "Expiration Periods", href: "/expiration-periods" },
        { label: "Referral Commissions", href: "/referral-commissions" },
        { label: "Pool Commissions", href: "/pool-commissions" },
        { label: "Trading Limits", href: "/trading-limits" },

      ],
    },
    {
      label: "Instructions",
      submenu: [
        { label: "Wallet Creation", href: "/wallet-creation" },
        { label: "Purchase Tokens", href: "/token-purchase" },
        { label: "Log in to the Platform", href: "/login-to-platform" },
        { label: "Open a Trade", href: "/open-trade" },
        { label: "Add to Pool", href: "/add-to-pool" },
      ],
    },
     {
      label: "Trading",
      submenu: [
        { label: "Trading Pairs", href: "/trading-pairs" },
        { label: "Contract explorer", href: "/contract-explorer" },
        { label: "Online Dex Trades", href: "/dex-trades-online" },
        { label: "Tournaments & Leaderboard", href: "/tournaments-leaderboard" },



      ],
    },
  {
      label: "Product & Feedback",
      submenu: [
            // { label: "TON Technology", href: "/ton-technology-usage" },
            // { label: "Smart Contracts", href: "/smart-contracts" },
            { label: "About the Project", href: "/about-project" },
            { label: "Feedback & Support", href: "/feedback-support" },
            // { label: "Security Audits", href: "/security-audits" },
            { label: "Project Roadmap", href: "/project-roadmap" },
      ],
    },
      {
      label: "Referrals",
      submenu: [
        { label: "Referral Codes", href: "/referral-codes" },
        { label: "Referral NFTs", href: "/referral-nfts" },

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
      <nav className="flex items-center px-6 py-6 border-b border-slate-800/50 justify-around lg:px-[100px]">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/ton4u-logo.png" alt="TON4U" className="w-8 h-8 rounded rounded-none" />
          <span className="text-2xl font-bold">TON4U</span>
        </Link>

        <div className="hidden md:flex items-center text-sm gap-8">
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter(item.label)}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button className="flex items-center gap-2">
                {item.label}
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-slate-900 border border-slate-800 rounded shadow-lg z-50">
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.label} href={subItem.href} className="block px-6 py-3 text-slate-400 hover:text-cyan-400" onClick={closeMenus}>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex bg-slate-800/30 border border-slate-700 rounded-lg p-1">
            <button onClick={() => setLanguage("en")} className={`px-3 py-1 text-xs ${language === "en" ? "text-cyan-400" : "text-slate-400"}`}>EN</button>
            <button onClick={() => setLanguage("ru")} className={`px-3 py-1 text-xs ${language === "ru" ? "text-cyan-400" : "text-slate-400"}`}>RU</button>
          </div>

          <button className="md:hidden p-2 hover:bg-slate-800 rounded-lg" onClick={() => setMobileMenuOpen((s) => !s)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 fixed left-0 right-0 top-[73px] h-screen z-40 overflow-y-auto">
          <div className="flex flex-col p-6 gap-4">
            <div className="flex bg-slate-800/30 border border-slate-700 rounded-lg p-1 gap-2 mb-4">
              <button onClick={() => setLanguage("en")} className={`flex-1 px-3 py-1 text-xs ${language === "en" ? "text-cyan-400" : "text-slate-400"}`}>EN</button>
              <button onClick={() => setLanguage("ru")} className={`flex-1 px-3 py-1 text-xs ${language === "ru" ? "text-cyan-400" : "text-slate-400"}`}>RU</button>
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

            <Link href="/wallet-creation" className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 rounded-lg" onClick={closeMenus}>
              <GlobeSvg />
              Start Trading
            </Link>
          </div>
        </div>
      )}
    </>
  )
}