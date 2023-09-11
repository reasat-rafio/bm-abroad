<script lang="ts">
  import { PortableText } from '@/lib/@portabletext/index';
  import GradientPurpleBlue from './GradientPurpleBlue.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { TaglineProps } from '@/lib/types/common';
  import { twMerge } from 'tailwind-merge';

  export let props: TaglineProps;
  $: ({ title, decorators } = props);
  $: [decor1, decor2] = decorators;
</script>

<section
  class="{twMerge(
    'overflow-hidden pb-[130px] md:pb-[200px] xl:pb-[410px]',
    $$props.class,
  )} "
>
  <div class="container relative">
    <h1 class="heading-2xl text-center">
      <PortableText
        value={title}
        components={{
          marks: {
            // @ts-ignore
            gradientPurpleBlue: GradientPurpleBlue,
          },
        }}
      />
    </h1>

    {#if !!decor1}
      <figure
        class="absolute bottom-0 left-0 hidden -translate-x-1/2 translate-y-1/2 lg:block"
      >
        <SanityImage
          class="h-full w-full max-w-[200px] animate-floating object-contain md:max-w-[220px] xl:max-w-[337px]"
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
          class="h-full w-full max-w-[150px] animate-floating-reverse object-contain md:max-w-[170px] xl:max-w-[262px]"
          sizes="300px"
          src={decor2}
          imageUrlBuilder={imageBuilder}
          alt={decor2.alt}
        />
      </figure>
    {/if}
  </div>
</section>
