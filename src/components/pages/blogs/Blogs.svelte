<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import type { Blog } from '@/lib/types/[blog]';
  import { onMount } from 'svelte';
  import { gsap, ScrollTrigger } from '@/lib/gsap';
  import BlogCard from '@/components/ui/BlogCard.svelte';

  export let blogs: Blog[];

  let sectionEl: HTMLElement;
  onMount(() => {
    gsap.from('.blogs-blog__card', {
      y: '60px',
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: sectionEl,
        start: '100px bottom',
      },
      ease: 'power4.inOut',
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });
</script>

<section class="pb-[90px]">
  <div class="container">
    <SectionHeader
      title="Blogs"
      subtitle="Explore our latest blogs and articles "
    />

    <div
      bind:this={sectionEl}
      class="grid grid-cols-1 gap-y-[32px] pt-[46px] md:grid-cols-2 md:gap-x-[25px] md:gap-y-[56px] lg:grid-cols-3"
    >
      {#each blogs as { name, slug, coverImage, _createdAt }}
        <BlogCard
          {name}
          {slug}
          date={_createdAt}
          image={coverImage}
          class="blogs-blog__card"
        />
      {/each}
    </div>
  </div>
</section>
