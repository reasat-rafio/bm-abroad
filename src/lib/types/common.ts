import type { SanityImageAssetDocument } from '@sanity/client';
import type { PortableTextBlock, Slug } from 'sanity';

export interface PageProps<T> {
  site: SiteProps;
  page: T;
}

export interface SiteProps {
  logos: {
    favicon: SanityImageAssetDocument;
    logo: SanityImageAssetDocument;
    ogImage: SanityImageAssetDocument;
  };
  nav: NavProps;
  contact: ContactProps;
  footer: FooterProps;
}

export interface FooterProps {
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  menu: Menu[];
  title: string;
}

export interface NavProps {
  _rev: string;
  _type: string;
  _id: string;
  menu: Menu[];
  _updatedAt: Date;
  _createdAt: Date;
}
export interface ContactProps {
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  socials: SocialProps[];
  contactNumber: string;
  address: string;
  email: string;
}
export interface Menu {
  _key: string;
  _type: string;
  title: string;
  pageUrl: Slug;
  highlight?: boolean;
}

export interface SocialProps {
  _key: string;
  _type: string;
  icon: SanityImageAssetDocument;
  link: string;
}
export interface SeoProps {
  _type: 'seo';
  title: string;
  description: string;
  ogImage: SanityImageAssetDocument;
}

export interface Link {
  title: string;
  href: string;
}

export type TaglineProps = {
  _type: 'common.tagline';
  title: PortableTextBlock[];
  decorators: [SanityImageAssetDocument, SanityImageAssetDocument];
};

export type CtaProps = {
  _type: 'common.cta';
  title: PortableTextBlock[];
  description: string;
  link: Link;
  image: SanityImageAssetDocument;
};

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
