// components/sections/Blog/BlogSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  imageSrc: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="mt-12 pb-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-red-600">Blog</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Insights, tutorials, and updates to ignite your STEAM journey.
        </p>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts
        // .sort((a, b) => parseInt(b.id) - parseInt(a.id))
        .map((post) => (
    <div key={post.id} className="flex flex-col">
      <Link href={`/blog/${post.slug}`} className="overflow-hidden rounded-lg">
        <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
        <Image 
          src={post.imageSrc} 
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        </div>
      </Link>
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-green-700 font-medium">{post.category}</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">{post.date}</span>
      </div>
      <Link href={`/blog/${post.slug}`} className="block">
        <h3 className="text-xl font-bold hover:text-green-800 transition-colors">
        {post.title}
        </h3>
      </Link>
    </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;