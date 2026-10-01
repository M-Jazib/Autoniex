import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomPageContent from '@/components/CustomPageContent';
import { DEFAULT_CUSTOM_PAGES } from '@/data/portfolioData';

// Generate static params for initial default pages for Next.js static export
export function generateStaticParams() {
  return DEFAULT_CUSTOM_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-bg text-text flex flex-col justify-between">
      <Navbar />
      <div className="pt-32 pb-24 flex-1">
        <CustomPageContent slug={params.slug} />
      </div>
      <Footer />
    </main>
  );
}
