import { getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import TourCard from '@/components/tour/TourCard';
import VideoCarousel from '@/components/common/VideoCarousel';
import AnimatedSection from '@/components/common/AnimatedSection';
import HeroContent from '@/components/home/HeroContent';
import StatsSection from '@/components/home/StatsSection';
import FeaturedToursCTA from '@/components/home/FeaturedToursCTA';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import { tours } from '@/data/tours';

export default async function HomePage() {
  // Get translations for the current locale
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const featuredTours = tours.filter(tour => tour.featured);

  // Hero video carousel slides
  const heroVideos = [
    {
      src: '/videos/hero/epic-slow-compressed.mp4',
      poster: '/videos/hero/epic-slow-poster.jpg',
      alt: 'Soul Jeep Adventure'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <AnimatedSection key={tour.id} animation="fadeUp" delay={index * 0.15}>
              <TourCard tour={tour} />
            </AnimatedSection>
          ))}
        </div>

        <FeaturedToursCTA />
      </Section>

      {/* Stats Section */}
      <Section padding="lg" className="bg-ocean-blue text-white">
        <StatsSection />
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
