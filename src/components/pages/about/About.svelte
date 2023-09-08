<script lang="ts">
  import type { AboutProps } from '@/lib/types/about';
  import HalfImageVariantDesktop from './HalfImageVariantDesktop.svelte';
  import FullImageVariantDesktop from './FullImageVariantDesktop.svelte';

  export let props: AboutProps;
  $: ({ abouts } = props);

  let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<section>
  <div class="container">
    <div class="">
      {#each abouts as about, index (about._key)}
        {#if index % 2 === 0}
          <FullImageVariantDesktop {about} />
        {:else}
          <HalfImageVariantDesktop {about} />
        {/if}
      {/each}
    </div>
  </div>
</section>
