<script lang="ts">
  import Hero from '@/components/pages/landing/Hero.svelte';

  export let data;
  $: ({
    page: { sections },
  } = data);
</script>

{#each sections as s}
  {#if s._type === 'landingPage.hero'}
    <!-- <Hero props={s} /> -->
  {/if}
{/each}
