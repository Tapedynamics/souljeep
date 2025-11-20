import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { locales, type Locale } from '@/i18n';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.souljeep.com'),
  title: {
    default: 'Soul Jeep Experience | Premium Jeep Tours in Tenerife',
    template: '%s | Soul Jeep Experience',
  },
  description:
    'Discover Tenerife in style with Soul Jeep Experience. Drive your own Jeep Wrangler through stunning volcanic landscapes, coastal roads, and Mount Teide. Book your adventure today!',
  keywords:
    'Jeep tours Tenerife, Teide sunset tour, Costa Adeje excursions, Jeep Wrangler rental, Tenerife adventures, Los Gigantes tours, self-drive jeep tours, volcanic landscape tours',
  authors: [{ name: 'Soul Jeep Experience' }],
  creator: 'Soul Jeep Experience',
  publisher: 'Soul Jeep Experience',
  alternates: {
    canonical: 'https://www.souljeep.com',
  },
  openGraph: {
    title: 'Soul Jeep Experience | Premium Jeep Tours in Tenerife',
    description:
      "Drive your own Jeep Wrangler through Tenerife's most spectacular landscapes. Teide sunset tours, coastal adventures, and volcanic explorations.",
    url: 'https://www.souljeep.com',
    siteName: 'Soul Jeep Experience',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Soul Jeep Experience - Tenerife Jeep Tours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soul Jeep Experience | Premium Jeep Tours in Tenerife',
    description: "Drive your own Jeep Wrangler through Tenerife's most spectacular landscapes.",
    images: ['/images/og-image.jpg'],
    creator: '@souljeep',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <head>
          <StructuredData />
        </head>
        <body>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
