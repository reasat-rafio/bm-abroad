<script lang="ts">
  import Cta from '@/components/Cta.svelte';
  import Seo from '@/components/Seo.svelte';
  import Why from '@/components/pages/partner-institutions/Why.svelte';

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
  {#if props._type === 'partnerInstitutionsPage.why'}
    <Why {props} />
  {:else if props._type === 'common.cta'}
    <Cta {props} />
  {/if}
{/each}
