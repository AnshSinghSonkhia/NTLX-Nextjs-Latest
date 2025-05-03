import fs from "fs";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

export default async function PrivacyPolicyPage() {
  // 1) load the markdown
  const filePath = path.join(
    process.cwd(),
    "content",
    "privacy-policy.md"
  );
  const md = fs.readFileSync(filePath, "utf-8");

  // 2) convert to HTML
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(md);
  let html = processed.toString();

  // 3) inject Tailwind classes exactly as in blog page
  html = html.replace(
    /<h1>/g,
    '<h1 class="text-3xl font-bold mt-6 mb-4">'
  );
  html = html.replace(
    /<h2>/g,
    '<h2 class="text-2xl font-semibold mt-5 mb-3">'
  );
  html = html.replace(
    /<h3>/g,
    '<h3 class="text-xl font-medium mt-4 mb-2">'
  );
  html = html.replace(
    /<p>/g,
    '<p class="mb-4 text-lg text-gray-700">'
  );
  html = html.replace(
    /<ul>/g,
    '<ul class="list-disc list-inside mb-4">'
  );
  html = html.replace(
    /<li>/g,
    '<li class="ml-6 mb-2">'
  );
  html = html.replace(
    /<a /g,
    '<a class="text-blue-500 hover:underline" '
  );
  html = html.replace(
    /<img /g,
    '<img class="max-w-full h-auto rounded-lg mb-4" '
  );
  html = html.replace(
    /<pre>/g,
    '<pre class="bg-gray-800 text-white p-4 rounded-lg mb-4">'
  );
  html = html.replace(
    /<code>/g,
    '<code class="bg-gray-200 p-1 rounded">'
  );
  html = html.replace(
    /<blockquote>/g,
    '<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">'
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <article
        className="prose prose-neutral dark:prose-invert prose-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}
