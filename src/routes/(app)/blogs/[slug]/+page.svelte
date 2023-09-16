<script lang="ts">
  import Seo from '@/components/Seo.svelte';
  import MoreBlogs from '@/components/pages/[blog]/MoreBlogs.svelte';
  import Blog from '@/components/pages/[blog]/blog/Blog.svelte';

  export let data;

  $: ({
    page,
    site: {
      logos: { ogImage },
    },
  } = data);
</script>

<Seo seo={page.seo} siteOgImg={ogImage} />
<Blog blog={page} />
<MoreBlogs blogs={page.moreBlogs} />
