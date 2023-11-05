import { sanityClient } from '@/lib/sanity/sanityClient';
import groq from 'groq';

interface Blog {
  name: string;
  slug: string;
  _updatedAt: string;
}

const site = 'https://www.bmabroaddreamers.com';
const pages = [
  'about',
  'blogs',
  'contact-us',
  'partner-institutions',
  'privacy-policy',
  'services',
  'team',
  'terms-and-conditions',
  'tourists-hub',
];

const query = groq`*[_type == "blog"][]{
    name,
   "slug": slug.current,
   _updatedAt
}`;
const getBlogs = async () => {
  const blogs = await sanityClient.fetch(query);
  return blogs as Blog[];
};

const sitemap = (
  blogs: Blog[],
  pages: string[],
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `,
    )
    .join('')}
  ${blogs
    .map(
      (blog) =>
        `
  <url>
    <loc>${site}/blogs/${blog.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${blog._updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `,
    )
    .join('')}
</urlset>`;

export async function GET({ setHeaders }) {
  const blogs = await getBlogs();

  setHeaders({
    'cache-control': 'max-age=120',
  });

  const body = sitemap(blogs, pages);
  const response = new Response(body);

  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/xml');
  return response;
}
