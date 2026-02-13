import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import AboutProject from "@/sections/AboutProject"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.aboutProject.title + " | TON4U",
    description: t.aboutProject.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <AboutProject translations={t} />
}
