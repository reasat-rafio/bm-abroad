<script lang="ts">
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { About } from '@/lib/types/about';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  export let about: About;
  $: ({ title, subtitle, image, description } = about);

  let rootContainereEl: HTMLElement;
  let contentContainerEl: HTMLElement;
  let imageEl: HTMLElement;

  const triggerAnimation = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: imageEl,
        start: 'bottom bottom',
      },
      defaults: {
        ease: 'power4.inOut',
        duration: 1,
      },
    });

    timeline.from(contentContainerEl.querySelectorAll('[data-animate]'), {
      opacity: 0,
      y: 10,
      stagger: 0.1,
    });
  };

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => triggerAnimation());
    return () => ctx.revert();
  });
</script>

<article class="space-y-[72px]" bind:this={rootContainereEl}>
  <figure
    bind:this={imageEl}
    data-animate
    class="overflow-hidden rounded-[12px]"
  >
    <SanityImage
      class="h-[560px] w-full object-cover sm:h-full "
      sizes="100vw"
      src={image}
      alt={image.alt}
      imageUrlBuilder={imageBuilder}
    />
  </figure>

  <div bind:this={contentContainerEl} class="space-y-[38px]">
    <header class="space-y-[16px]">
      <h2
        data-animate
        class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-slate-blue"
      >
        {title}
      </h2>
      <h3 class="heading-lg-secondary" data-animate>{subtitle}</h3>
    </header>
    <div class="text-1 font-light" data-animate>
      <PortableText value={description} />
    </div>
  </div>
</article>
