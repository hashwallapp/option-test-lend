import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import ReferralCommissions from "@/sections/ReferralCommissions"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.referralCommissions.title + " | TON4U",
    description: t.referralCommissions.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <ReferralCommissions translations={t} />
}
