import { orderRankField } from '@sanity/orderable-document-list';
import { FcNews } from 'react-icons/fc';
import type { Rule, SlugSourceContext } from 'sanity';

const blog = {
  name: 'blog',
  type: 'document',
  icon: FcNews,
  fields: [
    orderRankField({ type: 'blog' }),
    {
      name: 'seo',
      type: 'seo',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: (
          _: unknown,
          context: SlugSourceContext & { parent: { name: string } },
        ) => context.parent.name,
      },
    },
    {
      name: 'coverImage',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'quickOverView',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
      media: 'seo.ogImage',
    },
  },
};

export default blog;
