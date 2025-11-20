import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Soul Jeep Experience - Get in Touch',
  description: 'Contact Soul Jeep Experience for bookings, inquiries, and information about our Jeep Wrangler tours in Tenerife. We\'re here to help plan your perfect adventure.',
  keywords: 'contact soul jeep, tenerife tours contact, jeep tour booking, costa adeje contact',
  openGraph: {
    title: 'Contact Soul Jeep Experience',
    description: 'Get in touch with Soul Jeep Experience for bookings and inquiries about our Tenerife Jeep tours.',
    url: 'https://www.souljeep.com/contact',
    images: ['/images/og-image.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
