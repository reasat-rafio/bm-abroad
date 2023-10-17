import type { SanityAssetDocument } from '@sanity/client';
import type { SeoProps, SocialProps, TaglineProps } from './common';

export type TeamPageProps = {
  seo: SeoProps;
  sections: Section[];
};

type Section = TaglineProps | TeamProps;

export type TeamProps = {
  _type: 'teamPage.team';
  introduction?: Introduction;
  teamMembers: TeamMember[];
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: SanityAssetDocument;
  socials: SocialProps[];
  saying?: Saying;
};

export type Saying = {
  title: string;
  description: string;
};

export type Introduction = {
  title: string;
  subtitle: string;
  description: string;
};
