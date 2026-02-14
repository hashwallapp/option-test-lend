import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import TournamentsLeaderboard from "@/sections/TournamentsLeaderboard"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/tournaments-leaderboard'

  return {
    title: t.tournamentsLeaderboard.title + " | TON4U",
    description: t.tournamentsLeaderboard.subtitle,
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
  return <TournamentsLeaderboard translations={t} />
}
