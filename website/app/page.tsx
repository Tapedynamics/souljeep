import Link from 'next/link';
import { ArrowRight, Check, MapPin, Shield, Users, Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import TourCard from '@/components/tour/TourCard';
import VideoCarousel from '@/components/common/VideoCarousel';
import AnimatedSection from '@/components/common/AnimatedSection';
import { tours } from '@/data/tours';
import { companyInfo } from '@/data/company';

export default function HomePage() {
  const featuredTours = tours.filter(tour => tour.featured);

  // Hero video carousel slides
  const heroVideos = [
    {
      src: '/videos/hero/soul-jeep-hero.mp4',
      poster: '/videos/hero/soul-jeep-hero-poster.jpg',
      alt: 'Soul Jeep Experience'
    },
    {
      src: '/videos/hero/ready-for-adventure.mp4',
      poster: '/videos/hero/ready-for-adventure-poster.jpg',
      alt: 'Ready for Adventure'
    },
    {
      src: '/videos/hero/teide-landscape.mp4',
      poster: '/videos/hero/teide-landscape-poster.jpg',
      alt: 'Teide Landscape'
    },
    {
      src: '/videos/hero/dynamic-clip.mp4',
      poster: '/videos/hero/dynamic-clip-poster.jpg',
      alt: 'Dynamic Jeep Tour'
    },
    {
      src: '/videos/hero/promo-highlight.mp4',
      poster: '/videos/hero/promo-highlight-poster.jpg',
      alt: 'Promo Highlight'
    },
  ];

  return (
    <>
      {/* Hero Section with Video Carousel */}
      <VideoCarousel videos={heroVideos} autoplayDelay={6000} pauseOnHover={true}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Discover Tenerife<br />
              <span className="text-sunset-gold">In Your Own Jeep</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-sand-beige max-w-3xl mx-auto leading-relaxed">
              Drive your own Jeep Wrangler through volcanic landscapes, coastal cliffs, and mountain roads.
              The adventure of a lifetime awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-sunset-orange hover:bg-sunset-gold text-white text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-sunset-orange/50 transition-all duration-300 hover:scale-105 group"
                >
                  Book Your Adventure
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/tours">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-stone-gray text-lg px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Tours
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
                <Shield className="w-5 h-5 text-sunset-gold" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
                <Users className="w-5 h-5 text-sunset-gold" />
                <span className="font-medium">Small Groups</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
                <Star className="w-5 h-5 text-sunset-gold" />
                <span className="font-medium">Premium Experience</span>
              </div>
            </div>
          </div>
        </div>

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
            Choose Your <span className="text-sunset-orange">Adventure</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-gray max-w-3xl mx-auto leading-relaxed">
            Three unforgettable experiences. One incredible island. Drive your own Jeep Wrangler
            through Tenerife&apos;s most spectacular landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <AnimatedSection key={tour.id} animation="fadeUp" delay={index * 0.15}>
              <TourCard tour={tour} />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" className="text-lg px-10 py-4 group">
              Book Your Adventure Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="ocean-blue" padding="lg" className="bg-ocean-blue text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">500+</div>
            <div className="text-base md:text-lg text-sand-beige">Happy Adventurers</div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.1}>
            <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">3</div>
            <div className="text-base md:text-lg text-sand-beige">Epic Routes</div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">100%</div>
            <div className="text-base md:text-lg text-sand-beige">Satisfaction Rate</div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.3}>
            <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">5★</div>
            <div className="text-base md:text-lg text-sand-beige">Average Rating</div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="sand" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-ocean-blue">Soul Jeep</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-gray max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just another tour company. We offer you the freedom to explore
            at your own pace in your own Jeep Wrangler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {companyInfo.features.map((feature, index) => (
            <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sunset-orange to-sunset-gold flex items-center justify-center mb-4">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature}</h3>
                <p className="text-base text-stone-gray leading-relaxed">
                  Experience the best of Tenerife with our carefully curated tours and premium service.
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-sunset-orange">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-gray max-w-3xl mx-auto leading-relaxed">
            Your adventure is just four simple steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection animation="fadeUp" delay={0}>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-sunset-orange to-sunset-gold flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-sunset-orange to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Tour</h3>
              <p className="text-base text-stone-gray leading-relaxed">
                Select from our three spectacular routes through Tenerife
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.1}>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-ocean-blue to-adventure-green flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-ocean-blue to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Book Online</h3>
              <p className="text-base text-stone-gray leading-relaxed">
                Reserve your Jeep Wrangler with instant confirmation
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-adventure-green to-ocean-blue flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-adventure-green to-transparent hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Briefed</h3>
              <p className="text-base text-stone-gray leading-relaxed">
                Receive route guidance and safety instructions from our team
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.3}>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-sunset-gold to-sunset-orange flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Hit the Road!</h3>
              <p className="text-base text-stone-gray leading-relaxed">
                Drive your own Jeep and explore Tenerife at your own pace
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl" className="bg-gradient-to-br from-ocean-blue via-adventure-green to-sunset-orange relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ocean-blue/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready for Your <span className="text-sunset-gold">Adventure</span>?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-sand-beige max-w-4xl mx-auto leading-relaxed">
              Book your Jeep Wrangler experience today and create memories that will last a lifetime.
              Available 7 days a week from {companyInfo.hours.monday}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-sunset-orange hover:bg-sunset-gold text-white text-lg px-12 py-5 rounded-xl shadow-2xl hover:shadow-sunset-orange/50 transition-all duration-300 hover:scale-105 group"
                >
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href={`tel:${companyInfo.contact.phone}`}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-stone-gray border-2 border-white text-white text-lg px-12 py-5 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Call Us: {companyInfo.contact.phone}
                </Button>
              </Link>
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20">
              <MapPin className="w-5 h-5 text-sunset-gold" />
              <span className="font-medium text-base text-white">
                {companyInfo.location.addressLine2}, {companyInfo.location.city}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
