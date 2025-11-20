'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook, ExternalLink } from 'lucide-react';
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
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone && formData.phone.trim().length > 0) {
      const phoneRegex = /^[+]?[\d\s\-()]{8,}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
      title: 'Visit Us',
      content: `${companyInfo.location.address}, ${companyInfo.location.addressLine2}`,
      subContent: `${companyInfo.location.city}, ${companyInfo.location.postalCode}`,
      link: `https://www.google.com/maps?q=${companyInfo.location.coordinates.lat},${companyInfo.location.coordinates.lng}`,
      linkText: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: companyInfo.contact.phone,
      subContent: `Available ${companyInfo.contact.phoneHours}`,
      link: `tel:${companyInfo.contact.phone}`,
      linkText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: companyInfo.contact.email,
      subContent: 'We reply within 24 hours',
      link: `mailto:${companyInfo.contact.email}`,
      linkText: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Open Daily',
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
      icon: <Phone className="w-6 h-6" />,
      text: "+34 822 68 45 04",
      position: { top: "28%", right: "12%" },
      delay: 0.4
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Open Daily 9:00 - 22:00",
      position: { bottom: "22%", left: "8%" },
      delay: 0.6
    },
    {
      icon: <Mail className="w-6 h-6" />,
      text: "Quick Response",
      position: { bottom: "32%", right: "10%" },
      delay: 0.8
    },
  ];

  return (
    <>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Get in "
        highlightText="Touch"
        subtitle="Have questions? We're here to help plan your perfect Tenerife adventure"
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
                    target={info.icon === MapPin ? '_blank' : undefined}
                    rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                    className="text-sunset-orange hover:text-sunset-gold text-sm font-medium inline-flex items-center gap-1"
                  >
                    {info.linkText}
                    {info.icon === MapPin && <ExternalLink className="w-3 h-3" />}
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
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-stone-gray mb-6">
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </p>

            {submitSuccess && (
              <div className="mb-6 bg-adventure-green/10 border border-adventure-green rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-adventure-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-adventure-green">Message sent successfully!</p>
                  <p className="text-sm text-stone-gray mt-1">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name <span className="text-volcano-red">*</span>
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
                  placeholder="John Doe"
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
                  Email Address <span className="text-volcano-red">*</span>
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
                  placeholder="john@example.com"
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
                  Phone Number <span className="text-stone-gray/60 text-xs">(Optional)</span>
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
                  Message <span className="text-volcano-red">*</span>
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
                  placeholder="Tell us about your adventure plans or ask any questions..."
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
                  'Sending...'
                ) : (
                  <>
                    Send Message
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
              <h3 className="text-2xl font-bold mb-4">Follow Our Adventures</h3>
              <p className="text-stone-gray mb-6">
                Stay connected with us on social media for the latest tours, tips, and stunning photos from Tenerife
              </p>
              <div className="flex gap-4">
                <Link
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg p-4 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-semibold">Instagram</span>
                </Link>
                <Link
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#1877F2] text-white rounded-lg p-4 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-semibold">Facebook</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="/faq"
                  className="block text-sunset-orange hover:text-sunset-gold font-medium transition-colors"
                >
                  Frequently Asked Questions
                </Link>
                <Link
                  href="/tours"
                  className="block text-sunset-orange hover:text-sunset-gold font-medium transition-colors"
                >
                  Browse All Tours
                </Link>
                <Link
                  href={companyInfo.fareharbor.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sunset-orange hover:text-sunset-gold font-medium transition-colors"
                >
                  Book Online Now
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
            Prefer to Chat on <span className="text-adventure-green">WhatsApp</span>?
          </h2>
          <p className="text-lg text-stone-gray mb-6">
            Get instant answers to your questions and book your tour directly through WhatsApp
          </p>
          <Link
            href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/[\s+]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg" className="bg-adventure-green hover:bg-adventure-green/90">
              Message us on WhatsApp
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
