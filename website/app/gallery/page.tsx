'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { X, Filter, Camera, Image as ImageIcon, Sparkles, Mountain } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import DynamicHero from '@/components/common/DynamicHero';
import { tours } from '@/data/tours';

type Category = 'all' | 'teide' | 'coastal';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'teide' | 'coastal';
  tourTitle: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  // Collect all images from tours
  const allImages = useMemo(() => {
    const images: GalleryImage[] = [];

    tours.forEach(tour => {
      // Add hero image
      images.push({
        src: tour.images.hero,
        alt: `${tour.title} - Hero`,
        category: tour.category as 'teide' | 'coastal',
        tourTitle: tour.title
      });

      // Add gallery images
      tour.images.gallery.forEach((src, index) => {
        images.push({
          src,
          alt: `${tour.title} - Photo ${index + 1}`,
          category: tour.category as 'teide' | 'coastal',
          tourTitle: tour.title
        });
      });
    });

    // Add professional coastal photos
    const coastalPhotos = [
      'IMG20250913123631.jpg', 'IMG20250913131122.jpg', 'IMG20250913131125.jpg',
      'IMG20250913131150.jpg', 'IMG20250913134803.jpg', 'IMG20250913134819.jpg',
      'IMG20250913134839.jpg', 'IMG20250913134901.jpg', 'IMG20250913135033.jpg',
      'IMG20250913135320.jpg', 'IMG20250913135329.jpg', 'IMG20250913140323.jpg',
      'IMG20250913140337.jpg', 'IMG20250913142629.jpg', 'IMG20250913142645.jpg'
    ];
    coastalPhotos.forEach((filename, index) => {
      images.push({
        src: `/images/gallery/coastal/${filename}`,
        alt: `Coastal Adventure - Photo ${index + 1}`,
        category: 'coastal',
        tourTitle: 'Coastal Experience'
      });
    });

    // Add professional Teide photos
    const teidePhotos = [
      '_storage_emulated_0_Android_data_com.miui.gallery_cache_SecurityShare_IMG_20251101_184350.jpg',
      'IMG_20251101_163636.jpg', 'IMG_20251101_164358.jpg', 'IMG_20251101_164412.jpg',
      'IMG_20251101_165233.jpg', 'IMG_20251101_165300.jpg', 'IMG_20251101_165327.jpg',
      'IMG_20251101_165341.jpg', 'IMG_20251101_165403.jpg', 'IMG_20251101_165413.jpg',
      'IMG_20251101_165430.jpg', 'IMG_20251101_165440.jpg', 'IMG_20251101_165445.jpg',
      'IMG_20251101_165503.jpg', 'IMG_20251101_165505.jpg', 'IMG_20251101_165526.jpg',
      'IMG_20251101_165538.jpg', 'IMG_20251101_165549.jpg', 'IMG_20251101_165600.jpg',
      'IMG_20251101_165622.jpg', 'IMG_20251101_165825.jpg', 'IMG_20251101_165910.jpg',
      'IMG_20251101_170118.jpg', 'IMG_20251101_170236.jpg', 'IMG_20251101_170245.jpg',
      'IMG_20251101_171624.jpg', 'IMG_20251101_172543.jpg', 'IMG_20251101_172547.jpg',
      'IMG_20251101_172600.jpg', 'IMG_20251101_172602.jpg', 'IMG20250804203815.jpg',
      'IMG20250804203821.jpg', 'IMG20250804203824.jpg', 'IMG20250804203827.jpg'
    ];
    teidePhotos.forEach((filename, index) => {
      images.push({
        src: `/images/gallery/teide/${filename}`,
        alt: `Teide Adventure - Photo ${index + 1}`,
        category: 'teide',
        tourTitle: 'Teide Experience'
      });
    });

    return images;
  }, []);

  // Filter images based on category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return allImages;
    return allImages.filter(img => img.category === selectedCategory);
  }, [allImages, selectedCategory]);

  const openLightbox = (image: GalleryImage, index: number) => {
    setLightboxImage(image);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % filteredImages.length;
    setImageIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = imageIndex === 0 ? filteredImages.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const floatingCards = [
    {
      icon: <Camera className="w-6 h-6" />,
      text: `${allImages.length}+ Fotos`,
      position: { top: "20%", left: "12%" },
      delay: 0.2
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      text: "Paisajes Volcánicos",
      position: { top: "25%", right: "10%" },
      delay: 0.4
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "Momentos Únicos",
      position: { bottom: "25%", left: "10%" },
      delay: 0.6
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      text: "Fotos Profesionales",
      position: { bottom: "30%", right: "14%" },
      delay: 0.8
    },
  ];

  return (
    <>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Nuestra "
        highlightText="Galería"
        subtitle="Explora momentos increíbles de nuestras aventuras en Jeep por los paisajes más espectaculares de Tenerife"
        floatingCards={floatingCards}
        height="h-[45vh]"
        backgroundImage="/images/hero/gallery-hero.jpg"
      />

      {/* Gallery Section */}
      <Section background="white" padding="xl">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-stone-gray">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filtrar por:</span>
          </div>
          <Button
            variant={selectedCategory === 'all' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setSelectedCategory('all')}
            aria-pressed={selectedCategory === 'all'}
          >
            Todos los Tours
          </Button>
          <Button
            variant={selectedCategory === 'teide' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setSelectedCategory('teide')}
            aria-pressed={selectedCategory === 'teide'}
          >
            Tours Teide
          </Button>
          <Button
            variant={selectedCategory === 'coastal' ? 'primary' : 'outline'}
            size="md"
            onClick={() => setSelectedCategory('coastal')}
            aria-pressed={selectedCategory === 'coastal'}
          >
            Tours Costa
          </Button>
        </div>

        {/* Image Grid - Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                index % 7 === 0 ? 'row-span-2' : ''
              } ${index % 11 === 0 ? 'col-span-2' : ''}`}
              onClick={() => openLightbox(image, index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(image, index);
                }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{image.tourTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-stone-gray">No hay imágenes para esta categoría</p>
          </div>
        )}
      </Section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={-1}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:block"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:block"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4 text-center text-white">
            <p className="text-lg font-semibold">{lightboxImage.tourTitle}</p>
            <p className="text-sm text-sand-beige">
              {imageIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
