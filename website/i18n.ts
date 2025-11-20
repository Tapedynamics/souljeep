import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define supported locales
export const locales = ['en', 'it', 'fr', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Locale display names
export const localeNames: Record<Locale, string> = {
  en: 'English',
  it: 'Italiano',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
};

export default getRequestConfig(async ({ locale }) => {
  // Use default locale if none provided (for client-side requests)
  const resolvedLocale = locale || defaultLocale;

  // Validate that the resolved locale is valid
  if (!locales.includes(resolvedLocale as Locale)) {
    notFound();
  }

  return {
    locale: resolvedLocale as string,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  };
});
