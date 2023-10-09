<script lang="ts">
  import type { AboutProps } from '@/lib/types/about';
  import HalfImageVariantDesktop from './HalfImageVariantDesktop.svelte';
  import FullImageVariantDesktop from './FullImageVariantDesktop.svelte';
  import SimpleVariantMobile from './SimpleVariantMobile.svelte';

  export let props: AboutProps;
  $: ({ abouts } = props);

  let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<section class="max-lg:pb-[90px]">
  <div class="container">
    <div class="max-lg:space-y-[90px]">
      {#each abouts as about, index (about._key)}
        {#if windowWidth >= 1024}
          {#if index % 2 === 0}
            <FullImageVariantDesktop {about} />
          {:else}
            <HalfImageVariantDesktop {about} />
          {/if}
        {:else}
          <SimpleVariantMobile {about} />
        {/if}
      {/each}
    </div>
  </div>
</section>
