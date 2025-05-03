// app/blog/[slug]/page.tsx

import { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { getAllBlogPosts } from '@/lib/blog';
import Image from 'next/image';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

// Props now expects params as a Promise
interface Props {
  params: Promise<{ slug: string }>;
}

// Dynamic metadata must also await params
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;                                       // ✅ await params before use :contentReference[oaicite:0]{index=0}
  const blogPosts = await getAllBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'NexoraTLX - Blog',
    };
  }

  return {
    title: `NexoraTLX - ${post.title}`,
    description: `Read about ${post.title} on the NexoraTLX blog.`,
  };
}

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;                                       // ✅ await params before use :contentReference[oaicite:1]{index=1}
  const blogPosts = await getAllBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  // Convert markdown to HTML with GFM support
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(post.content);
  let contentHtml = processed.toString();

  // Inject Tailwind classes (unchanged)
  contentHtml = contentHtml
    .replace(/<h1>/g, '<h1 class="text-3xl font-bold mt-6 mb-4">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mt-5 mb-3">')
    .replace(/<h3>/g, '<h3 class="text-xl font-medium mt-4 mb-2">')
    .replace(/<p>/g, '<p class="mb-4 text-lg text-gray-700">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4">')
    .replace(/<li>/g, '<li class="ml-6">')
    .replace(/<a /g, '<a class="text-blue-500 hover:underline" ')
    .replace(/<img /g, '<img class="max-w-full h-auto rounded-lg mb-4" ')
    .replace(/<pre>/g, '<pre class="bg-gray-800 text-white p-4 rounded-lg mb-4">')
    .replace(/<code>/g, '<code class="bg-gray-200 p-1 rounded">')
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">')
    .replace(/<table>/g, '<table class="table-auto border-collapse w-full mb-6">')
    .replace(/<thead>/g, '<thead class="bg-gray-100">')
    .replace(/<th>/g, '<th class="text-left border px-4 py-2">')
    .replace(/<td>/g, '<td class="border px-4 py-2">')
    .replace(/<tr>/g, '<tr class="even:bg-gray-50">')
    .replace(/<hr>/g, '<hr class="my-6 border-gray-300" />')
    .replace(/<strong>/g, '<strong class="font-semibold text-gray-900">')
    .replace(/<em>/g, '<em class="italic text-gray-600">');

  return (
    <main className="w-full min-h-screen max-w-3xl mx-auto px-5 py-16">
      <article className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="text-green-700 font-medium">{post.category}</span> •{' '}
          <span>{post.date}</span>
        </div>
        <div className="relative w-full h-96 mt-4 mb-6">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div
          className="text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
