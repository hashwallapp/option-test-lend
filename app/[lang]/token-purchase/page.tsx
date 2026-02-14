import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import TokenPurchase from "@/sections/TokenPurchase"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/token-purchase'

  return {
    title: t.tokenPurchase.title + " | TON4U",
    description: t.tokenPurchase.subtitle,
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
  return <TokenPurchase translations={t} setCurrentView={function (view: string): void {
    throw new Error("Function not implemented.")
  } } />
}
