import type { SanityImageAssetDocument } from '@sanity/client';
import type { SeoProps } from './common';
import type { PortableTextBlock } from 'sanity';

export type LandingPageProps = {
  seo: SeoProps;
  services: Service[];
  sections: Section[];
};

type Section = HeroProps | TaglineProps | AboutProps;

export type Service = {
  _id: string;
  name: string;
  description: string;
  image: SanityImageAssetDocument;
};

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

export type AboutProps = {
  _type: 'landingPage.about';
  title: string;
  subtitle: string;
  description: string;
  image: SanityImageAssetDocument;
  decoration: SanityImageAssetDocument;
};
