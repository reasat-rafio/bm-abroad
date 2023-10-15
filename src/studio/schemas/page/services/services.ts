import type { SanityDocument, SanityImageAssetDocument } from '@sanity/client';
import { FcProcess, FcServices } from 'react-icons/fc';
import type { Rule } from 'sanity';

const servies = {
  name: 'servicesPage.services',
  title: 'Services',
  type: 'object',
  icon: FcServices,
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
      name: 'services',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: 'service',
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
              name: 'icon',
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
              subtitle: 'description',
              media: 'icon',
            },
          },
        },
      ],
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
    {
      name: 'steps',
      type: 'array',
      of: [
        {
          name: 'step',
          type: 'object',
          icon: FcProcess,
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
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
};

export default servies;
