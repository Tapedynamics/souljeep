import Image from 'next/image';
import Link from 'next/link';
import { Star, ExternalLink } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getGoogleReviews, type GoogleReview } from '@/lib/google-reviews';

function StarRow({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const px = size === 'md' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${px} ${i < Math.round(rating) ? 'text-sunset-gold fill-sunset-gold' : 'text-stone-gray/30 fill-transparent'}`}
        />
      ))}
    </div>
  );
}

function Avatar({ review }: { review: GoogleReview }) {
  if (review.authorPhoto) {
    return (
      <Image
        src={review.authorPhoto}
        alt={review.authorName}
        width={48}
        height={48}
        className="rounded-full object-cover w-12 h-12"
        unoptimized
      />
    );
  }
  const initial = (review.authorName || 'G').trim().charAt(0).toUpperCase();
  return (
    <div className="w-12 h-12 rounded-full bg-ocean-blue text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
      {initial}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
  );
}

export default async function ReviewsSection() {
  const data = await getGoogleReviews('es');
  const t = await getTranslations('home.reviews');

  if (!data) {
    return null;
  }

  const { rating, userRatingCount, googleMapsUri, reviews } = data;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
          <GoogleLogo />
          <span className="text-sm font-semibold text-stone-gray">{t('badge')}</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t('title')}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-stone-gray">{rating.toFixed(1)}</span>
            <StarRow rating={rating} size="md" />
          </div>
          {userRatingCount > 0 && (
            <span className="text-stone-gray">
              {t('basedOn', { count: userRatingCount })}
            </span>
          )}
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, idx) => (
            <article
              key={`${review.authorName}-${idx}`}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <Avatar review={review} />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-stone-gray truncate">
                    {review.authorName}
                  </div>
                  {review.relativeTime && (
                    <div className="text-xs text-stone-gray/70">{review.relativeTime}</div>
                  )}
                </div>
                <GoogleLogo />
              </div>
              <StarRow rating={review.rating} />
              <p className="mt-3 text-stone-gray/90 leading-relaxed text-sm whitespace-pre-line line-clamp-6">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      )}

      {googleMapsUri && (
        <div className="text-center">
          <Link
            href={googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {t('viewAll')}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
