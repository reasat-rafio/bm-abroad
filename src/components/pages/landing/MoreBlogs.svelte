<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import BlogCard from '@/components/ui/BlogCard.svelte';
  import type { MoreBlog } from '@/lib/types/[blog]';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte, {
    type EmblaOptionsType,
    type EmblaPluginType,
  } from 'embla-carousel-svelte';
  // Autoplay()
  let plugins: EmblaPluginType[] = [];
  let options: Partial<EmblaOptionsType> = {
    containScroll: 'trimSnaps',
    align: 'start',
  };

  export let blogs: MoreBlog[];
</script>

<section class="pb-[160px]">
  <div class="container">
    <SectionHeader
      title="Blogs"
      subtitle="Explore our latest blogs and articles "
    />

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
            twoRowInMobile
            image={coverImage}
            date={_createdAt}
          />
        {/each}
      </div>
    </div>
  </div>
</section>
