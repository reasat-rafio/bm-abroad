import type { SanityImageAssetDocument } from '@sanity/client';
import type { SeoProps } from './common';
import type { PortableTextBlock } from 'sanity';

export type LandingPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = HeroProps | TaglineProps;

export type HeroProps = {
  _type: 'landingPage.hero';
  banners: HeroBanner[];
};

export type HeroBanner = {
  _key: string;
  _type: string;
  image: SanityImageAssetDocument;
  url?: string;
};

export type TaglineProps = {
  _type: 'landingPage.tagline';
  title: PortableTextBlock[];
  decorators: [SanityImageAssetDocument, SanityImageAssetDocument];
};
