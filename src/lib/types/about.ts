import type { SanityAssetDocument } from '@sanity/client';
import type { CtaProps, SeoProps, TaglineProps } from './common';
import type { PortableTextBlock } from 'sanity';

export type AboutPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = TaglineProps | AboutProps | CtaProps;

export type AboutProps = {
  _type: 'aboutPage.about';
  abouts: About[];
};

export type About = {
  _key: string;
  title: string;
  subtitle: string;
  description: PortableTextBlock[];
  image: SanityAssetDocument;
};
