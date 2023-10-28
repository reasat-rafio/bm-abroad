import { MdPolicy } from 'react-icons/md';
import type { Rule } from 'sanity';

const privacyPolicyPage = {
  name: 'privacyPolicyPage',
  title: 'Privacy Policy Page',
  type: 'document',
  icon: MdPolicy,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'privacyPolicy',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};

export default privacyPolicyPage;
