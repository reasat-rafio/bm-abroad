<script lang="ts">
  import Seo from '@/components/Seo.svelte';
  import Tagline from '@/components/Tagline.svelte';
  import Team from '@/components/pages/team/Team.svelte';

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
  {:else if props._type === 'teamPage.team'}
    <Team {props} />
  {/if}
{/each}
