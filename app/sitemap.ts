import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ton4u.app'

  // Список всех твоих путей из папки app
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
    '/trading-limits',
    '/trading-pairs',
    '/wallet-creation',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}