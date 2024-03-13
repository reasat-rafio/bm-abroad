<script lang="ts">
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

  const asciiArtEdistys = `
  ______    _ _     _                       _
 |  ____|  | (_)   | |                     | |
 | |__   __| |_ ___| |_ _   _ ___        __| | _____   __
 |  __| / _\` | / __| __| | | / __|      / _\` |/ _ \\ \\ / /
 | |___| (_| | \\__ \\ |_| |_| \\__ \\  _  | (_| |  __/\\ V /
 |______\\__,_|_|___/\\__|\\__, |___/ (_)  \\__,_|\\___| \\_/
                         __/ |
                        |___/
`;

  console.log(asciiArtEdistys);
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={faviconImage} />
</svelte:head>

<Navbar {nav} {logo} />
<slot />
<Footer {footer} {contact} {logo} />
