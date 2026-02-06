"use client"
import { useLanguage } from "@/context/LanguageContext"
import { translations, Translations } from "@/constants/translations"

export const useTranslations = (): Translations => {
  const { language } = useLanguage()
  const en = translations.en
  const current = translations[language]
  
  // Cast to 'Translations' to tell TS "Don't worry, the keys are there"
return { ...en, ...current } as Translations

}