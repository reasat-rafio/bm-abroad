import type { SeoProps } from './common';

export type LandingPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = HeroProps;

export type HeroProps = {
  _type: 'landingPage.hero';
};
