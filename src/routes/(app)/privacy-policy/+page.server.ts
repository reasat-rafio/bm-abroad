import { sanityClient } from '@/lib/sanity/sanityClient';
import type { PrivacyPolicyPageProps } from '@/lib/types/privacy-policy';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';

const query = groq`*[_id == "privacyPolicyPage"][0]`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as PrivacyPolicyPageProps,
  };
};
