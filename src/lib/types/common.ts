import type { SanityImageAssetDocument } from '@sanity/client';

export interface PageProps<T> {
  site: SiteProps;
  page: T;
}

export interface SiteProps {
  logos: {
    favicon: SanityImageAssetDocument;
    mobileLogo: SanityImageAssetDocument;
    ogImage: SanityImageAssetDocument;
    logoDark: SanityImageAssetDocument;
    logoLight: SanityImageAssetDocument;
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
  pageUrl?: string;
  externalUrl?: string;
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
