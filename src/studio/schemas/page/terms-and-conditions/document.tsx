import { AiFillHighlight } from 'react-icons/ai';
import { FcRules } from 'react-icons/fc';
import type { Rule } from 'sanity';
import React from 'react';

const termsAndConditionsPage = {
  name: 'termsAndConditionsPage',
  title: 'Terms And Conditions',
  type: 'document',
  icon: FcRules,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
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
      name: 'termsAndCondition',
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

export default termsAndConditionsPage;
