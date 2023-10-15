import type { SanityAssetDocument } from '@sanity/client';
import type { SeoProps, TaglineProps } from './common';

export type ServicesPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = TaglineProps | Highlights | ServicesProps;

export type Highlights = {
  _type: 'servicesPage.highlights';
  title: string;
  gallery: Gallery;
};

export type ServicesProps = {
  _type: 'servicesPage.services';
  title: string;
  subtitle: string;
  services: Service[];
  image: SanityAssetDocument;
  steps?: Step[];
  gallery?: Gallery;
};

export type Step = {
  _key: string;
  title: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  icon: SanityAssetDocument;
};

export type Gallery = {
  singleImage: SanityAssetDocument;
  college: {
    layout: '1' | '2';
    images: [
      SanityAssetDocument,
      SanityAssetDocument,
      SanityAssetDocument,
      SanityAssetDocument,
      SanityAssetDocument,
      SanityAssetDocument,
    ];
  };
};
