import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient.js';
import type { Blog, MoreBlog } from '@/lib/types/[blog]';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

const query = (params: Partial<Record<string, string>>) =>
  groq`*[_type == "blog" && slug.current == "${params.slug}"][0]{
    ...,
    ${asset('coverImage')},
    "moreBlogs": *[_type == "blog" && slug.current != "${
      params.slug
    }"][]|order(orderRank){
      name,
      slug,
      _createdAt,
      ${asset('coverImage')},
    }
  }`;

type Data = Blog & {
  moreBlogs: MoreBlog[];
};

export const load: ServerLoad = async ({ params }) => {
  const data = await sanityClient.fetch(query(params));
  if (!data) throw error(404, 'Not found');

  return {
    page: data as Data,
  };
};
