import type { SanityImageAssetDocument } from '@sanity/client';
import type { CtaProps, SeoProps, TaglineProps } from './common';

export type TouristsHubPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = TaglineProps | TouristsHubProps | CtaProps;

export type TouristsHubProps = {
  _type: 'touristsPage.hubs';
  hubs: Hub[];
};

export type Hub = {
  singleImage?: SanityImageAssetDocument;
  college?: College[];
  title: string;
  subtitle: string;
  description: string;
};

export type College = {
  layout: '1' | '2';
  images: SanityImageAssetDocument[];
};
