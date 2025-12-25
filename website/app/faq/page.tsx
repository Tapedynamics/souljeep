'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, ArrowRight, Phone, Mail, MessageCircle, HelpCircle, BookOpen, CreditCard, Cloud } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import DynamicHero from '@/components/common/DynamicHero';
import { faq, companyInfo } from '@/data/company';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Categorize FAQ items
  const categorizedFAQs: { [key: string]: FAQItem[] } = {
    'General': [
      { ...faq[0], category: 'General' },
      { ...faq[4], category: 'General' },
      { ...faq[6], category: 'General' },
      { ...faq[7], category: 'General' },
    ],
    'Reservas y Pagos': [
      { ...faq[2], category: 'Reservas y Pagos' },
      { ...faq[5], category: 'Reservas y Pagos' },
    ],
    'Tours y Clima': [
      { ...faq[3], category: 'Tours y Clima' },
    ],
    'Conductores y Requisitos': [
      { ...faq[1], category: 'Conductores y Requisitos' },
    ]
  };

  // Flatten all FAQs for searching
  const allFAQs = Object.values(categorizedFAQs).flat();

  // Filter FAQs based on search
  const filteredFAQs = searchQuery.trim()
    ? allFAQs.filter(
        item =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const floatingCards = [
    {
      icon: <HelpCircle className="w-6 h-6" />,
      text: "Info General",
      position: { top: "15%", left: "8%" },
      delay: 0.2
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Tours y Clima",
      position: { top: "25%", right: "12%" },
      delay: 0.4
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      text: "Reservas y Pagos",
      position: { bottom: "20%", left: "10%" },
      delay: 0.6
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      text: "Requisitos",
      position: { bottom: "30%", right: "15%" },
      delay: 0.8
    },
  ];

  return (
    <>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Preguntas "
        highlightText="Frecuentes"
        subtitle="Todo lo que necesitas saber sobre nuestras aventuras en Jeep en Tenerife"
        floatingCards={floatingCards}
        height="h-[45vh]"
      />

      {/* Search Section */}
      <Section background="white" padding="lg">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-gray/50" />
            <input
              type="text"
              placeholder="Buscar respuestas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-stone-gray/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 focus:border-sunset-orange transition-colors text-lg"
              aria-label="Buscar FAQs"
            />
          </div>
          {searchQuery && (
            <p className="mt-3 text-sm text-stone-gray">
              {filteredFAQs && filteredFAQs.length > 0
                ? `${filteredFAQs.length} resultado${filteredFAQs.length !== 1 ? 's' : ''} encontrado${filteredFAQs.length !== 1 ? 's' : ''}`
                : 'No se encontraron resultados. Prueba con otras palabras.'}
            </p>
          )}
        </div>
      </Section>

      {/* FAQ Accordion */}
      <Section background="gradient" padding="xl">
        {filteredFAQs ? (
          // Show search results
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Resultados de Búsqueda</h2>
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-sand-beige/30 transition-colors"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-lg pr-8">{item.question}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-sunset-orange flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-stone-gray leading-relaxed">
                      <span className="inline-block px-3 py-1 bg-ocean-blue/10 text-ocean-blue rounded-full text-xs font-medium mb-3">
                        {item.category}
                      </span>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Show categorized FAQs
          <div className="max-w-4xl mx-auto">
            {Object.entries(categorizedFAQs).map(([category, items], categoryIndex) => (
              <div key={category} className="mb-12 last:mb-0">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-sunset-orange flex items-center justify-center text-white text-lg">
                    {categoryIndex + 1}
                  </span>
                  <span className="text-stone-gray">{category}</span>
                </h2>

                <div className="space-y-4">
                  {items.map((item, itemIndex) => {
                    // Create a unique index for each FAQ item
                    const globalIndex = allFAQs.findIndex(
                      faqItem => faqItem.question === item.question
                    );

                    return (
                      <div
                        key={itemIndex}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <button
                          onClick={() => toggleAccordion(globalIndex)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-sand-beige/30 transition-colors group"
                          aria-expanded={openIndex === globalIndex}
                          aria-controls={`faq-answer-${globalIndex}`}
                        >
                          <span className="font-semibold text-lg pr-8 group-hover:text-sunset-orange transition-colors">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-6 h-6 text-sunset-orange flex-shrink-0 transition-transform duration-300 ${
                              openIndex === globalIndex ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          id={`faq-answer-${globalIndex}`}
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === globalIndex ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-5 text-stone-gray leading-relaxed border-t border-stone-gray/10">
                            <p className="pt-4">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Still Have Questions */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Aún Tienes <span className="text-sunset-orange">Preguntas</span>?
            </h2>
            <p className="text-lg text-stone-gray">
              ¡Nuestro equipo está aquí para ayudarte! Contáctanos y te responderemos lo antes posible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <Link
              href={`tel:${companyInfo.contact.phone}`}
              className="bg-sand-beige rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-full bg-ocean-blue flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Llámanos</h3>
              <p className="text-stone-gray mb-2">{companyInfo.contact.phone}</p>
              <p className="text-sm text-stone-gray/70">{companyInfo.contact.phoneHours}</p>
            </Link>

            {/* Email */}
            <Link
              href={`mailto:${companyInfo.contact.email}`}
              className="bg-sand-beige rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-full bg-sunset-orange flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Escríbenos</h3>
              <p className="text-stone-gray mb-2">{companyInfo.contact.email}</p>
              <p className="text-sm text-stone-gray/70">Respuesta en 24h</p>
            </Link>

            {/* WhatsApp */}
            <Link
              href={companyInfo.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand-beige rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-full bg-adventure-green flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <p className="text-stone-gray mb-2">Mensajería instantánea</p>
              <p className="text-sm text-stone-gray/70">Respuestas rápidas</p>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Ir a Contacto
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="sand" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-sunset-orange">Reservar</span> Tu Aventura?
          </h2>
          <p className="text-xl text-stone-gray mb-8">
            ¿Todas las preguntas respondidas? ¡Genial! Reserva tu experiencia en Jeep Wrangler ahora y
            prepárate para la aventura de tu vida en Tenerife.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="group">
                Reservar Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/tours">
              <Button variant="outline" size="lg">
                Ver Tours
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
