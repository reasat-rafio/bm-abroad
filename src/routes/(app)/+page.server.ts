import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { LandingPageProps } from '@/lib/types/landing';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

const q = groq`*[_id == "landingPage"][0]{
  ...,
   sections[]{
    ...,
    ${asset('image')},
    ${asset('decoration')},
    ${asset('decorators[]', { as: 'decorators' })},
    banners[]{
      ...,
      ${asset('image')}
    },
    testimonials[]{
      ...,
      ${asset('image')}
    },
    destinations[]{
      ...,
      ${asset('image')}
    },
   },
  "services": *[_type == "service"]|order(orderRank){
    ...,
    ${asset('image')}
  }
}`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(q);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as LandingPageProps,
  };
};
