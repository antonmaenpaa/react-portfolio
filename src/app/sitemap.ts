import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://antonmaenpaa-portfolio.netlify.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add other routes if you have multiple pages
  ]
}

