<script lang="ts">
  import { PortableText } from '@/lib/@portabletext';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { About } from '@/lib/types/about';
  import { gsap } from '@/lib/gsap';
  import { onMount } from 'svelte';

  export let about: About;
  $: ({ title, subtitle, image, description } = about);

  let contentContainerEl: HTMLElement;
  let contentContaineElHeight = 0;

  const upateExtraSpacing = () => {
    if (!!!contentContainerEl) return;
    contentContaineElHeight = contentContainerEl.getBoundingClientRect().height;
  };

  const triggerAnimation = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contentContainerEl,
      },
    });

    timeline
      .from(contentContainerEl, { y: '100%' })
      .from(contentContainerEl.querySelectorAll('[data-animate]'), {
        opacity: 0,
        y: 15,
        stagger: 0.1,
      });
  };

  onMount(() => {
    upateExtraSpacing();
    triggerAnimation();
  });
</script>

<svelte:window on:resize={upateExtraSpacing} />
<article
  class="relative"
  style="margin-bottom: {contentContaineElHeight / 2 + 140}px;"
>
  <figure class="aspect-video max-h-[906px] overflow-hidden rounded-lg">
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
    class="absolute bottom-0 left-0 max-w-[788px] translate-x-[7.5%] translate-y-1/2 space-y-[48px] rounded-[16px] bg-white/70 p-[50px] backdrop-blur-md xl:translate-x-[15%] 2xl:space-y-[64px]"
  >
    <header class="space-y-[24px]">
      <h2
        data-animate
        class="text-slate-blue font-oswald text-[16px] font-semibold uppercase tracking-[1.28px]"
      >
        {title}
      </h2>
      <h3 class="heading-lg-secondary" data-animate>{subtitle}</h3>
    </header>
    <div class="body-1 font-light" data-animate>
      <PortableText value={description} />
    </div>
  </div>
</article>
