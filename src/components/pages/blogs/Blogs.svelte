<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import { formatDate } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Blog } from '@/lib/types/[blog]';
  import { onMount } from 'svelte';
  import { gsap } from '@/lib/gsap';

  export let blogs: Blog[];

  let sectionEl: HTMLElement;
  onMount(() => {
    gsap.from('.blogs-blog__card', {
      y: '60px',
      stagger: 0.1,
      duration: 1.4,
      scrollTrigger: {
        trigger: sectionEl,
      },
      ease: 'power4.inOut',
    });
  });
</script>

<section class="pb-[90px]">
  <div class="container">
    <SectionHeader
      title="Blogs"
      subtitle="Explore our latest blogs and articles "
    />

    {#if !!blogs?.length}
      <div
        bind:this={sectionEl}
        class="grid grid-cols-1 gap-y-[32px] pt-[46px] md:grid-cols-2 md:gap-x-[25px] md:gap-y-[56px] lg:grid-cols-3"
      >
        {#each blogs as { name, slug, coverImage, _createdAt }}
          <a href="/blogs/{slug.current}" class="blogs-blog__card">
            <article
              class="grid grid-cols-12 max-md:space-x-[10px] md:space-y-[26px]"
            >
              <figure class="col-span-4 md:col-span-12">
                <SanityImage
                  class="object-cover w-full h-full rounded-md"
                  src={coverImage}
                  alt={name}
                  sizes="(min-width:1024px) 40vw, 60vw"
                  imageUrlBuilder={imageBuilder}
                />
              </figure>
              <section class="col-span-8 md:col-span-12">
                <div
                  class="flex items-center space-x-[14px] pb-[8px] text-[14px] text-black/40 md:pb-[24px]"
                >
                  <img
                    src="/icons/calender.svg"
                    alt="calender"
                    class="object-contain h-max w-max"
                  />
                  <span>{formatDate(_createdAt)}</span>
                </div>

                <h3
                  class="font-poppins text-[16px] font-medium md:pb-[32px] lg:text-[24px]"
                >
                  {name}
                </h3>
                <a
                  class="body-2 text-slate-blue hidden items-center space-x-[6px] md:flex"
                  href="/blogs/{slug.current}"
                >
                  <span> Read More </span>
                  <img src="/icons/chevron-right-sm.svg" alt="chevron" />
                </a>
              </section>
            </article>
          </a>
        {/each}
      </div>
    {/if}
    <ul></ul>
  </div>
</section>
