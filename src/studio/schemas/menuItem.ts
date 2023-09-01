import { MdLink } from 'react-icons/md';
import type { Rule, SlugSourceContext } from 'sanity';

const menuItem = {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  icon: MdLink,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'pageUrl',
      type: 'slug',
      validation: (Rule: Rule) => Rule.required(),
      options: {
        source: (
          _: unknown,
          context: SlugSourceContext & { parent: { title: string } },
        ) => context.parent.title,
      },
    },
    {
      name: 'highlight',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageUrl.current',
    },
  },
};

export default menuItem;
