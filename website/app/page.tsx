import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import TourCard from '@/components/tour/TourCard';
import FeaturedTourWide from '@/components/tour/FeaturedTourWide';
import VideoCarousel from '@/components/common/VideoCarousel';
import AnimatedSection from '@/components/common/AnimatedSection';
import HeroContent from '@/components/home/HeroContent';
import StatsSection from '@/components/home/StatsSection';
import FeaturedToursCTA from '@/components/home/FeaturedToursCTA';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import ReviewsSection from '@/components/home/ReviewsSection';
import { getFeaturedTours } from '@/data/tours';

export default async function HomePage() {
  // Get translations for the current locale
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const featuredTours = getFeaturedTours();

  // Hero video carousel slides
  const heroVideos = [
    {
      src: '/videos/hero/teide-landscape.mp4',
      poster: '/videos/hero/teide-landscape-poster.jpg',
      alt: 'Paisajes volcánicos del Teide'
    },
    {
      src: '/videos/hero/coastal-home-compressed.mp4',
      poster: '/videos/hero/coastal-home-poster.jpg',
      alt: 'Aventura costera en Jeep'
    },
    {
      src: '/videos/hero/epic-slow-compressed.mp4',
      poster: '/videos/hero/epic-slow-poster.jpg',
      alt: 'Conducción épica por Tenerife'
    },
    {
      src: '/videos/hero/ready-for-adventure.mp4',
      poster: '/videos/hero/ready-for-adventure-poster.jpg',
      alt: 'Listos para la aventura'
    },
  ];

  return (
    <>
      {/* Hero Section with Video Carousel */}
      <VideoCarousel videos={heroVideos} autoplayDelay={6000} pauseOnHover={true}>
        <HeroContent />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-white/50"></div>
          </div>
        </div>
      </VideoCarousel>

      {/* Featured Tours */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('tours.title')}
          </h2>
          <p className="text-lg md:text-xl text-stone-gray max-w-3xl mx-auto leading-relaxed">
            {t('tours.subtitle')}
          </p>
        </div>

        <div className={`mb-12 ${featuredTours.length === 1 ? 'max-w-4xl mx-auto' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {featuredTours.map((tour, index) => (
            <AnimatedSection key={tour.id} animation="fadeUp" delay={index * 0.15}>
              {featuredTours.length === 1 ? (
                <FeaturedTourWide tour={tour} />
              ) : (
                <TourCard tour={tour} />
              )}
            </AnimatedSection>
          ))}
        </div>

        <FeaturedToursCTA />
      </Section>

      {/* Photo Strip - Impatto visivo */}
      <Section background="white" padding="md">
        <Link href="/gallery" className="block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { src: '/images/gallery/teide/IMG_20251101_165300.jpg', alt: 'Jeep en el Teide' },
              { src: '/images/gallery/coastal/IMG20250913134819.jpg', alt: 'Costa de Tenerife' },
              { src: '/images/gallery/teide/IMG_20251101_165910.jpg', alt: 'Paisaje volcánico' },
              { src: '/images/gallery/coastal/IMG20250913142629.jpg', alt: 'Aventura costera' },
              { src: '/images/gallery/teide/IMG20250804203815.jpg', alt: 'Atardecer Teide' },
              { src: '/images/gallery/coastal/IMG20250913135320.jpg', alt: 'Vistas al mar' },
            ].map((photo, index) => (
              <div key={index} className="relative h-40 md:h-48 overflow-hidden rounded-lg group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-stone-gray hover:text-ocean-blue transition-colors text-sm font-medium">
            Ver todas las fotos →
          </p>
        </Link>
      </Section>

      {/* Stats Section */}
      <Section padding="lg" className="bg-ocean-blue text-white">
        <StatsSection />
      </Section>

      {/* Reviews — Google Reviews live */}
      <Section background="white" padding="xl">
        <ReviewsSection />
      </Section>

      {/* Why Choose Us */}
      <Section background="sand" padding="xl">
        <WhyChooseUsSection />
      </Section>

      {/* How It Works */}
      <Section background="white" padding="xl">
        <HowItWorksSection />
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl" className="bg-gradient-to-br from-ocean-blue via-adventure-green to-sunset-orange relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-blue/20 rounded-full blur-3xl"></div>

        <FinalCTASection />
      </Section>
    </>
  );
}
