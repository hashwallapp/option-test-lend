import { MetadataRoute } from 'next'
import { locales } from '@/types/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ton4u.app'

  // Список всех путей без префикса языка
  const routes = [
    '',
    '/about-project',
    '/add-to-pool',
    '/contract-explorer',
    '/dex-trades-online',
    '/expiration-periods',
    '/feedback-support',
    '/login-to-platform',
    '/open-trade',
    '/pool-commissions',
    '/project-roadmap',
    '/referral-codes',
    '/referral-nfts',
    '/token-purchase',
    '/tournaments-leaderboard',
    '/trading-commissions',
    '/trading-limits',
    '/trading-pairs',
    '/wallet-creation',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Генерируем записи для каждого языка
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        // Помогаем Google понять связь между версиями страниц
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ru: `${baseUrl}/ru${route}`,
            // 'x-default' указывает, какую версию показать, если язык юзера не en и не ru
            'x-default': `${baseUrl}/en${route}`, 
          },
        },
      })
    })
  })

  return sitemapEntries
}