import { FcInfo } from 'react-icons/fc';
import type { Rule } from 'sanity';
import React from 'react';
import { AiFillHighlight } from 'react-icons/ai';

const why = {
  title: 'Why',
  name: 'partnerInstitutionsPage.why',
  icon: FcInfo,
  type: 'object',
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
      name: 'reasons',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: 'reason',
          type: 'object',
          validation: (Rule: Rule) => Rule.required(),
          fields: [
            {
              name: 'title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'description',
              type: 'text',
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
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
};

export default why;
