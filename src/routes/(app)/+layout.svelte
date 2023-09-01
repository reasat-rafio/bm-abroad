<script lang="ts">
  import Navbar from '@/components/navigation/Navbar.svelte';
  import { urlFor } from '@/lib/sanity/sanityClient.js';
  import '@fontsource/poppins/300.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '@fontsource/oswald/600.css';

  export let data;
  $: ({
    site: {
      nav,
      logos: { favicon, logo },
      footer,
      contact,
    },
  } = data);

  $: faviconImage = favicon
    ? urlFor(favicon).size(256, 256).ignoreImageParams().url()
    : null;
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<Navbar {nav} {logo} />
<slot />
