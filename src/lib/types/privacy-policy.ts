import type { PortableTextBlock } from 'sanity';
import type { SeoProps } from './common';

export type PrivacyPolicyPageProps = {
  seo: SeoProps;
  title: PortableTextBlock[];
  privacyPolicy: PortableTextBlock[];
};
