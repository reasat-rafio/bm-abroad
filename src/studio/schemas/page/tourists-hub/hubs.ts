import type { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { GiIsland } from 'react-icons/gi';
import type { Rule } from 'sanity';

const hubs = {
  name: 'touristsPage.hubs',
  title: 'Tourists Hub',
  type: 'document',
  icon: GiIsland,
  fields: [
    {
      name: 'hubs',
      type: 'array',
      of: [
        {
          name: 'hub',
          type: 'object',
          validation: (Rule: Rule) =>
            Rule.custom(
              (field: {
                singleImage: SanityImageAssetDocument;
                college: { images: SanityImageAssetDocument[] };
              }) => {
                const hasSingleImage = !!field?.singleImage;
                const hasImageCollege =
                  !!field?.college?.images && !!field?.college?.images?.length;

                if (!hasSingleImage && !hasImageCollege) {
                  return 'You must provide either a Single Image or College Images.';
                }

                return true;
              },
            ),
          fields: [
            {
              name: 'singleImage',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }: SanityDocument) =>
                !!parent?.college?.images?.length,
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
              name: 'college',
              type: 'object',
              initialValue: '1',
              hidden: ({ parent }: SanityDocument) => !!parent?.singleImage,
              fields: [
                {
                  name: 'layout',
                  type: 'string',
                  options: {
                    list: [
                      { title: '1', value: '1' },
                      { title: '2', value: '2' },
                    ],
                    layout: 'radio',
                  },
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: 'images',
                  type: 'array',
                  validation: (Rule: Rule) => Rule.length(6),
                  of: [
                    {
                      name: 'singleImage',
                      type: 'image',
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
            },

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
    prepare: () => ({
      title: 'Hubs',
    }),
  },
};

export default hubs;
