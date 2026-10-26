import type { MetadataRoute } from 'next'
export const dynamic = 'force-static'

const site = 'https://voyza.xtremon.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-10-26')
  return [
    { url: `${site}/`, lastModified: updated, changeFrequency: 'monthly', priority: 1 },
    { url: `${site}/how-it-works`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site}/plan/multi-day-itinerary`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site}/plan/multi-stop-road-trip`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site}/plan/group-trip`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site}/privacy`, lastModified: new Date('2026-10-14'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${site}/terms`, lastModified: new Date('2026-10-06'), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
