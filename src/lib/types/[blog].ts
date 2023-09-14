import type { SanityImageAssetDocument } from '@sanity/client';
import type { PortableTextBlock, Slug } from 'sanity';
import type { SeoProps } from './common';

export type Blog = {
  _rev: string;
  description: PortableTextBlock[];
  _updatedAt: string;
  orderRank: string;
  name: string;
  quickOverView: string;
  slug: Slug;
  coverImage: SanityImageAssetDocument;
  seo: SeoProps;
  _id: string;
  _createdAt: string;
  _type: string;
};
