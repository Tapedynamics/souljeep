import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Don't show locale prefix for default locale
  localePrefix: 'as-needed',
});

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /images, /videos (static files)
  // - /favicon.ico, /sitemap.xml, /robots.txt (meta files)
  matcher: ['/((?!api|_next|_vercel|images|videos|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',],
};
