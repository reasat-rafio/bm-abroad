import { GiIsland } from 'react-icons/gi';

const touristsPage = {
  name: 'touristsPage',
  title: 'Tourists Hub',
  type: 'document',
  icon: GiIsland,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'common.tagline' },
        { type: 'touristsPage.hubs' },
        { type: 'common.cta' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};

export default touristsPage;
