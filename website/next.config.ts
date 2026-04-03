import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Tour nascosti → pagina tours (302 perche' potrebbero tornare visibili)
      {
        source: '/tours/teide-by-day',
        destination: '/tours',
        permanent: false,
      },
      {
        source: '/tours/coastal-tour',
        destination: '/tours',
        permanent: false,
      },
      // Pattern comuni / errori tipici
      {
        source: '/tour/:slug*',
        destination: '/tours/:slug*',
        permanent: true,
      },
      {
        source: '/galeria',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/reservar',
        destination: 'https://fareharbor.com/embeds/book/souljeep/items/',
        permanent: false,
      },
      {
        source: '/booking',
        destination: 'https://fareharbor.com/embeds/book/souljeep/items/',
        permanent: false,
      },
      // Pattern /es/* → /* (sito gia' in spagnolo)
      {
        source: '/es/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
