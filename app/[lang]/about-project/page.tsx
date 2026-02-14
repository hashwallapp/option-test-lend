import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import AboutProject from "@/sections/AboutProject"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const baseUrl = 'https://ton4u.app'
  
  return {
    title: t.aboutProject.title + " | TON4U",
    description: t.aboutProject.subtitle,
    alternates: {
      canonical: `${baseUrl}/${lang}/about-project`, // Теперь страница уникальна для бота
      languages: {
        en: `${baseUrl}/en/about-project`,
        ru: `${baseUrl}/ru/about-project`,
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <AboutProject translations={t} />
}
