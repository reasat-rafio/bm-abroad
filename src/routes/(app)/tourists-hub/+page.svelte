<script lang="ts">
  import Cta from '@/components/Cta.svelte';
  import Seo from '@/components/Seo.svelte';
  import Tagline from '@/components/Tagline.svelte';
  import Hubs from '@/components/pages/tourists-hub/Hubs.svelte';

  export let data;
  $: ({
    site: {
      logos: { ogImage },
    },
    page: { sections, seo },
  } = data);
</script>

<Seo {seo} siteOgImg={ogImage} />
{#each sections as props}
  {#if props._type === 'common.tagline'}
    <Tagline
      class="max-md:pb-[102px] max-md:pt-[169px] md:py-[180px] xl:py-[208px]"
      {props}
    />
  {:else if props._type === 'touristsPage.hubs'}
    <Hubs {props} />
  {:else if props._type === 'common.cta'}
    <Cta {props} />
  {/if}
{/each}
