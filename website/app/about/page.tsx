import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Award, Heart, Target, Compass, Check, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import DynamicHero from '@/components/common/DynamicHero';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Nosotros | Soul Jeep Experience - Tours en Jeep en Tenerife',
  description: 'Conoce Soul Jeep Experience, tu socio de confianza para aventuras inolvidables en Jeep Wrangler por Tenerife. Descubre nuestra historia, misión y compromiso con la excelencia.',
  openGraph: {
    title: 'Sobre Soul Jeep Experience',
    description: 'Tours premium en Jeep Wrangler en Tenerife. Descubre nuestra historia y compromiso con aventuras inolvidables.',
    url: 'https://www.souljeep.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Pasión por la Aventura',
      description: 'Vivimos y respiramos aventura. Cada tour está diseñado para encender tu espíritu de exploración y crear recuerdos inolvidables.'
    },
    {
      icon: Shield,
      title: 'Seguridad Primero',
      description: 'Tu seguridad es nuestra prioridad. Todos los vehículos están completamente asegurados, mantenidos regularmente y equipados con características de seguridad modernas.'
    },
    {
      icon: Users,
      title: 'Experiencia en Grupos Pequeños',
      description: 'Mantenemos grupos pequeños para asegurar atención personalizada y una conexión más significativa con el paisaje.'
    },
    {
      icon: Award,
      title: 'Excelencia en el Servicio',
      description: 'Desde el momento de la reserva hasta el final del tour, nos esforzamos por superar las expectativas en cada momento.'
    },
    {
      icon: Target,
      title: 'Experiencias Auténticas',
      description: 'Te llevamos fuera de los caminos trillados para descubrir el verdadero Tenerife, lejos de las multitudes turísticas y en contacto con la naturaleza.'
    },
    {
      icon: Compass,
      title: 'Guía Experta',
      description: 'Nuestra guía profesional de rutas asegura que navegues de forma segura mientras descubres joyas ocultas y miradores impresionantes.'
    }
  ];

  const floatingCards = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: "100% Seguro y Asegurado",
      position: { top: "20%", left: "10%" },
      delay: 0.2
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Excelencia en Servicio",
      position: { top: "30%", right: "15%" },
      delay: 0.4
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Pasión por la Aventura",
      position: { bottom: "25%", left: "12%" },
      delay: 0.6
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Experiencias Auténticas",
      position: { bottom: "35%", right: "10%" },
      delay: 0.8
    },
  ];

  return (
    <>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Sobre "
        highlightText="Nosotros"
        subtitle="Descubre Tenerife con estilo"
        floatingCards={floatingCards}
        height="h-[55vh]"
        backgroundImage="/images/hero/teide-sunset-hero.jpg"
      />

      {/* Our Story */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nuestra <span className="text-sunset-orange">Historia</span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-stone-gray space-y-6">
            <p className="text-xl leading-relaxed">
              Soul Jeep Experience nació de una simple pasión: compartir la belleza salvaje
              de Tenerife de la manera más emocionante posible. Creemos que la mejor
              forma de descubrir una isla es al volante de tu propio vehículo, libre para
              explorar a tu ritmo.
            </p>
            <p className="text-lg leading-relaxed">
              Con sede en el corazón de Costa Adeje, hemos pasado años perfeccionando nuestras rutas,
              descubriendo miradores ocultos y creando experiencias que van más allá de los típicos
              tours turísticos. Cada carretera de montaña serpenteante, cada vista volcánica y cada
              acantilado costero ha sido cuidadosamente seleccionado para mostrar los paisajes más
              espectaculares de Tenerife.
            </p>
            <p className="text-lg leading-relaxed">
              Lo que nos diferencia es nuestro compromiso de darte libertad. No eres solo
              un pasajero en nuestros tours—eres el conductor de tu propia aventura. Con
              guía profesional de rutas y Jeep Wranglers de primera línea, tendrás
              la confianza para explorar mientras creas tu propia historia única.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Mission */}
      <Section background="sand" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nuestra <span className="text-ocean-blue">Misión</span>
          </h2>
          <p className="text-xl text-stone-gray leading-relaxed mb-8">
            Proporcionar experiencias inolvidables, seguras y auténticas en Jeep que permitan a los viajeros
            descubrir el alma de Tenerife. Combinamos la emoción de la aventura autoconducida con
            guía experta, creando recuerdos que duran toda la vida mientras mantenemos los más altos
            estándares de seguridad y servicio.
          </p>
          <div className="inline-block bg-sunset-orange/10 border-l-4 border-sunset-orange px-6 py-4 rounded-r-lg">
            <p className="text-lg font-medium text-stone-gray italic">
              &quot;No solo te mostramos Tenerife—te dejamos experimentar su alma.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Por Qué Elegir <span className="text-sunset-orange">Soul Jeep</span>?
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto">
            Estamos comprometidos a ofrecer experiencias excepcionales que combinan aventura,
            seguridad y exploración auténtica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.features.map((feature, index) => (
            <div
              key={index}
              className="bg-sand-beige rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-sunset-orange flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature}</h3>
              <p className="text-stone-gray">
                Experimenta un servicio premium y atención al detalle en cada etapa de tu viaje.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Values */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-ocean-blue">Valores</span>
          </h2>
          <p className="text-xl text-stone-gray max-w-2xl mx-auto">
            Los principios que guían todo lo que hacemos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sunset-orange to-sunset-gold flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-stone-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Conoce Nuestro <span className="text-sunset-orange">Equipo</span>
          </h2>
          <p className="text-xl text-stone-gray mb-8">
            Nuestro apasionado equipo de entusiastas de la aventura y expertos locales está dedicado
            a hacer que tu experiencia en Tenerife sea inolvidable. Con profundo conocimiento de la
            isla y un compromiso con el servicio excepcional, estamos aquí para guiarte en
            el viaje de tu vida.
          </p>
          <div className="inline-flex items-center gap-2 bg-sand-beige rounded-lg px-6 py-3">
            <Users className="w-5 h-5 text-sunset-orange" />
            <span className="font-medium text-stone-gray">
              Guías experimentados | Experiencia local | Apasionados por la aventura
            </span>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="sand" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Licenciados y <span className="text-ocean-blue">Certificados</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInfo.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <Award className="w-10 h-10 text-sunset-orange mx-auto mb-3" />
                <p className="font-semibold text-stone-gray">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-sunset-orange">Experimentar</span> la Diferencia?
          </h2>
          <p className="text-xl text-stone-gray mb-8">
            Únete a nosotros para una aventura inolvidable en Jeep por los paisajes más espectaculares de Tenerife.
            Reserva tu tour hoy y descubre por qué los viajeros eligen Soul Jeep Experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="group">
                Reserva Tu Aventura
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/tours">
              <Button variant="outline" size="lg">
                Explorar Tours
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
