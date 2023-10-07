import { asset } from '@/lib/sanity/sanity-image';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { PartnerInstitutionsPageProps } from '@/lib/types/partner-institutions';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

const query = groq`*[_id == "partnerInstitutionsPage"][0]{
    ...,
    sections[]{
        ...,
        ${asset('image')},
        reasons[]{
            ...,
            ${asset('image')},
        },
        universities[]{
            ...,
            ${asset('coverPhoto')},
            ${asset('logo')},
        }
    }
}`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as PartnerInstitutionsPageProps,
  };
};
