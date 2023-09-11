<script lang="ts">
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { About } from '@/lib/types/about';
  import { gsap } from '@/lib/gsap';
  import { onMount } from 'svelte';

  export let about: About;
  $: ({ title, subtitle, image, description } = about);

  let rootContainereEl: HTMLElement;
  let contentContainerEl: HTMLElement;
  let deltaSpacing = 0;
  $: marginTop = deltaSpacing > 0 ? deltaSpacing + 140 : 0;
  $: marginBottom = deltaSpacing > 0 ? deltaSpacing + 140 : 140;

  onMount(() => {
    updateDeltaSpacing();
    triggerAnimation();
  });

  const updateDeltaSpacing = () => {
    if (!!!rootContainereEl || !!!contentContainerEl) return;

    const rootElHeight = rootContainereEl.getBoundingClientRect().height;
    const contnetElHeight = contentContainerEl.getBoundingClientRect().height;
    const delta = contnetElHeight - rootElHeight;

    if (delta > 0) deltaSpacing = delta;
  };

  const triggerAnimation = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contentContainerEl,
        start: '-50% bottom',
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
</script>

<svelte:window on:resize={updateDeltaSpacing} />
<article
  bind:this={rootContainereEl}
  style="margin-top: {marginTop}px; margin-bottom: {marginBottom}px"
  class="grid grid-cols-12"
>
  <figure class="col-span-6 overflow-hidden rounded-lg 2xl:col-span-7">
    <SanityImage
      class="h-full w-full object-cover"
      sizes="50vw"
      src={image}
      alt={image.alt}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
  <div class="relative col-span-6 h-full 2xl:col-span-5">
    <div
      bind:this={contentContainerEl}
      class="absolute left-0 top-1/2 w-[120%] -translate-x-[10%] -translate-y-1/2 space-y-[48px] rounded-[16px] bg-white/70 p-[50px] backdrop-blur-md 2xl:space-y-[64px]"
    >
      <header class="space-y-[24px]">
        <h2
          data-animate
          class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-[#764AF1]"
        >
          {title}
        </h2>
        <h3 class="heading-lg-secondary" data-animate>{subtitle}</h3>
      </header>
      <div class="body-1 font-light" data-animate>
        <PortableText value={description} />
      </div>
    </div>
  </div>
</article>
