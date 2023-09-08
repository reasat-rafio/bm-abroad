import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { AboutPageProps } from '@/lib/types/about';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

const q = groq`*[_id == "aboutPage"][0]{
    ...,
    sections[]{
        ...,
        ${asset('image')},
        ${asset('decoration')},
        abouts[]{
            ...,
            ${asset('image')}
        }
    }
}`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(q);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as AboutPageProps,
  };
};
