import { getTranslations } from "@/lib/get-translations"
import { Metadata } from "next"
import FeedbackSupport from "@/sections/FeedbackSupport"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslations(lang)
  const path = '/feedback-support'

  return {
    title: t.feedbackSupport.title + " | TON4U",
    description: t.feedbackSupport.subtitle,
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
  return <FeedbackSupport translations={t} />
}
