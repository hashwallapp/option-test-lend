import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TON4U - Options Trading on TON Blockchain",
  description:
    "Professional options trading platform on the TON blockchain. Low fees, high liquidity, instant settlement. 24/7 non-custodial trading.",
  openGraph: {
    title: "TON4U - Options Trading on TON",
    description: "Professional options trading with the speed and security of TON",
    type: "website",
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

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/context/LanguageContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
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
