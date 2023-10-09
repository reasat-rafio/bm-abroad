<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { SanityAssetDocument } from '@sanity/client';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  export let title: string;
  export let subtitle: string;
  export let description: string;
  export let image: SanityAssetDocument;

  let sectionEl: HTMLElement;
  let articleEl: HTMLElement;
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    let childAnimationEls = sectionEl?.querySelectorAll('[data-animate]');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: articleEl,
          start: '5% bottom',
        },
        defaults: {
          ease: 'power4.inOut',
          duration: 1,
        },
      });
      tl.from(sectionEl, {
        y: '100%',
      }).from(
        childAnimationEls,
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
  bind:this={articleEl}
  class="grid grid-cols-12 lg:gap-[50px] 2xl:gap-[91px]"
>
  <section
    bind:this={sectionEl}
    class="col-span-12 space-y-[48px] rounded-sm bg-white p-[40px] xl:col-span-7"
  >
    <header class="space-y-[16px]">
      <h2
        data-animate
        class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-slate-blue transition-colors duration-500 ease-in-out group-hover:text-white"
      >
        {title}
      </h2>
      <h3
        data-animate
        class="heading-lg-secondary transition-colors duration-500 ease-in-out group-hover:text-[#F3B30F]"
      >
        {subtitle}
      </h3>
    </header>

    <figure data-animate class="block xl:hidden">
      <SanityImage
        class="h-full max-h-[50vh] w-full object-contain"
        sizes="100vw"
        src={image}
        alt={image.alt}
        imageUrlBuilder={imageBuilder}
      />
    </figure>

    <p
      data-animate
      class="body-1 font-light transition-colors duration-500 ease-in-out group-hover:text-white"
    >
      {description}
    </p>
  </section>
  <figure class="hidden p-[20px] xl:col-span-5 xl:block">
    <SanityImage
      class="h-full w-full object-contain"
      sizes="(min-width: 1280px) 40vw, 90vw"
      src={image}
      alt={image.alt}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
</article>
