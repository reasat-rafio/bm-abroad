import type { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { BiHighlight } from 'react-icons/bi';
import type { Rule } from 'sanity';

const highlights = {
  name: 'servicesPage.highlights',
  title: 'Highlights',
  type: 'object',
  icon: BiHighlight,
  fields: [
    {
      name: 'gallery',
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

            if (hasSingleImage && hasImageCollege) {
              return 'You cannot provide both a Single Image and College Images at the same time.';
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
              initialValue: '1',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'images',
              type: 'array',
              validation: (Rule: Rule) => Rule.length(6),
              of: [
                {
                  name: 'image',
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
      ],
    },
    {
      name: 'title',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

export default highlights;
