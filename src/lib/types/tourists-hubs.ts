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
  imageCollege?: SanityImageAssetDocument[];
  title: string;
  subtitle: string;
  description: string;
};
