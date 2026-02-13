import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { locales, defaultLocale, isValidLocale } from "@/types/i18n"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

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
    canonical: "https://ton4u.app",
    languages: {
      en: "https://ton4u.app/en",
      ru: "https://ton4u.app/ru",
    },
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

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  const resolvedLang = isValidLocale(lang) ? lang : defaultLocale

  return (
    <html lang={resolvedLang} className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
