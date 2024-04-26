import rss, { pagesGlobToRssItems } from '@astrojs/rss';

const posts = await pagesGlobToRssItems(import.meta.glob('./posts/*.md'));

export async function GET() {
  return rss({
    title: `Hazel, that's me.`,
    description: `A handy RSS feed of all my blog posts.`,
    site: `https://hazelthats.me/`,
    trailingSlash: false,
    items: posts,
    customData: '<atom:link href="https://hazelthats.me/posts.xml" rel="self" type="application/rss+xml"/>'
  });
}