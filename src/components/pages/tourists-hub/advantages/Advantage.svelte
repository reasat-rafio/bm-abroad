<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Advantage } from '@/lib/types/tourists-hubs';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  export let advantage: Advantage;
  export let index: number;
  $: ({ title, image, description } = advantage);

  let innerWidth = 0;
  let sectionEl: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(sectionEl, {
        y: 100,
        scale: 0.9,
        duration: 0.7,
        scrollTrigger: sectionEl,
        ease: 'power4.inOut',
      });
    });

    return () => ctx.revert();
  });
</script>

<svelte:window bind:innerWidth />
<article
  bind:this={sectionEl}
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
      <p class="hidden body-1 md:block">
        {description}
      </p>
    </section>
    <figure class="col-span-12 md:col-span-5">
      <SanityImage
        class="object-contain w-full h-full"
        sizes="20vw"
        src={image}
        alt={image.alt}
        imageUrlBuilder={imageBuilder}
      />
    </figure>
  {:else}
    <figure class="col-span-12 md:col-span-5">
      <SanityImage
        class="object-contain w-full h-full"
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
      <p class="hidden body-1 md:block">
        {description}
      </p>
    </section>
  {/if}
</article>
