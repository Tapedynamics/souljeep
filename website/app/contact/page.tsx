'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { MapPin, MessageCircle, Mail, Clock, Send, CheckCircle, Instagram, Facebook, ExternalLink, Youtube } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import DynamicHero from '@/components/common/DynamicHero';
import { companyInfo } from '@/data/company';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un email válido';
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone && formData.phone.trim().length > 0) {
      const phoneRegex = /^[+]?[\d\s\-()]{8,}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Por favor, introduce un teléfono válido';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In production, replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visítanos',
      content: `${companyInfo.location.address}, ${companyInfo.location.addressLine2}`,
      subContent: `${companyInfo.location.city}, ${companyInfo.location.postalCode}`,
      link: `https://www.google.com/maps?q=${companyInfo.location.coordinates.lat},${companyInfo.location.coordinates.lng}`,
      linkText: 'Cómo Llegar'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Mensajería instantánea',
      subContent: `Disponible ${companyInfo.contact.phoneHours}`,
      link: companyInfo.contact.whatsappLink,
      linkText: 'Abrir WhatsApp',
      external: true
    },
    {
      icon: Mail,
      title: 'Escríbenos',
      content: companyInfo.contact.email,
      subContent: 'Respondemos en 24 horas',
      link: `mailto:${companyInfo.contact.email}`,
      linkText: 'Enviar Email'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Abierto Todos los Días',
      subContent: companyInfo.hours.monday,
      link: null,
      linkText: null
    }
  ];

  const floatingCards = [
    {
      icon: <MapPin className="w-6 h-6" />,
      text: "Costa Adeje, Tenerife",
      position: { top: "18%", left: "10%" },
      delay: 0.2
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      text: "WhatsApp",
      position: { top: "28%", right: "12%" },
      delay: 0.4
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Abierto 9:00 - 22:00",
      position: { bottom: "22%", left: "8%" },
      delay: 0.6
    },
    {
      icon: <Mail className="w-6 h-6" />,
      text: "Respuesta Rápida",
      position: { bottom: "32%", right: "10%" },
      delay: 0.8
    },
  ];

  return (
    <>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Ponte en "
        highlightText="Contacto"
        subtitle="¿Tienes preguntas? Estamos aquí para ayudarte a planificar tu aventura perfecta en Tenerife"
        floatingCards={floatingCards}
        height="h-[45vh]"
        backgroundImage="/images/hero/coastal-jeep-hero.jpg"
      />

      {/* Contact Info Cards */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-sand-beige rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-sunset-orange flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                <p className="text-stone-gray font-medium mb-1">{info.content}</p>
                <p className="text-sm text-stone-gray/70 mb-3">{info.subContent}</p>
                {info.link && info.linkText && (
                  <Link
                    href={info.link}
                    target={info.icon === MapPin || info.icon === MessageCircle ? '_blank' : undefined}
                    rel={info.icon === MapPin || info.icon === MessageCircle ? 'noopener noreferrer' : undefined}
                    className="text-sunset-orange hover:text-sunset-gold text-sm font-medium inline-flex items-center gap-1"
                  >
                    {info.linkText}
                    {(info.icon === MapPin || info.icon === MessageCircle) && <ExternalLink className="w-3 h-3" />}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contact Form & Map Section */}
      <Section background="gradient" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-2">Envíanos un Mensaje</h2>
            <p className="text-stone-gray mb-6">
              Completa el formulario y te responderemos lo antes posible
            </p>

            {submitSuccess && (
              <div className="mb-6 bg-adventure-green/10 border border-adventure-green rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-adventure-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-adventure-green">¡Mensaje enviado correctamente!</p>
                  <p className="text-sm text-stone-gray mt-1">Te responderemos en menos de 24 horas.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nombre Completo <span className="text-volcano-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 transition-colors ${
                    errors.name ? 'border-volcano-red' : 'border-stone-gray/20'
                  }`}
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-volcano-red">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Correo Electrónico <span className="text-volcano-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 transition-colors ${
                    errors.email ? 'border-volcano-red' : 'border-stone-gray/20'
                  }`}
                  placeholder="tu@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-volcano-red">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Teléfono <span className="text-stone-gray/60 text-xs">(Opcional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 transition-colors ${
                    errors.phone ? 'border-volcano-red' : 'border-stone-gray/20'
                  }`}
                  placeholder="+34 822 68 45 04"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-volcano-red">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Mensaje <span className="text-volcano-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunset-orange/50 transition-colors resize-none ${
                    errors.message ? 'border-volcano-red' : 'border-stone-gray/20'
                  }`}
                  placeholder="Cuéntanos sobre tus planes de aventura o haznos tus preguntas..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-volcano-red">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Embedded Map */}
            <div className="bg-white rounded-2xl p-2 shadow-xl h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5!2d${companyInfo.location.coordinates.lng}!3d${companyInfo.location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA1JzM1LjIiTiAxNsKwNDQnMTYuMSJX!5e0!3m2!1sen!2ses!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Soul Jeep Experience Location"
              />
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Sigue Nuestras Aventuras</h3>
              <p className="text-stone-gray mb-6">
                Síguenos en redes sociales para ver los últimos tours, consejos y fotos espectaculares de Tenerife
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg p-3 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold text-sm">Instagram</span>
                </Link>
                <Link
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] text-white rounded-lg p-3 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-semibold text-sm">Facebook</span>
                </Link>
                <Link
                  href={companyInfo.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white rounded-lg p-3 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="font-semibold text-sm">TikTok</span>
                </Link>
                <Link
                  href={companyInfo.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF0000] text-white rounded-lg p-3 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="font-semibold text-sm">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Enlaces Rápidos</h3>
              <div className="space-y-3">
                <Link
                  href="/faq"
                  className="block text-sunset-orange hover:text-sunset-gold font-medium transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
                <Link
                  href="/tours"
                  className="block text-sunset-orange hover:text-sunset-gold font-medium transition-colors"
                >
                  Ver Todos los Tours
                </Link>
                <Link
                  href={companyInfo.fareharbor.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sunset-orange hover:text-sunset-gold font-medium transition-colors"
                >
                  Reservar Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WhatsApp CTA */}
      <Section background="sand" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Prefieres Chatear por <span className="text-adventure-green">WhatsApp</span>?
          </h2>
          <p className="text-lg text-stone-gray mb-6">
            Obtén respuestas instantáneas a tus preguntas y reserva tu tour directamente por WhatsApp
          </p>
          <Link
            href={companyInfo.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" className="bg-adventure-green hover:bg-adventure-green/90">
              Escríbenos por WhatsApp
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
