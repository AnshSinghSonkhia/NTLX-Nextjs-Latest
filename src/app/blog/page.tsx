// app/blog/page.tsx

import type { Metadata } from 'next';
import React from 'react';
import FooterBlock from '../../components/sections/Blog/FooterForBlog';
import BlogSection from '../../components/sections/Blog/BlogSection';
import { getAllBlogPosts } from '../../lib/blog';
import { BlogNavbar } from '@/components/sections/Blog/BlogNavbar';
import ScrollToTopButton from '@/components/sections/ScrollToTop';

export const metadata: Metadata = {
  title: 'Blogs | Nexora TLX - Shaping the Future of STEAM Education',
  description:
    'Explore latest insights, research articles, and updates on STEAM education with Nexora TLX\'s curated blog posts.',
  openGraph: {
    title: 'Blogs | Nexora TLX',
    description: 'Latest articles and updates on STEAM education from Nexora TLX.',
    url: 'https://nexoratlx.com/blogs',
    siteName: 'Nexora TLX',
    images: [
      {
        url: '/og/blogsOG.png',
        width: 1200,
        height: 630,
        alt: 'Nexora TLX Blogs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function BlogsPage() {
  const blogPosts = await getAllBlogPosts();

  // Sort blog posts by `date` in decreasing order (latest posts first)
  const sortedBlogPosts = blogPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Latest date first
  });

  return (
    <main className="w-full min-h-screen px-5 sm:px-10 md:px-12 lg:px-16 mx-auto max-w-7xl overflow-x-hidden">

        <BlogNavbar />

      <BlogSection posts={sortedBlogPosts} />

      {/* <Faq /> */}
      <FooterBlock />
      <ScrollToTopButton />
    </main>
  );
}