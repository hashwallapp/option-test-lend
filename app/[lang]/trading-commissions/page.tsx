import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import TradingCommissions from "@/sections/TradingCommissions"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/trading-commissions'

  return {
    title: t.tradingCommissions.title + " | TON4U",
    description: t.tradingCommissions.note || "Learn about trading commissions on TON4U",
    alternates: {
      canonical: `https://ton4u.app/${lang}${path}`,
      languages: {
        en: `https://ton4u.app/en${path}`,
        ru: `https://ton4u.app/ru${path}`,
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <TradingCommissions translations={t} />
}
