'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { companyInfo } from '@/data/company';

export default function FeaturedToursCTA() {
  const t = useTranslations('home.tours');

  return (
    <div className="text-center">
      <Link href={companyInfo.fareharbor.bookingUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="primary" size="lg" className="text-lg px-10 py-4 group">
          {t('bookAdventureNow')}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Button>
      </Link>
    </div>
  );
}
