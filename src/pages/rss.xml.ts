import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Little Confidants',
    description: 'Manga, manhwa, anime, style and music — honest reviews and curated picks.',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>en-gb</language>`,
  });
}
