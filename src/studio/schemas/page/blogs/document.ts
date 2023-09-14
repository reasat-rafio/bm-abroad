import { FcNews } from 'react-icons/fc';

const blogsPage = {
  name: 'blogsPage',
  title: 'Blogs',
  type: 'document',
  icon: FcNews,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};

export default blogsPage;
