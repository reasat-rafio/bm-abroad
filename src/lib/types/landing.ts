import type { SanityImageAssetDocument } from '@sanity/client';
import type { CtaProps, SeoProps, TaglineProps } from './common';
import type { MoreBlog } from './[blog]';

export type LandingPageProps = {
  seo: SeoProps;
  sections: Section[];
  moreBlogs: MoreBlog[];
};

type Section =
  | HeroProps
  | TaglineProps
  | AboutProps
  | TestimonialProps
  | CtaProps
  | DestinationsProps;

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
type HeroBanner = HeroBannerImage | HeroBannerVideo;
export type HeroBannerImage = {
  _key: string;
  _type: 'img';
  image: SanityImageAssetDocument;
  url?: string;
};

export type HeroBannerVideo = {
  _key: string;
  _type: 'video';
  webm: string;
  mov: string;
};

export type AboutProps = {
  _type: 'landingPage.about';
  title: string;
  subtitle: string;
  description: string;
  image: SanityImageAssetDocument;
  decoration: SanityImageAssetDocument;
  services: Service[];
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
