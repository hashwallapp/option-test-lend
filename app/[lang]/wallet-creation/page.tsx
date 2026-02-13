import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import WalletCreation from "@/sections/WalletCreation"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.walletCreation.title + " | TON4U",
    description: t.walletCreation.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <WalletCreation translations={t} />
}
