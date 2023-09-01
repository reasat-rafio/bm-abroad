import { FcHome } from 'react-icons/fc';
import type { Rule } from 'sanity';

const hero = {
  title: 'Hero',
  name: 'landingPage.hero',
  type: 'object',
  icon: FcHome,
  fields: [
    {
      name: 'banners',
      type: 'array',
      of: [
        {
          name: 'banner',
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
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
            { name: 'url', type: 'string' },
          ],
          preview: {
            select: { title: 'image.alt', media: 'image' },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Hero' }),
  },
};

export default hero;
