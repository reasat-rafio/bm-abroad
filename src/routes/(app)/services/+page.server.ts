import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { ServicesPageProps } from '@/lib/types/services';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

export const config = {
  isr: {
    expiration: 120,
  }
}

const query = groq`*[_id == "servicesPage"][0]{
    ...,
    sections[]{
        ...,
        ${asset('image')},
        ${asset('decorators[]', { as: 'decorators' })},
        ${asset('decoration')},
        gallery{
          ${asset('singleImage')},
          college{
            ...,
            ${asset('images[]', { as: 'images' })},
          }
        },
        services[]{
          ...,
          ${asset('icon')},
        }
    }
}`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as ServicesPageProps,
  };
};
