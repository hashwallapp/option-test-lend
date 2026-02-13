import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import ContractExplorer from "@/sections/ContractExplorer"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  return {
    title: t.contractExplorer.title + " | TON4U",
    description: t.contractExplorer.subtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = getTranslations(lang)
  return <ContractExplorer translations={t} />
}
