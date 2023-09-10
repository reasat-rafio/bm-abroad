import type { SanityImageAssetDocument } from '@sanity/client';
import type { SeoProps, TaglineProps } from './common';

export type ContactUsPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = TaglineProps;

export type ContactForm = {
  _key: 'contactUsPage.contactForm';
  title: string;
  subtitle: string;
  decoration: SanityImageAssetDocument;
};
