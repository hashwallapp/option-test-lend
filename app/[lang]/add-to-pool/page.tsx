import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import AddToPool from "@/sections/AddToPool"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.addToPool.title + " | TON4U",
    description: t.addToPool.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <AddToPool translations={t} />
}
