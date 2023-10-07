<script lang="ts">
  import BlogCard from '@/components/ui/BlogCard.svelte';
  import DotButton from '@/components/ui/DotButton.svelte';
  import type { MoreBlog } from '@/lib/types/[blog]';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte, {
    type EmblaOptionsType,
    type EmblaPluginType,
    type EmblaCarouselType,
  } from 'embla-carousel-svelte';

  let emblaApi: EmblaCarouselType;
  let selectedIndex = 0;
  let plugins: EmblaPluginType[] = [Autoplay()];
  let scrollSnaps: number[];
  let options: Partial<EmblaOptionsType> = {
    align: 'start',
  };

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;
    selectedIndex = event.detail.selectedScrollSnap();
    scrollSnaps = event.detail.scrollSnapList();
  };

  $: if (emblaApi) {
    emblaApi.on('select', ({ selectedScrollSnap, scrollSnapList }) => {
      selectedIndex = selectedScrollSnap();
      scrollSnaps = scrollSnapList();
    });
  }

  export let blogs: MoreBlog[];
</script>

<section class="pb-[116px] lg:pb-[90px]">
  <div class="container">
    <h2
      class="text-[24px] font-semibold uppercase md:text-[32px] xl:text-[40px]"
    >
      More Blogs
    </h2>
    <div
      class="relative -ml-[25px] overflow-hidden pt-[56px] lg:pt-[46px]"
      use:emblaCarouselSvelte={{ plugins, options }}
      on:emblaInit={onInit}
    >
      <div class="relative flex">
        {#each blogs as { _createdAt, coverImage, name, slug }}
          <BlogCard
            class="flex-[0_0_100%] pl-[25px] sm:flex-[0_0_80%] lg:flex-[0_0_33.33%]"
            {name}
            {slug}
            image={coverImage}
            date={_createdAt}
          />
        {/each}
      </div>
    </div>
  </div>

  {#if !!scrollSnaps?.length}
    <nav class="flex items-center justify-center pt-[68px] lg:pt-[34px]">
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
