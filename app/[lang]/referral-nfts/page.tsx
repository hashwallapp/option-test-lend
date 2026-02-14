import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import ReferralNFT from "@/sections/ReferralNfts"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/referral-nfts'

  return {
    title: t.referralNfts.title + " | TON4U",
    description: t.referralNfts.subtitle,
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
  return <ReferralNFT translations={t} />
}
