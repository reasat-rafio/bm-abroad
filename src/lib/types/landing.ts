import type { SanityImageAssetDocument } from '@sanity/client';
import type { SeoProps } from './common';

export type LandingPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = HeroProps;

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
