'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Users, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import PromoBanner from '@/components/home/PromoBanner';
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
        </div>

        {/* Promo Banner - Febbraio */}
        <div className="flex justify-center mb-8">
          <PromoBanner />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
            <Shield className="w-5 h-5 text-sunset-gold" />
            <span className="font-medium">{t('whyChooseUs.reason4Title')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
            <Users className="w-5 h-5 text-sunset-gold" />
            <span className="font-medium">{t('whyChooseUs.reason3Title')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
            <Star className="w-5 h-5 text-sunset-gold" />
            <span className="font-medium">{t('hero.premiumExperience')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
