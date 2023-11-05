import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { Blog } from '@/lib/types/[blog]';
import type { SeoProps } from '@/lib/types/common';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

export const config = {
  isr: {
    expiration: 120,
  }
}

const query = groq`*[_id == "blogsPage"][0]{
    seo,
    "blogs" : *[_type == "blog"]|order(orderRank){
        ...,
        ${asset('coverImage')}
    }
}`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(query);
  if (!data) throw error(404, 'Not found');

  return {
    page: data as { seo: SeoProps; blogs: Blog[] },
  };
};
