<script lang="ts">
  import DotButton from '@/components/ui/DotButton.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { HeroProps } from '@/lib/types/landing';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte, {
    type EmblaOptionsType,
    type EmblaPluginType,
    type EmblaCarouselType,
  } from 'embla-carousel-svelte';

  export let props: HeroProps;
  export let plugins: EmblaPluginType[] = [Autoplay()];
  export let options: Partial<EmblaOptionsType> = {};

  $: ({ banners } = props);
  let emblaApi: EmblaCarouselType;
  let selectedIndex = 0;

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
    selectedIndex = event.detail.selectedScrollSnap();
  };

  $: if (emblaApi) {
    emblaApi.on('select', ({ selectedScrollSnap }) => {
      selectedIndex = selectedScrollSnap();
    });
  }
</script>

<section class="mb-lg mt-[90px] sm:mt-[130px] lg:mb-2xl lg:mt-[150px]">
  <div class="overflow-hidden lg:container">
    <div use:emblaCarouselSvelte={{ plugins, options }} on:emblaInit={onInit}>
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
  <div class=" flex items-center justify-center pt-[32px]">
    <div class="flex space-x-[8px]">
      {#each banners as _, index}
        <DotButton
          active={index === selectedIndex}
          clickAction={() => {
            emblaApi.scrollTo(index);
          }}
        />
      {/each}
    </div>
  </div>
</section>
