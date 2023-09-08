import React from 'react';
import { LuSubtitles } from 'react-icons/lu';
import { AiFillHighlight } from 'react-icons/ai';
import type { Rule } from 'sanity';

const tagline = {
  title: 'Tagline',
  name: 'common.tagline',
  type: 'object',
  icon: LuSubtitles,
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
      name: 'decorators',
      type: 'array',
      validation: (Rule: Rule) => Rule.length(2).required(),
      options: {
        layout: 'grid',
      },
      of: [
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
      ],
    },
  ],
};

export default tagline;
