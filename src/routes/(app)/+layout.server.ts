import { siteQuery } from '@/lib/sanity/query';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { SiteProps } from '@/lib/types/common';
import { error } from '@sveltejs/kit';

export const config = {
  isr: {
    expiration: 120,
  }
}

export const load = async () => {
  const data = await sanityClient.fetch(siteQuery);
  if (!data) throw error(404, { message: 'Not found' });

  return {
    site: data as SiteProps,
  };
};
