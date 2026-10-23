'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { GA_ID, pageview } from '@/lib/gtag';

/**
 * GoogleAnalytics SPA route tracker.
 * The base gtag script is loaded in RootLayout HTML for instant initialization.
 * This client component tracks subsequent SPA navigations safely without useSearchParams.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!GA_ID) return;
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const url = pathname + search;
    pageview(url);
  }, [pathname]);

  return null;
}
