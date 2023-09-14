<script lang="ts">
  import Seo from '@/components/Seo.svelte';
  import HighLightedBlog from '@/components/pages/blogs/HighLightedBlog.svelte';

  export let data;

  $: ({
    page: { blogs, seo },
    site: {
      logos: { ogImage },
    },
  } = data);

  $: [blog, ...restBlogs] = blogs;
</script>

<Seo {seo} siteOgImg={ogImage} />
<HighLightedBlog {blog} />
