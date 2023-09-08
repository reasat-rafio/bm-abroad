<script lang="ts">
  import type { AboutProps } from '@/lib/types/about';
  import HalfImageVariant from './HalfImageVariant.svelte';
  import FullImageVariant from './FullImageVariant.svelte';

  export let props: AboutProps;
  $: ({ abouts } = props);
</script>

<section>
  <div class="container">
    <div class="">
      {#each abouts as about, index (about._key)}
        {#if index % 2 === 0}
          <FullImageVariant {about} />
        {:else}
          <HalfImageVariant {about} />
        {/if}
      {/each}
    </div>
  </div>
</section>
