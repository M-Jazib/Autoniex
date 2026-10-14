'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';
import { GA_ID, pageview } from '@/lib/gtag';

/**
 * Inner component that reads search params (wrapped in Suspense).
 * Fires a page_view event on client-side navigations after initial load.
 */
function GANavigationTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!GA_ID) return;
    const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

/**
 * GoogleAnalytics SPA route tracker.
 * The base gtag script is loaded in RootLayout HTML for instant initialization.
 * This client component tracks subsequent SPA navigations.
 */
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GANavigationTracker />
    </Suspense>
  );
}
