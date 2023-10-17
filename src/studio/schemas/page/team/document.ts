import { RiTeamFill } from 'react-icons/ri';

const teamPage = {
  name: 'teamPage',
  title: 'Team Hub',
  type: 'document',
  icon: RiTeamFill,
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
      of: [{ type: 'common.tagline' }, { type: 'teamPage.team' }],
    },
  ],
};

export default teamPage;
