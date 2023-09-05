<script lang="ts">
  import About from '@/components/pages/landing/About.svelte';
  import Hero from '@/components/pages/landing/Hero.svelte';
  import Journey from '@/components/pages/landing/Journey.svelte';
  import Service from '@/components/pages/landing/Service.svelte';
  import Testimonial from '@/components/pages/landing/Testimonial.svelte';
  import Destination from '@/components/pages/landing/destination/Destination.svelte';
  import Process from '@/components/pages/landing/process/Process.svelte';
  import Tagline from '@/components/pages/landing/tagline/Tagline.svelte';

  export let data;
  $: ({
    page: { sections, services },
  } = data);
</script>

{#each sections as props}
  {#if props._type === 'landingPage.hero'}
    <Hero {props} />
  {:else if props._type === 'landingPage.tagline'}
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
  {:else if props._type === 'landingPage.journey'}
    <Journey {props} />
  {/if}
{/each}
