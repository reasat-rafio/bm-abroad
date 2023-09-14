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

  const triggerAnimation = () => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootContainereEl,
        start: '30% bottom',
      },
    });

    timeline.from(rootContainereEl.querySelectorAll('[data-animate]'), {
      opacity: 0,
      y: 15,
      stagger: 0.2,
    });
  };

  onMount(() => {
    triggerAnimation();
  });
</script>

<article class="space-y-[72px]" bind:this={rootContainereEl}>
  <figure data-animate class="overflow-hidden rounded-[12px]">
    <SanityImage
      class="h-[560px] w-full object-cover sm:h-full "
      sizes="100vw"
      src={image}
      alt={image.alt}
      imageUrlBuilder={imageBuilder}
    />
  </figure>

  <div bind:this={contentContainerEl} class="space-y-[48px]">
    <header class="space-y-[24px]">
      <h2
        data-animate
        class="text-slate-blue font-oswald text-[16px] font-semibold uppercase tracking-[1.28px]"
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
