<script lang="ts">
  export const prerender = true;

  import Footer from '@/components/footer/Footer.svelte';
  import Navbar from '@/components/navigation/Navbar.svelte';
  import { urlFor } from '@/lib/sanity/sanityClient.js';
  import '@fontsource/oswald/600.css';
  import '@fontsource/poppins/300.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/600.css';

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
    ? urlFor(favicon).format('png').size(256, 256).ignoreImageParams().url()
    : null;
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<Navbar {nav} {logo} />
<slot />
<Footer {footer} {contact} {logo} />
