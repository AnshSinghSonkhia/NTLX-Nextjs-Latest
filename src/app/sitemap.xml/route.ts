// app/sitemap.xml/route.ts

const baseURL = "https://nexoratlx.com";

const routesConfig = {
  "/": true,
  "/about": true,
  "/blog": true,
  "/courses": true,
};

const staticRoutes = Object.keys(routesConfig).map((route) => ({
  url: `${baseURL}${route}`,
  changefreq: "weekly",
  priority: route === "/" ? 1.0 : 0.7,
}));

const blogSlugs = [
  "ai-reshaping-steam-education",
  "interactive-vs-passive-learning",
  "creativity-in-tech-steam",
  "from-stem-to-steam",
  "project-based-learning-skills",
  "lego-to-ai-robotics-evolution",
  "building-bots-building-minds",
  "mentorship-in-steam-education",
];

const courseSlugs = [
  "build-your-own-chatbot",
  "intro-to-machine-learning",
  "ai-detectives-spot-the-deepfake",
];

const dynamicRoutes = [
  ...blogSlugs.map((slug) => ({
    url: `${baseURL}/blog/${slug}`,
    changefreq: "monthly",
    priority: 0.6,
  })),
  ...courseSlugs.map((slug) => ({
    url: `${baseURL}/courses/${slug}`,
    changefreq: "monthly",
    priority: 0.6,
  })),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

function generateSitemapXML(routes: typeof allRoutes) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;
}

// ✅ Named export for HTTP method
export async function GET() {
  const body = generateSitemapXML(allRoutes);
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
