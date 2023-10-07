<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Advantage } from '@/lib/types/tourists-hubs';

  export let advantage: Advantage;
  export let index: number;
  $: ({ title, image, description } = advantage);

  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<article
  class="grid grid-cols-12 rounded-[24px] bg-white p-[20px] max-md:gap-y-[32px] md:gap-[50px] md:p-[50px]"
>
  {#if index % 2 === 1 && innerWidth >= 768}
    <section
      class="col-span-12 flex flex-col justify-center space-y-[24px] md:col-span-7"
    >
      <h3
        class="text-center font-oswald text-[24px] font-semibold uppercase leading-none text-space-blue transition-colors duration-500 group-hover:text-white md:text-left md:text-[24px] xl:text-h2"
      >
        {title}
      </h3>
      <p class="body-1 hidden md:block">
        {description}
      </p>
    </section>
    <figure class="col-span-12 md:col-span-5">
      <SanityImage
        class="h-full w-full object-contain"
        sizes="20vw"
        src={image}
        alt={image.alt}
        imageUrlBuilder={imageBuilder}
      />
    </figure>
  {:else}
    <figure class="col-span-12 md:col-span-5">
      <SanityImage
        class="h-full w-full object-contain"
        sizes="(min-width: 768px) 20vw, 90vw"
        src={image}
        alt={image.alt}
        imageUrlBuilder={imageBuilder}
      />
    </figure>
    <section
      class="col-span-12 flex flex-col justify-center space-y-[24px] md:col-span-7"
    >
      <h3
        class="text-center font-oswald text-[24px] font-semibold uppercase leading-none text-space-blue transition-colors duration-500 group-hover:text-white max-md:pb-[16px] md:text-left md:text-[24px] xl:text-h2"
      >
        {title}
      </h3>
      <p class="body-1 hidden md:block">
        {description}
      </p>
    </section>
  {/if}
</article>
