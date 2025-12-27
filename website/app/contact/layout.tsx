import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Soul Jeep Experience - Tours en Jeep en Tenerife',
  description: 'Contacta con Soul Jeep Experience para reservas, consultas e información sobre nuestros tours en Jeep Wrangler en Tenerife. Estamos aquí para ayudarte a planificar tu aventura perfecta.',
  keywords: 'contacto soul jeep, tours tenerife contacto, reservar jeep tour, costa adeje contacto',
  openGraph: {
    title: 'Contacto - Soul Jeep Experience',
    description: 'Ponte en contacto con Soul Jeep Experience para reservas y consultas sobre nuestros tours en Jeep en Tenerife.',
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
