import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

// 1. IMPORT the tracker and the provider
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/context/LanguageContext"
import LanguageTracker from "@/components/LanguageTracker"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// 2. METADATA stays here (Server Side)
export const metadata: Metadata = {
  title: "TON4U - Options Trading on TON Blockchain",
  description:
    "Professional options trading platform on the TON blockchain. Low fees, high liquidity, instant settlement. 24/7 non-custodial trading.",
  openGraph: {
    title: "TON4U - Options Trading on TON",
    description: "Professional options trading with the speed and security of TON",
    type: "website",
  },
  alternates: {
    canonical: "https://trade.ton4u.app",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // NOTE: We do NOT call useLanguage() here anymore. 
  // This file is now a Server Component.
  
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {/* 3. The Tracker lives inside the Provider and updates the <html> tag for us */}
          <LanguageTracker /> 
          
          <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}