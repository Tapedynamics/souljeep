'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Shield, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { companyInfo } from '@/data/company';

export default function HeroContent() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          {t('hero.title')}<br />
          <span className="text-sunset-gold">{t('hero.highlightText')}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-sand-beige max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTAs - 3 bottoni ben visibili */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="lg"
              className="bg-sunset-orange hover:bg-sunset-gold text-white text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-sunset-orange/50 transition-all duration-300 hover:scale-105 group"
            >
              {tCommon('bookYourAdventure')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <Link href="/tours">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-stone-gray text-lg px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta')}
            </Button>
          </Link>
          <Link href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="bg-[#25D366]/20 backdrop-blur-md border-2 border-[#25D366] text-white hover:bg-[#25D366] text-lg px-10 py-4 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              {t('hero.whatsappCta')}
            </Button>
          </Link>
        </div>

        {/* Trust Indicators compatti */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
            <Shield className="w-4 h-4 text-sunset-gold" />
            <span>{t('whyChooseUs.reason4Title')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
            <Star className="w-4 h-4 text-sunset-gold" />
            <span>4.9/5 TripAdvisor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
