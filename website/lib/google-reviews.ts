export type GoogleReview = {
  authorName: string;
  authorPhoto?: string;
  authorUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
};

export type GooglePlaceData = {
  rating: number;
  userRatingCount: number;
  googleMapsUri?: string;
  reviews: GoogleReview[];
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    text?: { text?: string; languageCode?: string };
    originalText?: { text?: string; languageCode?: string };
    relativePublishTimeDescription?: string;
    publishTime?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
};

export async function getGoogleReviews(
  languageCode: string = 'es'
): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=${encodeURIComponent(languageCode)}`;

  try {
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask':
          'displayName,rating,userRatingCount,googleMapsUri,reviews',
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return null;
    }

    const data: PlacesApiResponse = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .filter((r) => (r.text?.text || r.originalText?.text) && r.rating)
      .map((r) => ({
        authorName: r.authorAttribution?.displayName ?? 'Google User',
        authorPhoto: r.authorAttribution?.photoUri,
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 5,
        text: (r.text?.text ?? r.originalText?.text ?? '').trim(),
        relativeTime: r.relativePublishTimeDescription ?? '',
        publishTime: r.publishTime,
      }))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);

    return {
      rating: data.rating ?? 5,
      userRatingCount: data.userRatingCount ?? 0,
      googleMapsUri: data.googleMapsUri,
      reviews,
    };
  } catch {
    return null;
  }
}
