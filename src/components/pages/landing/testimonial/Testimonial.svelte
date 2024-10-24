<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import type { TestimonialProps } from '@/lib/types/landing';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte, {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';
  import ChevronLeftRounded from '../../icons/ChevronLeftRounded.svelte';
  import ChevronRightRounded from '../../icons/ChevronRightRounded.svelte';
  import Testimony from './Testimony.svelte';

  export let props: TestimonialProps;
  $: ({ title, subtitle, testimonials } = props);

  let emblaApi: EmblaCarouselType;
  let plugins: EmblaPluginType[] = [Autoplay()];
  let options: Partial<EmblaOptionsType> = { align: 'center', loop: true };

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
  };

  const slideNext = () => emblaApi.scrollNext();
  const slidePrev = () => emblaApi.scrollPrev();
</script>

<section class="mb-lg md:mb-xl">
  <div class="container">
    <SectionHeader {title} {subtitle} />

    <div class="mt-[50px] grid grid-cols-12 md:mt-[80px]">
      <div
        class="col-span-1 hidden items-center justify-center lg:flex xl:col-span-2"
      >
        <button
          aria-label="Previous Slide"
          class="xl:translate-x-full"
          on:click={slidePrev}
        >
          <ChevronLeftRounded />
        </button>
      </div>
      <div
        class="col-span-12 overflow-hidden lg:col-span-10 xl:col-span-8"
        use:emblaCarouselSvelte={{ plugins, options }}
        on:emblaInit={onInit}
      >
        <div class="relative flex">
          {#each testimonials as testimony}
            <Testimony {testimony} />
          {/each}
        </div>
      </div>
      <div
        class="hidden items-center justify-center lg:col-span-1 lg:flex xl:col-span-2"
      >
        <button
          aria-label="Change Slide"
          class="xl:-translate-x-full"
          on:click={slideNext}
        >
          <ChevronRightRounded />
        </button>
      </div>
    </div>
  </div>
</section>
