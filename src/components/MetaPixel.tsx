'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '4528939364024228';

// Declare fbq on window for TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

/**
 * Fire a Meta Pixel standard or custom event.
 * Call this from anywhere — safely no-ops if pixel isn't loaded.
 */
export function pixelEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', eventName, params ?? {});
}

/**
 * MetaPixel SPA route tracker.
 * The base script is loaded in RootLayout HTML for instant detection by Meta Pixel Helper.
 * This client component tracks subsequent SPA navigations.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Track pageviews on SPA route changes (skip initial load as base script already fired it)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}
