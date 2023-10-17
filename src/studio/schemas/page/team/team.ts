import { GoCodeReview } from 'react-icons/go';
import { IoInformation } from 'react-icons/io5';
import { RiTeamFill } from 'react-icons/ri';
import type { Rule } from 'sanity';

const team = {
  name: 'teamPage.team',
  title: 'Team',
  type: 'object',
  icon: RiTeamFill,
  fields: [
    {
      name: 'introduction',
      type: 'array',
      validation: (Rule: Rule) => Rule.max(1),
      of: [
        {
          name: 'introduction',
          type: 'object',
          icon: IoInformation,
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
              name: 'description',
              type: 'text',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
            },
          },
        },
      ],
    },
    {
      name: 'teamMembers',
      type: 'array',
      of: [
        {
          name: 'teamMember',
          type: 'object',
          fields: [
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
              name: 'description',
              type: 'text',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              validation: (Rule: Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            },
            {
              name: 'socials',
              type: 'array',
              of: [
                {
                  name: 'social',
                  type: 'object',
                  validation: (Rule: Rule) => Rule.required(),
                  fields: [
                    {
                      name: 'icon',
                      type: 'image',
                      validation: (Rule: Rule) => Rule.required(),
                    },
                    {
                      name: 'link',
                      type: 'url',
                      validation: (Rule: Rule) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {
                      title: 'link',
                      media: 'icon',
                    },
                  },
                },
              ],
            },
            {
              name: 'saying',
              type: 'array',
              validation: (Rule: Rule) => Rule.max(1),
              of: [
                {
                  name: 'saying',
                  type: 'object',
                  validation: (Rule: Rule) => Rule.required(),
                  icon: GoCodeReview,
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
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'description',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: 'Team' }),
  },
};

export default team;
