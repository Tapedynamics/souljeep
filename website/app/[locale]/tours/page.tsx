import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { tours } from '@/data/tours';
import { companyInfo } from '@/data/company';
import TourCard from '@/components/tour/TourCard';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Tours - Jeep Wrangler Adventures in Tenerife | Soul Jeep Experience',
  description: 'Explore our collection of premium Jeep Wrangler tours in Tenerife. From Teide sunset adventures to coastal explorations, find your perfect experience.',
  keywords: 'Tenerife tours, Jeep Wrangler tours, Teide tours, coastal tours, adventure tours Tenerife',
  openGraph: {
    title: 'Our Tours - Premium Jeep Adventures in Tenerife',
    description: 'Explore our collection of premium Jeep Wrangler tours in Tenerife. Drive your own adventure.',
    images: ['/images/og-image.jpg'],
  },
};

export default function ToursPage() {
  const teideTours = tours.filter(tour => tour.category === 'teide');
  const coastalTours = tours.filter(tour => tour.category === 'coastal');
  const adventureTours = tours.filter(tour => tour.category === 'adventure');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero/teide-jeep-hero.jpg"
          alt="Soul Jeep Tours"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-sunset-gold">Tours</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Drive your own Jeep Wrangler through Tenerife&apos;s most spectacular landscapes.
              Choose from our curated selection of unforgettable adventures.
            </p>
            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                size="lg"
                className="bg-sunset-orange hover:bg-sunset-gold text-white shadow-2xl hover:shadow-sunset-orange/50 transition-all duration-300 hover:scale-105 group"
              >
                Book Your Adventure
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Teide Tours */}
      {teideTours.length > 0 && (
        <Section background="white" padding="xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-volcano-red">Teide</span> Adventures
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl">
              Experience the magic of Spain&apos;s highest peak. Drive through volcanic landscapes
              and witness breathtaking sunsets from 2,000 meters altitude.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teideTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </Section>
      )}

      {/* Coastal Tours */}
      {coastalTours.length > 0 && (
        <Section background="sand" padding="xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-ocean-blue">Coastal</span> Explorations
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl">
              Discover dramatic cliffs, hidden coves, and pristine beaches along Tenerife&apos;s
              spectacular coastline. Swim in crystal-clear waters and soak up the sun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coastalTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </Section>
      )}

      {/* Adventure Tours */}
      {adventureTours.length > 0 && (
        <Section background="gradient" padding="xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-adventure-green">Adventure</span> Experiences
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl">
              For those seeking the ultimate thrill. Off-road adventures, challenging terrain,
              and unforgettable memories await.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventureTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </Section>
      )}

      {/* Why Choose Section */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-ocean-blue">Soul Jeep</span>?
            </h2>
            <p className="text-xl text-stone-gray">
              We offer more than just a tour - we offer an experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {companyInfo.features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-sand-beige to-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-sunset-orange/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-sunset-orange">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature}</h3>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-stone-gray">
              <MapPin className="w-5 h-5 text-ocean-blue" />
              <span>
                {companyInfo.location.addressLine2}, {companyInfo.location.city}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-stone-gray">
              <Phone className="w-5 h-5 text-ocean-blue" />
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="hover:text-ocean-blue transition-colors"
              >
                {companyInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-blue to-ocean-deep text-white">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your Jeep Wrangler experience today and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                size="lg"
                className="bg-sunset-orange hover:bg-sunset-gold min-w-[200px]"
              >
                Book Now
              </Button>
            </Link>
            <Link href={`tel:${companyInfo.contact.phone}`}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-ocean-blue min-w-[200px]"
              >
                Call Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
