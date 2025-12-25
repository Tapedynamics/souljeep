import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getTourBySlug, tours } from '@/data/tours';
import { faq } from '@/data/company';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import VideoHero from '@/components/common/VideoHero';
import {
  Clock,
  Users,
  Euro,
  Check,
  ArrowRight,
  MapPin,
  AlertCircle,
  ChevronDown,
  Calendar
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all tours
export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

// Generate dynamic metadata for each tour
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour No Encontrado',
    };
  }

  return {
    title: `${tour.title} - ${tour.subtitle} | Soul Jeep Experience`,
    description: tour.description,
    keywords: `${tour.title}, ${tour.category} tour, Tenerife Jeep tour, ${tour.duration} tour, Jeep Wrangler Tenerife`,
    openGraph: {
      title: `${tour.title} - ${tour.subtitle}`,
      description: tour.description,
      images: [
        {
          url: tour.images.hero,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tour.title} - ${tour.subtitle}`,
      description: tour.description,
      images: [tour.images.hero],
    },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  // Filter FAQs that might be general or add tour-specific ones
  const tourFaqs = faq.slice(0, 6);

  // Map tour slug to video
  const tourVideoMap: Record<string, { src: string; poster: string }> = {
    'teide-sunset': {
      src: '/videos/hero/teide-landscape.mp4',
      poster: '/videos/hero/teide-landscape-poster.jpg'
    },
    'teide-by-day': {
      src: '/videos/hero/ready-for-adventure.mp4',
      poster: '/videos/hero/ready-for-adventure-poster.jpg'
    },
    'coastal-tour': {
      src: '/videos/hero/dynamic-clip.mp4',
      poster: '/videos/hero/dynamic-clip-poster.jpg'
    }
  };

  const tourVideo = tourVideoMap[tour.slug] || {
    src: '/videos/hero/soul-jeep-hero.mp4',
    poster: '/videos/hero/soul-jeep-hero-poster.jpg'
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Video */}
      <VideoHero
        videoSrc={tourVideo.src}
        posterSrc={tourVideo.poster}
        title={tour.title}
        subtitle={tour.subtitle}
        height="h-[70vh] min-h-[500px]"
      >
        <Container className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-sunset-orange/90 rounded-full text-sm font-semibold uppercase tracking-wide">
              Aventura {tour.category === 'teide' ? 'Teide' : tour.category === 'coastal' ? 'Costa' : 'Aventura'}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {tour.title}
            </h1>
            <p className="text-2xl md:text-3xl text-sunset-gold font-semibold mb-6">
              {tour.subtitle}
            </p>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-sand-beige">
              {tour.description}
            </p>

            {/* Quick Info Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sunset-gold" />
                <span className="font-medium">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sunset-gold" />
                <span className="font-medium">2-4 Personas</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="w-5 h-5 text-sunset-gold" />
                <span className="font-medium">Desde €{tour.price.oneTwo}</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={tour.fareharbor} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="group min-w-[200px]">
                  Reservar Este Tour
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#itinerary">
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-stone-gray min-w-[200px]">
                  Ver Itinerario
                </Button>
              </a>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </VideoHero>

      {/* Tour Highlights */}
      <section className="py-16 bg-gradient-to-b from-white to-sand-beige">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-sunset-orange">Destacados</span> del Tour
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl mx-auto">
              Lo que hace esta aventura inolvidable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tour.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-sunset-orange"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sunset-orange/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-sunset-orange" />
                  </div>
                  <p className="text-stone-gray font-medium flex-1">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-16 bg-white">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tu <span className="text-ocean-blue">Itinerario</span>
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl mx-auto">
              Un recorrido detallado de tu aventura de {tour.duration}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sunset-orange via-ocean-blue to-adventure-green"></div>

              {/* Timeline Items */}
              {tour.itinerary.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                  }`}
                >
                  {/* Time Badge */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-sunset-orange to-sunset-gold flex items-center justify-center shadow-lg z-10">
                    <span className="text-white font-bold text-sm">{item.time}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}`}>
                    <div className="bg-gradient-to-br from-white to-sand-beige/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2 text-stone-gray">
                        {item.title}
                      </h3>
                      <p className="text-stone-gray">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Price Breakdown */}
      <section className="py-16 bg-sand-beige">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Precios y <span className="text-sunset-orange">Opciones</span>
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl mx-auto">
              Precios transparentes sin cargos ocultos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* 1-2 People */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Users className="w-12 h-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">1-2 Personas</h3>
              <div className="text-4xl font-bold text-sunset-orange mb-2">
                €{tour.price.oneTwo}
              </div>
              <p className="text-sm text-stone-gray">por Jeep</p>
            </div>

            {/* 3 People */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-sunset-orange relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sunset-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <Users className="w-12 h-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">3 Personas</h3>
              <div className="text-4xl font-bold text-sunset-orange mb-2">
                €{tour.price.three}
              </div>
              <p className="text-sm text-stone-gray">por Jeep</p>
            </div>

            {/* 4 People */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <Users className="w-12 h-12 text-adventure-green mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">4 Personas</h3>
              <div className="text-4xl font-bold text-sunset-orange mb-2">
                €{tour.price.four}
              </div>
              <p className="text-sm text-stone-gray">por Jeep</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href={tour.fareharbor} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="group">
                Ver Disponibilidad
                <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* What's Included/Requirements */}
      <section className="py-16 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Check className="w-8 h-8 text-adventure-green" />
                Qué <span className="text-adventure-green">Incluye</span>
              </h2>
              <div className="space-y-4">
                {tour.includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-adventure-green/5 rounded-lg hover:bg-adventure-green/10 transition-colors"
                  >
                    <Check className="w-6 h-6 text-adventure-green flex-shrink-0 mt-0.5" />
                    <span className="text-stone-gray font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-ocean-blue" />
                <span className="text-ocean-blue">Requisitos</span>
              </h2>
              <div className="space-y-4">
                {tour.requirements.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-ocean-blue/5 rounded-lg hover:bg-ocean-blue/10 transition-colors"
                  >
                    <AlertCircle className="w-6 h-6 text-ocean-blue flex-shrink-0 mt-0.5" />
                    <span className="text-stone-gray font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gradient-to-b from-sand-beige to-white">
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Galería de <span className="text-sunset-orange">Fotos</span>
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl mx-auto">
              Descubre lo que te espera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tour.images.gallery.map((image, index) => (
              <div
                key={index}
                className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Image
                  src={image}
                  alt={`${tour.title} - Gallery Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas <span className="text-ocean-blue">Frecuentes</span>
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre tu tour
            </p>
          </div>

          <div className="space-y-4">
            {tourFaqs.map((item, index) => (
              <details
                key={index}
                className="group bg-gradient-to-br from-white to-sand-beige/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-stone-gray pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-ocean-blue transition-transform group-open:rotate-180 flex-shrink-0" />
                </summary>
                <div className="mt-4 text-stone-gray border-t border-stone-gray/20 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sunset-orange via-sunset-gold to-ocean-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ¿Listo para Empezar tu Aventura?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Reserva tu experiencia {tour.title} ahora y crea recuerdos que durarán toda la vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href={tour.fareharbor} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-sunset-orange hover:bg-sand-beige shadow-2xl min-w-[200px] group"
              >
                Reservar Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/tours">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-sunset-orange min-w-[200px]"
              >
                Explorar Otros Tours
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Salida desde C.C. Aquamall, Costa Adeje</span>
          </div>
        </Container>
      </section>
    </div>
  );
}
