"use client"

import { usePathname } from "next/navigation"
import { translations, Translations } from "@/constants/translations"
import { locales, defaultLocale, Locale } from "@/types/i18n"

/**
 * Refactored hook for translations that determines the current language based on the URL path.
 * Хук для получения переводов на основе текущего URL.
 * Заменяет старую логику через Context API для поддержки SEO-роутинга /[lang]/.
 */
export const useTranslations = (): Translations => {
  const pathname = usePathname()

  // Извлекаем сегмент языка из пути (например, "/ru/about" -> "ru")
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0] as Locale

  // Определяем текущий язык: если сегмент валиден — берем его, иначе — дефолт
  const language: Locale = locales.includes(firstSegment) 
    ? firstSegment 
    : defaultLocale

  // Берем базовый английский (как эталон) и накладываем текущий перевод
  const en = translations.en
  const current = translations[language]

  // Возвращаем объединенный объект, чтобы избежать undefined, если ключи отсутствуют
  return { ...en, ...current } as Translations
}