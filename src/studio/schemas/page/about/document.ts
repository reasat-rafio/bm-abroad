import { FcAbout } from 'react-icons/fc';

const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: FcAbout,
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
        { type: 'aboutPage.about' },
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

export default aboutPage;
