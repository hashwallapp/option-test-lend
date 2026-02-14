import { translations, Translations } from "@/constants/translations"
import { Locale, defaultLocale, isValidLocale } from "@/types/i18n"

export function getTranslations(lang: string): Translations {
  const targetLang: Locale = isValidLocale(lang) ? lang : defaultLocale
  return {
    ...translations.en,
    ...translations[targetLang]
  } as Translations
}
