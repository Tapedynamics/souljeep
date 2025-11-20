import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | Soul Jeep Experience - Tenerife Jeep Tours',
  description: 'Browse our stunning photo gallery showcasing Jeep Wrangler adventures across Tenerife. See Mount Teide, coastal roads, volcanic landscapes, and happy adventurers.',
  keywords: 'tenerife photos, jeep tour gallery, teide photos, coastal tours tenerife, adventure photography',
  openGraph: {
    title: 'Photo Gallery - Soul Jeep Experience',
    description: 'Stunning photos from our Jeep Wrangler adventures across Tenerife. Mount Teide, coastal roads, and volcanic landscapes.',
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
