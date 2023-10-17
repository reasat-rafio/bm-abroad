<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { Gallery } from '@/lib/types/services';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  export let college: Gallery['college'];
  $: ({ images, layout } = college);
  $: [img1, img2, img3, img4, img5, img6] = images;

  let clgContainerEl: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    let imagesEl = clgContainerEl?.querySelectorAll('.clg-image');

    const ctx = gsap.context(() => {
      gsap.to(imagesEl, {
        scrollTrigger: {
          trigger: clgContainerEl,
          start: '-20% bottom',
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
        duration: 1.6,
      });
    });

    return () => ctx.revert();
  });
</script>

<div
  bind:this={clgContainerEl}
  class="grid max-h-[80vh] grid-cols-12 grid-rows-5 gap-[9px] lg:aspect-video lg:max-h-[1010px] lg:gap-[24px]"
>
  {#if layout === '1'}
    <SanityImage
      lqip
      class="clg-image col-span-8 row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-5 lg:row-span-2 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img1}
      imageUrlBuilder={imageBuilder}
      alt={img1.alt}
    />
    <SanityImage
      lqip
      class="clg-image col-span-4 row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-3 lg:row-span-2 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img2}
      imageUrlBuilder={imageBuilder}
      alt={img2.alt}
    />
    <SanityImage
      lqip
      class="clg-image col-span-5 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover  opacity-0 lg:col-span-4 lg:row-span-3 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img3}
      imageUrlBuilder={imageBuilder}
      alt={img3.alt}
    />
    <SanityImage
      lqip
      class="clg-image col-span-7 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-3 lg:row-span-3 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img4}
      imageUrlBuilder={imageBuilder}
      alt={img4.alt}
    />
    <SanityImage
      class="clg-image col-span-6 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-5 lg:row-span-3 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img5}
      imageUrlBuilder={imageBuilder}
      alt={img5.alt}
    />
    <SanityImage
      lqip
      class="clg-image col-span-6 row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-4 lg:row-span-2 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img6}
      imageUrlBuilder={imageBuilder}
      alt={img6.alt}
    />
  {:else if layout === '2'}
    <SanityImage
      lqip
      class="clg-image col-span-8 row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-4 lg:row-span-3 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img1}
      imageUrlBuilder={imageBuilder}
      alt={img1.alt}
    />
    <SanityImage
      lqip
      class="clg-image col-span-4 row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-5 lg:row-span-2 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img2}
      imageUrlBuilder={imageBuilder}
      alt={img2.alt}
    />
    <SanityImage
      class="clg-image col-span-5 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-3 lg:row-span-2 lg:rounded-lg"
      lqip
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img3}
      imageUrlBuilder={imageBuilder}
      alt={img3.alt}
    />

    <SanityImage
      class="clg-image col-span-7 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-3 lg:row-span-3 lg:rounded-lg "
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img5}
      imageUrlBuilder={imageBuilder}
      alt={img5.alt}
    />
    <SanityImage
      lqip
      class="clg-image col-span-6 row-span-2 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-5 lg:row-span-3 lg:rounded-lg"
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img4}
      imageUrlBuilder={imageBuilder}
      alt={img4.alt}
    />

    <SanityImage
      lqip
      class="clg-image col-span-6 row-span-1 h-full w-full translate-y-[50px] rounded-[8px] object-cover opacity-0 lg:col-span-4 lg:row-span-2 lg:rounded-lg "
      sizes="(min-width: 768px) 30vw, 50vw"
      src={img6}
      imageUrlBuilder={imageBuilder}
      alt={img6.alt}
    />
  {/if}
</div>
