'use client';

import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/common/AnimatedSection';

const features = [
  'feature1',
  'feature2',
  'feature3',
  'feature4',
  'feature5',
  'feature6',
] as const;

export default function WhyChooseUsSection() {
  const t = useTranslations('home.whyChooseUs');
  const tFeatures = useTranslations('home.features');

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t('mainTitle')} <span className="text-ocean-blue">{t('highlight')}</span>
        </h2>
        <p className="text-lg md:text-xl text-stone-gray max-w-3xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <AnimatedSection key={feature} animation="fadeUp" delay={index * 0.1}>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sunset-orange to-sunset-gold flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{tFeatures(feature)}</h3>
              <p className="text-base text-stone-gray leading-relaxed">
                {t('featureDescription')}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
