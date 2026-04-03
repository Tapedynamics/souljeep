'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { companyInfo } from '@/data/company';

export default function HeroContent() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 animate-fade-in leading-tight">
          {t('hero.title')}<br />
          <span className="text-sunset-gold">{t('hero.highlightText')}</span>
        </h1>
        <p className="text-lg md:text-2xl mb-2 text-white font-semibold">
          {t('hero.tagline')}
        </p>
        <p className="text-base md:text-xl mb-8 text-sand-beige max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTAs - 3 bottoni stessa grandezza, ordine mobile: WhatsApp > Reserva > Tours */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-lg sm:max-w-none mx-auto">
          {/* WhatsApp - primo su mobile, terzo su desktop */}
          <Link href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="order-first sm:order-last w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              {t('hero.whatsappCta')}
            </button>
          </Link>
          {/* Reserva - segundo */}
          <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer" className="order-2 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-sunset-orange hover:bg-sunset-gold text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-sunset-orange/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
              {tCommon('bookYourAdventure')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          {/* Ver Tours - tercero su mobile, primo su desktop */}
          <Link href="/tours" className="order-3 sm:order-first w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white/15 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-stone-gray font-bold text-lg px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
              {t('hero.cta')}
            </button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mx-auto w-fit">
          <Star className="w-4 h-4 text-sunset-gold fill-sunset-gold" />
          <Star className="w-4 h-4 text-sunset-gold fill-sunset-gold" />
          <Star className="w-4 h-4 text-sunset-gold fill-sunset-gold" />
          <Star className="w-4 h-4 text-sunset-gold fill-sunset-gold" />
          <Star className="w-4 h-4 text-sunset-gold fill-sunset-gold" />
          <span className="ml-1 text-sm font-medium">5 Estrellas en Google</span>
        </div>
      </div>
    </div>
  );
}
