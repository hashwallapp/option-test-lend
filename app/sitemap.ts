import { MetadataRoute } from 'next'
import { locales } from '@/types/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ton4u.app'

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

  const sitemapEntries = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route === '' ? '' : route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route === '' ? '' : route}`,
          ru: `${baseUrl}/ru${route === '' ? '' : route}`,
        },
      },
    }))
  )

  return sitemapEntries
}
