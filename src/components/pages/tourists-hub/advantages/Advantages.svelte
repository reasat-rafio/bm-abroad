<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { AdvantagesProps } from '@/lib/types/tourists-hubs';
  import Advantage from './Advantage.svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { onMount } from 'svelte';

  export let props: AdvantagesProps;
  $: ({ advantages, title, image } = props);

  let sectionEl: HTMLElement;
  let headerEl: HTMLHeadElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(headerEl, {
        y: '100%',
        duration: 0.7,
        scrollTrigger: {
          trigger: headerEl,
        },
        ease: 'power4.inOut',
      });
    });

    return () => ctx.revert();
  });
</script>

<section bind:this={sectionEl}>
  <div
    class="container space-y-[90px] pb-[90px] lg:space-y-[146px] lg:pb-[146px]"
  >
    <SanityImage
      class="aspect-video h-full w-full rounded-lg object-cover max-md:h-[80vh] md:max-h-[906px] "
      lqip
      src={image}
      alt={image.alt}
      sizes="100vw"
      imageUrlBuilder={imageBuilder}
    />
    <div class="overflow-hidden">
      <h2 bind:this={headerEl} class="heading-2xl text-center">{title}</h2>
    </div>
    <div class="mx-auto max-w-[1058px] space-y-[63px]">
      {#each advantages as advantage, index}
        <Advantage {advantage} {index} />
      {/each}
    </div>
  </div>
</section>
