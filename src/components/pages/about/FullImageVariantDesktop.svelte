<script lang="ts">
  import { PortableText } from '@/lib/@portabletext';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { About } from '@/lib/types/about';
  import { onMount, tick } from 'svelte';
  import { gsap } from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';

  export let about: About;
  $: ({ title, subtitle, image, description } = about);

  let contentContainerEl: HTMLElement;
  let contentContaineElHeight = 0;

  const upateExtraSpacing = () => {
    if (!!!contentContainerEl) return;
    contentContaineElHeight = contentContainerEl.getBoundingClientRect().height;
  };

  const triggerAnimation = () => {};

  onMount(() => {
    upateExtraSpacing();
    gsap.registerPlugin(ScrollTrigger);
    tick();

    // triggerAnimation();

    const timeline = gsap.timeline({
      scrollTrigger: contentContainerEl,
    });
    timeline
      .from(contentContainerEl, { y: '100%' })
      .from(contentContainerEl.querySelectorAll('[data-animate]'), {
        opacity: 0,
        y: 15,
        stagger: 0.1,
      });

    return () => {
      const t = ScrollTrigger.getAll();
      t.forEach((t) => t.kill());
    };
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
      class="object-cover w-full h-full"
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
        class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-slate-blue"
      >
        {title}
      </h2>
      <h3 class="heading-lg-secondary" data-animate>{subtitle}</h3>
    </header>
    <div class="font-light body-1" data-animate>
      <PortableText value={description} />
    </div>
  </div>
</article>
