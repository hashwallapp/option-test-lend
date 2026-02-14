import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './types/i18n'

const localeCookieName = 'preferred-locale'

function getLocaleFromHeaders(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  
  if (acceptLanguage) {
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase())
    
    if (preferredLanguages.some(lang => lang.startsWith('ru'))) {
      return 'ru'
    }
  }
  
  return defaultLocale
}

function getLocaleFromCookie(request: NextRequest): string | null {
  const cookie = request.cookies.get(localeCookieName)
  if (cookie && locales.includes(cookie.value as typeof locales[number])) {
    return cookie.value
  }
  return null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if ( pathnameHasLocale) {
    return NextResponse.next()
  }

  let locale = getLocaleFromCookie(request)
  
  if (!locale) {
    locale = getLocaleFromHeaders(request)
  }

  const response = NextResponse.redirect(
    new URL(
      `/${locale}${pathname === '/' ? '' : pathname}`,
      request.url
    )
  )

  if (!getLocaleFromCookie(request)) {
    response.cookies.set(localeCookieName, locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false,
    })
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)'
  ],
}
