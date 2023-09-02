<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { TestimonialProps } from '@/lib/types/landing';
  import emblaCarouselSvelte, {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';
  import ChevronLeftRounded from '../icons/ChevronLeftRounded.svelte';
  import ChevronRightRounded from '../icons/ChevronRightRounded.svelte';

  export let props: TestimonialProps;
  $: ({ title, subtitle, testimonials } = props);

  export let plugins: EmblaPluginType[] = [];
  export let options: Partial<EmblaOptionsType> = {};

  let emblaApi: EmblaCarouselType;

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
  };

  const slideNext = () => emblaApi.scrollNext();
  const slidePrev = () => emblaApi.scrollPrev();
</script>

<section class="mb-[270px]">
  <div class="container">
    <SectionHeader {title} {subtitle} />

    <div class="mt-[80px] grid grid-cols-12">
      <div class="col-span-2 flex items-center justify-center">
        <button class="translate-x-full" on:click={slidePrev}>
          <ChevronLeftRounded />
        </button>
      </div>
      <div
        class="col-span-8 overflow-hidden"
        use:emblaCarouselSvelte={{ plugins, options }}
        on:emblaInit={onInit}
      >
        <div class="relative flex space-x-10">
          {#each testimonials as { image, name, role, header, testimony }}
            <article
              style="box-shadow: 0px 30px 60px 0px rgba(89, 86, 230, 0.10);"
              class="grid min-h-[500px] flex-[0_0_100%] grid-cols-8 overflow-hidden rounded-[16px] bg-white"
            >
              <div class="relative col-span-3 flex justify-end">
                <div
                  class="relative z-10 mt-auto w-full space-y-[16px] px-[30px] py-[33px] text-white"
                >
                  <h6
                    class="text-[20px] font-semibold leading-none tracking-[0.4px]"
                  >
                    {name}
                  </h6>
                  <p class="text-[14px] text-white/70">{role}</p>
                </div>
                <figure class="absolute inset-0 h-full w-full">
                  <SanityImage
                    sizes="30vw"
                    src={image}
                    alt={name}
                    class="h-full w-full object-cover"
                    imageUrlBuilder={imageBuilder}
                  />
                </figure>
              </div>
              <div
                class="col-span-5 my-auto space-y-[48px] px-[68px] py-[30px]"
              >
                <h5 class="text-[32px] font-medium text-[#1B1464]">{header}</h5>
                <p
                  class="text-[16px] font-light leading-[160%] tracking-[0.4px]"
                >
                  {testimony}
                </p>
              </div>
            </article>
          {/each}
        </div>
      </div>
      <div class="col-span-2 flex items-center justify-center">
        <button class="-translate-x-full" on:click={slideNext}>
          <ChevronRightRounded />
        </button>
      </div>
    </div>
  </div>
</section>
