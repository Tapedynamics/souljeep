import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería de Fotos | Soul Jeep Experience - Tours en Jeep en Tenerife',
  description: 'Explora nuestra galería de fotos con aventuras en Jeep Wrangler por Tenerife. Descubre el Monte Teide, carreteras costeras, paisajes volcánicos y aventureros felices.',
  keywords: 'fotos tenerife, galería jeep tour, fotos teide, tours costa tenerife, fotografía aventura',
  openGraph: {
    title: 'Galería de Fotos - Soul Jeep Experience',
    description: 'Fotos espectaculares de nuestras aventuras en Jeep Wrangler por Tenerife. Monte Teide, carreteras costeras y paisajes volcánicos.',
    url: 'https://www.souljeep.com/gallery',
    images: ['/images/og-image.jpg'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
