import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import LoginToPlatform from "@/sections/LoginToPlatform"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.loginToPlatform.title + " | TON4U",
    description: t.loginToPlatform.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <LoginToPlatform translations={t} />
}
