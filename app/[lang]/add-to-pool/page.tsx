import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import AddToPool from "@/sections/AddToPool"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/add-to-pool'

  return {
    title: `${t.addToPool.title} | TON4U`,
    description: t.addToPool.subtitle,
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
  
  // Передаем данные в клиентский компонент
  return <AddToPool translations={t} />
}