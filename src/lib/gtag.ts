// GA4 Measurement ID from environment variable — never hardcoded
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Declare gtag on the window object for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

/**
 * Send a GA4 page_view event.
 * Called on route changes in a SPA context.
 */
export function pageview(url: string): void {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_ID, {
    page_path: url,
  });
}

/**
 * Send a custom GA4 event.
 * No PII (names, emails, phones) should ever be passed here.
 */
export function event(
  action: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, params ?? {});
}
