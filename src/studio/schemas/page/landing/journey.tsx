import React from 'react';
import { GiJourney } from 'react-icons/gi';
import { AiFillHighlight } from 'react-icons/ai';
import type { Rule } from 'sanity';

const journey = {
  title: 'Journey',
  name: 'landingPage.journey',
  type: 'object',
  icon: GiJourney,
  fields: [
    {
      name: 'title',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              {
                title: 'Gradient Purple Blue',
                value: 'gradientPurpleBlue',
                blockEditor: {
                  icon: () => <AiFillHighlight />,
                  render: ({ children }: { children: React.ReactNode }) => (
                    <span
                      style={{
                        background:
                          'linear-gradient(180deg, #764af1 0%, #290886 127.39%)',
                      }}
                    >
                      {children}
                    </span>
                  ),
                },
              },
            ],
          },
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'link',
      type: 'link',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
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
  ],
  perview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
};

export default journey;
