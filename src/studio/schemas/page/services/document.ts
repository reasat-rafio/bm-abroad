import { FcServices } from 'react-icons/fc';

const servicesPage = {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  icon: FcServices,
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
        { type: 'servicesPage.highlights' },
        { type: 'servicesPage.services' },
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

export default servicesPage;
