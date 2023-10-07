import type { PortableTextBlock } from 'sanity';
import type { CtaProps, Link, SeoProps } from './common';
import type { SanityImageAssetDocument } from '@sanity/client';

export type PartnerInstitutionsPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = WhyProps | UniversitiesProps | CtaProps;

export type WhyProps = {
  _type: 'partnerInstitutionsPage.why';
  title: PortableTextBlock[];
  reasons: Reason[];
};

export type Reason = {
  title: string;
  description: string;
  image: SanityImageAssetDocument;
};

export type UniversitiesProps = {
  _type: 'partnerInstitutionsPage.universities';
  title: PortableTextBlock[];
  universities: University[];
};

export type University = {
  name: string;
  location: string;
  link: Link;
  coverPhoto: SanityImageAssetDocument;
  logo: SanityImageAssetDocument;
  programs: Program[];
};

export type Program = {
  name: string;
  courses: { rows: Row[] };
};

export type Row = {
  cells: string[];
  _type: string;
  _key: string;
};
