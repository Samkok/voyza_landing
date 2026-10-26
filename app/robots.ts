import type { MetadataRoute } from 'next'
export const dynamic = 'force-static'

// Allowed for everyone, including the assistants' crawlers (GPTBot,
// OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Bingbot,
// Googlebot): a page they cannot fetch is a page they cannot cite.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://voyza.xtremon.com/sitemap.xml',
  }
}
