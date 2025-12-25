'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { companyInfo } from '@/data/company';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/tours', label: t('tours') },
    { href: '/gallery', label: t('gallery') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <div className="bg-white rounded-xl px-2 py-1 shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Soul Jeep Experience"
                width={280}
                height={80}
                className="h-14 md:h-16 w-auto object-contain"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden text-2xl font-bold">
                <span className="text-stone-gray">SOUL</span>
                <span className="text-sunset-orange">JEEP</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-sunset-gold transition-colors font-medium drop-shadow-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={companyInfo.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-sunset-gold transition-colors drop-shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{companyInfo.contact.phone}</span>
            </a>

            <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" className="shadow-2xl">
                {t('bookNow')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-sunset-gold transition-colors drop-shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 bg-white/95 backdrop-blur-sm -mx-4 px-4 rounded-b-2xl shadow-xl">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-stone-gray hover:text-sunset-orange transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={companyInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-ocean-blue font-medium"
              >
                <Phone className="w-4 h-4" />
                {companyInfo.contact.phone}
              </a>
              <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" className="w-full">
                  {t('bookNow')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
