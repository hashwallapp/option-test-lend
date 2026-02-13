import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import OpenTradeView from "@/sections/OpenTradeView"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.openTradeView.title + " | TON4U",
    description: t.openTradeView.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <OpenTradeView translations={t} />
}
