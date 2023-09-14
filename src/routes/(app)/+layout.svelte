<script lang="ts">
  import Footer from '@/components/footer/Footer.svelte';
  import Navbar from '@/components/navigation/Navbar.svelte';
  import { urlFor } from '@/lib/sanity/sanityClient.js';
  import '@fontsource/oswald/600.css';
  import '@fontsource/poppins/300.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/600.css';
  import { fly } from 'svelte/transition';

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
{#key data.url}
  <div
    in:fly={{ x: -200, duration: 300, delay: 300 }}
    out:fly={{ x: 200, duration: 300 }}
  >
    <slot />
    <Footer {footer} {contact} {logo} />
  </div>
{/key}
