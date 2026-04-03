declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

/**
 * Track CTA clicks with category
 */
export function trackCTA(ctaName: string, destination: string) {
  trackEvent('cta_click', 'conversion', `${ctaName} → ${destination}`);
}

/**
 * Read UTM params from current URL
 */
export function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const result: Record<string, string> = {};

  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) {
      // Sanitize: only allow alphanumeric, hyphens, underscores, dots
      result[key] = value.replace(/[^a-zA-Z0-9_\-\.]/g, '');
    }
  }

  return result;
}

/**
 * Append UTM params from current URL to an external link
 * Useful for preserving attribution when linking to FareHarbor/WhatsApp
 */
export function appendUTMToUrl(url: string): string {
  if (typeof window === 'undefined') return url;

  const utmParams = getUTMParams();
  if (Object.keys(utmParams).length === 0) return url;

  try {
    const urlObj = new URL(url);
    for (const [key, value] of Object.entries(utmParams)) {
      urlObj.searchParams.set(key, value);
    }
    return urlObj.toString();
  } catch {
    // If URL parsing fails (e.g. WhatsApp deep links), return original
    return url;
  }
}
