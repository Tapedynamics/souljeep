import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { getVisibleTours } from '@/data/tours';
import { companyInfo } from '@/data/company';
import TourCard from '@/components/tour/TourCard';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { MapPin, MessageCircle, ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestros Tours - Aventuras en Jeep Wrangler en Tenerife | Soul Jeep Experience',
  description: 'Explora nuestra colección de tours premium en Jeep Wrangler en Tenerife. Desde atardeceres en el Teide hasta exploraciones costeras, encuentra tu experiencia perfecta.',
  keywords: 'Tours Tenerife, Tours Jeep Wrangler, Tours Teide, Tours costa, Aventuras Tenerife',
  openGraph: {
    title: 'Nuestros Tours - Aventuras Premium en Jeep en Tenerife',
    description: 'Explora nuestra colección de tours premium en Jeep Wrangler en Tenerife. Conduce tu propia aventura.',
    images: ['/images/og-image.jpg'],
  },
};

export default async function ToursPage() {
  const t = await getTranslations('tours');
  const tCommon = await getTranslations('common');
  const visibleTours = getVisibleTours();
  const teideTours = visibleTours.filter(tour => tour.category === 'teide');
  const coastalTours = visibleTours.filter(tour => tour.category === 'coastal');
  const adventureTours = visibleTours.filter(tour => tour.category === 'adventure');

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
              {t('heroTitle')} <span className="text-sunset-gold">{t('heroHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {t('pageSubtitle')}
            </p>
            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                size="lg"
                className="bg-sunset-orange hover:bg-sunset-gold text-white shadow-2xl hover:shadow-sunset-orange/50 transition-all duration-300 hover:scale-105 group"
              >
                {tCommon('bookYourAdventure')}
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
              <span className="text-volcano-red">{t('teideSectionTitle')}</span> {t('teideSectionHighlight')}
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl">
              {t('teideSectionDescription')}
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
              <span className="text-ocean-blue">{t('coastalSectionTitle')}</span> {t('coastalSectionHighlight')}
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl">
              {t('coastalSectionDescription')}
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
              Experiencias de <span className="text-adventure-green">Aventura</span>
            </h2>
            <p className="text-xl text-stone-gray max-w-2xl">
              Para quienes buscan la máxima emoción. Aventuras todoterreno, terrenos desafiantes
              y recuerdos inolvidables te esperan.
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
              ¿Por Qué Elegir <span className="text-ocean-blue">Soul Jeep</span>?
            </h2>
            <p className="text-xl text-stone-gray">
              Ofrecemos más que un tour - ofrecemos una experiencia
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
              <MessageCircle className="w-5 h-5 text-ocean-blue" />
              <a
                href={companyInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ocean-blue transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-blue to-ocean-deep text-white">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Tu Próxima Aventura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Reserva tu experiencia en Jeep Wrangler hoy y crea recuerdos que durarán toda la vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                size="lg"
                className="bg-sunset-orange hover:bg-sunset-gold min-w-[200px] group"
              >
                Reservar Ahora
                <Calendar className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
            <Link href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#25D366] text-white hover:bg-[#25D366] min-w-[200px] group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Escríbenos por WhatsApp
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
