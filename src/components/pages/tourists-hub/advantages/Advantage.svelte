<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Advantage } from '@/lib/types/tourists-hubs';

  export let advantage: Advantage;
  export let index: number;
  $: ({ title, image, description } = advantage);
</script>

<article class="grid grid-cols-12 gap-[50px] rounded-[24px]">
  {#if index % 2 === 0}
    <figure class="col-span-5 p-[20px]">
      <SanityImage
        class="h-full w-full object-contain"
        sizes="20vw"
        src={image}
        alt={image.alt}
        imageUrlBuilder={imageBuilder}
      />
    </figure>
    <section class="col-span-7 flex flex-col justify-center space-y-[24px]">
      <h3
        class="font-oswald text-[24px] font-semibold uppercase leading-none text-space-blue transition-colors duration-500 group-hover:text-white md:text-[24px] xl:text-h2"
      >
        {title}
      </h3>
      <p class="body-1">{description}</p>
    </section>
  {:else}
    <section class="col-span-7 flex flex-col justify-center space-y-[24px]">
      <h3
        class="font-oswald text-[24px] font-semibold uppercase leading-none text-space-blue transition-colors duration-500 group-hover:text-white md:text-[24px] xl:text-h2"
      >
        {title}
      </h3>
      <p class="body-1">{description}</p>
    </section>
    <figure class="col-span-5 p-[20px]">
      <SanityImage
        class="h-full w-full object-contain"
        sizes="20vw"
        src={image}
        alt={image.alt}
        imageUrlBuilder={imageBuilder}
      />
    </figure>
  {/if}
</article>
