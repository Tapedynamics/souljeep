'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Tour } from '@/data/tours';
import Button from '@/components/ui/Button';
import { Clock, Users, Euro, ArrowRight, Check } from 'lucide-react';

interface FeaturedTourWideProps {
  tour: Tour;
}

export default function FeaturedTourWide({ tour }: FeaturedTourWideProps) {
  const tCommon = useTranslations('common');
  const tTours = useTranslations('tourDetail');

  const tourKey = tour.slug === 'teide-sunset' ? 'sunset' :
                  tour.slug === 'teide-by-day' ? 'teide' :
                  tour.slug === 'coastal-tour' ? 'coastal' : 'coastal';

  const title = tTours(`${tourKey}.title`);
  const description = tTours(`${tourKey}.description`);
  const duration = tTours(`${tourKey}.duration`);
  const groupSize = tTours(`${tourKey}.groupSize`);

  const highlights = [
    tTours(`${tourKey}.highlight1`),
    tTours(`${tourKey}.highlight2`),
    tTours(`${tourKey}.highlight3`),
    tTours(`${tourKey}.highlight4`),
  ];

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Image - left side */}
        <div className="relative md:w-1/2 h-64 md:h-auto md:min-h-[420px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent z-10"></div>
          <Image
            src={tour.images.hero}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Price Badge */}
          <div className="absolute top-4 right-4 z-20 bg-sunset-orange text-white px-5 py-2.5 rounded-full shadow-lg">
            <span className="text-sm font-medium">{tCommon('from')}</span>
            <span className="text-3xl font-bold ml-1">€{tour.price.oneTwo}</span>
          </div>
          {/* Title overlay on mobile */}
          <div className="absolute bottom-4 left-4 z-20 md:hidden">
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sand-beige text-sm">{tour.subtitle}</p>
          </div>
        </div>

        {/* Content - right side */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          {/* Title - desktop only */}
          <div className="hidden md:block mb-4">
            <h3 className="text-3xl font-bold text-stone-gray mb-1">{title}</h3>
            <p className="text-sunset-orange font-semibold text-lg">{tour.subtitle}</p>
          </div>

          {/* Info bar */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-stone-gray">
            <div className="flex items-center gap-1.5 bg-sand-beige/50 px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4 text-sunset-orange" />
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-sand-beige/50 px-3 py-1.5 rounded-full">
              <Users className="w-4 h-4 text-sunset-orange" />
              <span className="font-medium">{groupSize}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-sand-beige/50 px-3 py-1.5 rounded-full">
              <Euro className="w-4 h-4 text-sunset-orange" />
              <span className="font-medium">{tCommon('from')} €{tour.price.oneTwo}</span>
            </div>
          </div>

          <p className="text-stone-gray mb-5 leading-relaxed line-clamp-3">{description}</p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-stone-gray flex items-center gap-2.5">
                <Check className="w-4 h-4 text-adventure-green flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link href={`/tours/${tour.slug}`} className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                {tCommon('learnMore')}
              </Button>
            </Link>
            <Link href={tour.fareharbor} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" size="lg" className="w-full group/btn">
                {tCommon('bookNow')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
