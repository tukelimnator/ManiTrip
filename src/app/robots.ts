import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://manita.vercel.app/sitemap.xml',
    host: 'https://manita.vercel.app',
  };
}
