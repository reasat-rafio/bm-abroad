<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { HeroProps } from '@/lib/types/landing';
  import uiStore from '@/stores/ui';
  import emblaCarouselSvelte, {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';

  export let props: HeroProps;
  $: ({ banners } = props);

  export let plugins: EmblaPluginType[] = [];
  export let options: Partial<EmblaOptionsType> = {};

  let emblaApi: EmblaCarouselType;
</script>

<section style="margin-top: {$uiStore.navbarHeight + 50}px;" class="mb-[160px]">
  <div class="container overflow-hidden">
    <div use:emblaCarouselSvelte={{ plugins, options }}>
      <div class="relative flex space-x-10">
        {#each banners as { image, url }}
          <svelte:element
            this={!!url ? 'a' : 'figure'}
            class="h-[70vh] flex-[0_0_100%]"
          >
            <SanityImage
              class="h-full w-full rounded-lg object-cover"
              src={image}
              sizes="80vw"
              imageUrlBuilder={imageBuilder}
            />
          </svelte:element>
        {/each}
      </div>
    </div>
  </div>
</section>
