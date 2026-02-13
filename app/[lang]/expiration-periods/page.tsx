import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import ExpirationPeriods from "@/sections/ExpirationPeriods"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.expirationPeriods.title + " | TON4U",
    description: t.expirationPeriods.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <ExpirationPeriods translations={t} />
}
