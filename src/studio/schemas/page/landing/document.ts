import { FcHome } from 'react-icons/fc';

const landingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: FcHome,
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
        { type: 'landingPage.hero' },
        { type: 'landingPage.tagline' },
        { type: 'landingPage.about' },
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

export default landingPage;
