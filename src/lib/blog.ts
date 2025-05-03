// src/lib/blog.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Function to get all blog posts
export async function getAllBlogPosts() {
    const blogDirectory = path.join(process.cwd(), 'content/blog');
//  const filenames = fs.readdirSync(blogDirectory);
    const filenames = await fs.readdir(blogDirectory);

    const allPosts = await Promise.all(
        filenames.map(async (filename) => {
          const filePath = path.join(blogDirectory, filename);
          const fileContent = await fs.readFile(filePath, 'utf-8');
    
          const { data, content } = matter(fileContent);
          return {
            id: filename.replace(/\.md$/, ''),
            slug: data.slug,
            title: data.title,
            category: data.category,
            date: data.date,
            imageSrc: data.imageSrc,
            content,
          };
        })
  );

  return allPosts;
}
