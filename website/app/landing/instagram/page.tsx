import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Star, Shield, Clock, Users } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { getVisibleTours } from '@/data/tours';
import TrackedLink from '@/components/common/TrackedLink';

export const metadata: Metadata = {
  title: 'Soul Jeep Experience | Conduce Tu Jeep Wrangler en Tenerife',
  description: 'Excursiones en Jeep Wrangler por el Teide y la costa de Tenerife. Tú conduces. Reserva ahora.',
  robots: { index: false, follow: false },
};

export default function InstagramLanding() {
  const tours = getVisibleTours();
  const minPrice = Math.min(...tours.map(t => t.price.oneTwo));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero compacto */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster="/videos/hero/soul-jeep-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero/soul-jeep-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <Image
            src="/images/logo.png"
            alt="Soul Jeep Experience"
            width={180}
            height={51}
            className="mb-6"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Conduce Tu Propio<br />
            <span className="text-sunset-gold">Jeep Wrangler</span>
          </h1>
          <p className="text-lg md:text-xl text-sand-beige max-w-lg">
            Excursiones por el Teide y la costa de Tenerife
          </p>
        </div>
      </section>

      {/* CTAs principales */}
      <section className="px-6 py-8 -mt-8 relative z-20">
        <div className="max-w-md mx-auto space-y-4">
          <TrackedLink
            href={companyInfo.fareharbor.bookingUrl}
            ctaName="ig_booking"
            external
            className="flex items-center justify-center gap-3 bg-sunset-orange hover:bg-sunset-gold text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] w-full"
          >
            Reservar Tour
            <ArrowRight className="w-5 h-5" />
          </TrackedLink>
          <TrackedLink
            href={companyInfo.contact.whatsappLink}
            ctaName="ig_whatsapp"
            external
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] w-full"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </TrackedLink>
          <TrackedLink
            href="/tours"
            ctaName="ig_view_tours"
            className="flex items-center justify-center gap-3 bg-white border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] w-full"
          >
            Ver Todos los Tours
          </TrackedLink>
        </div>
      </section>

      {/* Quick info */}
      <section className="px-6 py-8 bg-sand-beige">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <Clock className="w-6 h-6 text-sunset-orange mx-auto mb-2" />
              <p className="font-bold text-stone-gray">3-4 horas</p>
              <p className="text-sm text-stone-gray/70">de aventura</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <Users className="w-6 h-6 text-ocean-blue mx-auto mb-2" />
              <p className="font-bold text-stone-gray">1-4 personas</p>
              <p className="text-sm text-stone-gray/70">por Jeep</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-2xl font-bold text-stone-gray">
              Desde <span className="text-sunset-orange">€{minPrice}</span> por Jeep
            </p>
            <p className="text-sm text-stone-gray/70 mt-1">Seguro a todo riesgo incluido</p>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="px-6 py-8">
        <div className="max-w-lg mx-auto grid grid-cols-2 gap-3">
          {[
            '/images/gallery/teide/IMG_20251101_165300.jpg',
            '/images/gallery/coastal/IMG20250913134819.jpg',
            '/images/gallery/teide/IMG20250804203815.jpg',
            '/images/gallery/coastal/IMG20250913135320.jpg',
          ].map((src, i) => (
            <div key={i} className="relative h-40 rounded-xl overflow-hidden">
              <Image src={src} alt={`Soul Jeep ${i + 1}`} fill className="object-cover" sizes="50vw" />
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="px-6 py-8 bg-gradient-to-br from-ocean-blue to-ocean-deep text-white text-center">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-sunset-gold fill-sunset-gold" />
            ))}
          </div>
          <p className="text-xl font-bold mb-2">4.9/5 en TripAdvisor</p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-sunset-gold" />
            <span>Operador turístico con licencia</span>
          </div>

          <TrackedLink
            href={companyInfo.fareharbor.bookingUrl}
            ctaName="ig_booking_bottom"
            external
            className="inline-flex items-center gap-2 bg-sunset-orange hover:bg-sunset-gold text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-xl transition-all duration-300"
          >
            Reservar Ahora
            <ArrowRight className="w-5 h-5" />
          </TrackedLink>
        </div>
      </section>

      {/* Footer minimo */}
      <footer className="px-6 py-6 text-center text-sm text-stone-gray/60">
        <p>&copy; {new Date().getFullYear()} Soul Jeep Experience</p>
        <p className="mt-1">C.C. Aquamall, Costa Adeje, Tenerife</p>
      </footer>
    </div>
  );
}
