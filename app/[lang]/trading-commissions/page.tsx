import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import TradingCommissions from "@/sections/TradingCommissions"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.tradingCommissions.title + " | TON4U",
    description: t.tradingCommissions.note || "Learn about trading commissions on TON4U",
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <TradingCommissions translations={t} />
}
