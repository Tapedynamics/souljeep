import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/data/tours';
import Button from '@/components/ui/Button';
import { Clock, Users, Euro } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <Image
          src={tour.images.hero}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-2xl font-bold text-white mb-1">{tour.title}</h3>
          <p className="text-sand-beige text-sm">{tour.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-stone-gray mb-4 line-clamp-2">{tour.description}</p>

        {/* Info Icons */}
        <div className="flex items-center gap-4 mb-4 text-sm text-stone-gray">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>2-4 people</span>
          </div>
          <div className="flex items-center gap-1">
            <Euro className="w-4 h-4" />
            <span>From €{tour.price.twoPeople}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <ul className="space-y-1">
            {tour.highlights.slice(0, 3).map((highlight, index) => (
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
              Learn More
            </Button>
          </Link>
          <Link href={tour.fareharbor} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="primary" size="md" className="w-full">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
