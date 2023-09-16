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
  import { fade, slide } from 'svelte/transition';
  import Autoplay from 'embla-carousel-autoplay';
  import { twMerge } from 'tailwind-merge';
  import DotButton from '@/components/ui/DotButton.svelte';

  export let props: DestinationsProps;
  $: ({ title, subtitle, destinations } = props);

  let emblaApi: EmblaCarouselType;
  let plugins: EmblaPluginType[] = [Autoplay()];
  let options: Partial<EmblaOptionsType> = { align: 'start' };
  let activeSlide = 0;
  let hoverdCardKey: null | string = null;
  let windowWidth = 0;
  let scrollSnaps: number[];

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
    activeSlide = event.detail.selectedScrollSnap();
    scrollSnaps = event.detail.scrollSnapList();
  };

  $: isSm = windowWidth < 768 ? true : false;
  $: activeSlideDescription = destinations[activeSlide]?.description;
  $: if (emblaApi) {
    emblaApi.on('select', ({ selectedScrollSnap, scrollSnapList }) => {
      activeSlide = selectedScrollSnap();
      scrollSnaps = scrollSnapList();
    });
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />
<section class="mb-[90px] md:mb-2xl">
  <div class="container">
    <SectionHeader {title} {subtitle} />

    <div
      class="mt-[64px] overflow-hidden"
      use:emblaCarouselSvelte={{ plugins, options }}
      on:emblaInit={onInit}
    >
      <div class="relative -ml-[20px] flex md:-ml-[24px]">
        {#each destinations as { image, description, name, _key }}
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <article
            on:mouseenter={() => (hoverdCardKey = _key)}
            on:mouseleave={() => (hoverdCardKey = null)}
            class="flex-[0_0_100%] pl-[20px] md:flex-[0_0_50%] md:pl-[24px] xl:flex-[0_0_33.33%] 2xl:flex-[0_0_25%]"
          >
            <div
              class="relative block h-[376px] overflow-hidden rounded-md md:h-[512px]"
            >
              <SanityImage
                class="h-full w-full object-cover"
                src={image}
                sizes="30vw"
                alt={image.alt}
                imageUrlBuilder={imageBuilder}
              />

              <div
                style="background: {hoverdCardKey === _key && !isSm
                  ? 'linear-gradient(180deg, rgba(3, 3, 3, 0.40) 0%, #502CB5 100%)'
                  : 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, #000 100%)'};"
                class={twMerge(
                  'absolute inset-0 flex h-full w-full flex-col items-center justify-end p-[35px] text-white transition-all duration-700',
                  hoverdCardKey === _key && !isSm && 'backdrop-blur-lg',
                )}
              >
                <h4
                  class="text-center font-oswald text-[40px] font-semibold uppercase"
                >
                  {name}
                </h4>
                {#if hoverdCardKey === _key && !isSm}
                  <p
                    transition:slide={{ duration: 600 }}
                    class="mt-[30%] text-center text-[16px] font-light leading-md"
                  >
                    {description}
                  </p>
                {/if}
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>

    {#if !!scrollSnaps?.length}
      <nav class=" flex items-center justify-center pt-[32px]">
        <div class="flex space-x-[8px]">
          {#each scrollSnaps as _, index}
            <DotButton
              active={index === activeSlide}
              clickAction={() => {
                emblaApi.scrollTo(index);
              }}
            />
          {/each}
        </div>
      </nav>
    {/if}

    <div class="md:hidden">
      {#key activeSlide}
        <p
          in:fade={{ duration: 1000 }}
          out:fade={{ duration: 0 }}
          class="mt-[32px] text-[16px] font-light leading-md tracking-sm"
        >
          {activeSlideDescription}
        </p>
      {/key}
    </div>
  </div>
</section>
