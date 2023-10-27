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
  let scrollSnaps: number[];

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
</script>

<section class="mb-lg mt-[90px] sm:mt-[130px] lg:mb-2xl lg:mt-[150px]">
  <div class="overflow-hidden lg:container">
    <div use:emblaCarouselSvelte={{ plugins, options }} on:emblaInit={onInit}>
      <div class="relative flex space-x-5 lg:space-x-10">
        {#each banners as banner}
          {#if banner._type === 'img'}
            <svelte:element
              this={!!banner?.url ? 'a' : 'figure'}
              href={banner.url}
              class="aspect-video max-h-[70vh] flex-[0_0_100%]"
            >
              <SanityImage
                lqip
                class="h-full w-full object-cover lg:rounded-lg"
                src={banner.image}
                sizes="(min-width: 1024px) 80vw, 90vw"
                imageUrlBuilder={imageBuilder}
                alt={banner.image.alt}
              />
            </svelte:element>
          {:else if banner._type === 'video'}
            <div
              class="relative aspect-video max-h-[70vh] flex-[0_0_100%] overflow-hidden lg:rounded-lg"
            >
              <video
                class="absolute h-full w-full object-cover"
                width="100%"
                height="100%"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                controls={false}
                playsInline
                autoPlay
                muted
                loop
              >
                <source src={banner?.mov} type="video/mp4; codecs=hvc1" />
                <source src={banner?.webm} type="video/webm" />
                Sorry, your browser doesn&apos;t support embedded videos.
              </video>
            </div>
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
