<script lang="ts">
  import { urlFor } from '@/lib/sanity/sanityClient.js';

  export let data;
  //   $: ({
  //     site: {
  //       nav,
  //       logos: { favicon, logoLight, logoDark },
  //       footer,
  //       contact,
  //     },
  //   } = data);

  //   $: faviconImage = favicon
  //     ? urlFor(favicon).size(256, 256).ignoreImageParams().url()
  //     : null;
</script>

<!-- <svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head> -->
<slot />
