<script lang="ts">
  import Hero from '@/components/pages/landing/Hero.svelte';
  import Tagline from '@/components/pages/landing/tagline/Tagline.svelte';

  export let data;
  $: ({
    page: { sections },
  } = data);
</script>

{#each sections as props}
  {#if props._type === 'landingPage.hero'}
    <Hero {props} />
  {:else if props._type === 'landingPage.tagline'}
    <Tagline {props} />
  {/if}
{/each}
