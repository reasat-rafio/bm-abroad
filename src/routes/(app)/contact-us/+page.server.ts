import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { ContactUsPageProps } from '@/lib/types/contact-us';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

const q = groq`*[_id == "contactUsPage"][0]{
    ...,
    sections[]{
        ...,
        ${asset('image')},
        ${asset('decorators[]', { as: 'decorators' })},
        ${asset('decoration')},
    }
}`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(q);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as ContactUsPageProps,
  };
};
