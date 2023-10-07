import type {
  SanityAssetDocument,
  SanityImageAssetDocument,
} from '@sanity/client';
import type { CtaProps, SeoProps, TaglineProps } from './common';

export type TouristsHubPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = TaglineProps | TouristsHubProps | AdvantagesProps | CtaProps;

export type TouristsHubProps = {
  _type: 'touristsPage.hubs';
  hubs: Hub[];
};

export type Hub = {
  singleImage?: SanityImageAssetDocument;
  college?: College;
  title: string;
  subtitle: string;
  description: string;
  image: SanityImageAssetDocument;
};

export type College = {
  layout: '1' | '2';
  images: [
    SanityImageAssetDocument,
    SanityImageAssetDocument,
    SanityImageAssetDocument,
    SanityImageAssetDocument,
    SanityImageAssetDocument,
    SanityImageAssetDocument,
  ];
};

export type AdvantagesProps = {
  _type: 'touristsPage.advantages';
  image: SanityAssetDocument;
  title: string;
  advantages: Advantage[];
};

export type Advantage = {
  title: string;
  description: string;
  image: SanityAssetDocument;
};
