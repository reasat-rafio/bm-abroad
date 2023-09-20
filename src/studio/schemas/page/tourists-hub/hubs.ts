import type { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { GiIsland } from 'react-icons/gi';
import type { DefaultPreviewProps, Rule } from 'sanity';

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
                imageCollege: SanityImageAssetDocument[];
              }) => {
                const hasSingleImage = !!field?.singleImage;
                const hasImageCollege =
                  !!field?.imageCollege && !!field?.imageCollege?.length;

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
                !!parent?.imageCollege?.length,
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
              name: 'imageCollege',
              type: 'array',
              validation: (Rule: Rule) => Rule.length(6),
              hidden: ({ parent }: SanityDocument) => !!parent?.singleImage,
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
              description: 'description',
              singleImage: 'singleImage',
              imageCollege: 'imageCollege',
            },
            prepare: ({
              title,
              subtitle,
              singleImage,
              imageCollege,
            }: DefaultPreviewProps & {
              singleImage: SanityImageAssetDocument;
              imageCollege: SanityImageAssetDocument[];
            }) => ({
              title,
              subtitle,
              media: singleImage ? singleImage : imageCollege[0],
            }),
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
