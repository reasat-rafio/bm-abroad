import { FcAbout } from 'react-icons/fc';
import type { Rule } from 'sanity';

const about = {
  name: 'aboutPage.about',
  title: 'About',
  type: 'object',
  icon: FcAbout,
  fields: [
    {
      name: 'abouts',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          type: 'object',
          name: 'about',
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
              name: 'description',
              type: 'array',
              of: [{ type: 'block' }],
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'image',
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
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: 'About Us' }),
  },
};

export default about;
