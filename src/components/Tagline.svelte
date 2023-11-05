<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import GradientPurpleBlue from './GradientPurpleBlue.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { TaglineProps } from '@/lib/types/common';
  import { twMerge } from 'tailwind-merge';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  export let props: TaglineProps;
  $: ({ title, decorators } = props);
  $: [decor1, decor2] = decorators;
  let sectionEl: HTMLElement;
  let headerEl: HTMLHeadElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(headerEl, {
        y: '100%',
        duration: 0.7,
        scrollTrigger: sectionEl,
        ease: 'power4.inOut',
      });
    });

    return () => ctx.revert();
  });
</script>

<section
  bind:this={sectionEl}
  class="{twMerge(
    'overflow-hidden pb-[130px] md:pb-[200px] xl:pb-[410px]',
    $$props.class,
  )} "
>
  <div class="container relative">
    <div class="overflow-hidden">
      <h1 bind:this={headerEl} class="heading-2xl pb-3 text-center">
        <PortableText
          value={title}
          components={{
            marks: {
              gradientPurpleBlue: GradientPurpleBlue,
            },
          }}
        />
      </h1>
    </div>

    {#if !!decor1}
      <figure
        class="absolute bottom-0 left-0 hidden -translate-x-1/2 translate-y-1/2 lg:block"
      >
        <SanityImage
          class="h-full w-full max-w-[160px] animate-floating object-contain md:max-w-[180px] xl:max-w-[280px]"
          sizes="300px"
          src={decor1}
          imageUrlBuilder={imageBuilder}
          alt={decor1.alt}
        />
      </figure>
    {/if}

    {#if !!decor2}
      <figure
        class="absolute bottom-0 right-0 hidden translate-x-1/2 translate-y-1/2 lg:block"
      >
        <SanityImage
          class="h-full w-full max-w-[120px] animate-floating-reverse object-contain md:max-w-[140px] xl:max-w-[200px]"
          sizes="300px"
          src={decor2}
          imageUrlBuilder={imageBuilder}
          alt={decor2.alt}
        />
      </figure>
    {/if}
  </div>
</section>
