import type { SanityImageAssetDocument } from '@sanity/client';
import type { Slug } from 'sanity';

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

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
