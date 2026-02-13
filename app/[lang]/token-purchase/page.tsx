import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import TokenPurchase from "@/sections/TokenPurchase"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.tokenPurchase.title + " | TON4U",
    description: t.tokenPurchase.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <TokenPurchase translations={t} />
}
