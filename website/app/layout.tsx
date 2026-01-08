import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import messages from '@/messages/es.json';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.souljeep.com'),
  title: {
    default: 'Soul Jeep Experience | Tours en Jeep en Tenerife',
    template: '%s | Soul Jeep Experience',
  },
  description:
    'Descubre Tenerife con estilo con Soul Jeep Experience. Conduce tu propio Jeep Wrangler por impresionantes paisajes volcánicos, carreteras costeras y el Monte Teide. ¡Reserva tu aventura hoy!',
  keywords:
    'Tours en Jeep Tenerife, Tour atardecer Teide, Excursiones Costa Adeje, Alquiler Jeep Wrangler, Aventuras Tenerife, Tours Los Gigantes, tours en jeep autoconducidos, tours paisajes volcánicos',
  authors: [{ name: 'Soul Jeep Experience' }],
  creator: 'Soul Jeep Experience',
  publisher: 'Soul Jeep Experience',
  alternates: {
    canonical: 'https://www.souljeep.com',
  },
  openGraph: {
    title: 'Soul Jeep Experience | Tours en Jeep en Tenerife',
    description:
      'Conduce tu propio Jeep Wrangler por los paisajes más espectaculares de Tenerife. Tours al atardecer en el Teide, aventuras costeras y exploraciones volcánicas.',
    url: 'https://www.souljeep.com',
    siteName: 'Soul Jeep Experience',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Soul Jeep Experience - Tours en Jeep en Tenerife',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soul Jeep Experience | Tours en Jeep en Tenerife',
    description: 'Conduce tu propio Jeep Wrangler por los paisajes más espectaculares de Tenerife.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale="es">
      <html lang="es" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
        <head>
          <StructuredData />
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-1GVZR8GLG7"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1GVZR8GLG7');
            `}
          </Script>
        </head>
        <body className="antialiased">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
