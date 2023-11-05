import { sanityClient } from '@/lib/sanity/sanityClient';
import type { SeoProps } from '@/lib/types/common';
import { error, type ServerLoad } from '@sveltejs/kit';
import groq from 'groq';
import type { PortableTextBlock } from 'sanity';

export const config = {
  isr: {
    expiration: 120,
  }
}

type TermsAndConditionsPageProps = {
  seo: SeoProps;
  title: PortableTextBlock[];
  termsAndCondition: PortableTextBlock[];
};

const query = groq`*[_id == "termsAndConditionsPage"][0]`;

export const load: ServerLoad = async () => {
  const data = await sanityClient.fetch(query);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    page: data as TermsAndConditionsPageProps,
  };
};
