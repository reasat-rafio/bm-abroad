import { BiSolidBusiness } from 'react-icons/bi';

const partnerInstitutionsPage = {
  name: 'partnerInstitutionsPage',
  title: 'Partner Institutions',
  type: 'document',
  icon: BiSolidBusiness,
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
      of: [{ type: 'common.cta' }],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};

export default partnerInstitutionsPage;
