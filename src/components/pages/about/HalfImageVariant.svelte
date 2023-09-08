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

  let contentContainerEl: HTMLElement;

  const triggerAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
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

  onMount(() => {
    triggerAnimation();
  });
</script>

<article class="mb-[140px] grid grid-cols-12">
  <figure class="col-span-7 overflow-hidden rounded-lg">
    <SanityImage
      class="h-full w-full object-cover"
      sizes="50vw"
      src={image}
      alt={image.alt}
      imageUrlBuilder={imageBuilder}
    />
  </figure>
  <div class="relative col-span-5 h-full">
    <div
      bind:this={contentContainerEl}
      class="absolute left-0 top-1/2 w-[120%] -translate-x-[10%] -translate-y-1/2 space-y-[64px] rounded-[16px] bg-white/70 p-[50px] backdrop-blur-md"
    >
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
  </div>
</article>
