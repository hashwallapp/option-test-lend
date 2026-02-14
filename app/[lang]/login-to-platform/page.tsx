import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import LoginToPlatform from "@/sections/LoginToPlatform"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/login-to-platform'

  return {
    title: t.loginToPlatform.title + " | TON4U",
    description: t.loginToPlatform.subtitle,
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
  return <LoginToPlatform translations={t} />
}
