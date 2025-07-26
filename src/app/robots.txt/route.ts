// src/app/robots.txt/route.ts

const baseURL = "https://terraluxe.in";

export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: ${baseURL}/sitemap.xml
  `.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
