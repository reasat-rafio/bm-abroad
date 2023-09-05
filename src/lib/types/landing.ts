import type { SanityImageAssetDocument } from '@sanity/client';
import type { Link, SeoProps } from './common';
import type { PortableTextBlock } from 'sanity';

export type LandingPageProps = {
  seo: SeoProps;
  services: Service[];
  sections: Section[];
};

type Section =
  | HeroProps
  | TaglineProps
  | AboutProps
  | TestimonialProps
  | JourneyProps
  | ProcessProps;

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

export type TestimonialProps = {
  _type: 'landingPage.testimonial';
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

export type Testimonial = {
  image: SanityImageAssetDocument;
  name: string;
  role: string;
  header: string;
  testimony: string;
};

export type JourneyProps = {
  _type: 'landingPage.journey';
  title: PortableTextBlock[];
  description: string;
  link: Link;
  image: SanityImageAssetDocument;
};

export type ProcessProps = {
  _type: 'landingPage.process';
  title: string;
  subtitle: string;
  decoration: SanityImageAssetDocument;
  steps: Step[];
};

export type Step = {
  _key: string;
  title: string;
  description: string;
};

export type DestinationsProps = {
  _type: 'landingPage.destination';
  title: string;
  subtitle: string;
  destinations: Destination[];
};

export type Destination = {
  _key: string;
  name: string;
  description: string;
  image: SanityImageAssetDocument;
};
