<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { HeroProps } from '@/lib/types/landing';
  import uiStore from '@/stores/ui';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte, {
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';

  export let props: HeroProps;
  $: ({ banners } = props);

  export let plugins: EmblaPluginType[] = [Autoplay()];
  export let options: Partial<EmblaOptionsType> = {};
</script>

<section
  style="margin-top: {$uiStore.navbarHeight + 50}px;"
  class="mb-lg lg:mb-2xl"
>
  <div class="overflow-hidden lg:container">
    <div use:emblaCarouselSvelte={{ plugins, options }}>
      <div class="relative flex space-x-5 lg:space-x-10">
        {#each banners as { image, url }}
          <svelte:element
            this={!!url ? 'a' : 'figure'}
            class="aspect-video max-h-[70vh] flex-[0_0_100%]"
          >
            <SanityImage
              lqip
              class="h-full w-full object-cover lg:rounded-lg"
              src={image}
              sizes="(min-width: 1024px) 90vw, 100vw"
              imageUrlBuilder={imageBuilder}
            />
          </svelte:element>
        {/each}
      </div>
    </div>
  </div>
</section>
