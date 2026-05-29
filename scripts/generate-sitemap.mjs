import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SERVICE_CATEGORIES, SERVICES } from '../content/services.js';
import { WORKS_PROJECTS } from '../content/worksProjects.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const siteUrl = process.env.SITE_URL ?? 'https://provoked.in';

const staticRoutes = ['/', '/contact', '/expertise', '/works'];

const categoryRoutes = SERVICE_CATEGORIES.map(
  (category) => `/expertise/${category.slug}`,
);

const serviceRoutes = SERVICES.map(
  (service) => `/expertise/${service.categorySlug}/${service.slug}`,
);

const workRoutes = WORKS_PROJECTS.map((project) => `/works/${project.slug}`);

const urls = [...staticRoutes, ...categoryRoutes, ...serviceRoutes, ...workRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const publicDir = path.join(rootDir, 'public');
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log(`Generated sitemap with ${urls.length} URLs at public/sitemap.xml`);
