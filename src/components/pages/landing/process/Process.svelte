<script lang="ts">
  import SectionHeader from '@/components/SectionHeader.svelte';
  import type { ProcessProps } from '@/lib/types/landing';
  import Step from './Step.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import { animate } from 'motion';

  export let props: ProcessProps;
  $: ({ title, subtitle, decoration, steps } = props);

  let allStepsComplete = false;
  let decorEl: HTMLElement;
  let windowWidth = 0;

  $: if (decorEl) {
    if (allStepsComplete) {
      animate(
        decorEl,
        { x: ['-50%', `${windowWidth}px`], y: ['0%', '250%'] },
        { duration: 2 },
      );
    } else
      animate(
        decorEl,
        { x: [`${windowWidth}px`, '-50%'], y: ['250%', '0%'] },
        { duration: 1.2 },
      );
  }
</script>

<svelte:window bind:innerWidth={windowWidth} />
<section class="relative mb-[176px] overflow-x-clip">
  <div class="container">
    <SectionHeader {title} {subtitle} />

    <div class="mx-auto mt-[128px] max-w-3xl">
      {#each steps as { title, description }, index}
        <Step
          bind:allStepsComplete
          {title}
          {description}
          {index}
          isLast={index === steps.length - 1}
        />
      {/each}
    </div>
  </div>

  <figure
    bind:this={decorEl}
    style="animation-fill-mode:forwards"
    class="absolute bottom-10 left-0 aspect-auto w-[55%] -translate-x-1/2"
  >
    <SanityImage
      class="h-full w-fit object-contain"
      src={decoration}
      alt={decoration.alt}
      sizes="20vw"
      imageUrlBuilder={imageBuilder}
    />
  </figure>
</section>
