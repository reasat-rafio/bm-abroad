<script lang="ts">
  import { formatDate } from '@/lib/helpers';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Blog } from '@/lib/types/[blog]';
  import { onMount } from 'svelte';
  import { gsap } from '@/lib/gsap';

  export let blog: Blog;
  $: ({ _createdAt, name, coverImage, quickOverView, slug } = blog);

  let articleEl: HTMLElement;
  onMount(() => {
    const timeline = gsap.timeline({ defaults: { duration: 0.8 } });
    timeline
      .from(articleEl, { opacity: 0 })
      .from(articleEl.querySelectorAll('[data-animate]'), {
        opacity: 0,
        y: 15,
        stagger: 0.1,
      });
  });
</script>

<section class="pb-[66px] pt-[105px] md:pb-[148px] md:pt-[195px]">
  <article bind:this={articleEl} class="container relative isolate">
    <figure>
      <SanityImage
        lqip
        class="h-full w-full rounded-lg object-cover max-sm:min-h-[560px] sm:max-h-[776px]"
        sizes="100vw"
        src={coverImage}
        alt={name}
        imageUrlBuilder={imageBuilder}
      />
    </figure>

    <div
      class="absolute inset-0 flex h-full w-full items-end px-[60px] py-[40px]"
    >
      <div class="flex w-full text-white max-md:flex-col-reverse">
        <div class="space-y-[24px] md:flex-[60%]">
          <a data-animate href="/blogs/{slug.current}">
            <h1
              class="font-poppins text-[24px] font-medium transition-colors duration-500 ease-in-out hover:text-slate-blue lg:text-[36px]"
            >
              {name}
            </h1>
          </a>
          <p data-animate class="body-2 hidden lg:block">{quickOverView}</p>

          <a
            data-animate
            class="body-2 flex items-center space-x-[6px] text-slate-blue lg:hidden"
            href="/blogs/{slug.current}"
          >
            <span> Read More </span>
            <img
              src="/icons/chevron-right-sm.svg"
              alt="chevron"
              height="15px"
              width="15px"
            />
          </a>
        </div>
        <div
          class="flex max-md:pb-[16px] md:flex-[40%] md:items-end md:justify-end"
        >
          <div class="flex items-center space-x-[8px] text-[14px] text-white">
            <img src="/icons/calender-white.svg" alt="calender" />
            <span>{formatDate(_createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</section>
