'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/common/AnimatedSection';
import { companyInfo } from '@/data/company';

export default function FinalCTASection() {
  const t = useTranslations('home.cta');

  return (
    <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
      <AnimatedSection animation="fadeUp">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {t('title')} <span className="text-sunset-gold">{t('highlight')}</span>?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-sand-beige max-w-4xl mx-auto leading-relaxed">
          {t('subtitle', { hours: companyInfo.hours.monday })}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              size="lg"
              className="bg-sunset-orange hover:bg-sunset-gold text-white text-lg px-12 py-5 rounded-xl shadow-2xl hover:shadow-sunset-orange/50 transition-all duration-300 hover:scale-105 group"
            >
              {t('bookNow')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <Link href={companyInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-stone-gray border-2 border-white text-white text-lg px-12 py-5 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </Button>
          </Link>
        </div>

        {/* Location */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20">
          <MapPin className="w-5 h-5 text-sunset-gold" />
          <span className="font-medium text-base text-white">
            {companyInfo.location.addressLine2}, {companyInfo.location.city}
          </span>
        </div>
      </AnimatedSection>
    </div>
  );
}
