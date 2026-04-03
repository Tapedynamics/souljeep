import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Star, Shield, Clock, Users, Check, MapPin } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { getVisibleTours } from '@/data/tours';
import TrackedLink from '@/components/common/TrackedLink';

export const metadata: Metadata = {
  title: 'Soul Jeep Experience | Tours en Jeep Wrangler por Tenerife',
  description: 'Conduce tu propio Jeep Wrangler por el Teide y la costa de Tenerife. Grupos reducidos, seguro incluido. Reserva ahora.',
  robots: { index: false, follow: false },
};

export default function FacebookLanding() {
  const tours = getVisibleTours();
  const minPrice = Math.min(...tours.map(t => t.price.oneTwo));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster="/videos/hero/teide-landscape-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero/teide-landscape.mp4" type="video/mp4" />
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
            Aventuras en <span className="text-sunset-gold">Jeep Wrangler</span>
          </h1>
          <p className="text-lg text-sand-beige max-w-lg">
            Tenerife como nunca la has visto. Tú al volante.
          </p>
        </div>
      </section>

      {/* CTAs */}
      <section className="px-6 py-8 -mt-8 relative z-20">
        <div className="max-w-md mx-auto space-y-4">
          <TrackedLink
            href={companyInfo.fareharbor.bookingUrl}
            ctaName="fb_booking"
            external
            className="flex items-center justify-center gap-3 bg-sunset-orange hover:bg-sunset-gold text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] w-full"
          >
            Reservar Tour
            <ArrowRight className="w-5 h-5" />
          </TrackedLink>
          <TrackedLink
            href={companyInfo.contact.whatsappLink}
            ctaName="fb_whatsapp"
            external
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] w-full"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar por WhatsApp
          </TrackedLink>
        </div>
      </section>

      {/* Descrizione tour */}
      <section className="px-6 py-8 bg-sand-beige">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-stone-gray mb-4 text-center">
            ¿Qué incluye la experiencia?
          </h2>
          <div className="space-y-3">
            {[
              'Jeep Wrangler para conducir tú mismo',
              'Ruta guiada de 3-4 horas',
              'Seguro a todo riesgo incluido',
              'Depósito de combustible lleno',
              'Grupos reducidos (max 4 personas/Jeep)',
              'Salida desde Costa Adeje',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                <Check className="w-5 h-5 text-adventure-green flex-shrink-0" />
                <span className="text-stone-gray font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-sm text-stone-gray/70 mb-1">Precio por Jeep</p>
            <p className="text-3xl font-bold text-sunset-orange">Desde €{minPrice}</p>
            <p className="text-sm text-stone-gray/70 mt-1">1-4 personas por vehículo</p>
          </div>
        </div>
      </section>

      {/* Rutas disponibles */}
      <section className="px-6 py-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-stone-gray mb-6 text-center">Nuestras Rutas</h2>

          <div className="space-y-4">
            <div className="relative h-48 rounded-xl overflow-hidden group">
              <Image
                src="/images/tours/teide-sunset/hero.jpg"
                alt="Teide Sunset Tour"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">Teide Sunset</h3>
                <div className="flex items-center gap-4 text-sm mt-1">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3-4h</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1-4 pers.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-ocean-blue font-semibold hover:underline"
            >
              Ver todos los tours <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="px-6 py-8 bg-gradient-to-br from-ocean-blue to-ocean-deep text-white text-center">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-sunset-gold fill-sunset-gold" />
            ))}
          </div>
          <p className="text-xl font-bold mb-1">4.9/5 en TripAdvisor</p>
          <p className="text-sm text-white/70 mb-4">Cientos de aventureros satisfechos</p>

          <div className="flex items-center justify-center gap-4 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-sunset-gold" />
              <span>Licencia turística</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sunset-gold" />
              <span>Costa Adeje</span>
            </div>
          </div>

          <div className="space-y-3">
            <TrackedLink
              href={companyInfo.fareharbor.bookingUrl}
              ctaName="fb_booking_bottom"
              external
              className="flex items-center justify-center gap-2 bg-sunset-orange hover:bg-sunset-gold text-white font-bold py-4 px-8 rounded-2xl shadow-xl transition-all duration-300 w-full"
            >
              Reservar Ahora <ArrowRight className="w-5 h-5" />
            </TrackedLink>
            <TrackedLink
              href={companyInfo.contact.whatsappLink}
              ctaName="fb_whatsapp_bottom"
              external
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </TrackedLink>
          </div>
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
