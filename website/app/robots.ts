import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.souljeep.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/landing/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
