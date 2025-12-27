import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Soul Jeep Experience - Tours en Jeep en Tenerife',
  description: 'Encuentra respuestas a las preguntas más comunes sobre nuestros tours en Jeep Wrangler en Tenerife. Conoce los requisitos, precios, política de cancelación y qué esperar.',
  keywords: 'preguntas frecuentes jeep tour, faq tours tenerife, requisitos tour jeep, reservas preguntas',
  openGraph: {
    title: 'Preguntas Frecuentes - Soul Jeep Experience',
    description: 'Respuestas a las preguntas más frecuentes sobre nuestros tours en Jeep Wrangler en Tenerife.',
    url: 'https://www.souljeep.com/faq',
    images: ['/images/og-image.jpg'],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
