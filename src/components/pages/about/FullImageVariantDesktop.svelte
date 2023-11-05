<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { About } from '@/lib/types/about';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  export let about: About;
  $: ({ title, subtitle, image, description } = about);

  let contentContainerEl: HTMLElement;
  let contentContaineElHeight = 0;
  let imageEl: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageEl,
          start: 'center bottom',
        },
        defaults: {
          ease: 'power4.inOut',
          duration: 1,
        },
      });
      tl.to(contentContainerEl, { y: '50%' }).from(
        contentContainerEl.querySelectorAll('[data-animate]'),
        {
          opacity: 0,
          y: 10,
          stagger: 0.1,
        },
        '-=0.5',
      );
    });

    return () => ctx.revert();
  });
</script>

<article
  style="margin-bottom: {contentContaineElHeight / 2 + 140}px;"
  class="relative"
>
  <figure
    bind:this={imageEl}
    class="aspect-video max-h-[906px] overflow-hidden rounded-lg"
  >
    <SanityImage
      lqip
      class="h-full w-full object-cover"
      sizes="80vw"
      src={image}
      alt={image.alt}
      imageUrlBuilder={imageBuilder}
    />
  </figure>

  <div
    bind:this={contentContainerEl}
    bind:clientHeight={contentContaineElHeight}
    class="group absolute bottom-0 left-0 max-w-[788px] translate-x-[7.5%] translate-y-full space-y-[48px] rounded-[16px] bg-white/70 p-[50px] backdrop-blur-md transition-colors duration-300 ease-in-out hover:bg-[#1B1464] hover:bg-opacity-90 hover:shadow-cta xl:translate-x-[15%]"
  >
    <header class="space-y-[16px]">
      <h2
        data-animate
        class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-slate-blue transition-colors duration-500 ease-in-out group-hover:text-white"
      >
        {title}
      </h2>
      <h3
        class="heading-lg-secondary transition-colors duration-500 ease-in-out group-hover:text-[#F3B30F]"
        data-animate
      >
        {subtitle}
      </h3>
    </header>
    <div
      class="body-1 font-light transition-colors duration-500 ease-in-out group-hover:text-white"
      data-animate
    >
      <PortableText value={description} components={{}} />
    </div>
  </div>
</article>
