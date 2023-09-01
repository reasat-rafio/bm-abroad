import { orderRankField } from '@sanity/orderable-document-list';
import { FcServices } from 'react-icons/fc';
import type { Rule } from 'sanity';

const service = {
  name: 'service',
  type: 'document',
  icon: FcServices,
  fields: [
    orderRankField({ type: 'service' }),
    {
      name: 'image',
      type: 'image',
      validation: (Rule: Rule) => Rule.required(),
      options: { hotspot: true },
    },
    {
      name: 'name',
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
      title: 'name',
      subtitle: 'description',
      media: 'image',
    },
  },
};

export default service;
