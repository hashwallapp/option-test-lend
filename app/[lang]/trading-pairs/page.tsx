import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import TradingPairs from "@/sections/TradingPairs"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: "Trading Pairs | TON4U",
    description: t.tradingPairs.description,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <TradingPairs translations={t} />
}
