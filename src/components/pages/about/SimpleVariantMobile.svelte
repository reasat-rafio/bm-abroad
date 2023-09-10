<script lang="ts">
  import Heading from '@/components/ui/Heading.svelte';
  import Typography from '@/components/ui/Typography.svelte';
  import PortableText from '@/lib/@portabletext/PortableText.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { About } from '@/lib/types/about';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  export let about: About;
  $: ({ title, subtitle, image, description } = about);

  let rootContainereEl: HTMLElement;
  let contentContainerEl: HTMLElement;

  const triggerAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
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
      <h3
        data-animate
        class="font-oswald text-[16px] font-semibold uppercase tracking-[1.28px] text-[#764AF1]"
      >
        {title}
      </h3>
      <Heading data-animate variant="lg">{subtitle}</Heading>
    </header>
    <Typography data-animate>
      <PortableText value={description} />
    </Typography>
  </div>
</article>
