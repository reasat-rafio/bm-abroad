<script lang="ts">
  import { formatDate } from '@/lib/helpers.js';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient.js';
  import type { Blog } from '@/lib/types/[blog]';
  import Body from './blody/Body.svelte';

  export let blog: Blog;
  $: ({ _createdAt, coverImage, description, name, quickOverView } = blog);
</script>

<section class="py-[160px]">
  <article class="container">
    <figure class="">
      <SanityImage
        class="h-full max-h-[776px] w-full rounded-lg object-cover"
        sizes="100vw"
        src={coverImage}
        imageUrlBuilder={imageBuilder}
      />
    </figure>

    <div class="mt-[66px]">
      <div
        class="flex items-center space-x-[8px] pb-[24px] text-[12px] text-black/40"
      >
        <img src="/icons/calender.svg" alt="" />
        <span>{formatDate(_createdAt)}</span>
      </div>
      <h1 class="pb-[64px] font-poppins text-[48px] font-medium leading-[140%]">
        {name}
      </h1>
      <p class="body-1">{quickOverView}</p>
    </div>

    <Body {description} />
  </article>
</section>
