'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { GA_ID, pageview } from '@/lib/gtag';

/**
 * Inner component that reads search params (must be wrapped in Suspense).
 * Fires a page_view event on every client-side navigation.
 */
function GANavigationTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;
    const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

/**
 * GoogleAnalytics component.
 * Drop this once into layout.tsx — it loads GA4 exactly once and
 * tracks all client-side page navigations automatically.
 * Renders nothing if NEXT_PUBLIC_GA_ID is not set (safe for local dev).
 */
export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* Load the GA4 gtag.js script — strategy="afterInteractive" prevents blocking render */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {/* Initialize dataLayer and configure the measurement ID */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
      {/* Track SPA route changes — wrapped in Suspense per Next.js 14 requirement */}
      <Suspense fallback={null}>
        <GANavigationTracker />
      </Suspense>
    </>
  );
}
