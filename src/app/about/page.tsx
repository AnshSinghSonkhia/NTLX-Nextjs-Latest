// app/blog/page.tsx

import type { Metadata } from 'next';
import React from 'react';
import FooterBlock from '../../components/sections/About/FooterForAbout';
import { AboutNavbar } from '@/components/sections/About/AboutNavbar';
import ScrollToTopButton from '@/components/sections/ScrollToTop';
import { Features2 } from '../../components/sections/Features2';
import ContactSection from '@/components/sections/ContactSection';
import Team from '@/components/sections/About/Team';

export const metadata: Metadata = {
  title: 'About | Nexora TLX - Shaping the Future of STEAM Education',
  description:
    'Explore latest insights, research articles, and updates on STEAM education with Nexora TLX\'s curated blog posts.',
  openGraph: {
    title: 'About | Nexora TLX',
    description: 'Explore latest insights, research articles, and updates on STEAM education with Nexora TLX\'s curated blog posts.',
    url: 'https://nexoratlx.com/about',
    siteName: 'Nexora TLX',
    images: [
      {
        url: '/og/aboutOG.png',
        width: 1200,
        height: 630,
        alt: 'About NexoraTLX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function AboutPage() {

  return (
    <main className="w-full min-h-screen px-5 sm:px-10 md:px-12 lg:px-16 mx-auto max-w-7xl overflow-x-hidden">

      <AboutNavbar />

      <Features2 />

      <Team />

      <ContactSection />

      {/* <Faq /> */}
      <FooterBlock />
      <ScrollToTopButton />
    </main>
  );
}