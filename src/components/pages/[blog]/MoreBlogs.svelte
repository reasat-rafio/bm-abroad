<script lang="ts">
  import BlogCard from '@/components/ui/BlogCard.svelte';
  import type { MoreBlog } from '@/lib/types/[blog]';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte, {
    type EmblaCarouselType,
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';
  let plugins: EmblaPluginType[] = [Autoplay()];
  let options: Partial<EmblaOptionsType> = {
    containScroll: 'trimSnaps',
    align: 'start',
  };

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
</section>
