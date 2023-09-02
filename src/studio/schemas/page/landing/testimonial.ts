import { GoCodeReview } from 'react-icons/go';
import type { Rule } from 'sanity';

const testimonial = {
  title: 'Testimonial',
  name: 'landingPage.testimonial',
  type: 'object',
  icon: GoCodeReview,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'testimonials',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: 'testimony',
          type: 'object',
          validation: (Rule: Rule) => Rule.required(),

          fields: [
            {
              name: 'image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'name',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'role',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'header',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'testimony',
              type: 'text',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'testimony', media: 'image' },
          },
        },
      ],
    },
  ],
};

export default testimonial;
