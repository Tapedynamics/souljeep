'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/common/AnimatedSection';

export default function StatsSection() {
  const t = useTranslations('home.stats');

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <AnimatedSection animation="fadeUp" delay={0}>
        <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">500+</div>
        <div className="text-base md:text-lg text-sand-beige">{t('adventurers')}</div>
      </AnimatedSection>
      <AnimatedSection animation="fadeUp" delay={0.1}>
        <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">3</div>
        <div className="text-base md:text-lg text-sand-beige">{t('routes')}</div>
      </AnimatedSection>
      <AnimatedSection animation="fadeUp" delay={0.2}>
        <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">100%</div>
        <div className="text-base md:text-lg text-sand-beige">{t('satisfaction')}</div>
      </AnimatedSection>
      <AnimatedSection animation="fadeUp" delay={0.3}>
        <div className="text-4xl md:text-5xl font-bold text-sunset-gold mb-2">5★</div>
        <div className="text-base md:text-lg text-sand-beige">{t('rating')}</div>
      </AnimatedSection>
    </div>
  );
}
