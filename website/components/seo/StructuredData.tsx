import { companyInfo } from '@/data/company';

export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.souljeep.com/#business',
    name: companyInfo.name,
    image: 'https://www.souljeep.com/images/og-image.jpg',
    description: companyInfo.description,
    url: 'https://www.souljeep.com',
    telephone: companyInfo.contact.phone,
    email: companyInfo.contact.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyInfo.location.address}, ${companyInfo.location.addressLine2}`,
      addressLocality: companyInfo.location.city,
      postalCode: companyInfo.location.postalCode,
      addressRegion: companyInfo.location.region,
      addressCountry: companyInfo.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.location.coordinates.lat,
      longitude: companyInfo.location.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      companyInfo.social.instagram,
      companyInfo.social.facebook,
      companyInfo.social.tripadvisor,
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.souljeep.com/#website',
    url: 'https://www.souljeep.com',
    name: companyInfo.name,
    description: companyInfo.description,
    publisher: {
      '@id': 'https://www.souljeep.com/#business',
    },
    inLanguage: 'es',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
