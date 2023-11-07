import { siteQuery } from '@/lib/sanity/query';
import { sanityClient } from '@/lib/sanity/sanityClient';
import type { SiteProps } from '@/lib/types/common';
import { error } from '@sveltejs/kit';

export const load = async ({ setHeaders }) => {
  const data = await sanityClient.fetch(siteQuery);
  if (!data) throw error(404, { message: 'Not found' });

  setHeaders({
    'cache-control': 'max-age=120',
  });

  return {
    site: data as SiteProps,
  };
};
