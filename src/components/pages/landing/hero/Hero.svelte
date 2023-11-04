<script lang="ts">
  import DotButton from '@/components/ui/DotButton.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { HeroProps } from '@/lib/types/landing';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte, {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';
  import Video from './Video.svelte';

  export let props: HeroProps;
  export let plugins: EmblaPluginType[] = [Autoplay()];
  export let options: Partial<EmblaOptionsType> = {};

  $: ({ banners } = props);
  let emblaApi: EmblaCarouselType;
  let sectionEl: HTMLElement;
  let selectedIndex = 0;
  let scrollSnaps: number[];
  let isIntersecting = false;

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
    scrollSnaps = event.detail.scrollSnapList();
    selectedIndex = event.detail.selectedScrollSnap();
  };

  $: if (emblaApi) {
    emblaApi.on('select', ({ selectedScrollSnap, scrollSnapList }) => {
      selectedIndex = selectedScrollSnap();
      scrollSnaps = scrollSnapList();
    });
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionEl,
        onToggle: ({ isActive }) => {
          isIntersecting = isActive;
        },
      });
    });
    return () => ctx.revert();
  });
</script>

<section
  bind:this={sectionEl}
  class="mb-lg mt-[90px] sm:mt-[130px] lg:mb-2xl lg:mt-[150px]"
>
  <div class="overflow-hidden lg:container">
    <div use:emblaCarouselSvelte={{ plugins, options }} on:emblaInit={onInit}>
      <div class="relative flex space-x-5 lg:space-x-10">
        {#each banners as banner}
          {#if banner._type === 'img'}
            <svelte:element
              this={!!banner?.url ? 'a' : 'figure'}
              href={banner.url}
              class="aspect-[18/9] max-h-[70vh] flex-[0_0_100%]"
            >
              <SanityImage
                lqip
                class="object-cover w-full h-full lg:rounded-lg"
                src={banner.image}
                sizes="(min-width: 1024px) 90vw, 100vw"
                imageUrlBuilder={imageBuilder}
                alt={banner.image.alt}
              />
            </svelte:element>
          {:else if banner._type === 'video'}
            <Video {isIntersecting} mov={banner.mov} webm={banner.webm} />
          {/if}
        {/each}
      </div>
    </div>
  </div>
  {#if !!scrollSnaps?.length}
    <nav class=" flex items-center justify-center pt-[32px]">
      <div class="flex space-x-[8px]">
        {#each scrollSnaps as _, index}
          <DotButton
            active={index === selectedIndex}
            clickAction={() => {
              emblaApi.scrollTo(index);
            }}
          />
        {/each}
      </div>
    </nav>
  {/if}
</section>
