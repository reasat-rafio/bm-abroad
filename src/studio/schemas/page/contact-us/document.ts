import { FcContacts } from 'react-icons/fc';
import type { Rule } from 'sanity';

const contactUsPage = {
  name: 'contactUsPage',
  title: 'Lets Talk Page',
  type: 'document',
  icon: FcContacts,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'common.tagline' },
        {
          name: 'contactForm',
          type: 'object',
          icon: FcContacts,
          validation: (Rule: Rule) => Rule.required(),
          fields: [
            {
              name: 'title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'subtitle',
              type: 'text',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'decoration',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: Rule) => Rule.required(),
              fields: [
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  description: 'Important for SEO and accessibility',
                  type: 'string',
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};

export default contactUsPage;
