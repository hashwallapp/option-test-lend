import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import ReferralCode from "@/sections/ReferralCode"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.referralCode.title + " | TON4U",
    description: t.referralCode.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <ReferralCode translations={t} />
}
