'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

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
  if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', eventName, params ?? {});
}

/**
 * MetaPixel component.
 * Drop once into layout.tsx — loads fbevents.js once and
 * fires a PageView on every client-side route change.
 * Safe no-op if NEXT_PUBLIC_META_PIXEL_ID is not set.
 */
export default function MetaPixel() {
  const pathname = usePathname();

  // Fire PageView on SPA navigation
  useEffect(() => {
    if (!PIXEL_ID || typeof window === 'undefined' || !window.fbq) return;
    window.fbq('track', 'PageView');
  }, [pathname]);

  if (!PIXEL_ID) return null;

  return (
    <>
      {/* Meta Pixel base code — loads fbevents.js after page is interactive */}
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      {/* NoScript fallback for browsers with JS disabled */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
