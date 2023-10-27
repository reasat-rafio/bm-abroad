<script lang="ts">
  import About from '@/components/pages/landing/About.svelte';
  import Hero from '@/components/pages/landing/hero/Hero.svelte';
  import Cta from '@/components/Cta.svelte';
  import Testimonial from '@/components/pages/landing/testimonial/Testimonial.svelte';
  import Destination from '@/components/pages/landing/destination/Destination.svelte';
  import Tagline from '@/components/Tagline.svelte';
  import Seo from '@/components/Seo.svelte';
  import MoreBlogs from '@/components/pages/landing/MoreBlogs.svelte';
  import Video from '@/components/pages/landing/Video.svelte';

  export let data;
  $: ({
    site: {
      logos: { ogImage },
    },
    page: { sections, seo, moreBlogs },
  } = data);
</script>

<Seo {seo} siteOgImg={ogImage} />
{#each sections as props}
  {#if props._type === 'landingPage.hero'}
    <Hero {props} />
  {:else if props._type === 'common.tagline'}
    <Tagline {props} />
  {:else if props._type === 'landingPage.about'}
    <About {props} />
  {:else if props._type === 'landingPage.video'}
    <Video {props} />
  {:else if props._type === 'landingPage.testimonial'}
    <Testimonial {props} />
  {:else if props._type === 'landingPage.destination'}
    <Destination {props} />
  {:else if props._type === 'common.cta'}
    <Cta {props} />
  {/if}
{/each}
{#if !!moreBlogs?.length}
  <MoreBlogs blogs={moreBlogs} />
{/if}
