export type Locale = 'en' | 'ru'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'ru']

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
