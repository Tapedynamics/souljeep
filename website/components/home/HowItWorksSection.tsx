'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/common/AnimatedSection';

const steps = [
  { number: 1, gradient: 'from-sunset-orange to-sunset-gold', lineGradient: 'from-sunset-orange' },
  { number: 2, gradient: 'from-ocean-blue to-adventure-green', lineGradient: 'from-ocean-blue' },
  { number: 3, gradient: 'from-adventure-green to-ocean-blue', lineGradient: 'from-adventure-green' },
  { number: 4, gradient: 'from-sunset-gold to-sunset-orange', lineGradient: '' },
] as const;

export default function HowItWorksSection() {
  const t = useTranslations('home.howItWorks');

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t('title')} <span className="text-sunset-orange">{t('highlight')}</span>
        </h2>
        <p className="text-lg md:text-xl text-stone-gray max-w-3xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <AnimatedSection key={step.number} animation="fadeUp" delay={index * 0.1}>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                {step.lineGradient && (
                  <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r ${step.lineGradient} to-transparent hidden lg:block`}></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{t(`step${step.number}Title` as any)}</h3>
              <p className="text-base text-stone-gray leading-relaxed">
                {t(`step${step.number}Description` as any)}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
