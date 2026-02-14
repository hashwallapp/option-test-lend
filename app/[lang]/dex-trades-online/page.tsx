import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import DexTrades from "@/sections/DexTrades"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/dex-trades-online'

  return {
    title: t.dexTrades.title + " | TON4U",
    description: t.dexTrades.subtitle,
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
  return <DexTrades translations={t} />
}
