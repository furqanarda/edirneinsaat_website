import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// List of supported locales
export const locales = ["en", "tr"]
export const defaultLocale = "tr"

// Get the preferred locale from the request
function getLocale(request: NextRequest) {
  // For root path, always return Turkish
  if (request.nextUrl.pathname === '/') {
    return defaultLocale
  }

  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is for static files
  if (pathname.startsWith('/images/') || 
      pathname.startsWith('/favicon.ico') || 
      pathname.startsWith('/_next')) {
    return
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // For root path or paths without locale, redirect to Turkish version
  const locale = pathname === '/' ? defaultLocale : getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
    // Optional: Match all paths that don't start with /images/
    "/((?!images/).*)",
  ],
}

