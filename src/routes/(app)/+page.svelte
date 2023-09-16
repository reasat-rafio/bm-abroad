<script lang="ts">
  import About from '@/components/pages/landing/About.svelte';
  import Hero from '@/components/pages/landing/Hero.svelte';
  import Cta from '@/components/Cta.svelte';
  import Service from '@/components/pages/landing/Service.svelte';
  import Testimonial from '@/components/pages/landing/testimonial/Testimonial.svelte';
  import Destination from '@/components/pages/landing/destination/Destination.svelte';
  import Process from '@/components/pages/landing/process/Process.svelte';
  import Tagline from '@/components/Tagline.svelte';
  import Seo from '@/components/Seo.svelte';
  import MoreBlogs from '@/components/pages/landing/MoreBlogs.svelte';

  export let data;
  $: ({
    site: {
      logos: { ogImage },
    },
    page: { sections, services, seo, moreBlogs },
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
    <Service {services} />
  {:else if props._type === 'landingPage.testimonial'}
    <Testimonial {props} />
  {:else if props._type === 'landingPage.process'}
    <Process {props} />
  {:else if props._type === 'landingPage.destination'}
    <Destination {props} />
  {:else if props._type === 'common.cta'}
    <Cta {props} />
  {/if}
{/each}
<MoreBlogs blogs={moreBlogs} />
