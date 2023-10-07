<script lang="ts">
  import SanityImage from '@/lib/sanity/sanity-image/sanity-image.svelte';
  import { imageBuilder } from '@/lib/sanity/sanityClient';
  import type { AdvantagesProps } from '@/lib/types/tourists-hubs';
  import Advantage from './Advantage.svelte';

  export let props: AdvantagesProps;
  $: ({ advantages, title, image } = props);
</script>

<section>
  <div
    class="container space-y-[90px] pb-[90px] lg:space-y-[146px] lg:pb-[146px]"
  >
    <SanityImage
      class="aspect-video h-full max-h-[906px] w-full rounded-lg object-cover "
      lqip
      src={image}
      alt={image.alt}
      sizes="100vw"
      imageUrlBuilder={imageBuilder}
    />
    <h2 class="heading-2xl text-center">{title}</h2>
    <div class="mx-auto max-w-[1058px] space-y-[63px]">
      {#each advantages as advantage, index}
        <Advantage {advantage} {index} />
      {/each}
    </div>
  </div>
</section>
