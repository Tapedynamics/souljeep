'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { companyInfo } from '@/data/company';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tCompany = useTranslations('company');

  return (
    <footer className="bg-stone-gray text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-sunset-orange">SOUL</span>
              <span className="text-white ml-1">JEEP</span>
            </h3>
            <p className="text-sand-beige mb-4">{tCompany('tagline')}</p>
            <p className="text-sm text-gray-300">{tCompany('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  {t('ourTours')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  {tNav('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sand-beige hover:text-sunset-orange transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="flex items-start gap-2 text-sand-beige hover:text-sunset-orange transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>{companyInfo.contact.phone}</div>
                    <div className="text-xs text-gray-400">{companyInfo.contact.phoneHours}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-2 text-sand-beige hover:text-sunset-orange transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sand-beige">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div>{companyInfo.location.address}</div>
                    <div>{companyInfo.location.addressLine2}</div>
                    <div>{companyInfo.location.city}, {companyInfo.location.postalCode}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-bold mb-4 text-lg">{t('followUs')}</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href={companyInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-sand-beige">
              <p className="font-semibold mb-2">{t('openingHours')}</p>
              <p>{t('mondayToSunday')}</p>
              <p>{companyInfo.hours.monday}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-6 text-center text-sm text-gray-400">
          <p>{t('copyright', { year: new Date().getFullYear(), companyName: tCompany('name') })}</p>
          <p className="mt-2">
            {t('madeWith')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
