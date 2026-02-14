import Home from "@/sections/Home"
import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = ''

  return {
    title: t.hero.title,
    description: t.hero.subtitle,
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
  return <Home translations={t} />
}
