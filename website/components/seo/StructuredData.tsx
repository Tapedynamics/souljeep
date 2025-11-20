import { companyInfo } from '@/data/company';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': 'https://www.souljeep.com/#organization',
    name: companyInfo.name,
    description: companyInfo.description,
    url: 'https://www.souljeep.com',
    logo: 'https://www.souljeep.com/images/logo.png',
    image: 'https://www.souljeep.com/images/og-image.jpg',
    telephone: companyInfo.contact.phone,
    email: companyInfo.contact.email,
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
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '500',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.souljeep.com/#localbusiness',
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
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.souljeep.com',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
