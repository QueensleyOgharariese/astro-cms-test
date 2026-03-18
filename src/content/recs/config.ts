import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['manhwa', 'manga', 'anime', 'style']),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    rating: z.number().min(1).max(10).optional(),
    cover: z.string().optional(),
    spoilers: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const recs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    creator: z.string(),
    type: z.enum(['manhwa', 'manga', 'style', 'music']),
    rating: z.number().min(1).max(10),
    cover: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['completed', 'ongoing', 'hiatus']).optional(),
    mustRead: z.boolean().default(false),
  }),
});

export const collections = { posts, recs };
