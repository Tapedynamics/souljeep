'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Tour } from '@/data/tours';
import Button from '@/components/ui/Button';
import { Clock, Users, Euro } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const tCommon = useTranslations('common');
  const tTours = useTranslations('tourDetail');

  // Map tour slug to translation key
  const tourKey = tour.slug === 'teide-sunset' ? 'sunset' :
                  tour.slug === 'teide-by-day' ? 'teide' :
                  tour.slug === 'coastal-tour' ? 'coastal' : 'coastal';

  const title = tTours(`${tourKey}.title`);
  const description = tTours(`${tourKey}.description`);
  const duration = tTours(`${tourKey}.duration`);
  const groupSize = tTours(`${tourKey}.groupSize`);

  // Get first 3 highlights
  const highlights = [
    tTours(`${tourKey}.highlight1`),
    tTours(`${tourKey}.highlight2`),
    tTours(`${tourKey}.highlight3`),
  ];

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <Image
          src={tour.images.hero}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 z-20 bg-sunset-orange text-white px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-medium">{tCommon('from')}</span>
          <span className="text-2xl font-bold ml-1">€{tour.price.oneTwo}</span>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sand-beige text-sm">{tour.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Info Icons */}
        <div className="flex items-center gap-4 mb-3 text-sm text-stone-gray">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-sunset-orange" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-sunset-orange" />
            <span>{groupSize}</span>
          </div>
        </div>

        <p className="text-stone-gray mb-4 line-clamp-2 text-sm">{description}</p>

        {/* Highlights */}
        <div className="mb-4">
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-stone-gray flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sunset-orange flex-shrink-0"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link href={`/tours/${tour.slug}`} className="flex-1">
            <Button variant="outline" size="md" className="w-full">
              {tCommon('learnMore')}
            </Button>
          </Link>
          <Link href={tour.fareharbor} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="primary" size="md" className="w-full">
              {tCommon('bookNow')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
