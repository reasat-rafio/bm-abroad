import type { SanityImageAssetDocument } from '@sanity/client';
import type { SeoProps, TaglineProps } from './common';

export type ContactUsPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = TaglineProps | ContactForm;

export type ContactForm = {
  _type: 'contactForm';
  title: string;
  subtitle: string;
  decoration: SanityImageAssetDocument;
};
