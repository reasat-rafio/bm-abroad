<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { DestinationsProps } from '@/lib/types/landing';
  import emblaCarouselSvelte, {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';
  import { slide } from 'svelte/transition';

  export let props: DestinationsProps;
  $: ({ title, subtitle, destinations } = props);

  let emblaApi: EmblaCarouselType;
  let plugins: EmblaPluginType[] = [];
  let options: Partial<EmblaOptionsType> = { align: 'start' };

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
  };

  let hoverdCardKey: null | string = null;
  $: {
    console.log(hoverdCardKey);
  }
</script>

<section class="mb-2xl">
  <div class="container">
    <SectionHeader {title} {subtitle} />

    <div
      class="mt-[64px] overflow-hidden"
      use:emblaCarouselSvelte={{ plugins, options }}
      on:emblaInit={onInit}
    >
      <div class="relative flex space-x-[10px] md:space-x-[24px]">
        {#each destinations as { image, description, name, _key }}
          <article
            on:mouseenter={() => (hoverdCardKey = _key)}
            on:mouseleave={() => (hoverdCardKey = null)}
            class="relative h-[512px] overflow-hidden rounded-md"
          >
            <SanityImage
              class="h-full w-full object-cover"
              src={image}
              sizes="30vw"
              alt={image.alt}
              imageUrlBuilder={imageBuilder}
            />
            <div
              style="background: {hoverdCardKey === _key
                ? 'linear-gradient(180deg, rgba(3, 3, 3, 0.40) 0%, #502CB5 100%)'
                : ''};"
              class="absolute inset-0 flex h-full w-full flex-col items-center justify-end p-[35px] text-white transition-all duration-300 {hoverdCardKey ===
              _key
                ? 'backdrop-blur-lg'
                : ''}"
            >
              <h5
                class="text-center font-oswald text-[40px] font-semibold uppercase"
              >
                {name}
              </h5>
              {#if hoverdCardKey === _key}
                <p
                  transition:slide={{ duration: 600 }}
                  class="mt-[30%] text-center"
                >
                  {description}
                </p>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
