import { AiFillHighlight } from 'react-icons/ai';
import { BiSolidSchool } from 'react-icons/bi';
import { BsFillBookFill } from 'react-icons/bs';
import type { Rule } from 'sanity';
import React from 'react';

const universities = {
  name: 'partnerInstitutionsPage.universities',
  title: 'Universities',
  icon: BiSolidSchool,
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
      name: 'universities',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: 'university',
          type: 'object',
          icon: BiSolidSchool,
          validation: (Rule: Rule) => Rule.required(),
          fields: [
            {
              name: 'name',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'location',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'link',
              type: 'link',
              validation: (Rule: Rule) => Rule.required(),
            },

            {
              name: 'coverPhoto',
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
            {
              name: 'logo',
              type: 'image',
              validation: (Rule: Rule) => Rule.required(),
              options: { hotspot: true },
            },
            {
              name: 'programs',
              type: 'array',
              validation: (Rule: Rule) => Rule.required(),
              of: [
                {
                  name: 'program',
                  type: 'object',
                  icon: BsFillBookFill,
                  validation: (Rule: Rule) => Rule.required(),
                  fields: [
                    {
                      name: 'name',
                      validation: (Rule: Rule) => Rule.required(),
                      type: 'string',
                    },
                    {
                      name: 'courses',
                      description: 'Please ensure to keep 3 columns.',
                      type: 'table',
                      validation: (Rule: Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'location',
              media: 'logo',
            },
          },
        },
      ],
    },
  ],
};

export default universities;
