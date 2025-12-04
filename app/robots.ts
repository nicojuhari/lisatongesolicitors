// app/robots.ts
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // DISALLOWS ALL URLs that contain a question mark (query parameters)
      disallow: ['/*?*'],
    },
    sitemap: 'https://lisatongesolicitors.com/sitemap.xml',
  }
}