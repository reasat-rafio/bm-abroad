import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { TouristsHubPageProps } from '@/lib/types/tourists-hubs';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

export const config = {
  isr: {
    expiration: 120,
  }
}

const query = groq`*[_id == "touristsPage"][0]{
    ...,
    sections[]{
      ...,
      ${asset('image')},
      ${asset('decorators[]', { as: 'decorators' })},
      advantages[]{
        ...,
        ${asset('image')},
      },
      hubs[]{
        ...,
        ${asset('image')},
        ${asset('singleImage')},
        college{
          ...,
          ${asset('images[]', { as: 'images' })},
        },
      }
    }
}`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as TouristsHubPageProps,
  };
};
