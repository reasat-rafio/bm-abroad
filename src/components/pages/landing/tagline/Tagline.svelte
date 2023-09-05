<script lang="ts">
  import type { TaglineProps } from '@/lib/types/landing';
  import { PortableText } from '@/lib/@portabletext/index';
  import GradientPurpleBlue from './GradientPurpleBlue.svelte';
  import H1 from '@/components/ui/H1.svelte';
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';

  export let props: TaglineProps;
  $: ({ title, decorators } = props);
  $: [decor1, decor2] = decorators;
</script>

<section class="pb-[130px] md:pb-[200px] xl:pb-[410px]">
  <div class="container relative">
    <H1 class="text-center">
      <PortableText
        value={title}
        components={{
          marks: {
            gradientPurpleBlue: GradientPurpleBlue,
          },
        }}
      />
    </H1>

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
